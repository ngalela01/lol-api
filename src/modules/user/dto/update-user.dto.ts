import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({example: 'user@example.com'})
    email?: string ;
    
    @ApiProperty({example: 'user@example.com'})
    password?: string ;
}
