import { ApiProperty } from "@nestjs/swagger";

export class CreateNationalityDto {
    @ApiProperty({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id du pays de la nationalité" })
    country_id: string;
    @ApiProperty({ example: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', description: "L'id du participant de la nationalité" })
    participant_id: string;
}
