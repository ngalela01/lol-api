import { Seeder } from '@mikro-orm/seeder';
import { Team } from '../modules/team/entities/team.entity';
import { Country } from '../modules/country/entities/country.entity';
import { League } from '../modules/league/entities/league.entity';

export class TeamSeeder extends Seeder {
  async run(em) {
    const france = await em.findOneOrFail(Country, { name_country: 'France' });
    const korea = await em.findOneOrFail(Country, { name_country: 'South Korea' });
    const lec = await em.findOneOrFail(League, { short_name_league: 'LEC' });
    const lck = await em.findOneOrFail(League, { short_name_league: 'LCK' });

    em.create(Team, {
      name_team: 'G2 Esports',
      founded_at: new Date('2015-02-15'),
      league: lec,
      country: france,
    });

    em.create(Team, {
      name_team: 'T1',
      founded_at: new Date('2004-12-02'),
      league: lck,
      country: korea,
    });
  }
}
