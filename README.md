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
pour mac : 
npm run db:reset/mac

pour Window : 
npm run db:reset/win


Cette commande :

- Supprime toutes les migrations (rm -rf migrations)
- Supprime la base SQLite (rm -rf database.sqlite)
- Génère une migration initiale (mikro-orm migration:create --initial)
- Recrée la base et applique la migration (mikro-orm migration:fresh)
- Exécute les seeds (npm run seed:run)
- applique toutes les migrations existantes (création des tables comme user).