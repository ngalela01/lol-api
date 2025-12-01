import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, NotFoundException } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.annualLeagueService.findOne(id)
  }

  @Post()
  create(@Body() createAnnualLeagueDto: CreateAnnualLeagueDto) {
    return this.annualLeagueService.create(createAnnualLeagueDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAnnualLeagueDto: UpdateAnnualLeagueDto) {
    return this.annualLeagueService.update(id, updateAnnualLeagueDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.annualLeagueService.delete(id)
  }

}
