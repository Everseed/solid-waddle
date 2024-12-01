import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Book } from "lucide-react"

interface ExamCardProps {
  exam: {
    id: string
    title: string
    description: string
    type: string
    duration: number
    difficulty: string
    status: string
  }
}

export function ExamCard({ exam }: ExamCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{exam.title}</CardTitle>
          <Badge variant={
            exam.difficulty === "BEGINNER" ? "default" :
            exam.difficulty === "MEDIUM" ? "secondary" :
            "destructive"
          }>
            {exam.difficulty}
          </Badge>
        </div>
        <CardDescription>{exam.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            {exam.duration} min
          </div>
          <div className="flex items-center">
            <Book className="mr-2 h-4 w-4" />
            {exam.type}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/exam/${exam.id}`} className="w-full">
          <Button className="w-full">
            {exam.status === "COMPLETED" ? "Voir les résultats" : "Commencer"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}