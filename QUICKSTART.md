# 🚀 Guide de Démarrage Rapide - Kushtati E-Commerce

## Méthode 1 : Installation Manuelle (Recommandé pour le développement)

### 1. Prérequis
- Node.js 18+ installé
- PostgreSQL 14+ installé et en cours d'exécution
- Git installé

### 2. Configuration PostgreSQL

Ouvrez psql ou pgAdmin et créez la base de données :

```sql
CREATE DATABASE ecommerce;
CREATE USER ecommerce_user WITH PASSWORD 'votre_mot_de_passe';
GRANT ALL PRIVILEGES ON DATABASE ecommerce TO ecommerce_user;
```

### 3. Installation du Backend

```bash
# Naviguez vers le dossier backend
cd backend

# Installez les dépendances
npm install

# Configurez les variables d'environnement
# Éditez le fichier .env et remplacez :
# - L'URL de la base de données
# - Les clés Stripe
# - La clé JWT

# Exemple de .env :
# DATABASE_URL="postgresql://ecommerce_user:votre_mot_de_passe@localhost:5432/ecommerce?schema=public"
# JWT_SECRET=votre_secret_jwt_tres_securise
# STRIPE_SECRET_KEY=sk_test_votre_cle_stripe
# STRIPE_WEBHOOK_SECRET=whsec_votre_secret_webhook

# Générez le client Prisma
npm run prisma:generate

# Créez les tables dans la base de données
npm run prisma:migrate

# Peuplez la base de données avec des données de test
npm run seed

# Démarrez le serveur backend
npm run dev
```

Le backend devrait maintenant fonctionner sur http://localhost:5000

### 4. Installation du Frontend

Ouvrez un nouveau terminal :

```bash
# Naviguez vers le dossier frontend
cd frontend

# Installez les dépendances
npm install

# Configurez les variables d'environnement
# Éditez le fichier .env.local :
# NEXT_PUBLIC_API_URL=http://localhost:5000/api
# NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_votre_cle_publique_stripe

# Démarrez le serveur frontend
npm run dev
```

Le frontend devrait maintenant fonctionner sur http://localhost:3000

### 5. Testez l'application

- Ouvrez http://localhost:3000 dans votre navigateur
- Parcourez les produits
- Ajoutez des articles au panier
- Testez le processus de checkout

---

## Méthode 2 : Avec Docker (Recommandé pour la production)

### Prérequis
- Docker Desktop installé

### Démarrage

```bash
# À la racine du projet
docker-compose up -d

# Attendez que tous les services démarrent (peut prendre quelques minutes)

# Exécutez les migrations et le seed
docker-compose exec backend npx prisma migrate deploy
docker-compose exec backend npm run seed
```

Accédez à :
- Frontend : http://localhost:3000
- Backend API : http://localhost:5000
- Base de données : localhost:5432

### Arrêt

```bash
docker-compose down
```

---

## Configuration de Stripe (Obligatoire pour le paiement)

1. Créez un compte sur https://stripe.com
2. Allez dans Developers > API keys (mode Test)
3. Copiez votre clé publique (pk_test_...) et votre clé secrète (sk_test_...)
4. Ajoutez-les dans les fichiers d'environnement :
   - Backend `.env` : `STRIPE_SECRET_KEY`
   - Frontend `.env.local` : `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`

### Test des paiements Stripe

Utilisez ces numéros de carte de test :
- **Succès** : `4242 4242 4242 4242`
- **Échec** : `4000 0000 0000 0002`
- Date d'expiration : n'importe quelle date future
- CVC : n'importe quel 3 chiffres
- Code postal : n'importe quel code

---

## Compte Admin par Défaut

Après avoir exécuté le seed :
- **Email** : admin@ecommerce.com
- **Mot de passe** : admin123

---

## Commandes Utiles

### Backend
```bash
# Voir la base de données avec Prisma Studio
npm run prisma:studio

# Réinitialiser la base de données
npx prisma migrate reset

# Créer une nouvelle migration
npx prisma migrate dev --name nom_migration
```

### Frontend
```bash
# Build pour production
npm run build

# Démarrer en mode production
npm run start

# Linter
npm run lint
```

---

## Résolution de Problèmes Courants

### Le backend ne démarre pas
- Vérifiez que PostgreSQL est en cours d'exécution
- Vérifiez l'URL de connexion dans `.env`
- Essayez : `npm run prisma:generate` puis `npm run dev`

### Erreur Prisma
```bash
cd backend
npx prisma generate
npx prisma migrate deploy
```

### Le frontend ne se connecte pas au backend
- Vérifiez que le backend fonctionne sur le port 5000
- Vérifiez `NEXT_PUBLIC_API_URL` dans `.env.local`
- Redémarrez le serveur frontend

### Erreur Stripe
- Vérifiez que vos clés Stripe sont correctes
- Assurez-vous d'utiliser les clés de test (commencent par `pk_test_` et `sk_test_`)

---

## Prochaines Étapes

1. ✅ Explorez l'application
2. ✅ Ajoutez des produits au panier
3. ✅ Testez le processus de checkout avec Stripe
4. ✅ Consultez Prisma Studio pour voir les données
5. 📝 Personnalisez le design selon vos besoins
6. 🚀 Déployez sur Vercel (frontend) et Railway/Heroku (backend)

---

## Support

Si vous rencontrez des problèmes, consultez le README.md principal ou ouvrez une issue.

Bon développement ! 🎉
