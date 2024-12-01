'use client'

import { useUser } from "@clerk/nextjs"
import { useExams } from "@/lib/swr-config"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import { formatDistance } from "date-fns"
import { fr } from "date-fns/locale"
import { cn } from "@/lib/utils"

interface UpcomingExamsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UpcomingExams({ className, ...props }: UpcomingExamsProps) {
  const { user } = useUser()
  const { exams, isLoading } = useExams(user?.id)

  const upcomingExams = exams?.filter(exam => 
    exam.status === "PENDING" || exam.status === "IN_PROGRESS"
  ).slice(0, 5)

  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader>
        <CardTitle>Examens à venir</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div>Chargement...</div>
        ) : upcomingExams?.length === 0 ? (
          <p className="text-sm text-muted-foreground">Aucun examen prévu</p>
        ) : (
          <div className="space-y-4">
            {upcomingExams?.map((exam) => (
              <div key={exam.id} className="flex items-center">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{exam.title}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {exam.startTime && (
                      <span>
                        {formatDistance(new Date(exam.startTime), new Date(), {
                          addSuffix: true,
                          locale: fr,
                        })}
                      </span>
                    )}
                    <Clock className="ml-3 mr-1 h-4 w-4" />
                    <span>{exam.duration} min</span>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="ml-auto"
                  onClick={() => window.location.href = `/exams/${exam.id}`}
                >
                  {exam.status === "IN_PROGRESS" ? "Continuer" : "Commencer"}
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}