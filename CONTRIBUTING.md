# Guide de Contribution

Merci de votre intérêt pour contribuer à PrepAI ! Ce document fournit les lignes directrices pour contribuer au projet.

## 🌟 Comment Contribuer

### Soumettre des Issues

1. Vérifiez d'abord que votre problème n'a pas déjà été signalé
2. Utilisez le template approprié :
   - Bug Report
   - Feature Request
   - Documentation Update

### Process de Pull Request

1. **Fork** le projet
2. Créez votre branche de fonctionnalité :
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Committez vos changements :
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Poussez vers la branche :
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Ouvrez une Pull Request

## 📝 Conventions de Code

### Commit Messages

Suivez la convention [Conventional Commits](https://www.conventionalcommits.org/) :
- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage
- `refactor:` Refactoring
- `test:` Ajout ou modification de tests
- `chore:` Maintenance

### Style de Code

- **TypeScript** : Suivre les règles ESLint configurées
- **React** : Utiliser les Hooks et les composants fonctionnels
- **CSS** : Suivre la méthodologie Tailwind
- **Tests** : Écrire des tests pour les nouvelles fonctionnalités

### Documentation

- Documenter les nouvelles fonctionnalités
- Mettre à jour le README si nécessaire
- Ajouter des commentaires pour le code complexe

## 🚀 Démarrage

1. **Prérequis**
   - Node.js 18+
   - npm ou yarn
   - PostgreSQL

2. **Installation**
   ```bash
   npm install
   cp .env.example .env.local
   npm run dev
   ```

## 🧪 Tests

```bash
# Exécuter tous les tests
npm test

# Tests unitaires
npm run test:unit

# Tests d'intégration
npm run test:integration

# Tests e2e
npm run test:e2e
```

## 📋 Checklist PR

- [ ] Tests ajoutés/mis à jour
- [ ] Documentation mise à jour
- [ ] Changements testés localement
- [ ] Code lint passé
- [ ] Conventions de commit respectées
- [ ] Mise à jour du changelog

## 🤝 Code de Conduite

En participant, vous acceptez de respecter notre Code de Conduite.

## ❓ Questions

Pour toute question, n'hésitez pas à :
- Ouvrir une issue
- Contacter l'équipe maintainers
- Rejoindre notre Discord