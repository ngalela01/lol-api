import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Tournament')
@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}
  @Get()
  @ApiOperation({ summary: 'Récupérer tout les tournois' })
  @ApiResponse({ status: 200, description: 'Liste des tournois récupérée avec succès.' })  
  findAll() {
    return this.tournamentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un tournoi par son ID' })
  @ApiResponse({ status: 200, description: 'Tournoi récupéré avec succès.' })
  @ApiResponse({ status: 404, description: 'Tournoi non trouvé.' })
  findOne(@Param("id") id: string) {
    return this.tournamentService.findOne(id)
  }
  
  @Post()
  @ApiOperation({ summary: 'Créer un nouveau tournoi' })
  @ApiBody({ type: CreateTournamentDto })
  @ApiResponse({ status: 201, description: 'Tournoi créé avec succès.' })
  create(@Body() createTournamentDto : CreateTournamentDto) {
    return this.tournamentService.create(createTournamentDto)
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un tournoi existant' })
  @ApiBody({ type: UpdateTournamentDto })
  @ApiResponse({ status: 200, description: 'Tournoi mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Tournoi non trouvé.' })
  update(@Param('id') id: string, @Body() updateTournamentDto : UpdateTournamentDto) {
    return this.tournamentService.update(id, updateTournamentDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un tournoi par son ID' })
  @ApiResponse({ status: 200, description: 'Tournoi supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Tournoi non trouvé.' })
  remove(@Param('id') id : string) {
    return this.tournamentService.delete(id)
  }
}
