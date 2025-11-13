import { Seeder } from '@mikro-orm/seeder';
import { Country } from '../modules/country/entities/country.entity';
import { Team } from '../modules/team/entities/team.entity';
import { Participant } from '../modules/participant/entities/participant.entity';
import { Coach } from '../modules/coach/entities/coach.entity';

export class CoachSeeder extends Seeder {
  async run(em) {
    const g2 = await em.findOneOrFail(Team, { long_name_team: 'G2 Esports' });
    const t1 = await em.findOneOrFail(Team, { long_name_team: 'T1' });
    const france = await em.findOneOrFail(Country, { name_country: 'France' });
    const korea = await em.findOneOrFail(Country, { name_country: 'South Korea' });

    // 🔹 1. Création du participant Dylan Falco
    const falco = em.create(Participant, {
      pseudo: 'Falco',
      name: 'Dylan',
      surname: 'Falco',
      birth_date: new Date('1990-03-15'),
      team: g2,
    });
    await em.persistAndFlush(falco);

    // 🔹 2. Création du coach lié
    em.create(Coach, {
      id_participant: falco.id_participant,
      participant: falco,
    });

    // 🔹 3. Création du participant Kim Jeong-soo
    const kkoma = em.create(Participant, {
      pseudo: 'kkOma',
      name: 'Kim',
      surname: 'Jeong-soo',
      birth_date: new Date('1986-03-23'),
      team: t1,
    });
    await em.persistAndFlush(kkoma);

    // 🔹 4. Création du coach lié
    em.create(Coach, {
      id_participant: kkoma.id_participant,
      participant: kkoma,
    });
  }
}
