import { Injectable } from '@nestjs/common';
import { CreateNationalityDto } from './dto/create-nationality.dto';
import { UpdateNationalityDto } from './dto/update-nationality.dto';
import { EntityManager } from '@mikro-orm/sqlite';
import { Nationality } from './entities/nationality.entity';
import { Country } from '../country/entities/country.entity';
import { Participant } from '../participant/entities/participant.entity';

@Injectable()
export class NationalityService {
  constructor(private readonly em: EntityManager) {}

  async findAll() : Promise<Nationality[]> {
    return this.em.find(Nationality, {}, {populate:['country', 'participant']})
  }

  async findOne(id : string) : Promise<Nationality> {
    return this.em.findOneOrFail(Nationality, {id_nationality: id}, {populate: ['country', 'participant']})
  }

  async create(data: CreateNationalityDto) : Promise<Nationality> {
    const country = await this.em.findOneOrFail(Country, { id_country: data.country_id });
    const participant = await this.em.findOneOrFail(Participant, { id_participant: data.participant_id});

    const nationality = this.em.create(Nationality, {
      country: country,
      participant: participant
    } as any);

    await this.em.persistAndFlush(nationality);
    return nationality;
  }

  async delete(id: string): Promise<{ message: string }> {
    const nationality = await this.em.findOneOrFail(Nationality, { id_nationality: id }, { populate: ['country', 'participant'] });
    await this.em.removeAndFlush(nationality);
    return { message: 'Nationality removed successfully' };
  }

  async update(id: string, data: UpdateNationalityDto): Promise<Nationality> {
    const nationality = await this.em.findOneOrFail(Nationality, { id_nationality: id }, { populate: ['country', 'participant'] });

    if (data.country_id !== undefined) {
      const country = await this.em.findOneOrFail(Country, { id_country: data.country_id });
      nationality.country = country;
    }

    if (data.participant_id !== undefined) {
      const participant = await this.em.findOneOrFail(Participant, { id_participant: data.participant_id });
      nationality.participant = participant;
    }

    await this.em.flush();
    return nationality;
  }

}
