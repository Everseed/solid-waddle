'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { formatDistanceToNow } from "date-fns"
import { fr } from "date-fns/locale"
import { 
  BookOpen, 
  Calendar, 
  FileText, 
  User,
  Settings,
  CheckCircle,
  AlertCircle,
  Clock
} from "lucide-react"

export type ActivityType = 
  | 'session'
  | 'exam'
  | 'course'
  | 'content'
  | 'user'
  | 'system'
  | 'certification'

interface Activity {
  id: string
  type: ActivityType
  title: string
  description: string
  timestamp: Date
  user?: {
    name: string
    image?: string
    role?: string
  }
  status?: 'success' | 'pending' | 'warning' | 'error'
  metadata?: {
    score?: number
    duration?: string
    progress?: number
    category?: string
    [key: string]: any
  }
}

interface RecentActivityProps {
  activities: Activity[]
  isLoading?: boolean
  className?: string
  maxItems?: number
  filter?: ActivityType[]
  onItemClick?: (activity: Activity) => void
  emptyMessage?: string
}

const activityIcons = {
  session: Calendar,
  exam: FileText,
  course: BookOpen,
  content: FileText,
  user: User,
  system: Settings,
  certification: CheckCircle
}

const statusStyles = {
  success: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  warning: "bg-orange-100 text-orange-800",
  error: "bg-red-100 text-red-800"
}

export function RecentActivity({
  activities,
  isLoading,
  className,
  maxItems = 5,
  filter,
  onItemClick,
  emptyMessage = "Aucune activité récente"
}: RecentActivityProps) {
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Activités récentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 w-1/2 bg-gray-100 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  const filteredActivities = filter 
    ? activities.filter(activity => filter.includes(activity.type))
    : activities

  const displayActivities = filteredActivities.slice(0, maxItems)

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Activités récentes</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {displayActivities.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {emptyMessage}
            </div>
          ) : (
            <div className="space-y-6">
              {displayActivities.map((activity) => {
                const IconComponent = activityIcons[activity.type] || Settings
                
                return (
                  <div 
                    key={activity.id}
                    className="flex items-start space-x-4 cursor-pointer hover:bg-accent/50 p-2 rounded-lg transition-colors"
                    onClick={() => onItemClick?.(activity)}
                  >
                    {activity.user?.image ? (
                      <Avatar>
                        <AvatarImage src={activity.user.image} alt={activity.user.name} />
                        <AvatarFallback>
                          {activity.user.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                    )}
                    
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">
                          {activity.title}
                        </p>
                        {activity.status && (
                          <Badge variant="outline" className={statusStyles[activity.status]}>
                            {activity.status}
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-sm text-muted-foreground">
                        {activity.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatDistanceToNow(activity.timestamp, {
                            addSuffix: true,
                            locale: fr
                          })}
                        </span>
                        {activity.metadata?.duration && (
                          <span>{activity.metadata.duration}</span>
                        )}
                        {activity.metadata?.score !== undefined && (
                          <span>Score: {activity.metadata.score}%</span>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}