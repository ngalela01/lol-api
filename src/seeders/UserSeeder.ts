import { faker } from '@faker-js/faker';
import { Seeder } from '@mikro-orm/seeder';
import { EntityManager } from '@mikro-orm/sqlite';
import { User } from '../modules/user/entities/user.entity';
import * as bcrypt from 'bcrypt';

export class UserSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const count = await em.count(User);
    if (count > 0) {
      console.log(
        `ℹ️ ${count} utilisateurs existent déjà, aucun nouvel ajout.`,
      );
      return;
    }

    const plainPassword = 'test1234';
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    const users: User[] = [];
    for (let i = 0; i < 10; i++) {
      users.push(
        em.create(User, {
          password: hashedPassword,
          email: faker.internet.email(),
          createdAt: new Date(),
        }),
      );
    }

    await em.persistAndFlush(users);
    console.log('✅ 10 utilisateurs insérés avec succès !');
  }
}
