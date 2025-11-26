# 🚀 Guide de Déploiement Kushtati E-Commerce

## Option 1: Vercel (Frontend) + Railway (Backend) - Recommandé ✅

### A. Déployer le Frontend sur Vercel

1. **Créer un compte sur Vercel**
   - Allez sur https://vercel.com
   - Connectez-vous avec GitHub

2. **Préparer le projet**
   ```bash
   cd c:\xampp\htdocs\e-commerce
   git init
   git add .
   git commit -m "Initial commit - Kushtati E-Commerce"
   ```

3. **Créer un repo GitHub**
   - Créez un nouveau repository sur https://github.com
   - Nommez-le "kushtati-ecommerce"
   ```bash
   git remote add origin https://github.com/VOTRE_USERNAME/kushtati-ecommerce.git
   git branch -M main
   git push -u origin main
   ```

4. **Importer sur Vercel**
   - Sur Vercel Dashboard, cliquez "New Project"
   - Importez votre repo GitHub
   - Root Directory: `frontend`
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

5. **Variables d'environnement Vercel**
   ```
   NEXT_PUBLIC_API_URL=https://votre-backend.railway.app/api
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...
   ```

### B. Déployer le Backend sur Railway

1. **Créer un compte Railway**
   - Allez sur https://railway.app
   - Connectez-vous avec GitHub

2. **Créer un nouveau projet**
   - Cliquez "New Project"
   - Sélectionnez "Deploy from GitHub repo"
   - Choisissez votre repo

3. **Configuration Railway**
   - Root Directory: `backend`
   - Build Command: `npm install && npx prisma generate && npm run build`
   - Start Command: `npm start`

4. **Variables d'environnement Railway**
   ```
   NODE_ENV=production
   PORT=5000
   DATABASE_URL=file:./prod.db
   JWT_SECRET=VOTRE_SECRET_SECURISE_ICI
   STRIPE_SECRET_KEY=sk_live_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   FRONTEND_URL=https://votre-site.vercel.app
   ```

5. **Générer le domaine**
   - Railway vous donnera une URL comme: `votre-backend.railway.app`
   - Copiez cette URL et mettez-la dans Vercel (NEXT_PUBLIC_API_URL)

---

## Option 2: Netlify (Frontend) + Render (Backend)

### A. Netlify (Frontend)

1. **Compte Netlify**
   - https://netlify.com
   - Connectez GitHub

2. **Configuration**
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Variables d'environnement**
   ```
   NEXT_PUBLIC_API_URL=https://votre-backend.onrender.com/api
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...
   ```

### B. Render (Backend)

1. **Compte Render**
   - https://render.com
   - Gratuit pour commencer

2. **Configuration**
   - Type: Web Service
   - Root Directory: `backend`
   - Build Command: `npm install && npx prisma generate && npm run build`
   - Start Command: `npm start`

---

## Option 3: Tout sur un VPS (DigitalOcean, AWS, etc.)

### Configuration VPS

1. **Créer un droplet Ubuntu**
   - 1 vCPU, 1GB RAM minimum
   - Ubuntu 22.04

2. **Installer Node.js et PM2**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```

3. **Cloner le projet**
   ```bash
   git clone https://github.com/kushtati/e-commerce.git
   cd e-commerce
   ```

4. **Configurer le Backend**
   ```bash
   cd backend
   npm install
   npx prisma generate
   npx prisma migrate deploy
   pm2 start npm --name "kushtati-backend" -- start
   ```

5. **Configurer le Frontend**
   ```bash
   cd ../frontend
   npm install
   npm run build
   pm2 start npm --name "kushtati-frontend" -- start
   ```

6. **Nginx comme reverse proxy**
   ```bash
   sudo apt install nginx
   sudo nano /etc/nginx/sites-available/kushtati
   ```

   Configuration Nginx:
   ```nginx
   server {
       listen 80;
       server_name votre-domaine.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }

       location /api {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   ```bash
   sudo ln -s /etc/nginx/sites-available/kushtati /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **SSL avec Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d votre-domaine.com
   ```

---

## 📝 Checklist Avant Déploiement

- [ ] Configurer les clés Stripe LIVE (pas test)
- [ ] Générer un JWT_SECRET sécurisé
- [ ] Configurer les CORS avec votre domaine
- [ ] Tester les paiements en mode test
- [ ] Configurer les webhooks Stripe
- [ ] Sauvegarder la base de données
- [ ] Configurer les sauvegardes automatiques
- [ ] Ajouter Google Analytics (optionnel)
- [ ] Configurer un domaine personnalisé
- [ ] Tester sur mobile et desktop

---

## 🔄 Workflow de Développement Continu

### 1. Développement Local
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npx next dev
```

### 2. Modifications et Tests
```bash
# Faire vos modifications
# Tester localement
# Commiter les changements
git add .
git commit -m "Description des modifications"
```

### 3. Déploiement Automatique
```bash
# Pusher vers GitHub
git push origin main

# Vercel et Railway déploieront automatiquement !
```

### 4. Vérifier le Déploiement
- Frontend: Vérifiez votre URL Vercel
- Backend: Testez les endpoints API
- Base de données: Vérifiez que les données sont présentes

---

## 🛠️ Commandes Utiles

### Logs Railway
```bash
railway logs
```

### Logs Vercel
```bash
vercel logs
```

### PM2 (VPS)
```bash
pm2 logs kushtati-backend
pm2 logs kushtati-frontend
pm2 restart all
pm2 status
```

---

## 💰 Coûts Estimés

### Option Gratuite (Démarrage)
- **Vercel**: Gratuit (Frontend)
- **Railway**: Gratuit pour 500h/mois (Backend)
- **Total**: 0€/mois

### Option Pro (Croissance)
- **Vercel Pro**: 20$/mois
- **Railway Pro**: 5$/mois
- **Domaine**: 10-15€/an
- **Total**: ~25-30$/mois

### Option VPS (Contrôle Total)
- **DigitalOcean Droplet**: 6$/mois (1GB)
- **Domaine**: 10-15€/an
- **Total**: ~7$/mois

---

## 📞 Support

Pour toute question sur le déploiement, consultez :
- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- Next.js Deployment: https://nextjs.org/docs/deployment

---

**Développé avec ❤️ par Kushtati**
