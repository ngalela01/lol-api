import { Injectable } from '@nestjs/common';
import { CreateNationalityDto } from './dto/create-nationality.dto';
import { UpdateNationalityDto } from './dto/update-nationality.dto';
import { EntityManager } from '@mikro-orm/sqlite';
import { Nationality } from './entities/nationality.entity';

@Injectable()
export class NationalityService {
  constructor(private readonly em: EntityManager) {}

  async findAll() : Promise<Nationality[]> {
    return this.em.find(Nationality, {}, {populate:['country', 'participant']})
  }

}
