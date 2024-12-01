'use client'

import { useUser } from "@clerk/nextjs"
import { useRole } from "@/hooks/use-roles"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Activity,
  Users,
  BookOpen,
  Calendar,
  TrendingUp,
  Clock,
  CheckCircle2,
  Plus,
  UserPlus,
  FileText
} from "lucide-react"
import { RecentActivity } from "@/components/dashboard/recent-activity"

function StatsCardsSkeleton() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="p-6">
            <Skeleton className="h-7 w-[120px]" />
            <Skeleton className="mt-3 h-10 w-[60px]" />
            <Skeleton className="mt-2 h-4 w-[160px]" />
          </div>
        </div>
      ))}
    </>
  )
}

const roleBasedStats = {
  ADMIN: [
    { label: "Utilisateurs actifs", value: "1,234", icon: Users, trend: "+12%" },
    { label: "Sessions aujourd'hui", value: "28", icon: Calendar, trend: "+5%" },
    { label: "Taux de réussite", value: "94%", icon: TrendingUp, trend: "+2%" },
    { label: "Contenus créés", value: "156", icon: BookOpen, trend: "+8%" }
  ],
  MENTOR: [
    { label: "Étudiants actifs", value: "45", icon: Users },
    { label: "Sessions prévues", value: "12", icon: Calendar },
    { label: "Taux de satisfaction", value: "4.8/5", icon: TrendingUp },
    { label: "Heures de mentorat", value: "128", icon: Clock }
  ],
  CREATOR: [
    { label: "Contenus publiés", value: "34", icon: BookOpen },
    { label: "Utilisateurs actifs", value: "890", icon: Users },
    { label: "Taux d'engagement", value: "76%", icon: Activity },
    { label: "Contenu en cours", value: "8", icon: Clock }
  ],
  STUDENT: [
    { label: "Cours complétés", value: "12", icon: CheckCircle2 },
    { label: "Prochaine session", value: "2h", icon: Calendar },
    { label: "Progression globale", value: "68%", icon: TrendingUp },
    { label: "Temps d'étude", value: "45h", icon: Clock }
  ]
}

interface RoleSection {
  title: string
  description: string
  component: React.ReactNode
  action?: {
    label: string
    icon: React.ReactNode
    onClick: () => void
  }
}

export default function DashboardPage() {
  const { user, isLoaded } = useUser()
  const { role } = useRole()

  if (!isLoaded || !user) {
    return <StatsCardsSkeleton />
  }

  // Données d'exemple pour les activités récentes
  const recentActivities = [
    {
      id: "1",
      type: "session",
      title: "Nouvelle session de mentorat",
      description: "Session JavaScript avancé programmée avec Thomas D.",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      status: "pending"
    },
    // ... autres activités
  ]

  // Sections spécifiques par rôle
  const roleSections: Record<string, RoleSection[]> = {
    ADMIN: [
      {
        title: "Utilisateurs actifs",
        description: "Aperçu des dernières inscriptions et activités",
        component: (
          <Card className="p-6">
            {/* Composant des utilisateurs actifs */}
          </Card>
        ),
        action: {
          label: "Ajouter un utilisateur",
          icon: <UserPlus className="h-4 w-4" />,
          onClick: () => console.log("Ajouter utilisateur")
        }
      },
      {
        title: "Rapports système",
        description: "Performances et métriques globales",
        component: (
          <Card className="p-6">
            {/* Composant des rapports */}
          </Card>
        )
      }
    ],
    MENTOR: [
      {
        title: "Prochaines sessions",
        description: "Vos sessions de mentorat à venir",
        component: (
          <Card className="p-6">
            {/* Liste des sessions */}
          </Card>
        ),
        action: {
          label: "Nouvelle session",
          icon: <Plus className="h-4 w-4" />,
          onClick: () => console.log("Nouvelle session")
        }
      },
      {
        title: "Progression des étudiants",
        description: "Suivi des performances",
        component: (
          <Card className="p-6">
            {/* Progression des étudiants */}
          </Card>
        )
      }
    ],
    CREATOR: [
      {
        title: "Contenus en cours",
        description: "Vos contenus en création et publiés",
        component: (
          <Card className="p-6">
            {/* Liste des contenus */}
          </Card>
        ),
        action: {
          label: "Nouveau contenu",
          icon: <FileText className="h-4 w-4" />,
          onClick: () => console.log("Nouveau contenu")
        }
      }
    ],
    STUDENT: [
      {
        title: "Mon parcours",
        description: "Votre progression et prochaines étapes",
        component: (
          <Card className="p-6">
            {/* Parcours étudiant */}
          </Card>
        )
      }
    ]
  }

  const currentRoleSections = roleSections[role] || roleSections.STUDENT
  const stats = roleBasedStats[role] || roleBasedStats.STUDENT

  return (
    <div className="flex-1 space-y-6 p-8">
      {/* En-tête et stats restent identiques */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Bonjour, {user.firstName || 'Utilisateur'}
          </h1>
          <p className="text-muted-foreground">
            Voici un aperçu de vos activités et statistiques
          </p>
        </div>
        {role !== 'STUDENT' && (
          <Button>
            {role === 'MENTOR' && "Nouvelle session"}
            {role === 'CREATOR' && "Nouveau contenu"}
            {role === 'ADMIN' && "Nouveau rapport"}
          </Button>
        )}
      </div>

      {/* Cartes de statistiques */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            {/* ... contenu de la carte de stat ... */}
          </Card>
        ))}
      </div>

      {/* Sections dynamiques selon le rôle */}
      <div className="grid gap-6 md:grid-cols-2">
        {currentRoleSections.map((section, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {section.description}
                </p>
              </div>
              {section.action && (
                <Button onClick={section.action.onClick} size="sm">
                  {section.action.icon}
                  <span className="ml-2">{section.action.label}</span>
                </Button>
              )}
            </div>
            {section.component}
          </div>
        ))}
      </div>

      {/* Activités récentes */}
      <RecentActivity 
        activities={recentActivities}
        className="mt-6"
      />
    </div>
  )
}