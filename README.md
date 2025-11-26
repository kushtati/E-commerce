# 🛒 Kushtati E-Commerce - Boutique en ligne complète

Site e-commerce moderne et élégant avec Next.js, Node.js, PostgreSQL, Stripe et Strapi.

## 🏗️ Architecture

- **Frontend**: Next.js 14 avec TypeScript et Tailwind CSS
- **Backend**: Node.js avec Express.js et TypeScript
- **Base de données**: SQLite avec Prisma ORM (aucune installation requise !)
- **Paiement**: Stripe
- **CMS**: Strapi (Headless CMS)
- **Gestion d'état**: Zustand

## 📁 Structure du Projet

```
e-commerce/
├── frontend/          # Application Next.js
│   ├── app/          # Pages et layouts
│   ├── components/   # Composants réutilisables
│   └── store/        # Gestion d'état Zustand
├── backend/          # API Express.js
│   ├── src/
│   │   ├── routes/   # Routes API
│   │   └── config/   # Configuration
│   └── prisma/       # Schéma et migrations
└── strapi-cms/       # CMS Strapi
```

## 🚀 Installation

### Prérequis

- Node.js 18+ et npm
- Git

### 1. Cloner le projet

```bash
cd c:\xampp\htdocs\e-commerce
```

### 2. Configuration du Backend

```bash
cd backend

# Installer les dépendances
npm install

# La base de données SQLite sera créée automatiquement
# Un fichier dev.db sera créé dans le dossier prisma/

# Configurer les variables d'environnement
# Éditez le fichier .env avec vos informations :
# - DATABASE_URL="file:./dev.db" (déjà configuré pour SQLite)
# - STRIPE_SECRET_KEY avec votre clé Stripe
# - JWT_SECRET avec une clé secrète

# Générer le client Prisma et créer la base de données
npm run prisma:generate
npx prisma migrate dev --name init

# La base de données est automatiquement peuplée avec des données de test
# Si besoin de re-peupler : npm run seed

# Démarrer le serveur de développement
npm run dev
```

Le backend sera accessible sur **http://localhost:5000**

### 3. Configuration du Frontend

```bash
cd ../frontend

# Installer les dépendances
npm install

# Configurer les variables d'environnement
# Éditez le fichier .env.local :
# - NEXT_PUBLIC_API_URL=http://localhost:5000/api
# - NEXT_PUBLIC_STRIPE_PUBLIC_KEY avec votre clé publique Stripe

# Démarrer le serveur de développement
npm run dev
```

Le frontend sera accessible sur **http://localhost:3000**

### 4. Configuration de Strapi CMS (Optionnel)

```bash
cd ../strapi-cms

# Installer Strapi
npx create-strapi-app@latest . --quickstart --no-run

# Démarrer Strapi
npm run develop
```

Strapi sera accessible sur **http://localhost:1337**

## 🔑 Configuration Stripe

1. Créez un compte sur [Stripe](https://stripe.com)
2. Récupérez vos clés API (mode test) :
   - Clé publique : `pk_test_...`
   - Clé secrète : `sk_test_...`
3. Ajoutez-les dans les fichiers `.env` (backend) et `.env.local` (frontend)

### Webhooks Stripe (Production)

Pour recevoir les événements de paiement :

```bash
# Installer Stripe CLI
# https://stripe.com/docs/stripe-cli

# Se connecter
stripe login

# Écouter les webhooks
stripe listen --forward-to localhost:5000/api/checkout/webhook
```

## 📝 API Endpoints

### Produits
- `GET /api/products` - Liste tous les produits
- `GET /api/products/:id` - Détails d'un produit
- `POST /api/products` - Créer un produit (Admin)
- `PUT /api/products/:id` - Modifier un produit (Admin)
- `DELETE /api/products/:id` - Supprimer un produit (Admin)

### Commandes
- `GET /api/orders` - Liste des commandes
- `GET /api/orders/:id` - Détails d'une commande
- `POST /api/orders` - Créer une commande
- `PATCH /api/orders/:id/status` - Modifier le statut

### Utilisateurs
- `POST /api/users/register` - Inscription
- `POST /api/users/login` - Connexion
- `GET /api/users/profile/:id` - Profil utilisateur

### Paiement
- `POST /api/checkout/create-session` - Créer une session Stripe
- `POST /api/checkout/webhook` - Webhook Stripe

## 🎨 Fonctionnalités

### Frontend
- ✅ Page d'accueil avec hero et produits populaires
- ✅ Catalogue de produits avec grille responsive
- ✅ Page de détail produit
- ✅ Panier d'achat avec gestion des quantités
- ✅ Processus de checkout
- ✅ Intégration Stripe pour les paiements
- ✅ Design responsive avec Tailwind CSS
- ✅ Navigation élégante avec header et footer
- ✅ Gestion d'état avec Zustand
- ✅ Notifications toast

### Backend
- ✅ API RESTful avec Express.js
- ✅ ORM Prisma pour PostgreSQL
- ✅ Routes pour produits, commandes, utilisateurs
- ✅ Intégration Stripe côté serveur
- ✅ Authentification JWT
- ✅ Validation des données
- ✅ Gestion des erreurs

## 🛠️ Scripts Disponibles

### Frontend
```bash
npm run dev      # Développement
npm run build    # Build production
npm run start    # Démarrer en production
npm run lint     # Linter
```

### Backend
```bash
npm run dev              # Développement
npm run build            # Compiler TypeScript
npm run start            # Démarrer en production
npm run prisma:generate  # Générer client Prisma
npm run prisma:migrate   # Migrations
npm run prisma:studio    # Interface Prisma Studio
```

## 📦 Technologies Utilisées

### Frontend
- **Next.js 14** - Framework React avec SSR
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utility-first
- **Zustand** - Gestion d'état légère
- **Axios** - Client HTTP
- **Stripe.js** - Intégration paiements
- **Lucide React** - Icônes modernes
- **React Hot Toast** - Notifications

### Backend
- **Express.js** - Framework Node.js
- **TypeScript** - Typage statique
- **Prisma** - ORM moderne
- **SQLite** - Base de données légère (aucune installation requise)
- **Stripe** - Traitement des paiements
- **bcryptjs** - Hachage de mots de passe
- **jsonwebtoken** - Authentification JWT

## 🔒 Sécurité

- Mots de passe hachés avec bcrypt
- Authentification JWT
- Variables d'environnement pour les secrets
- CORS configuré
- Validation des données côté serveur

## 🌟 Données de Test

Après avoir exécuté le seed, vous aurez :
- 12 produits dans différentes catégories
- 1 utilisateur admin :
  - Email: `admin@ecommerce.com`
  - Mot de passe: `admin123`

## 📱 Pages du Site

- `/` - Page d'accueil
- `/products` - Catalogue produits
- `/products/[id]` - Détail produit
- `/cart` - Panier
- `/checkout` - Paiement
- `/profile` - Profil utilisateur (à implémenter)

## 🎯 Prochaines Étapes

- [ ] Système d'authentification complet
- [ ] Page de profil utilisateur
- [ ] Historique des commandes
- [ ] Système de recherche et filtres
- [ ] Système d'avis et notes
- [ ] Wishlist (liste de souhaits)
- [ ] Intégration complète avec Strapi
- [ ] Mode sombre
- [ ] Internationalisation (i18n)
- [ ] Tests unitaires et e2e

## 🐛 Résolution de Problèmes

### La base de données ne fonctionne pas
La base de données SQLite est automatiquement créée. Le fichier `dev.db` se trouve dans `backend/prisma/`. Si vous avez des problèmes :

```bash
cd backend
rm prisma/dev.db
npx prisma migrate dev --name init
```

### Erreur Prisma
```bash
cd backend
npx prisma generate
npx prisma migrate reset
```

### Erreur Stripe
Vérifiez que vos clés API Stripe sont correctes dans les fichiers d'environnement.

## 📄 Licence

MIT License

Copyright (c) 2025 Kushtati

## 👥 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📞 Support

Pour toute question, ouvrez une issue sur le dépôt GitHub.

## 🔗 Liens

- **GitHub**: [github.com/kushtati](https://github.com/kushtati)
- **Repository**: [github.com/kushtati/e-commerce](https://github.com/kushtati/e-commerce)

---

**Développé avec ❤️ par [Kushtati](https://github.com/kushtati) en utilisant les meilleures technologies web modernes**
