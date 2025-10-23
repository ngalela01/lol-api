import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { YearsService } from './years.service';
import { CreateYearDto } from './dto/create-year.dto';
import { UpdateYearDto } from './dto/update-year.dto';

@Controller('years')
export class YearsController {
  constructor(private readonly yearsService: YearsService) {}


  @Get()
  findAll() {
    return this.yearsService.findAll();
  }

}
