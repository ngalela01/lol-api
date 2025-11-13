import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id : string) {
    return this.playerService.findOne(id)
  }

  @Post()
  create (@Body() createPlayerDto : CreatePlayerDto) {
    return this.playerService.create(createPlayerDto)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update(id, updatePlayerDto)
  }

  @Delete(':id')
  remove(@Param('id') id : string) {
    return this.playerService.delete(id)
  }

}
