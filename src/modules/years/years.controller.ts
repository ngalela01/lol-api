import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { YearsService } from './years.service';
import { CreateYearDto } from './dto/create-year.dto';
import { UpdateYearDto } from './dto/update-year.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Years')
@Controller('years')
export class YearsController {
  constructor(private readonly yearsService: YearsService) {}


  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les années' })
  @ApiResponse({ status: 200, description: 'Liste des années récupérée avec succès.' }) 
  findAll() {
    return this.yearsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une année par son ID' })
  @ApiResponse({ status: 200, description: 'Année récupérée avec succès.' })
  @ApiResponse({ status: 404, description: 'Année non trouvée.' })
  findone(@Param('id') id: string) {
    return this.yearsService.findOne(id)
  }

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle année' })
  @ApiBody({ type: CreateYearDto })
  @ApiResponse({ status: 201, description: 'Année créée avec succès.' })
  create(@Body() CreateYearDto: CreateYearDto) {
    return this.yearsService.create(CreateYearDto)
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour une année existante' })
  @ApiBody({ type: UpdateYearDto })
  @ApiResponse({ status: 200, description: 'Année mise à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Année non trouvée.' })
  update(@Param('id') id:string, @Body() UpdateYearDto: UpdateYearDto) {
    return this.yearsService.update(id, UpdateYearDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une année par son ID' })
  @ApiResponse({ status: 200, description: 'Année supprimée avec succès.' })
  @ApiResponse({ status: 404, description: 'Année non trouvée.' })
  remove(@Param('id') id : string) {
    return this.yearsService.delete(id)
  }

}
