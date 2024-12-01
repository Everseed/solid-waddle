interface Testimonial {
    id: string;
    studentName: string;
    comment: string;
    rating: number;
    date: string;
    course: string;
  }
  
  interface TestimonialsProps {
    testimonials: Testimonial[];
  }
  
  export function Testimonials({ testimonials }: TestimonialsProps) {
    return (
      <div className="space-y-4">
        <h5 className="font-semibold text-gray-900">Témoignages d'étudiants</h5>
        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-medium">{testimonial.studentName}</span>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">{testimonial.comment}</p>
              <div className="mt-2 text-xs text-gray-500">
                <span>{testimonial.course}</span>
                <span className="mx-2">•</span>
                <span>{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }