import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { Team } from './entities/team.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Team])],
  controllers: [TeamController],
  providers: [TeamService],
  exports: [TeamService],
})
export class TeamModule {}
