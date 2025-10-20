# 🧩 LOL API — NestJS + MikroORM + SQLite

## 📦 Description
Ce projet est une API développée avec **NestJS**, utilisant **MikroORM** comme ORM et **SQLite** comme base de données locale.  
Il fournit une base solide pour développer une application modulaire, propre et rapide à exécuter.

---

## 🚀 Installation du projet

### 1️⃣ Cloner le projet
```bash
git clone <URL_DU_DEPOT_GITHUB>
cd lol-api


📦 2️⃣ Installer les dépendances
npm install


Cette commande installe tous les packages nécessaires (NestJS, MikroORM, SQLite, etc.)

🗃️ 3️⃣ Créer la base de données et les tables
npx mikro-orm migration:up


Cette commande :

crée automatiquement le fichier database.sqlite à la racine,

applique toutes les migrations existantes (création des tables comme user).