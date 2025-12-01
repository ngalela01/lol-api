import { Controller, Get, Post, Body, Patch, Put, Param, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nationalityService.findOne(id)
  }

  @Post()
  create(@Body() createNationalityDto: CreateNationalityDto) {
    return this.nationalityService.create(createNationalityDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateNationalityDto: UpdateNationalityDto) {
    return this.nationalityService.update(id, updateNationalityDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nationalityService.delete(id)
  }

}
