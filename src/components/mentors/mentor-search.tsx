'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface MentorSearchProps {
  onFilterChange: (filters: any) => void;
}

export function MentorSearch({ onFilterChange }: MentorSearchProps) {
  const [filters, setFilters] = useState({
    search: '',
    domain: '',
    expertise: '',
    priceRange: '',
    availability: ''
  })

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Input
          placeholder="Rechercher un mentor..."
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
        />
        
        <Select
          value={filters.domain}
          onValueChange={(value) => handleFilterChange('domain', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Domaine" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web">Développement Web</SelectItem>
            <SelectItem value="data">Data Science & IA</SelectItem>
            <SelectItem value="security">Cybersécurité</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.expertise}
          onValueChange={(value) => handleFilterChange('expertise', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Expertise" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="ml">Machine Learning</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.priceRange}
          onValueChange={(value) => handleFilterChange('priceRange', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Prix" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-50">0€ - 50€/h</SelectItem>
            <SelectItem value="50-100">50€ - 100€/h</SelectItem>
            <SelectItem value="100+">100€+/h</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.availability}
          onValueChange={(value) => handleFilterChange('availability', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Disponibilité" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-week">Cette semaine</SelectItem>
            <SelectItem value="next-week">Semaine prochaine</SelectItem>
            <SelectItem value="this-month">Ce mois</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}