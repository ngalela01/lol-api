import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Participant')
@ApiBearerAuth()
@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}


  @Get()
  @ApiOperation({ summary: 'Récupérer tout les participants' })
  @ApiResponse({ status: 200, description: 'Liste des participants récupérée avec succès.' })
  findAll() {
    return this.participantService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un participant par son ID' })
  @ApiResponse({ status: 200, description: 'Participant récupéré avec succès.' })
  @ApiResponse({ status: 404, description: 'Participant non trouvé.' })
  findOne(@Param('id') id: string) {
    return this.participantService.findOne(id)
  }

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau participant' })
  @ApiBody({ type: CreateParticipantDto })
  @ApiResponse({ status: 201, description: 'Participant créé avec succès.' })
  create(@Body() createParticipantDto: CreateParticipantDto) {
    return this.participantService.create(createParticipantDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un participant existant' })
  @ApiBody({ type: UpdateParticipantDto })
  @ApiResponse({ status: 200, description: 'Participant mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Participant non trouvé.' })
  @ApiBody({ type: UpdateParticipantDto })
  update(@Param('id') id: string, @Body() updateParticipantDto: UpdateParticipantDto) {
    return this.participantService.update(id, updateParticipantDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un participant par son ID' })
  @ApiResponse({ status: 200, description: 'Participant supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Participant non trouvé.' })
  remove(@Param('id') id: string) {
    return this.participantService.delete(id)
  }

}
