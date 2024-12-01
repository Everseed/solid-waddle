import useSWR, { SWRConfig } from 'swr'

// Fonction fetcher par défaut
export const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) {
    const error = new Error('Une erreur est survenue lors de la requête API')
    error.name = await res.json()
    // error = res.status
    throw error
  }
  return res.json()
}

// Options globales SWR
export const swrOptions = {
  fetcher,
  revalidateOnFocus: false, // Désactive la revalidation automatique lors du focus
  revalidateOnReconnect: true, // Revalide lors de la reconnexion internet
  dedupingInterval: 2000, // Intervalle de déduplication des requêtes (2s)
  shouldRetryOnError: false, // Désactive les retries automatiques en cas d'erreur
  errorRetryCount: 3, // Nombre maximum de tentatives
}

// Hooks personnalisés pour les requêtes communes
export function useExams(userId?: string) {
  const { data, error, isLoading, mutate } = useSWR(
    userId ? `/api/exams?userId=${userId}` : null
  )

  return {
    exams: data,
    isLoading,
    isError: error,
    mutate,
  }
}

export function useInterview(interviewId: string) {
  const { data, error, isLoading } = useSWR(
    interviewId ? `/api/interviews/${interviewId}` : null
  )

  return {
    interview: data,
    isLoading,
    isError: error,
  }
}

export function useUserProgress(userId: string) {
  const { data, error, isLoading } = useSWR(
    userId ? `/api/users/${userId}/progress` : null
  )

  return {
    progress: data,
    isLoading,
    isError: error,
  }
}