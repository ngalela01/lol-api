import { ApiProperty } from "@nestjs/swagger";

export class LoginDto{
    @ApiProperty({example: 'user@example.com'})
    email : string;

    @ApiProperty({example: 'test1234'})
    password :string;
}