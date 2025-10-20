import { defineConfig } from '@mikro-orm/sqlite';
import { User } from 'src/models/user.entity';

export default defineConfig({
  dbName: 'database.sqlite', // nom du fichier SQLite
  entities: [User], // liste des entités à gérer
  driverOptions: {
    // indique à MikroORM d'utiliser better-sqlite3 s'il est dispo
    nativeBinding: true,
  },
  debug: true, // affiche les requêtes SQL dans la console
});
