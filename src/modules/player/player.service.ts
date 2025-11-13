import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { EntityManager } from '@mikro-orm/sqlite';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayerService {
constructor(private readonly em: EntityManager) { }

  async findAll(): Promise<Player[]> {
    return this.em.find(Player, {});
  }

  async findOne(id: string) : Promise<Player> {
    return this.em.findOneOrFail(Player, { id_participant: id });
  }

  async create(data: CreatePlayerDto) : Promise<Player> {
    const player = new Player()
    player.id_participant = data.id_participant

    await this.em.persistAndFlush(player)
    return player
  }

  async update(id: string, data: UpdatePlayerDto) : Promise<Player> {
    const player = await this.em.findOneOrFail(Player, {
      id_participant: id
    })
    if (data.player_role !== undefined) {
      player.player_role = data.player_role
    }
    if (data.main_champion !== undefined) {
      player.main_champion = data.main_champion
    }

    await this.em.flush()
    return player
  }

  async delete (id: string) : Promise<{ message: string }> {
    const player = await this.em.findOneOrFail(Player, {
      id_participant: id
    })

    await this.em.removeAndFlush(player)
    return { message: 'le participant a bien été supprimé' }
  }
}
