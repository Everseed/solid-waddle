'use client'

import { SWRConfig } from 'swr'
import { swrOptions } from '@/lib/swr-config'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig value={swrOptions}>
      {children}
    </SWRConfig>
  )
}
