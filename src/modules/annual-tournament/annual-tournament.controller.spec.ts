import { Test, TestingModule } from '@nestjs/testing';
import { AnnualTournamentController } from './annual-tournament.controller';
import { AnnualTournamentService } from './annual-tournament.service';

describe('AnnualTournamentController', () => {
  let controller: AnnualTournamentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnualTournamentController],
      providers: [AnnualTournamentService],
    }).compile();

    controller = module.get<AnnualTournamentController>(AnnualTournamentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
