import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnnualTournamentService } from './annual-tournament.service';
import { CreateAnnualTournamentDto } from './dto/create-annual-tournament.dto';
import { UpdateAnnualTournamentDto } from './dto/update-annual-tournament.dto';

@Controller('annual-tournament')
export class AnnualTournamentController {
  constructor(private readonly annualTournamentService: AnnualTournamentService) {}


  @Get()
  findAll() {
    return this.annualTournamentService.findAll();
  }

}
