import { Controller, Get, Post, Body, Patch, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { AnnualTournamentService } from './annual-tournament.service';
import { CreateAnnualTournamentDto } from './dto/create-annual-tournament.dto';
import { UpdateAnnualTournamentDto } from './dto/update-annual-tournament.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Annual Tournament')
@Controller('annual-tournament')
export class AnnualTournamentController {
    constructor(private readonly annualTournamentService: AnnualTournamentService) {}


  @Get()
  @ApiOperation({ summary: 'Récupérer tout les tournois annuels' })
  @ApiResponse({ status: 200, description: 'Liste des tournois annuels récupérée avec succès.' })
  findAll() {
    return this.annualTournamentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un tournoi annuel par son ID' })
  @ApiResponse({ status: 200, description: 'Tournoi annuel récupéré avec succès.' })
  @ApiResponse({ status: 404, description: 'Tournoi annuel non trouvé.' })
  findOne(@Param('id') id: string) {
    return this.annualTournamentService.findOne(id)
  }

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau tournoi annuel' })
  @ApiBody({ type: CreateAnnualTournamentDto })
  @ApiResponse({ status: 201, description: 'Tournoi annuel créé avec succès.' })
  create(@Body() createAnnualTournamentDto: CreateAnnualTournamentDto) {
    return this.annualTournamentService.create(createAnnualTournamentDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un tournoi annuel existant' })
  @ApiBody({ type: UpdateAnnualTournamentDto })
  @ApiResponse({ status: 200, description: 'Tournoi annuel mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Tournoi annuel non trouvé.' })
  update(@Param('id') id: string, @Body() updateAnnualTournamentDto: UpdateAnnualTournamentDto) {
    return this.annualTournamentService.update(id, updateAnnualTournamentDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un tournoi annuel par son ID' })
  @ApiResponse({ status: 200, description: 'Tournoi annuel supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Tournoi annuel non trouvé.' })
  remove(@Param('id') id: string) {
    return this.annualTournamentService.delete(id)
  }
  

}
