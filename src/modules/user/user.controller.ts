import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Lister tous les utilisateurs ' })
  @ApiResponse({ status: 200, description: 'Liste récupérée avec succès' })
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
  @ApiOperation({ summary: 'Récupérer un utilisateur via son ID' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, description: 'Utilisateur introuvable' })
  async getUser(@Param('id') id: string) {
    const user = await this.userService.findUserById(Number(id));
    return {
      status: 200,
      message: 'Utilisateurs récuperés',
      data: user,
    };
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Créer un utilisateur' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'Utilisateur créé avec succès' })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  async createUser(@Body() body: CreateUserDto) {
    const user = await this.userService.createUser(body);
    return {
      status: 201,
      message: 'utilisateur créer',
      data: user,
    };
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Modifier un utilisateur existant' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'Utilisateur modifié avec succès' })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  @ApiResponse({ status: 404, description: 'Utilisateur introuvable' })
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    const user = await this.userService.updateUser(Number(id), body);

    return {
      status: 200,
      message: 'Utiliateur modifié',
      data: user,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un utilisateur' })
  @ApiResponse({ status: 200, description: 'Utilisateur supprimé' })
  @ApiResponse({ status: 404, description: 'Utilisateur introuvable' })
  async deleteUser(@Param('id') id: string) {
    return await this.userService.deleteUser(Number(id));
  }
}
