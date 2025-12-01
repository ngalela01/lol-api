import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}


  @Get()
  findAll() {
    return this.participantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.participantService.findOne(id)
  }

  @Post()
  @ApiBody({ type: CreateParticipantDto })
  create(@Body() createParticipantDto: CreateParticipantDto) {
    return this.participantService.create(createParticipantDto);
  }

  @Put(':id')
  @ApiBody({ type: UpdateParticipantDto })
  update(@Param('id') id: string, @Body() updateParticipantDto: UpdateParticipantDto) {
    return this.participantService.update(id, updateParticipantDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.participantService.delete(id)
  }

}
