# Backend Dockerfile (Version Corrigée)
FROM node:18-alpine

WORKDIR /app

# Ajoutez les outils de construction nécessaires (pour bcrypt et autres dépendances natives)
# apk est le gestionnaire de paquets d'Alpine
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm ci

# Supprimez les outils de construction pour garder l'image finale petite
RUN apk del python3 make g++

# Copy source code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build TypeScript
RUN npm run build

EXPOSE 5000

# Start the application
CMD ["npm", "start"]