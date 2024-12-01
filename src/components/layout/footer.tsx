import { ModeToggle } from "@/components/ui/mode-toggle"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="md:order-2 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Changer le thème</span>
            <ModeToggle />
          </div>
          <div className="flex gap-x-6">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
              À propos
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Confidentialité
            </Link>
          </div>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} PrepAI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}