import { Seeder } from '@mikro-orm/seeder';
import { League } from '../modules/league/entities/league.entity';
import { AnnualLeague } from '../modules/annual-league/entities/annual-league.entity';
import { Years } from '../modules/years/entities/year.entity';



export class AnnualleagueSeeder extends Seeder {
  async run(em) {
    const lec = await em.findOneOrFail(League, { short_name_league: 'LEC' });
    const lck = await em.findOneOrFail(League, { short_name_league: 'LCK' });
    const year2024 = await em.findOneOrFail(Years, { year: 2024 });

    em.create(AnnualLeague, {
      league: lec,
      year: year2024,
      startDate: new Date('2024-01-10').toString(),
      endDate: new Date('2024-04-10').toString(),
      winner: 'G2 Esports',
    });

    em.create(AnnualLeague, {
      league: lck,
      year: year2024,
      startDate: new Date('2024-01-15').toString(),
      endDate: new Date('2024-04-15').toString(),
      winner: 'T1',
    });
  }
}
