import { ApiProperty } from '@nestjs/swagger';
import { ParticipantRole } from '../entities/participant.entity';

export class CreateParticipantDto {
  @ApiProperty()
  pseudo: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty({ required: false, type: String, example: "2018-12-06" })
  birth_date?: Date;

  @ApiProperty({ enum: ParticipantRole })
  role: ParticipantRole;

  @ApiProperty({ required: false })
  poste?: string;

  @ApiProperty({ required: false })
  main_champion?: string;

  @ApiProperty()
  team_id: string;
}
