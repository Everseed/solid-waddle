import { Button } from "../ui/button";

interface PricingTier {
    title: string;
    price: number;
    duration: string;
    features: string[];
  }
  
  interface PricingCardProps {
    pricing: PricingTier;
  }
  
  export function PricingCard({ pricing }: PricingCardProps) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold">{pricing.title}</h3>
        <div className="mt-4">
          <span className="text-3xl font-bold">{pricing.price}€</span>
          <span className="text-gray-600">/{pricing.duration}</span>
        </div>
        <ul className="mt-6 space-y-4">
          {pricing.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <svg
                className="h-4 w-4 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <Button className="w-full mt-6">
          Réserver
        </Button>
      </div>
    )
  }