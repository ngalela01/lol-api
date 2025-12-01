import { Seeder } from '@mikro-orm/seeder';
import { Country } from '../modules/country/entities/country.entity';
import { Tournament } from '../modules/tournament/entities/tournament.entity';


export class TournamentSeeder extends Seeder {
  async run(em) {
    em.create(Tournament, {
      long_name_tournament: 'World Championship',
      short_name_tournament: 'Worlds',
    });

    em.create(Tournament, {
      long_name_tournament: 'Mid-Season Invitational',
      short_name_tournament: 'MSI',
    });
    em.create(Tournament, {
      long_name_tournament: 'First Stand',
      short_name_tournament: 'First Stand Tournament',
    });
  }
}
