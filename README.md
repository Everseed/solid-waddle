# PrepAI - We are humans tools

PrepAI est une plateforme d'apprentissage intelligente qui aide les étudiants et professionnels à se préparer aux examens, certifications et entretiens techniques. La plateforme combine expertise humaine et intelligence artificielle pour offrir un apprentissage personnalisé.

## 🌟 Fonctionnalités

### 🎯 Préparation Complète
- **Entretiens Techniques** : FAANG, Startups, Entreprises Tech
- **Certifications Professionnelles** : AWS, Google Cloud, Azure, etc.
- **Entretiens RH** : Leadership, Comportemental, Mise en situation
- **Examens Académiques** : GMAT, GRE, TOEFL, IELTS
- **Tests Psychotechniques**
- **Présentations & Pitchs**

### 👥 Expertise Multiple
- **Tech & Dev** : Web, Mobile, Cloud, DevOps
- **Management** : Leadership, Gestion d'équipe, Agilité
- **Business** : Stratégie, Finance, Marketing
- **Communication** : Rédaction, Prise de parole
- **RH** : Recrutement, Formation, GPEC

### 🛠 Fonctionnalités Techniques
- Sessions vidéo en direct avec WebRTC
- Support de sous-groupes de travail
- Enregistrement des sessions
- Authentification sécurisée
- Tableau blanc collaboratif
- API Claude intégrée

## 🚀 Installation

1. **Cloner le projet**
```bash
git clone [url-du-projet]
cd prepai
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration environnement**
```bash
cp .env.example .env.local
```
Remplir les variables d'environnement nécessaires :
```env
# Database
DATABASE_URL=
DATABASE_URL_UNPOOLED=

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# API Keys
ANTHROPIC_API_KEY=

# WebRTC
NEXT_PUBLIC_TURN_SERVER_URL=
TURN_SERVER_USERNAME=
TURN_SERVER_CREDENTIAL=
```

4. **Initialiser la base de données**
```bash
npx prisma db push
npx prisma generate
npx prisma db seed
```

5. **Lancer le serveur de développement**
```bash
npm run dev
```

## 🏗 Structure du Projet

```
src/
├── app/
│   ├── (auth)/              # Routes protégées
│   │   ├── dashboard/       # Dashboard principal
│   │   ├── settings/       # Paramètres utilisateur
│   │   └── layout.tsx      # Layout authentifié
│   ├── api/                # Routes API
│   ├── layout.tsx          # Layout racine
│   └── page.tsx            # Page d'accueil
├── components/
│   ├── ui/                 # Composants réutilisables
│   ├── dashboard/          # Composants dashboard
│   └── auth/              # Composants authentification
├── hooks/                 # Custom hooks
├── lib/                   # Utilitaires et configurations
├── styles/               # Styles globaux
└── types/                # Types TypeScript
```

## 🔒 Rôles et Permissions

- **Admin** : Gestion complète de la plateforme
- **Mentor** : Gestion des sessions et étudiants
- **Creator** : Création de contenu pédagogique
- **Student** : Accès aux cours et sessions

## 🛠 Technologies Utilisées

- **Frontend** : Next.js 14, React, TypeScript
- **Styles** : TailwindCSS, ShadcnUI
- **Auth** : Clerk
- **Base de données** : PostgreSQL, Prisma
- **Real-time** : WebRTC
- **AI** : Claude API

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez notre guide de contribution pour plus d'informations.

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🌐 Liens Utiles

- [Documentation](docs/README.md)
- [Guide de contribution](CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)