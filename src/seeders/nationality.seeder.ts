import { Seeder } from '@mikro-orm/seeder';
import { Country } from '../modules/country/entities/country.entity';
import { Nationality } from '../modules/nationality/entities/nationality.entity';
import { Participant } from '../modules/participant/entities/participant.entity';


export class NationalitySeeder extends Seeder {
  async run(em) {
    // 🔹 On récupère des pays et participants existants
    const france = await em.findOne(Country, { name_country: 'France' });
    const korea = await em.findOne(Country, { name_country: 'South Korea' });
    const usa = await em.findOne(Country, { name_country: 'United States' });

    const faker1 = await em.findOne(Participant, { pseudo: 'Faker' });
    const caps = await em.findOne(Participant, { pseudo: 'Caps' });
    const bjergsen = await em.findOne(Participant, { pseudo: 'Bjergsen' });

    // ⚠️ Vérifie qu’ils existent avant de créer les relations
    if (!france || !korea || !usa || !faker1 || !caps || !bjergsen) {
      console.warn('⚠️ Missing required Country or Participant entities before seeding Nationality');
      return;
    }

    // 🔸 Création des nationalités
    em.create(Nationality, {
      id_country: korea.id_country,
      id_participant: faker1.id_participant,
      country: korea,
      participant: faker1,
    });

    em.create(Nationality, {
      id_country: france.id_country,
      id_participant: caps.id_participant,
      country: france,
      participant: caps,
    });

    em.create(Nationality, {
      id_country: usa.id_country,
      id_participant: bjergsen.id_participant,
      country: usa,
      participant: bjergsen,
    });
  }
}
