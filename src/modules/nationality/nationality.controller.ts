import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NationalityService } from './nationality.service';
import { CreateNationalityDto } from './dto/create-nationality.dto';
import { UpdateNationalityDto } from './dto/update-nationality.dto';

@Controller('nationality')
export class NationalityController {
  constructor(private readonly nationalityService: NationalityService) {}

  @Get()
  findAll() {
    return this.nationalityService.findAll();
  }

}
