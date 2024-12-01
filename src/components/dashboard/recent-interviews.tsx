import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"
import { fr } from "date-fns/locale"

export function RecentInterviews({ interviews }) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Entretiens Récents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {interviews.map((interview) => (
            <div key={interview.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={interview.user.image} alt="Avatar" />
                <AvatarFallback>{interview.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{interview.title}</p>
                <p className="text-sm text-muted-foreground">
                  {formatDistanceToNow(new Date(interview.scheduledFor), {
                    addSuffix: true,
                    locale: fr,
                  })}
                </p>
              </div>
              <div className={cn(
                "ml-auto text-sm",
                interview.status === "COMPLETED" && "text-green-500",
                interview.status === "CANCELLED" && "text-red-500"
              )}>
                {interview.status}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}