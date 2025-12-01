import { PartialType } from '@nestjs/mapped-types';
import { CreateParticipantDto } from './create-participant.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ParticipantRole } from '../entities/participant.entity';

export class UpdateParticipantDto extends PartialType(CreateParticipantDto) {
    @ApiPropertyOptional({ example: 'Caps', description: "Le pseudo du participant" })
    pseudo: string;

    @ApiPropertyOptional({ example: 'Rasmus', description: "Le prénom du participant" })
    name: string;

    @ApiPropertyOptional({ example: 'Winther', description: "Le nom du participant" })
    surname: string;

    @ApiPropertyOptional({ example: '2002-01-01', description: "La date de naissance du participant" })
    date_birth: Date;

    @ApiPropertyOptional({ enum: ParticipantRole, description: "Le role du participant"})
    role: ParticipantRole;

    @ApiPropertyOptional({ example: 'Mid Laner', description: "Le poste du participant" })
    poste: string;

    @ApiPropertyOptional({ example: 'LeBlanc', description: "Le champion joué par le participant" })
    main_champion: string;

    @ApiPropertyOptional({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id de l'équipe du participant" })
    team_id: string;
}
