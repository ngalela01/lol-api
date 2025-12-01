import { Seeder } from '@mikro-orm/seeder';
import { Tournament } from '../modules/tournament/entities/tournament.entity';
import { AnnualTournament } from '../modules/annual-tournament/entities/annual-tournament.entity';
import { Years } from '../modules/years/entities/years.entity';
import { Country } from '../modules/country/entities/country.entity';


export class annualTournamentSeeder extends Seeder {
  async run(em) {
    const worlds = await em.findOneOrFail(Tournament, { long_name_tournament: 'World Championship' });
    const msi = await em.findOneOrFail(Tournament, { long_name_tournament: 'Mid-Season Invitational' });
    const year2025 = await em.findOneOrFail(Years, { year: 2025 });
    const canada = await em.findOneOrFail(Country, { name_country: 'Canada' });
    const china = await em.findOneOrFail(Country, { name_country: 'China' });
    em.create(AnnualTournament, {
      tournament: worlds,
      year: year2025,
      country: china,
      date_beginning: new Date('2025-10-14'),
      date_end: new Date('2024-11-09'),
      winner: "T1",
    });

    em.create(AnnualTournament, {
      tournament: msi,
      year: year2025,
      country: canada,
      date_beginning: new Date('2025-06-27'),
      date_end: new Date('2024-07-12'),
      winner: "Gen.G",
    });
  }
}
