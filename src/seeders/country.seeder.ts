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
      { name_country: 'Brazil', code_iso: 'BR' },
      { name_country: 'Mexico', code_iso: 'MX' },
      { name_country: 'Vietnam', code_iso: 'VN' },
      { name_country: 'United Kingdom', code_iso: 'GB' },
      { name_country: 'Ukraine', code_iso: 'UA' },
      { name_country: 'Turkey', code_iso: 'TR' },
      { name_country: 'Taiwan', code_iso: 'Tw' },
      { name_country: 'Canada', code_iso: 'CA' },
    ];

    for (const country of countries) {
      em.create(Country, country);
    }
    await em.flush();
  }
}
