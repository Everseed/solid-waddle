import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import { Providers } from "./provider/providers"
import { Header } from "@/components/layout/header"
import { ThemeProvider } from "next-themes"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PrepAI - Plateforme d'apprentissage",
  description: "Préparez-vous aux entretiens et certifications avec des experts",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="fr" className="h-full" suppressHydrationWarning>
        <Providers>
          <body className={`${inter.className} h-full`}> 
              <Header />
                <main className="flex-1">{children}</main>
              <Footer />
          </body>
        </Providers>
      </html>
    </ClerkProvider>
  )
}

{/* <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          ></ThemeProvider>  */}