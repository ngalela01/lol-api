import { Controller, Get, Post, Body, Patch, Param, Put, Delete } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Country')
@ApiBearerAuth()
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}


  @Get()
  @ApiOperation({ summary: 'Récupérer tout les pays' })
  @ApiResponse({ status: 200, description: 'Liste des pays récupérée avec succès.' })
  findAll() {
    return this.countryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un pays par son ID' })
  @ApiResponse({ status: 200, description: 'Pays récupéré avec succès.' })
  @ApiResponse({ status: 404, description: 'Pays non trouvé.' })
  findOne(@Param('id') id: string) {
    return this.countryService.findOne(id)
  }

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau pays' })
  @ApiBody({ type: CreateCountryDto })
  @ApiResponse({ status: 201, description: 'Pays créé avec succès.' })
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un pays existant' })
  @ApiBody({ type: UpdateCountryDto })
  @ApiResponse({ status: 200, description: 'Pays mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Pays non trouvé.' })
  update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countryService.update(id, updateCountryDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un pays par son ID' })
  @ApiResponse({ status: 200, description: 'Pays supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Pays non trouvé.' })
  remove(@Param('id') id: string) {
    return this.countryService.delete(id)
  }

}
