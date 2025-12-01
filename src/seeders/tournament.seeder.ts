import { Seeder } from '@mikro-orm/seeder';
import { Country } from '../modules/country/entities/country.entity';
import { Tournament } from '../modules/tournament/entities/tournament.entity';


export class TournamentSeeder extends Seeder {
  async run(em) {
    const korea = await em.findOneOrFail(Country, { name_country: 'South Korea' });
    const china = await em.findOneOrFail(Country, { name_country: 'China' });

    em.create(Tournament, {
      long_name_tournament: 'World Championship',
      short_name_tournament: 'Worlds',
      type: 'international',
      cashPrize: 2250000,
      country: korea,
    });

    em.create(Tournament, {
      long_name_tournament: 'Mid-Season Invitational',
      short_name_tournament: 'MSI',
      type: 'international',
      cashPrize: 250000,
      country: china,
    });
  }
}
