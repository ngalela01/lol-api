import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Teams')
@ApiBearerAuth()
@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) { }

  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les équipes' })
  @ApiResponse({ status: 200, description: 'Liste des équipe récupérée avec succès.' })
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une équipe par son ID' })
  @ApiResponse({ status: 200, description: 'Equipe récupérée avec succès.' })
  @ApiResponse({ status: 404, description: 'Equipe non trouvée.' })
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(id)
  }

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle équipe' })
  @ApiBody({ type: CreateTeamDto })
  @ApiResponse({ status: 201, description: 'Equipe créée avec succès.' })
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }


  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour une équipe existante' })
  @ApiBody({ type: UpdateTeamDto })
  @ApiResponse({ status: 200, description: 'Equipe mise à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Equipe non trouvée.' })
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(id, updateTeamDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une équipe par son ID' })
  @ApiResponse({ status: 200, description: 'Equipe supprimée avec succès.' })
  @ApiResponse({ status: 404, description: 'Equipe non trouvée.' })
  remove(@Param('id') id: string) {
    return this.teamService.delete(id);
  }



}
