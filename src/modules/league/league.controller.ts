import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeagueService } from './league.service';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';

@Controller('league')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}


  /*@Get()
  findAll() {
    return this.leagueService.findAll();
  }*/

}
