import { ApiProperty } from "@nestjs/swagger";

export class CreateCountryDto {
    @ApiProperty({ example: 'France', description: "Le nom du pays" })
    name_country: string;
    @ApiProperty({ example: 'FR', description: "Le code ISO du pays" })
    code_iso: string;
}
