import { ApiProperty } from "@nestjs/swagger";

export class CreateRegionDto {
    @ApiProperty({ example: 'Corrée', description: 'Le nom de la région' })
    name_region: string;
}
