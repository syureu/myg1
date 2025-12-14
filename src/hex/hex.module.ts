import { Module } from '@nestjs/common';
import { HexController } from './hex.controller';
import { HexService } from './hex.service';

@Module({
  controllers: [HexController],
  providers: [HexService],
  exports: [HexService],
})
export class HexModule {}

