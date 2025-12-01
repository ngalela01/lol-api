import { Controller, Get, Post, Body, Patch, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { AnnualTournamentService } from './annual-tournament.service';
import { CreateAnnualTournamentDto } from './dto/create-annual-tournament.dto';
import { UpdateAnnualTournamentDto } from './dto/update-annual-tournament.dto';
import { YearsService } from '../years/years.service';
import { TournamentService } from '../tournament/tournament.service';
import { CountryService } from '../country/country.service';

@Controller('annual-tournament')
export class AnnualTournamentController {
    constructor(private readonly annualTournamentService: AnnualTournamentService) {}


  @Get()
  findAll() {
    return this.annualTournamentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.annualTournamentService.findOne(id)
  }

  @Post()
  create(@Body() createAnnualTournamentDto: CreateAnnualTournamentDto) {
    return this.annualTournamentService.create(createAnnualTournamentDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAnnualTournamentDto: UpdateAnnualTournamentDto) {
    return this.annualTournamentService.update(id, updateAnnualTournamentDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.annualTournamentService.delete(id)
  }
  

}
