import { Seeder } from '@mikro-orm/seeder';
import { Tournament } from '../modules/tournament/entities/tournament.entity';
import { AnnualTournament } from '../modules/annual-tournament/entities/annual-tournament.entity';
import { Years } from '../modules/years/entities/years.entity';


export class annualTournamentSeeder extends Seeder {
  async run(em) {
    const worlds = await em.findOneOrFail(Tournament, { name_tournament: 'World Championship' });
    const msi = await em.findOneOrFail(Tournament, { name_tournament: 'Mid-Season Invitational' });
    const year2024 = await em.findOneOrFail(Years, { year: 2024 });

    em.create(AnnualTournament, {
      id_years: year2024.id_years, 
      id_tournament: worlds.id_tournament,
      tournament: worlds,
      year: year2024,
      startDate: new Date('2024-10-01'),
      endDate: new Date('2024-11-05'),
      winner: 'T1',
    });

    em.create(AnnualTournament, {
      id_years: year2024.id_years,
      id_tournament: msi.id_tournament,
      tournament: msi,
      year: year2024,
      startDate: new Date('2024-05-01'),
      endDate: new Date('2024-05-20'),
      winner: 'Gen.G',
    });
  }
}
