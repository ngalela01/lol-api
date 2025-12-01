import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}


  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id : string) {
    return this.regionService.findOne(id)
  }

  @Post()
  create(@Body() createRegionDto : CreateRegionDto) {
    return this.regionService.create(createRegionDto)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(id, updateRegionDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.regionService.delete(id);
  }

}
