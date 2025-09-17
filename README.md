# 🏠 Kasa — Application de location immobilière

Kasa est une application web développée avec **React** et **Vite**, permettant de consulter des logements, leurs descriptions, équipements, et hôtes. Ce projet est réalisé dans le cadre d'une formation.

---

## 🚀 Installation et lancement

### 📦 Prérequis

- Node.js ≥ 18 (testé avec v22.17.0)
- npm ≥ 9 (testé avec v10.9.2)
- Navigateur moderne (Chrome, Firefox, Edge…)

### ⚙️ Installation

Clone le dépôt, puis installe les dépendances :

```bash
npm install
```

### 🚀 Lancement

Lance le projet en mode développement :

```bash
npm run dev
```

## 🧱 Structure du projet

src/
├── assets/ # Images et icônes
├── components/ # Composants réutilisables (Banner, Collapse, etc.)
├── datas/ # Fichiers JSON simulant une API
├── pages/ # Pages principales (Home, About, Accommodation)
├── Router/ # Configuration des routes avec React Router
├── styles/ # Fichiers SCSS globaux
├── App.jsx # Composant racine de l'application
├── main.jsx # Point d'entrée de l'application

## 🛠️ Outils et librairies utilisés

- React : bibliothèque principale
- React Router DOM : gestion des routes
- Vite : bundler ultra rapide
- Sass (SCSS) : préprocesseur CSS
- ESLint : vérification de la qualité du code
- Prettier : formatage automatique
