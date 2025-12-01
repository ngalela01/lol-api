import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ParticipantRole } from '../entities/participant.entity';

export class CreateParticipantDto {
  @ApiProperty({ example: 'Caps', description: "Le pseudo du participant" })
  pseudo: string;

  @ApiProperty({ example: 'Rasmus', description: "Le prénom du participant" })
  name: string;

  @ApiProperty({ example: 'Winther', description: "Le nom du participant" })
  surname: string;

  @ApiProperty({ example: '2002-01-01', description: "La date de naissance du participant" })
  birth_date?: Date;

  @ApiProperty({ enum: ParticipantRole, description: "Le role du participant"})
  role: ParticipantRole;

  @ApiPropertyOptional({ example: 'Mid Laner', description: "Le poste du participant dans le jeu" })
  poste?: string;

  @ApiProperty({ example: 'LeBlanc', description: "Le champion joué par le participant" })
  main_champion?: string;

  @ApiProperty({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id de l'équipe du participant" })
  team_id: string;
}
