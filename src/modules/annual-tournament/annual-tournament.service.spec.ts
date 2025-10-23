import { Test, TestingModule } from '@nestjs/testing';
import { AnnualTournamentService } from './annual-tournament.service';

describe('AnnualTournamentService', () => {
  let service: AnnualTournamentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnualTournamentService],
    }).compile();

    service = module.get<AnnualTournamentService>(AnnualTournamentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
