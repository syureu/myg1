import { Test, TestingModule } from '@nestjs/testing';
import { HexService } from './hex.service';

describe('HexService', () => {
  let service: HexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HexService],
    }).compile();

    service = module.get<HexService>(HexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
