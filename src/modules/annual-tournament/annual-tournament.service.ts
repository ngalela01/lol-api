import { Injectable } from '@nestjs/common';
import { CreateAnnualTournamentDto } from './dto/create-annual-tournament.dto';
import { UpdateAnnualTournamentDto } from './dto/update-annual-tournament.dto';

@Injectable()
export class AnnualTournamentService {

  findAll() {
    return `This action returns all annualTournament`;
  }

}
