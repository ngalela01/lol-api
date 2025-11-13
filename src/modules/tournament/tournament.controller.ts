import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';

@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}
  @Get()
  findAll() {
    return this.tournamentService.findAll();
  }

  @Get(':id')
  findOne(@Param("id") id: string) {
    return this.tournamentService.findOne(id)
  }
  
  @Post()
  create(@Body() createTournamentDto : CreateTournamentDto) {
    return this.tournamentService.create(createTournamentDto)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTournamentDto : UpdateTournamentDto) {
    return this.tournamentService.update(id, updateTournamentDto)
  }

  @Delete(':id')
  remove(@Param('id') id : string) {
    return this.tournamentService.delete(id)
  }
}
