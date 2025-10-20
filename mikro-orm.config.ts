import { defineConfig } from '@mikro-orm/sqlite';
import { User } from './src/models/user.entity';

export default defineConfig({
  dbName: 'database.sqlite', // nom du fichier SQLite
  entities: [User], // liste des entités à gérer
  driverOptions: {
    // indique à MikroORM d'utiliser better-sqlite3 s'il est dispo
    nativeBinding: true,
  },
  debug: true, // affiche les requêtes SQL dans la console
  migrations: {
    path: './migrations', // ✅ dossier où MikroORM stockera les fichiers de migration
    glob: '!(*.d).{js,ts}', // ✅ supporte TS et JS
  },
});
