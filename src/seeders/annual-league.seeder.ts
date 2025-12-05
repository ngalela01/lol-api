import { Seeder } from '@mikro-orm/seeder';
import { League } from '../modules/league/entities/league.entity';
import { AnnualLeague } from '../modules/annual-league/entities/annual-league.entity';
import { Years } from '../modules/years/entities/years.entity';
import { Country } from '../modules/country/entities/country.entity';

export class AnnualleagueSeeder extends Seeder {
  async run(em) {
    const lec = await em.findOneOrFail(League, { short_name_league: 'LEC' });
    const lck = await em.findOneOrFail(League, { short_name_league: 'LCK' });
    const year2025 = await em.findOneOrFail(Years, { year: 2025 });
    const germany = await em.findOneOrFail(Country, { name_country: 'Germany' });
    const korea = await em.findOneOrFail(Country, { name_country: 'South Korea' });

    em.create(AnnualLeague, {
      league: lec,
      year: year2025,
      country:germany,
      date_beginning: new Date('2025-01-18').toString(),
      date_end: new Date('2025-08-26').toString(),
      winner: 'G2',
    });

    em.create(AnnualLeague, {
      league: lck,
      year: year2025,
      country: korea,
      date_beginning: new Date('2025-01-15').toString(),
      date_end: new Date('2025-09-07').toString(),
      winner: 'Gen.G',
    });
  }
}
