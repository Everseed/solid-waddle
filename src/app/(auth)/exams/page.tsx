import { ExamFilters } from "@/components/exam/filters"
import { ExamList } from "@/components/exam/list"
import { CreateExamButton } from "@/components/exam/create-button"

export default async function ExamsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Examens</h1>
        <CreateExamButton />
      </div>
      <ExamFilters />
      <ExamList />
    </div>
  )
}