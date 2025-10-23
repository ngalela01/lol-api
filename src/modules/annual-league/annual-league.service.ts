import { Injectable } from '@nestjs/common';
import { CreateAnnualLeagueDto } from './dto/create-annual-league.dto';
import { UpdateAnnualLeagueDto } from './dto/update-annual-league.dto';

@Injectable()
export class AnnualLeagueService {


  findAll() {
    return `This action returns all annualLeague`;
  }


}
