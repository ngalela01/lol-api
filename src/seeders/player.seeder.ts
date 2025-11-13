import { Seeder } from '@mikro-orm/seeder';
import { Country } from '../modules/country/entities/country.entity';
import { Team } from '../modules/team/entities/team.entity';
import { Participant } from '../modules/participant/entities/participant.entity';
import { Player } from '../modules/player/entities/player.entity';

export class PlayerSeeder extends Seeder {
  async run(em) {
    const g2 = await em.findOneOrFail(Team, { long_name_team: 'G2 Esports' });
    const t1 = await em.findOneOrFail(Team, { long_name_team: 'T1' });
    const france = await em.findOneOrFail(Country, { name_country: 'France' });
    const korea = await em.findOneOrFail(Country, { name_country: 'South Korea' });

    // 🔹 1. Création du participant Caps
    const caps = em.create(Participant, {
      pseudo: 'Caps',
      name: 'Rasmus',
      surname: 'Winther',
      birth_date: new Date('1999-11-17'),
      role: 'Mid',
      main_champion: 'LeBlanc',
      team: g2,
    });
    await em.persistAndFlush(caps);

    // 🔹 2. Création du player associé
    em.create(Player, {
      id_participant: caps.id_participant,
      participant: caps,
      player_role: 'Mid',
      main_champion: 'LeBlanc',
    });

    // 🔹 3. Création du participant Faker
    const faker = em.create(Participant, {
      pseudo: 'Faker',
      name: 'Lee',
      surname: 'Sang-hyeok',
      birth_date: new Date('1996-05-07'),
      role: 'Mid',
      main_champion: 'Ahri',
      team: t1,
    });
    await em.persistAndFlush(faker);

    // 🔹 4. Création du player associé
    em.create(Player, {
      id_participant: faker.id_participant,
      participant: faker,
      player_role: 'Mid',
      main_champion: 'Ahri',
    });
  }
}
