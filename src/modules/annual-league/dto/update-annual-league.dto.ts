import { PartialType } from '@nestjs/mapped-types';
import { CreateAnnualLeagueDto } from './create-annual-league.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAnnualLeagueDto extends PartialType(CreateAnnualLeagueDto) {
    @ApiProperty({ example: '2023', description: "L'année de la league annuelle" })
    year?: string;
    @ApiProperty({ example: 'Ligue 1', description: "Le nom de la ligue" })
    league?: string;
    @ApiProperty({ example: 'France', description: "Le pays de la ligue" })
    country?: string;
    @ApiProperty({ example: '2023-01-01', description: "La date de début de la ligue" })
    date_beginning?: Date;
    @ApiProperty({ example: '2023-12-31', description: "La date de fin de la ligue" })
    date_end?: Date;
    @ApiProperty({ example: 'Équipe A', description: "L'équipe gagnante de la ligue" })
    winner?: string;
}
