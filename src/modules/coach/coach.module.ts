import { Module } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CoachController } from './coach.controller';
import { ParticipantService } from '../participant/participant.service';

@Module({
  controllers: [CoachController],
  providers: [CoachService, ParticipantService],
})
export class CoachModule {}
