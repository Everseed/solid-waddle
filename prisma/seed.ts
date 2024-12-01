import { PrismaClient, UserRole, ExamType, ExamStatus, InterviewType, InterviewStatus } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  try {
    // Création d'utilisateurs de test
    const users = await Promise.all([
      prisma.user.create({
        data: {
          clerkId: 'user_test_1',
          email: 'student@example.com',
          name: 'John Doe',
          role: UserRole.STUDENT,
        },
      }),
      prisma.user.create({
        data: {
          clerkId: 'user_test_2',
          email: 'mentor@example.com',
          name: 'Jane Smith',
          role: UserRole.MENTOR,
        },
      }),
    ])

    // Création des examens
    const examQuestions = {
      mcq: [
        {
          question: "Quelle est la capitale de la France ?",
          options: ["Londres", "Berlin", "Paris", "Madrid"],
          correctAnswer: 2
        },
        {
          question: "Quel est le plus grand océan du monde ?",
          options: ["Atlantique", "Indien", "Arctique", "Pacifique"],
          correctAnswer: 3
        }
      ]
    }

    const codingQuestions = {
      questions: [
        {
          title: "FizzBuzz",
          description: "Écrivez un programme qui affiche les nombres de 1 à 100. Pour les multiples de 3, affichez 'Fizz'. Pour les multiples de 5, affichez 'Buzz'.",
          testCases: [
            { input: "15", expected: "FizzBuzz" },
            { input: "3", expected: "Fizz" }
          ]
        }
      ]
    }

    const exams = await Promise.all([
      prisma.exam.create({
        data: {
          type: ExamType.MCQ,
          title: "Test de Culture Générale",
          status: ExamStatus.PENDING,
          questions: examQuestions,
          duration: 30,
          userId: users[0].id,
          startTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // Demain
          endTime: new Date(Date.now() + 25 * 60 * 60 * 1000),
        },
      }),
      prisma.exam.create({
        data: {
          type: ExamType.CODING,
          title: "Test de Programmation - Niveau 1",
          status: ExamStatus.COMPLETED,
          questions: codingQuestions,
          duration: 60,
          userId: users[0].id,
          score: 85.5,
          startTime: new Date(Date.now() - 48 * 60 * 60 * 1000), // Il y a 2 jours
          endTime: new Date(Date.now() - 47 * 60 * 60 * 1000),
        },
      }),
    ])

    // Création des entretiens
    const interviews = await Promise.all([
      prisma.interview.create({
        data: {
          type: InterviewType.TECHNICAL,
          title: "Entretien Technique - JavaScript",
          status: InterviewStatus.SCHEDULED,
          scheduledFor: new Date(Date.now() + 72 * 60 * 60 * 1000), // Dans 3 jours
          duration: 60,
          userId: users[0].id,
          participants: { mentorId: users[1].id },
        },
      }),
      prisma.interview.create({
        data: {
          type: InterviewType.BEHAVIORAL,
          title: "Entretien Comportemental",
          status: InterviewStatus.COMPLETED,
          scheduledFor: new Date(Date.now() - 24 * 60 * 60 * 1000), // Hier
          duration: 45,
          userId: users[0].id,
          participants: { mentorId: users[1].id },
          feedback: {
            strengths: ["Communication claire", "Bonnes réponses comportementales"],
            improvements: ["Gestion du stress à améliorer"],
            overallScore: 8.5,
          },
        },
      }),
    ])

    // Création du suivi de progression
    const progress = await prisma.progress.create({
      data: {
        userId: users[0].id,
        totalExams: 2,
        completedExams: 1,
        averageScore: 85.5,
        strengths: ["JavaScript", "Algorithmes"],
        weaknesses: ["CSS", "Testing"],
      },
    })

    // Création d'examens en cours
    await prisma.examProgress.create({
      data: {
        examId: exams[0].id,
        userId: users[0].id,
        currentQuestion: 1,
        answers: { "1": "Paris" },
        timeSpent: 15,
      },
    })

    console.log('Données de test créées avec succès!')
  } catch (error) {
    console.error('Erreur lors de la création des données de test:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })