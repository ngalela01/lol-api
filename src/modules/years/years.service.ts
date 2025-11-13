import { Injectable } from '@nestjs/common';
import { CreateYearDto } from './dto/create-year.dto';
import { UpdateYearDto } from './dto/update-year.dto';
import { Years } from './entities/years.entity';
import { EntityManager } from '@mikro-orm/sqlite';

@Injectable()
export class YearsService {
  constructor(private readonly em: EntityManager) { }

  async findAll(): Promise<Years[]> {
    return this.em.find(Years, {})
  }

  async findOne(id: string): Promise<Years> {
    return this.em.findOneOrFail(Years, { id_years: id })
  }

  async create(data: CreateYearDto): Promise<Years> {
    const year = new Years();
    year.year = data.year;
    await this.em.persistAndFlush(year)
    return year
  }

  async update(id: string, data: UpdateYearDto): Promise<Years> {
    const yearEntity = await this.em.findOneOrFail(Years, {
      id_years: id
    })

    if (data.year !== undefined) {
      yearEntity.year = data.year
    }
    await this.em.flush()
    return yearEntity
  }

  async delete(id: string): Promise<{ message: string }> {
    const year = await this.em.findOneOrFail(Years, { id_years: id }, { populate: ['annualTournaments'] })

    if (year.annualTournaments.length > 0) {
      throw new Error('Cannot delete a year with associated annual tournaments');
    }

    await this.em.removeAndFlush(year)
    return { message: `Year ${year.year} deleted successfully` }
  }

}
