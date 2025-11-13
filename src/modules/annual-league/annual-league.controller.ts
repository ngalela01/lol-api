import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, NotFoundException } from '@nestjs/common';
import { AnnualLeagueService } from './annual-league.service';
import { CreateAnnualLeagueDto } from './dto/create-annual-league.dto';
import { UpdateAnnualLeagueDto } from './dto/update-annual-league.dto';
import { ApiQuery } from '@nestjs/swagger';
import { AnnualLeague } from './entities/annual-league.entity';
import { YearsService } from '../years/years.service';
import { LeagueService } from '../league/league.service';
import { Country } from '../country/entities/country.entity';
import { CountryService } from '../country/country.service';

@Controller('annual-league')
export class AnnualLeagueController {
  constructor(
    private readonly annualLeagueService: AnnualLeagueService,
    private readonly yearsService: YearsService,
    private readonly leagueService: LeagueService,
    private readonly countryService: CountryService,
  ) {}


  @Get()
  findAll() {
    return this.annualLeagueService.findAll();
  }

  @Post()
  async post(@Body() body: { years: string, league: string, year_id: string, league_id: string, country: string, dateBeg: Date, dateEnd: Date, winner: string }){
    const objectYear = await this.yearsService.findOne(body.years);
    const objectLeague = await this.leagueService.findOne(body.league);
    const objectCountry = await this.countryService.findOne(body.country);
    
    return this.annualLeagueService.create(objectYear, objectLeague, body.year_id, body.league_id, objectCountry, body.dateBeg, body.dateEnd, body.winner);
    
  }

  @Delete()
  async delete(@Body() body: { year_id: string, league_id: string}){
    const item = await this.annualLeagueService.findOne(body.year_id, body.league_id);
    if (!item) {
      throw new NotFoundException("L'entité demandée n'existe pas.");
    }
    await this.annualLeagueService.delete(item);
  }

  @Put()
  async update(@Body() body: { years: string, league: string, year_id: string, league_id: string, country: string, dateBeg: Date, dateEnd: Date, winner: string }){
    const objectYear = await this.yearsService.findOne(body.years);
    const objectLeague = await this.leagueService.findOne(body.league);
    const objectCountry = await this.countryService.findOne(body.country);

    await this.annualLeagueService.update(objectYear, objectLeague, body.year_id, body.league_id, objectCountry, body.dateBeg, body.dateEnd, body.winner);
  }

}
