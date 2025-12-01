import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { EntityManager } from '@mikro-orm/sqlite';
import { Region } from './entities/region.entity';

@Injectable()
export class RegionService {
  constructor(private readonly em: EntityManager) { }

  async findAll() {
    return this.em.find(Region, {});
  }

  async findOne(id: string) {
    return this.em.findOneOrFail(Region, { id_region: id }, { populate: ["leagues"] });
  }

  async create(data: CreateRegionDto): Promise<Region> {
    const region = new Region()
    region.name_region = data.name_region

    await this.em.persistAndFlush(region)
    return region
  }

  async update(id: string, data: UpdateRegionDto): Promise<Region> {
    const region = await this.em.findOneOrFail(Region, {
      id_region: id
    })
    if (data.name_region !== undefined) {
      region.name_region = data.name_region
    }

    await this.em.flush()
    return region
  }

  async delete(id: string): Promise<{ message: string }> {
    const region = await this.em.findOneOrFail(Region, {
      id_region: id
    }, { populate: ["leagues"] })

    if (region.leagues.length > 0) {
      throw new BadRequestException('impossible de supprimer une région avec des ligues associées');
    }

    await this.em.removeAndFlush(region)
    return { message: "Region deleted successfully" }
  }
}