import { Seeder } from '@mikro-orm/seeder';
import { League } from '../modules/league/entities/league.entity';
import { Region } from '../modules/region/entities/region.entity';


export class LeagueSeeder extends Seeder {
  async run(em) {
    const europe = await em.findOneOrFail(Region, { name_region: 'Europe' });
    const korea = await em.findOneOrFail(Region, { name_region: 'Korea' });
    const na = await em.findOneOrFail(Region, { name_region: 'North America' });

    em.create(League, { long_name_league: 'idk', short_name_league: 'LEC', level: 'regional', region: europe });
    em.create(League, { long_name_league: 'idk2', short_name_league: 'LFL', level: 'national', region: europe });
    em.create(League, { long_name_league: 'idk3', short_name_league: 'LCK', level: 'regional', region: korea });
    em.create(League, { long_name_league: 'idk4', short_name_league: 'LCS', level: 'regional', region: na });
  }
}
