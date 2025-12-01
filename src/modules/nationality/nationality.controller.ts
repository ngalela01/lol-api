import { Controller, Get, Post, Body, Patch, Put, Param, Delete } from '@nestjs/common';
import { NationalityService } from './nationality.service';
import { CreateNationalityDto } from './dto/create-nationality.dto';
import { UpdateNationalityDto } from './dto/update-nationality.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Nationality')
@ApiBearerAuth()
@Controller('nationality')
export class NationalityController {
  constructor(private readonly nationalityService: NationalityService) {}

  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les nationalités' })
  @ApiResponse({ status: 200, description: 'Liste des nationalités récupérée avec succès.' })
  findAll() {
    return this.nationalityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une nationalité par son ID' })
  @ApiResponse({ status: 200, description: 'Nationalité récupérée avec succès.' })
  @ApiResponse({ status: 404, description: 'Nationalité non trouvée.' })
  findOne(@Param('id') id: string) {
    return this.nationalityService.findOne(id)
  }

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle nationalité' })
  @ApiBody({ type: CreateNationalityDto })
  @ApiResponse({ status: 201, description: 'Ligue créée avec succès.' })
  create(@Body() createNationalityDto: CreateNationalityDto) {
    return this.nationalityService.create(createNationalityDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour une nationalité existante' })
  @ApiBody({ type: UpdateNationalityDto })
  @ApiResponse({ status: 200, description: 'Nationalité mise à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Nationalité non trouvée.' })
  update(@Param('id') id: string, @Body() updateNationalityDto: UpdateNationalityDto) {
    return this.nationalityService.update(id, updateNationalityDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une nationalité par son ID' })
  @ApiResponse({ status: 200, description: 'Nationalité supprimée avec succès.' })
  @ApiResponse({ status: 404, description: 'Nationalité non trouvée.' })
  remove(@Param('id') id: string) {
    return this.nationalityService.delete(id)
  }

}
