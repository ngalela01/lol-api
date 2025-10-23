import { Seeder } from '@mikro-orm/seeder';
import { Country } from '../modules/country/entities/country.entity';
import { Tournament } from '../modules/tournament/entities/tournament.entity';


export class TournamentSeeder extends Seeder {
  async run(em) {
    const korea = await em.findOneOrFail(Country, { name_country: 'South Korea' });
    const china = await em.findOneOrFail(Country, { name_country: 'China' });

    em.create(Tournament, {
      name_tournament: 'World Championship',
      type: 'international',
      cashPrize: 2250000,
      country: korea,
    });

    em.create(Tournament, {
      name_tournament: 'Mid-Season Invitational',
      type: 'international',
      cashPrize: 250000,
      country: china,
    });
  }
}
