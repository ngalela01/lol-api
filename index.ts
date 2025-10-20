import 'reflect-metadata';
import { MikroORM } from '@mikro-orm/core';
import { User } from './src/models/user.entity';

// ✅ Import correct de la config (compatible require + default export)
const config = require('./mikro-orm.config').default;

async function main() {
  try {
    // 1️⃣ Initialiser MikroORM
    const orm = await MikroORM.init(config);
    const em = orm.em.fork(); // crée un EntityManager isolé (sécurité pour les requêtes concurrentes)

    // 2️⃣ Créer de nouveaux utilisateurs
    const users = [
      em.create(User, { name: 'Alice', email: 'alice@example.com', createdAt:new Date() }),
      em.create(User, { name: 'Bob', email: 'bob@example.com',createdAt:new Date() }),
      em.create(User, { name: 'Charlie', email: 'charlie@example.com',createdAt:new Date() }),
    ];

    // 3️⃣ Sauvegarder dans la base
    await em.persistAndFlush(users);

    console.log('\n✅ Utilisateurs ajoutés dans la base :');
    console.table(
      users.map((u) => ({ id: u.id, name: u.name, email: u.email })),
    );

    // 4️⃣ Lire tous les utilisateurs pour vérification
    const allUsers = await em.find(User, {});
    console.log('\n📋 Tous les utilisateurs dans la base :');
    console.table(
      allUsers.map((u) => ({ id: u.id, name: u.name, email: u.email })),
    );

    // 5️⃣ Fermer proprement
    await orm.close(true);
    console.log('\n🔒 Connexion fermée proprement.');
  } catch (err) {
    console.error('❌ Erreur pendant l’exécution :', err);
  }
}

main();
