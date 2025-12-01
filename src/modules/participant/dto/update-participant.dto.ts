import { PartialType } from '@nestjs/mapped-types';
import { CreateParticipantDto } from './create-participant.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ParticipantRole } from '../entities/participant.entity';

export class UpdateParticipantDto extends PartialType(CreateParticipantDto) {
    @ApiProperty({ example: 'John Doe', description: "Le nom du participant" })
    pseudo: string;

    @ApiProperty({ example: 'john.doe@example.com', description: "L'email du participant" })
    name: string;

    @ApiProperty({ example: 'Doe', description: "Le prénom du participant" })
    surname: string;

    @ApiProperty({ example: '1990-01-01', description: "La date de naissance du participant" })
    date_birth: Date;

    @ApiProperty({ example: 'Player', description: "Le role du participant" })
    role: ParticipantRole;

    @ApiProperty({ example: 'Mid Laner', description: "Le poste du participant" })
    poste: string;

    @ApiProperty({ example: 'Ahri', description: "Le champion principal du participant" })
    main_champion: string;

    @ApiProperty({ example: 'Team A', description: "L'équipe du participant" })
    team_id: string;
}
