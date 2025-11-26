# Configuration Strapi CMS

Ce dossier contient la configuration pour Strapi CMS.

## Installation de Strapi

Pour installer Strapi dans ce dossier :

```bash
cd strapi-cms
npx create-strapi-app@latest . --quickstart --no-run
```

## Configuration

Une fois Strapi installé :

1. Démarrez Strapi avec `npm run develop`
2. Créez un compte administrateur
3. Configurez les types de contenu suivants :

### Collection Type: Product
- name (Text, Required)
- description (Rich Text, Required)
- price (Decimal, Required)
- image (Media, Single)
- category (Text, Required)
- stock (Number, Required, Default: 0)

### Collection Type: Category
- name (Text, Required)
- description (Text)
- slug (UID, Required)

## Connexion avec le Backend

Vous pouvez utiliser l'API Strapi directement ou synchroniser les données avec PostgreSQL via le backend Express.

## URLs
- Admin Panel: http://localhost:1337/admin
- API: http://localhost:1337/api
