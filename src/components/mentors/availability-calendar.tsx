'use client'

import { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

interface AvailabilityCalendarProps {
  mentorId: string;
  availableSlots: {
    [date: string]: TimeSlot[];
  };
}

export function AvailabilityCalendar({ mentorId, availableSlots }: AvailabilityCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          Voir les disponibilités
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Disponibilités du mentor</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            className="rounded-md border"
          />
          {selectedDate && availableSlots[selectedDate.toISOString().split('T')[0]] && (
            <div className="grid grid-cols-2 gap-2">
              {availableSlots[selectedDate.toISOString().split('T')[0]]
                .filter(slot => slot.available)
                .map((slot, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="text-sm"
                  >
                    {slot.start} - {slot.end}
                  </Button>
                ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}