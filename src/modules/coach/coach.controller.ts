import { Controller, Get, Post, Body, Patch, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { Participant } from '../participant/entities/participant.entity';
import { ParticipantService } from '../participant/participant.service';

@Controller('coach')
export class CoachController {
  constructor(
    private readonly coachService: CoachService,
    private readonly participantService: ParticipantService
  ) {}

  @Get()
  findAll() {
    return this.coachService.findAll();
  }

  @Post()
  async post(@Body() body: { id_participant: string }){
    const objectParticipant = await this.participantService.findOne(body.id_participant);
    if (!objectParticipant) {
      throw new Error("L'entité n'existe pas");
    }
    return this.coachService.create(body.id_participant, objectParticipant);
      
  }
  
  @Delete()
  async delete(@Body() body: { id_participant }){
    const item = await this.coachService.findOne(body.id_participant);
    if (!item) {
      throw new NotFoundException("L'entité demandée n'existe pas.");
    }
    await this.coachService.delete(item);
  }
  
  @Put()
  async update(@Body() body: { id_participant: string, id_new_participant: string}){
    const objectParticipant = await this.participantService.findOne(body.id_new_participant);
    if (!objectParticipant) {
      throw new NotFoundException("L'entité demandée n'existe pas.");
    }
    await this.coachService.update(body.id_participant, objectParticipant);
  }


}
