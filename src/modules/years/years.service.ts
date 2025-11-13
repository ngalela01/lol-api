import { Injectable } from '@nestjs/common';
import { CreateYearDto } from './dto/create-year.dto';
import { UpdateYearDto } from './dto/update-year.dto';
import { EntityManager } from '@mikro-orm/sqlite';
import { Years } from './entities/year.entity';

@Injectable()
export class YearsService {
  constructor(private readonly em: EntityManager) {}

  findAll() {
    return `This action returns all years`;
  }

  async findOne(id_years: string): Promise<Years> {
    const item = await this.em.findOne(Years, { id_years });
    if (!item) {
      throw new Error('Year not found');
    }
    return item;

  }

}
