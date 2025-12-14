import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { HexModule } from './hex/hex.module';

@Module({
  imports: [GameModule, HexModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
