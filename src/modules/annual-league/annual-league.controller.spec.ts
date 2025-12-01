import { Test, TestingModule } from '@nestjs/testing';
import { AnnualLeagueController } from './annual-league.controller';
import { AnnualLeagueService } from './annual-league.service';

describe('AnnualLeagueController', () => {
  let controller: AnnualLeagueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnualLeagueController],
      providers: [AnnualLeagueService],
    }).compile();

    controller = module.get<AnnualLeagueController>(AnnualLeagueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
