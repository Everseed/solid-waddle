import { InterviewCalendar } from "@/components/interview/calendar"
import { ScheduleInterview } from "@/components/interview/schedule"

export default async function InterviewsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Entretiens</h1>
        <ScheduleInterview />
      </div>
      <InterviewCalendar />
    </div>
  )
}