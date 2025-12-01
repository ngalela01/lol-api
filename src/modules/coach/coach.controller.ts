import { Controller, Get, Post, Body, Patch, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { Participant } from '../participant/entities/participant.entity';
import { ParticipantService } from '../participant/participant.service';

@Controller('coach')
export class CoachController {
  constructor(private readonly coachService: CoachService) {}

  @Get()
  findAll() {
    return this.coachService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coachService.findOne(id)
  }

  @Post()
  create(@Body() createCoachDto: CreateCoachDto) {
    return this.coachService.create(createCoachDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCoachDto: UpdateCoachDto) {
    return this.coachService.update(id, updateCoachDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coachService.delete(id)
  }


}
