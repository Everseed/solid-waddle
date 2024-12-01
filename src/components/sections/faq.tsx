'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Comment fonctionne PrepAI ?",
    answer: "PrepAI combine l'expertise de mentors professionnels avec l'intelligence artificielle pour offrir une préparation personnalisée. Vous commencez par une évaluation, puis recevez un plan d'apprentissage adapté à vos objectifs, avec un suivi continu et des exercices pratiques."
  },
  {
    question: "Quels types de préparation proposez-vous ?",
    answer: "Nous proposons des préparations pour les entretiens techniques (FAANG, startups), les certifications professionnelles (Cloud, Management), les entretiens RH, et le développement de compétences spécifiques dans divers domaines comme le développement, le management, et la data science."
  },
  {
    question: "Les mentors sont-ils des professionnels confirmés ?",
    answer: "Oui, tous nos mentors sont des professionnels en activité avec au minimum 5 ans d'expérience dans leur domaine. Ils sont soigneusement sélectionnés et évalués pour assurer la meilleure qualité d'enseignement."
  },
  {
    question: "Comment se déroulent les sessions de mentorat ?",
    answer: "Les sessions se déroulent en visioconférence avec partage d'écran possible. Vous pouvez choisir entre des sessions individuelles ou en groupe, programmer des mock interviews, et accéder à des ressources d'apprentissage personnalisées."
  },
  {
    question: "Quel est le prix des formations ?",
    answer: "Nos tarifs varient selon le type de préparation. Nous proposons des formules flexibles: à la session, en pack de plusieurs séances, ou en abonnement mensuel. Des remises sont disponibles pour les étudiants et les groupes."
  },
  {
    question: "Comment l'IA est-elle utilisée dans la formation ?",
    answer: "L'IA analyse vos performances, adapte le contenu à votre niveau, et fournit des recommandations personnalisées. Elle assiste également les mentors dans la création de contenu et l'évaluation des exercices, tout en maintenant une approche centrée sur l'humain."
  },
  {
    question: "Puis-je obtenir un remboursement si je ne suis pas satisfait ?",
    answer: "Oui, nous offrons une garantie satisfaction de 30 jours. Si vous n'êtes pas satisfait de nos services, nous vous remboursons intégralement les sessions non utilisées."
  }
]

export function FAQ() {
  return (
    <section className="py-24 bg-gray-50" id="faq">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tout ce que vous devez savoir sur PrepAI
          </p>
        </div>
        <div className="mx-auto max-w-3xl mt-16">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}