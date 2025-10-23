import { Injectable } from '@nestjs/common';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';

@Injectable()
export class CoachService {


  findAll() {
    return `This action returns all coach`;
  }

}
