import { ApiProperty } from "@nestjs/swagger";

export class CreateYearDto {
    @ApiProperty({ example: '2025', description: "L'année" })
    year: number
}
