# Portfolio de Cédrick Ratovonanahary

Portfolio React/Vite présentant mes projets full stack, DevOps et cloud.

## Démarrer

```bash
npm install
npm run dev
```

Avant publication :

```bash
npm run lint
npm run build
```

## Ajouter un projet

Les projets sont centralisés dans `src/data/projects.js`. Ajoute un objet au même format : il apparaîtra automatiquement dans les pages **Projets** et **Parcours**.

- `github` : URL du dépôt, ou `null` ;
- `demo` : URL de démonstration, ou `null` ;
- `image` : chemin de capture, par exemple `/images/projects/techshop.webp`, ou `null` pour garder l'emplacement réservé.

Place les captures dans `public/images/projects/`, idéalement en WebP et avec une largeur d'environ 1600 px.

## Ajouter LinkedIn

Dans `src/pages/Contact.jsx`, remplace `const LINKEDIN_URL = null` par l'URL complète du profil. Le lien sera activé automatiquement.
