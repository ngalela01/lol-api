import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, NotFoundException } from '@nestjs/common';
import { AnnualLeagueService } from './annual-league.service';
import { CreateAnnualLeagueDto } from './dto/create-annual-league.dto';
import { UpdateAnnualLeagueDto } from './dto/update-annual-league.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Annual League')
@ApiBearerAuth()
@Controller('annual-league')
export class AnnualLeagueController {
  constructor(private readonly annualLeagueService: AnnualLeagueService) {}


  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les ligues annuelles' })
  @ApiResponse({ status: 200, description: 'Liste des ligues annuelles récupérée avec succès.' })
  findAll() {
    return this.annualLeagueService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une ligue annuelle par son ID' })
  @ApiResponse({ status: 200, description: 'Ligue annuelle récupérée avec succès.' })
  @ApiResponse({ status: 404, description: 'Ligue annuelle non trouvée.' })
  findOne(@Param('id') id: string) {
    return this.annualLeagueService.findOne(id)
  }

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle ligue annuelle' })
  @ApiBody({ type: CreateAnnualLeagueDto })
  @ApiResponse({ status: 201, description: 'Ligue annuelle créée avec succès.' })
  create(@Body() createAnnualLeagueDto: CreateAnnualLeagueDto) {
    return this.annualLeagueService.create(createAnnualLeagueDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour une ligue annuelle existante' })
  @ApiBody({ type: UpdateAnnualLeagueDto })
  @ApiResponse({ status: 200, description: 'Ligue annuelle mise à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Ligue annuelle non trouvée.' })
  update(@Param('id') id: string, @Body() updateAnnualLeagueDto: UpdateAnnualLeagueDto) {
    return this.annualLeagueService.update(id, updateAnnualLeagueDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une ligue annuelle par son ID' })
  @ApiResponse({ status: 200, description: 'Ligue annuelle supprimée avec succès.' })
  @ApiResponse({ status: 404, description: 'Ligue annuelle non trouvée.' })
  remove(@Param('id') id: string) {
    return this.annualLeagueService.delete(id)
  }

}
