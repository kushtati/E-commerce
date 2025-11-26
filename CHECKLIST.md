# ✅ Checklist de Configuration

Utilisez cette checklist pour configurer le projet étape par étape.

## 📋 Avant de Commencer

- [ ] Node.js 18+ installé (`node --version`)
- [ ] npm installé (`npm --version`)
- [ ] PostgreSQL 14+ installé et en cours d'exécution
- [ ] Git installé (`git --version`)
- [ ] Compte Stripe créé (mode test)
- [ ] Éditeur de code (VS Code recommandé)

## 🗄️ Configuration de la Base de Données

- [ ] PostgreSQL démarré
- [ ] Base de données créée : `CREATE DATABASE ecommerce;`
- [ ] Utilisateur créé : `CREATE USER ecommerce_user WITH PASSWORD 'your_password';`
- [ ] Privilèges accordés : `GRANT ALL PRIVILEGES ON DATABASE ecommerce TO ecommerce_user;`

## 🔧 Configuration du Backend

- [ ] Naviguer vers `backend/` : `cd backend`
- [ ] Installer les dépendances : `npm install`
- [ ] Copier `.env.example` vers `.env`
- [ ] Mettre à jour `DATABASE_URL` dans `.env`
- [ ] Générer un `JWT_SECRET` sécurisé
- [ ] Ajouter `STRIPE_SECRET_KEY` (sk_test_...)
- [ ] Générer le client Prisma : `npm run prisma:generate`
- [ ] Exécuter les migrations : `npm run prisma:migrate`
- [ ] Peupler la base : `npm run seed`
- [ ] Tester le backend : `npm run dev`
- [ ] Vérifier : http://localhost:5000/api/health

## 🎨 Configuration du Frontend

- [ ] Naviguer vers `frontend/` : `cd frontend`
- [ ] Installer les dépendances : `npm install`
- [ ] Copier `.env.example` vers `.env.local`
- [ ] Mettre à jour `NEXT_PUBLIC_API_URL`
- [ ] Ajouter `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` (pk_test_...)
- [ ] Tester le frontend : `npm run dev`
- [ ] Vérifier : http://localhost:3000

## 💳 Configuration de Stripe

- [ ] Compte créé sur https://stripe.com
- [ ] Mode test activé
- [ ] Clé publique copiée (pk_test_...)
- [ ] Clé secrète copiée (sk_test_...)
- [ ] Clés ajoutées dans les fichiers .env
- [ ] Tester avec carte : 4242 4242 4242 4242

## 🧪 Tests de Fonctionnalité

### Backend
- [ ] Serveur démarre sans erreur
- [ ] `/api/health` retourne OK
- [ ] `/api/products` retourne 12 produits
- [ ] `/api/products/1` retourne un produit
- [ ] Prisma Studio fonctionne : `npm run prisma:studio`

### Frontend
- [ ] Page d'accueil s'affiche correctement
- [ ] Produits visibles sur la page d'accueil
- [ ] Navigation vers `/products` fonctionne
- [ ] Clic sur un produit ouvre la page détail
- [ ] Ajout au panier fonctionne
- [ ] Compteur panier s'actualise
- [ ] Page panier affiche les articles
- [ ] Modification de quantité fonctionne
- [ ] Suppression d'article fonctionne
- [ ] Page checkout accessible
- [ ] Formulaire checkout valide

### Paiement Stripe
- [ ] Bouton "Procéder au paiement" redirige vers Stripe
- [ ] Formulaire Stripe s'affiche
- [ ] Paiement test réussit avec 4242 4242 4242 4242
- [ ] Redirection vers page de succès
- [ ] Panier vidé après paiement

## 📱 Tests Responsive

- [ ] Mobile (< 768px) : Design adapté
- [ ] Tablet (768px - 1024px) : Design adapté
- [ ] Desktop (> 1024px) : Design optimal
- [ ] Menu hamburger sur mobile
- [ ] Images responsive

## 🔐 Sécurité

- [ ] Fichiers `.env` dans `.gitignore`
- [ ] Mots de passe non en clair dans le code
- [ ] CORS configuré correctement
- [ ] JWT_SECRET est complexe et unique
- [ ] Clés Stripe en mode test

## 📚 Documentation

- [ ] README.md lu
- [ ] QUICKSTART.md consulté
- [ ] OVERVIEW.md parcouru
- [ ] Variables d'environnement comprises
- [ ] Architecture du projet claire

## 🚀 Déploiement (Optionnel)

- [ ] Build frontend fonctionne : `npm run build`
- [ ] Build backend fonctionne : `npm run build`
- [ ] Docker Compose testé (optionnel)
- [ ] Variables d'environnement de production préparées

## 🎓 Strapi CMS (Optionnel)

- [ ] Naviguer vers `strapi-cms/`
- [ ] Installer Strapi : `npx create-strapi-app@latest . --quickstart`
- [ ] Créer compte admin
- [ ] Configurer types de contenu
- [ ] Tester l'API Strapi

## ✨ Améliorations Futures

- [ ] Ajouter des tests unitaires
- [ ] Implémenter la recherche
- [ ] Ajouter des filtres
- [ ] Créer le panel admin
- [ ] Améliorer le SEO
- [ ] Optimiser les performances
- [ ] Ajouter des analytics

## 🆘 Problèmes Courants

### Le backend ne démarre pas
- Vérifier PostgreSQL en cours d'exécution
- Vérifier DATABASE_URL dans .env
- Réexécuter : `npm run prisma:generate`

### Erreur Prisma
```bash
cd backend
npx prisma generate
npx prisma migrate reset
npm run seed
```

### Le frontend ne charge pas les produits
- Vérifier que le backend fonctionne (http://localhost:5000)
- Vérifier NEXT_PUBLIC_API_URL dans .env.local
- Vérifier la console du navigateur

### Erreur Stripe
- Vérifier les clés dans les fichiers .env
- Utiliser les clés test (pk_test_ et sk_test_)
- Vérifier la console pour les erreurs

## 📞 Besoin d'Aide ?

Si vous rencontrez des problèmes :
1. ✅ Relisez cette checklist
2. 📖 Consultez QUICKSTART.md
3. 🔍 Cherchez dans les issues GitHub
4. ❓ Ouvrez une nouvelle issue

---

## 🎉 Félicitations !

Si toutes les cases sont cochées, votre site e-commerce est opérationnel !

**Prochaines étapes suggérées :**
1. Personnalisez le design
2. Ajoutez vos propres produits
3. Configurez vos vraies clés Stripe (production)
4. Déployez sur Vercel et Railway
5. Partagez votre création !

---

© 2025 [Kushtati](https://github.com/kushtati). Tous droits réservés.

**GitHub**: [github.com/kushtati/e-commerce](https://github.com/kushtati/e-commerce)

**Date de dernière mise à jour : 25 novembre 2025**
