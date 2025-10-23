import { Injectable } from '@nestjs/common';
import { CreateNationalityDto } from './dto/create-nationality.dto';
import { UpdateNationalityDto } from './dto/update-nationality.dto';

@Injectable()
export class NationalityService {

  findAll() {
    return `This action returns all nationality`;
  }

}
