import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnnualLeagueService } from './annual-league.service';
import { CreateAnnualLeagueDto } from './dto/create-annual-league.dto';
import { UpdateAnnualLeagueDto } from './dto/update-annual-league.dto';

@Controller('annual-league')
export class AnnualLeagueController {
  constructor(private readonly annualLeagueService: AnnualLeagueService) {}


  @Get()
  findAll() {
    return this.annualLeagueService.findAll();
  }

}
