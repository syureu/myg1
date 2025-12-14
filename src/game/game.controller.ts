// src/game/game.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  // 현재 게임 상태 확인 (프론트엔드가 주기적으로 호출하거나 접속시 호출)
  @Get('status')
  getGameStatus() {
    return this.gameService.getState();
  }

  // 유닛 이동 명령
  @Post('move')
  moveUnit(@Body() body: { unitId: string; q: number; r: number }) {
    return this.gameService.moveUnit(body.unitId, body.q, body.r);
  }
  
  // 턴 종료
  @Post('end-turn')
  endTurn() {
      return this.gameService.endTurn();
  }
}