import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Region')
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}


  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les régions' })
  @ApiResponse({ status: 200, description: 'Liste des régions récupérées avec succès.' })
  findAll() {
    return this.regionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une région par son ID' })
  @ApiResponse({ status: 200, description: 'Région récupérée avec succès.' })
  @ApiResponse({ status: 404, description: 'Région non trouvée.' })
  findOne(@Param('id') id : string) {
    return this.regionService.findOne(id)
  }

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle région' })
  @ApiBody({ type: CreateRegionDto })
  @ApiResponse({ status: 201, description: 'Région créée avec succès.' })
  create(@Body() createRegionDto : CreateRegionDto) {
    return this.regionService.create(createRegionDto)
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour une région existante' })
  @ApiBody({ type: UpdateRegionDto })
  @ApiResponse({ status: 200, description: 'Région mise à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Région non trouvée.' })
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(id, updateRegionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une région par son ID' })
  @ApiResponse({ status: 200, description: 'Région supprimée avec succès.' })
  @ApiResponse({ status: 404, description: 'Région non trouvée.' })
  delete(@Param('id') id: string) {
    return this.regionService.delete(id);
  }

}
