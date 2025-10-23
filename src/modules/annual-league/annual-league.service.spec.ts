import { Test, TestingModule } from '@nestjs/testing';
import { AnnualLeagueService } from './annual-league.service';

describe('AnnualLeagueService', () => {
  let service: AnnualLeagueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnualLeagueService],
    }).compile();

    service = module.get<AnnualLeagueService>(AnnualLeagueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
