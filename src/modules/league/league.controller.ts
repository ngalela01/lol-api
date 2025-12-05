import { Controller, Get, Post, Body, Patch, Put, Param, Delete } from '@nestjs/common';
import { LeagueService } from './league.service';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('League')
@ApiBearerAuth()
@Controller('league')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}


  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les ligues' })
  @ApiResponse({ status: 200, description: 'Liste des ligues récupérée avec succès.' })
  findAll() {
    return this.leagueService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une ligue par son ID' })
  @ApiResponse({ status: 200, description: 'Ligue récupérée avec succès.' })
  @ApiResponse({ status: 404, description: 'Ligue non trouvée.' })
  findOne(@Param('id') id: string) {
    return this.leagueService.findOne(id)
  }

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle ligue' })
  @ApiBody({ type: CreateLeagueDto })
  @ApiResponse({ status: 201, description: 'Ligue créée avec succès.' })
  create(@Body() createLeagueDto: CreateLeagueDto) {
    return this.leagueService.create(createLeagueDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour une ligue existante' })
  @ApiBody({ type: UpdateLeagueDto })
  @ApiResponse({ status: 200, description: 'Ligue mise à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Ligue non trouvée.' })
  update(@Param('id') id: string, @Body() updateLeagueDto: UpdateLeagueDto) {
    return this.leagueService.update(id, updateLeagueDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une ligue par son ID' })
  @ApiResponse({ status: 200, description: 'Ligue supprimée avec succès.' })
  @ApiResponse({ status: 404, description: 'Ligue non trouvée.' })
  remove(@Param('id') id: string) {
    return this.leagueService.delete(id)
  }

}
