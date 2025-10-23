import { PartialType } from '@nestjs/mapped-types';
import { CreateAnnualTournamentDto } from './create-annual-tournament.dto';

export class UpdateAnnualTournamentDto extends PartialType(CreateAnnualTournamentDto) {}
