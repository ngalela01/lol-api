import { Controller, Get, Post, Body, Patch, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { AnnualTournamentService } from './annual-tournament.service';
import { CreateAnnualTournamentDto } from './dto/create-annual-tournament.dto';
import { UpdateAnnualTournamentDto } from './dto/update-annual-tournament.dto';
import { YearsService } from '../years/years.service';
import { TournamentService } from '../tournament/tournament.service';
import { CountryService } from '../country/country.service';

@Controller('annual-tournament')
export class AnnualTournamentController {
    constructor(
      private readonly annualTournamentService: AnnualTournamentService,
      private readonly yearsService: YearsService,
      private readonly tournamentService: TournamentService,
      private readonly countryService: CountryService,
    ) {}


  @Get()
  findAll() {
    return this.annualTournamentService.findAll();
  }

  @Post()
  async post(@Body() body: { years: string, tournament: string, year_id: string, tournament_id: string, country: string, dateBeg: Date, dateEnd: Date, winner: string }){
    const objectYear = await this.yearsService.findOne(body.years);
    const objectTournament = await this.tournamentService.findOne(body.tournament);
    const objectCountry = await this.countryService.findOne(body.country);
      
    return this.annualTournamentService.create(objectYear, objectTournament, body.year_id, body.tournament_id, objectCountry, body.dateBeg, body.dateEnd, body.winner);
      
  }
  
  @Delete()
  async delete(@Body() body: { year_id: string, tournament_id: string}){
    const item = await this.annualTournamentService.findOne(body.year_id, body.tournament_id);
    if (!item) {
      throw new NotFoundException("L'entité demandée n'existe pas.");
    }
    await this.annualTournamentService.delete(item);
  }
  
  @Put()
  async update(@Body() body: { years: string, tournament: string, year_id: string, tournament_id: string, country: string, dateBeg: Date, dateEnd: Date, winner: string }){
    const objectYear = await this.yearsService.findOne(body.years);
    const objectTournament = await this.tournamentService.findOne(body.tournament);
    const objectCountry = await this.countryService.findOne(body.country);
  
    await this.annualTournamentService.update(objectYear, objectTournament, body.year_id, body.tournament_id, objectCountry, body.dateBeg, body.dateEnd, body.winner);
  }
  

}
