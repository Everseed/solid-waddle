'use client'

import { useRole } from "@/hooks/use-roles"
import { UserRole } from "@/types"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles: UserRole[]
  redirectTo?: string
}

export function ProtectedRoute({
  children,
  allowedRoles,
  redirectTo = "/"
}: ProtectedRouteProps) {
  const { isAuthorized, user } = useRole({ allowedRoles, redirectTo })

  if (!user) {
    return <LoadingSpinner />
  }

  if (!isAuthorized) {
    return <div>Accès non autorisé</div>
  }

  return <>{children}</>
}