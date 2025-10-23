import { Seeder } from '@mikro-orm/seeder';
import { Years } from '../modules/years/entities/year.entity';


export class YearSeeder extends Seeder {
  async run(em) {
    for (let y = 2021; y <= 2025; y++) {
      em.create(Years, { year: y });
    }
  }
}
