import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from './entities/user.entity';
import { EntityRepository } from '@mikro-orm/sqlite';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: EntityRepository<User>,
  ) {}

  async findAll() {
    return this.userRepo.findAll();
  }
}