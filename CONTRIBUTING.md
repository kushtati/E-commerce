# 🤝 Guide de Contribution

Merci de votre intérêt pour contribuer à ce projet e-commerce ! Voici comment vous pouvez participer.

## 📋 Table des Matières

- [Code de Conduite](#code-de-conduite)
- [Comment Contribuer](#comment-contribuer)
- [Processus de Développement](#processus-de-développement)
- [Standards de Code](#standards-de-code)
- [Commit Messages](#commit-messages)
- [Pull Requests](#pull-requests)

## 📜 Code de Conduite

Ce projet adhère à un code de conduite. En participant, vous êtes tenu de respecter ce code :

- Soyez respectueux et inclusif
- Acceptez les critiques constructives
- Concentrez-vous sur ce qui est le mieux pour la communauté
- Faites preuve d'empathie envers les autres membres

## 🚀 Comment Contribuer

### Reporter des Bugs

Si vous trouvez un bug :

1. Vérifiez que le bug n'a pas déjà été signalé
2. Ouvrez une issue avec :
   - Un titre clair et descriptif
   - Les étapes pour reproduire le problème
   - Le comportement attendu vs actuel
   - Des captures d'écran si possible
   - Votre environnement (OS, versions, etc.)

### Proposer des Fonctionnalités

Pour proposer une nouvelle fonctionnalité :

1. Ouvrez une issue pour discuter de l'idée
2. Expliquez pourquoi cette fonctionnalité serait utile
3. Donnez des exemples d'utilisation
4. Attendez l'approbation avant de commencer le développement

### Soumettre des Modifications

1. Forkez le projet
2. Créez votre branche (`git checkout -b feature/MaFonctionnalite`)
3. Effectuez vos modifications
4. Testez vos changements
5. Committez (`git commit -m 'Add: Description'`)
6. Push (`git push origin feature/MaFonctionnalite`)
7. Ouvrez une Pull Request

## 🔧 Processus de Développement

### Configuration de l'Environnement

```bash
# Cloner le projet
git clone https://github.com/votre-username/e-commerce.git
cd e-commerce

# Installer les dépendances
npm run install:all

# Configurer la base de données
cd backend
npm run prisma:migrate
npm run seed

# Démarrer en développement
npm run dev:backend   # Terminal 1
npm run dev:frontend  # Terminal 2
```

### Structure des Branches

- `main` : Production-ready code
- `develop` : Branche de développement principale
- `feature/*` : Nouvelles fonctionnalités
- `fix/*` : Corrections de bugs
- `hotfix/*` : Corrections urgentes
- `docs/*` : Modifications de documentation

### Repository GitHub

**Main Repository**: [github.com/kushtati/e-commerce](https://github.com/kushtati/e-commerce)

### Workflow Git

```bash
# Mettre à jour votre fork
git checkout develop
git pull upstream develop

# Créer une branche feature
git checkout -b feature/nouvelle-fonctionnalite

# Faire vos modifications et commit
git add .
git commit -m "Add: Description de la fonctionnalité"

# Pousser vers votre fork
git push origin feature/nouvelle-fonctionnalite

# Créer une Pull Request sur GitHub
```

## 📝 Standards de Code

### TypeScript

- Utilisez TypeScript pour tout nouveau code
- Définissez des interfaces/types pour les données
- Évitez `any`, utilisez des types spécifiques
- Activez le mode strict

```typescript
// ✅ Bon
interface Product {
  id: number
  name: string
  price: number
}

// ❌ Mauvais
const product: any = { ... }
```

### React/Next.js

- Utilisez les composants fonctionnels
- Préférez les hooks au lieu des classes
- Utilisez `'use client'` seulement si nécessaire
- Composants réutilisables dans `/components`

```typescript
// ✅ Bon
export default function ProductCard({ product }: { product: Product }) {
  return <div>...</div>
}

// ❌ Mauvais
class ProductCard extends React.Component {
  render() { ... }
}
```

### CSS/Tailwind

- Utilisez Tailwind CSS pour le styling
- Utilisez des classes utilitaires
- Créez des composants pour les styles répétitifs
- Respectez le design system (couleurs, espacements)

```tsx
// ✅ Bon
<button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
  Click me
</button>

// ❌ Mauvais
<button style={{ backgroundColor: '#0ea5e9', padding: '8px 16px' }}>
  Click me
</button>
```

### Backend/API

- Utilisez des routes RESTful
- Validez toutes les entrées
- Gérez les erreurs correctement
- Documentez les endpoints

```typescript
// ✅ Bon
router.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) }
    })
    if (!product) {
      return res.status(404).json({ error: 'Product not found' })
    }
    res.json(product)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})
```

## 💬 Commit Messages

Utilisez des messages de commit clairs et descriptifs :

### Format

```
Type: Courte description (50 caractères max)

Description détaillée optionnelle (72 caractères par ligne)
Expliquez quoi et pourquoi, pas comment.
```

### Types

- `Add:` Nouvelle fonctionnalité
- `Fix:` Correction de bug
- `Update:` Mise à jour d'une fonctionnalité
- `Remove:` Suppression de code
- `Refactor:` Refactoring sans changer le comportement
- `Docs:` Documentation seulement
- `Style:` Formatage, point-virgules, etc.
- `Test:` Ajout ou modification de tests
- `Chore:` Mise à jour de build, dépendances, etc.

### Exemples

```bash
# ✅ Bon
git commit -m "Add: Product filtering by category"
git commit -m "Fix: Cart not updating on quantity change"
git commit -m "Update: Improve checkout form validation"

# ❌ Mauvais
git commit -m "fixed stuff"
git commit -m "WIP"
git commit -m "asdfasdf"
```

## 🔍 Pull Requests

### Avant de Soumettre

- [ ] Le code compile sans erreurs
- [ ] Tous les tests passent
- [ ] Le code suit les standards du projet
- [ ] La documentation est à jour
- [ ] Les commits sont propres et descriptifs

### Template de PR

```markdown
## Description
Brève description des changements

## Type de changement
- [ ] Bug fix
- [ ] Nouvelle fonctionnalité
- [ ] Breaking change
- [ ] Documentation

## Comment tester
1. Étape 1
2. Étape 2
3. ...

## Checklist
- [ ] Code testé localement
- [ ] Documentation mise à jour
- [ ] Pas de nouveaux warnings
- [ ] Screenshots ajoutés (si UI)
```

### Processus de Review

1. Un mainteneur reviewera votre PR
2. Des changements peuvent être demandés
3. Effectuez les modifications demandées
4. Une fois approuvée, la PR sera mergée

## 🧪 Tests

### Frontend
```bash
cd frontend
npm run test        # Tests unitaires (à venir)
npm run test:e2e    # Tests e2e (à venir)
```

### Backend
```bash
cd backend
npm run test        # Tests unitaires (à venir)
```

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation React](https://react.dev)
- [Documentation Prisma](https://www.prisma.io/docs)
- [Documentation Stripe](https://stripe.com/docs)
- [Guide Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 💡 Idées de Contribution

Pas sûr par où commencer ? Voici quelques idées :

### Frontend
- [ ] Améliorer l'accessibilité (a11y)
- [ ] Ajouter des animations
- [ ] Optimiser les performances
- [ ] Améliorer le design responsive
- [ ] Ajouter des tests

### Backend
- [ ] Ajouter la validation des données
- [ ] Améliorer la gestion d'erreurs
- [ ] Optimiser les requêtes database
- [ ] Ajouter des tests
- [ ] Améliorer la sécurité

### Documentation
- [ ] Traduire la documentation
- [ ] Ajouter des tutoriels
- [ ] Créer des vidéos explicatives
- [ ] Améliorer les commentaires du code

### DevOps
- [ ] Configuration CI/CD
- [ ] Scripts de déploiement
- [ ] Monitoring et logging
- [ ] Optimisation Docker

## ❓ Questions

Si vous avez des questions, n'hésitez pas à :
- Ouvrir une issue
- Rejoindre notre Discord (à venir)
- Consulter la documentation

## 🙏 Remerciements

Merci à tous les contributeurs qui aident à améliorer ce projet !

---

**Ensemble, construisons quelque chose d'incroyable ! 🚀**

© 2025 [Kushtati](https://github.com/kushtati). Tous droits réservés.
