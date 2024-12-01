// src/data/mentors-data.ts
export const domains = [
    {
      id: "tech",
      name: "Technologies & Développement",
      categories: ["Web", "Mobile", "IA", "Data Science", "DevOps", "Cybersécurité"]
    },
    {
      id: "management",
      name: "Leadership & Management",
      categories: ["Gestion d'équipe", "Agilité", "Gestion de projet", "Change Management", "Communication d'équipe"]
    },
    {
      id: "business",
      name: "Business & Entrepreneuriat",
      categories: ["Stratégie d'entreprise", "Marketing Digital", "Finance", "Business Development", "Innovation"]
    },
    {
      id: "communication",
      name: "Communication Professionnelle",
      categories: ["Rédaction professionnelle", "Prise de parole", "Négociation", "Communication interculturelle"]
    },
    {
      id: "personal-dev",
      name: "Développement Personnel",
      categories: ["Gestion du stress", "Productivité", "Personal Branding", "Work-Life Balance"]
    },
    {
      id: "creative",
      name: "Créativité & Design",
      categories: ["UX/UI Design", "Design Thinking", "Storytelling", "Content Creation"]
    },
    {
      id: "operations",
      name: "Opérations & Qualité",
      categories: ["Gestion de la qualité", "Lean Management", "Supply Chain", "Process Optimization"]
    },
    {
      id: "hr",
      name: "Ressources Humaines",
      categories: ["Recrutement", "Formation", "Droit du travail", "GPEC", "Culture d'entreprise"]
    }
  ];
  
  export const mentors = [
    {
      domain: "Leadership & Management",
      experts: [
        {
          name: "Claire Dubois",
          role: "Executive Coach",
          expertise: ["Leadership", "Change Management", "Team Building"],
          rating: 4.9,
          students: 156,
          image: "/api/placeholder/400/400",
          courses: [
            {
              title: "Leadership Transformationnel",
              duration: "12 semaines",
              level: "Avancé",
              price: 1200,
              description: "Développez votre style de leadership et apprenez à inspirer vos équipes"
            },
            {
              title: "Gestion du Changement",
              duration: "8 semaines",
              level: "Intermédiaire",
              price: 900,
              description: "Maîtrisez les méthodologies de conduite du changement"
            }
          ]
        }
      ]
    },
    {
      domain: "Communication Professionnelle",
      experts: [
        {
          name: "Marc Laurent",
          role: "Expert en Communication",
          expertise: ["Rédaction", "Storytelling", "Communication de crise"],
          rating: 4.8,
          students: 234,
          image: "/api/placeholder/400/400",
          courses: [
            {
              title: "Écriture Professionnelle Efficace",
              duration: "6 semaines",
              level: "Tous niveaux",
              price: 600,
              description: "Perfectionnez votre communication écrite en contexte professionnel"
            }
          ]
        }
      ]
    },
    {
      domain: "Business & Entrepreneuriat",
      experts: [
        {
          name: "Sophie Moreau",
          role: "Business Strategy Consultant",
          expertise: ["Business Plan", "Pitch", "Stratégie de croissance"],
          rating: 4.9,
          students: 189,
          image: "/api/placeholder/400/400",
          courses: [
            {
              title: "Création d'Entreprise A-Z",
              duration: "10 semaines",
              level: "Débutant",
              price: 1100,
              description: "Du concept au lancement de votre entreprise"
            }
          ]
        }
      ]
    },
    {
      domain: "Développement Personnel",
      experts: [
        {
          name: "Thomas Richard",
          role: "Coach en Développement Personnel",
          expertise: ["Gestion du stress", "Prise de parole", "Confiance en soi"],
          rating: 4.7,
          students: 312,
          image: "/api/placeholder/400/400",
          courses: [
            {
              title: "Master Your Mindset",
              duration: "8 semaines",
              level: "Tous niveaux",
              price: 800,
              description: "Développez une mentalité de croissance et atteignez vos objectifs"
            }
          ]
        }
      ]
    },
    {
      domain: "Ressources Humaines",
      experts: [
        {
          name: "Marie Lefevre",
          role: "DRH & Consultante RH",
          expertise: ["Recrutement", "GPEC", "Formation"],
          rating: 4.8,
          students: 145,
          image: "/api/placeholder/400/400",
          courses: [
            {
              title: "Stratégie RH Moderne",
              duration: "10 semaines",
              level: "Avancé",
              price: 1300,
              description: "Développez une stratégie RH alignée sur les enjeux actuels"
            }
          ]
        }
      ]
    }
  ];
  
  export const testimonials = [
    {
      id: "1",
      studentName: "Alexandre Martin",
      role: "Manager",
      company: "Tech Solutions",
      comment: "La formation en leadership m'a permis de mieux gérer mon équipe et d'améliorer significativement nos résultats.",
      rating: 5,
      date: "2024-03-15",
      course: "Leadership Transformationnel"
    },
    {
      id: "2",
      studentName: "Julie Petit",
      role: "Entrepreneure",
      company: "StartupLab",
      comment: "Les conseils en business development ont été cruciaux pour le lancement de mon entreprise.",
      rating: 5,
      date: "2024-03-10",
      course: "Création d'Entreprise A-Z"
    }
  ];
  
  export const pricingOptions = {
    individual: [
      {
        title: "Session Découverte",
        price: 75,
        duration: "1h",
        features: [
          "Évaluation des besoins",
          "Plan de développement personnalisé",
          "Documentation de support"
        ]
      },
      {
        title: "Pack Premium",
        price: 650,
        duration: "10h",
        features: [
          "10 sessions de coaching",
          "Accès aux ressources exclusives",
          "Suivi personnalisé",
          "Certification de fin de parcours"
        ]
      }
    ],
    group: [
      {
        title: "Formation Entreprise",
        price: "Sur mesure",
        duration: "Variable",
        features: [
          "Programmes personnalisés",
          "Formation sur site",
          "Évaluation des compétences",
          "Rapport de progression"
        ]
      }
    ]
  };