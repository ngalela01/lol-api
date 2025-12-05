import { Seeder } from '@mikro-orm/seeder';
import { League } from '../modules/league/entities/league.entity';
import { Region } from '../modules/region/entities/region.entity';


export class LeagueSeeder extends Seeder {
  async run(em) {
    const europe = await em.findOneOrFail(Region, { name_region: 'Europe' });
    const asia = await em.findOneOrFail(Region, { name_region: 'Asia' });
    const na = await em.findOneOrFail(Region, { name_region: 'North America' });

    em.create(League, { long_name_league: 'League of Legends European Championship', short_name_league: 'LEC', region: europe });
    em.create(League, { long_name_league: 'League of Legends Pro League (China)', short_name_league: 'LPL', region: asia });
    em.create(League, { long_name_league: 'League of Legends Champions Korea ', short_name_league: 'LCK', region: asia });
    em.create(League, { long_name_league: 'League of Legends Championship Pacific ', short_name_league: 'LCP', region: asia });
    em.create(League, { long_name_league: 'League of Legends Championship of The Americas ', short_name_league: 'LTA', region: na });
  }
}
