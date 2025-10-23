import { Seeder } from '@mikro-orm/seeder';
import { Country } from '../modules/country/entities/country.entity';

export class CountrySeeder extends Seeder {
  async run(em) {
    const countries = [
      { name_country: 'France', code_iso: 'FR' },
      { name_country: 'South Korea', code_iso: 'KR' },
      { name_country: 'United States', code_iso: 'US' },
      { name_country: 'China', code_iso: 'CN' },
      { name_country: 'Germany', code_iso: 'DE' },
      { name_country: 'Spain', code_iso: 'ES' },
      { name_country: 'Japan', code_iso: 'JP' },
    ];

    for (const country of countries) {
      em.create(Country, country);
    }
    await em.flush();
  }
}
