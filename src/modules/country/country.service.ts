import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountryService {

  findAll() {
    return `This action returns all country`;
  }

}
