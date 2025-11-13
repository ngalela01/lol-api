import { Body, Controller, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(200)
  async getUsers() {
     const users = await this.userService.findAll();
    return {
      status: 200,
      message: 'Utilisateurs récuperés',
      data: users,
    };
  }

  @Get(':id')
  @HttpCode(200)
  async getUser(
    @Param('id') id : string
  ) {
     const user = await this.userService.findUserById(Number(id))
    return {
      status: 200,
      message: 'Utilisateurs récuperés',
      data: user,
    };
  }

  @Post()
  @HttpCode(201)
  async createUser(@Body() body : CreateUserDto){
    const user =await this.userService.createUser(body)
    return {
      status:201,
      message:'utilisateur créer',
      data:user
    }
  }

  @Patch(':id')
  @HttpCode(200)
  async updateUser(
    @Param('id') id :string,
    @Body() body :UpdateUserDto
  ){
   const user= await this.userService.updateUser(Number(id),body);

   return {
      status: 200,
      message: 'Utiliateur modifié',
      data: user,
    };

  }
}

