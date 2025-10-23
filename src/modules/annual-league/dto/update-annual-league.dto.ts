import { PartialType } from '@nestjs/mapped-types';
import { CreateAnnualLeagueDto } from './create-annual-league.dto';

export class UpdateAnnualLeagueDto extends PartialType(CreateAnnualLeagueDto) {}
