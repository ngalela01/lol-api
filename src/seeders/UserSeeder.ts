import { faker } from '@faker-js/faker';
import { Seeder } from '@mikro-orm/seeder';
import { EntityManager } from '@mikro-orm/sqlite';
import { User } from '../modules/user/entities/user.entity';


export class UserSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const count = await em.count(User);
    if (count > 0) {
      console.log(`ℹ️ ${count} utilisateurs existent déjà, aucun nouvel ajout.`);
      return;
    }

    const users: User[] = [];
    for (let i = 0; i < 10; i++) {
      users.push(
        em.create(User, {
          name: faker.person.fullName(),
          email: faker.internet.email(),
          createdAt: new Date(),
        }),
      );
    }

    await em.persistAndFlush(users);
    console.log('✅ 10 utilisateurs insérés avec succès !');
  }
}
