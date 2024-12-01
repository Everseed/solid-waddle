'use client'

import { useEffect, useState } from "react"
import { SignInButton } from "@clerk/nextjs"
import { 
  ArrowRight, 
  Code, 
  Brain, 
  Users2, 
  GraduationCap,
  Book,
  Target,
  Route,
  Play,
  Users,
  Presentation,
  BarChart,
  Clock,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { MentorSearch } from "@/components/mentors/mentor-search"
import { PricingCard } from "@/components/mentors/pricing-card"

const examTypes = [
  {
    title: "Entretiens Techniques",
    icon: Code,
    examples: ["FAANG", "Startups", "Entreprises Tech"],
    description: "Préparez-vous aux questions techniques avec des simulations réelles"
  },
  {
    title: "Certifications Professionnelles",
    icon: GraduationCap,
    examples: ["AWS", "Google Cloud", "Azure", "PMP", "ITIL", "CISSP"],
    description: "Obtenez les certifications qui feront la différence"
  },
  {
    title: "Entretiens RH",
    icon: Users2,
    examples: ["Leadership", "Comportemental", "Mise en situation"],
    description: "Maîtrisez l'art de présenter votre parcours et vos compétences"
  },
  {
    title: "Examens Académiques",
    icon: Book,
    examples: ["GMAT", "GRE", "TOEFL", "IELTS"],
    description: "Excellez dans vos examens d'admission"
  },
  {
    title: "Tests Psychotechniques",
    icon: Brain,
    examples: ["Logique", "Raisonnement", "Aptitudes numériques"],
    description: "Développez vos capacités de raisonnement"
  },
  {
    title: "Présentations & Pitchs",
    icon: Presentation,
    examples: ["Pitch startup", "Présentation projet", "Soutenance"],
    description: "Captivez votre audience avec des présentations impactantes"
  }
]

const features = [
  {
    title: "IA Avancée",
    description: "Notre technologie s'adapte à votre niveau et votre progression",
    icon: Brain,
  },
  {
    title: "Experts Qualifiés",
    description: "Des mentors expérimentés dans leur domaine",
    icon: Users2,
  },
  {
    title: "Suivi Personnalisé",
    description: "Un parcours adapté à vos objectifs spécifiques",
    icon: BarChart,
  },
  {
    title: "Disponibilité 24/7",
    description: "Pratiquez à votre rythme, quand vous voulez",
    icon: Clock,
  }
]

const successStories = [
  {
    name: "Thomas D.",
    role: "Développeur Senior chez Google",
    image: "/api/placeholder/100/100",
    quote: "PrepAI m'a permis de décrocher mon poste de rêve après 2 mois de préparation intensive."
  },
  {
    name: "Sarah M.",
    role: "Product Manager chez Amazon",
    image: "/api/placeholder/100/100",
    quote: "Le programme de préparation aux entretiens comportementaux a fait toute la différence."
  },
  {
    name: "Alexandre K.",
    role: "Solutions Architect",
    image: "/api/placeholder/100/100",
    quote: "J'ai obtenu 3 certifications AWS grâce aux mentors de PrepAI."
  }
]

const journeySteps = [
  {
    title: "Évaluation initiale",
    description: "Identifiez vos points forts et axes d'amélioration",
    icon: Target
  },
  {
    title: "Programme personnalisé",
    description: "Recevez un plan d'apprentissage adapté à vos objectifs",
    icon: Route
  },
  {
    title: "Pratique guidée",
    description: "Exercez-vous avec des simulations et du feedback en temps réel",
    icon: Play
  },
  {
    title: "Mentorat expert",
    description: "Bénéficiez des conseils de professionnels du domaine",
    icon: Users
  }
]

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              <span className="block">We are humans tools</span>
              <span className="mt-2 block text-blue-600">Réussissez vos objectifs professionnels</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
              De la préparation d'entretien à l'obtention de certifications, nos experts vous accompagnent 
              dans votre développement professionnel avec des outils d'IA et un suivi personnalisé.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <SignInButton mode="modal">
                <Button size="lg" className="px-8">
                  Commencer gratuitement
                </Button>
              </SignInButton>
              <Button variant="outline" size="lg" className="px-8">
                Voir les démos
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-blue-100">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Types de préparation */}
      <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Une préparation complète pour chaque objectif
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Que vous souhaitiez décrocher un nouveau poste, obtenir une certification ou perfectionner vos compétences
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {examTypes.map((type) => (
              <div key={type.title} className="relative group">
                <div className="bg-white rounded-2xl shadow-sm border p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <type.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                  <p className="mt-2 text-gray-600">{type.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {type.examples.map((example) => (
                      <span key={example} className="px-2 py-1 text-sm bg-blue-50 text-blue-600 rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="mt-6 w-full">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comment ça marche */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Votre parcours vers la réussite
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Un accompagnement personnalisé qui combine expertise humaine et technologie
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Histoires de réussite
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Découvrez les parcours de nos apprenants
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {successStories.map((story) => (
              <div key={story.name} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={story.image}
                    alt={story.name}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Prêt à commencer votre préparation ?
            <span className="block text-blue-200">Rejoignez PrepAI aujourd'hui.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <SignInButton mode="modal">
              <Button variant="secondary" size="lg" className="px-8">
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </SignInButton>
          </div>
        </div>
      </div>
    </div>
  )
}