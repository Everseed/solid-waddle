'use client'

import { useRole } from "@/hooks/use-roles"
import { ProtectedRoute } from "@/components/auth/protected-route"

export default function AdminDashboard() {
  const { role, user } = useRole({ allowedRoles: ['ADMIN'] })

  return (
    <ProtectedRoute allowedRoles={['ADMIN']}>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          Dashboard Administrateur
        </h1>
        <div>
          <p>Bienvenue {user?.firstName}</p>
          <p>Rôle : {role}</p>
          {/* Contenu du dashboard */}
        </div>
      </div>
    </ProtectedRoute>
  )
}