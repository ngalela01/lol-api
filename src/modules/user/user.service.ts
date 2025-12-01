import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from './entities/user.entity';
import { EntityManager, EntityRepository } from '@mikro-orm/sqlite';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: EntityRepository<User>,
    private readonly em: EntityManager,
  ) {}

  async findAll() {
    return this.userRepo.findAll();
  }
  async findUserById(id: number): Promise<User> {
    const user = await this.userRepo.findOne(id);
    if (!user) {
      throw new Error('Utilisateur non trouvé');
    }
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepo.findOne({ email });
  }

  async createUser(data: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = this.userRepo.create({ ...data, password: hashedPassword });
    await this.em.persistAndFlush(user);
    return user;
  }

  async updateUser(id: number, data: UpdateUserDto): Promise<User> {
    const user = await this.userRepo.findOne(id);
    if (!user) {
      throw new Error('Utilisateur non trouvé');
    }
    // Si un mot de passe est fourni, on le hash
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    this.userRepo.assign(user, data);
    await this.em.flush();
    return user;
  }
  async deleteUser(id: number): Promise<{ message: String }> {
    const user = await this.userRepo.findOne(id);
    if (!user) {
      throw new Error('Utilisateur non trouvé');
    }
    await this.em.removeAndFlush(user);
    return { message: 'Utilisateur supprimé avec succès' };
  }
}
