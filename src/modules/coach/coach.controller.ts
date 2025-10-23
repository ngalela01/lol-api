import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';

@Controller('coach')
export class CoachController {
  constructor(private readonly coachService: CoachService) {}
  @Get()
  findAll() {
    return this.coachService.findAll();
  }


}
