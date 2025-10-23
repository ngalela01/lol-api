import { Seeder } from '@mikro-orm/seeder';
import { Region } from '../modules/region/entities/region.entity';

export class RegionSeeder extends Seeder {
  async run(em) {
    em.create(Region, { name_region: 'Europe' });
    em.create(Region, { name_region: 'North America' });
    em.create(Region, { name_region: 'Korea' });
    em.create(Region, { name_region: 'China' });
  }
}
