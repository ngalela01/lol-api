import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
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

  @Get(':id')
  findone(@Param('id') id: string) {
    return this.yearsService.findOne(id)
  }

  @Post()
  create(@Body() CreateYearDto: CreateYearDto) {
    return this.yearsService.create(CreateYearDto)
  }

  @Put(':id')
  update(@Param('id') id:string, @Body() UpdateYearDto: UpdateYearDto) {
    return this.yearsService.update(id, UpdateYearDto)
  }

  @Delete(':id')
  remove(@Param('id') id : string) {
    return this.yearsService.delete(id)
  }

}
