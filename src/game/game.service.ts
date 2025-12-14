// src/game/game.service.ts
import { Injectable } from '@nestjs/common';
import { GameState, Unit } from './game.model';

@Injectable()
export class GameService {
  // 1. 메모리에 저장될 게임 상태 (DB 역할)
  private gameState: GameState = {
    turnCount: 1,
    map: [],
    units: [],
  };

  constructor() {
    this.initializeGame();
  }

  // 게임 초기화
  private initializeGame() {
    console.log('게임 월드를 생성합니다...');
    // 테스트용 유닛 1기 생성
    this.gameState.units.push({
      id: 'unit_1',
      type: 'TANK',
      owner: 'player_1',
      position: { q: 0, r: 0 },
    });
  }

  // 현재 상태 조회
  getState() {
    return this.gameState;
  }

  // 유닛 이동 로직
  moveUnit(unitId: string, q: number, r: number) {
    const unit = this.gameState.units.find(u => u.id === unitId);
    if (!unit) throw new Error('유닛을 찾을 수 없습니다.');
    
    // TODO: 여기서 거리 계산 및 이동 가능 여부 검증 로직이 들어감
    
    // 상태 업데이트
    unit.position = { q, r };
    return unit;
  }
  
  // 턴 종료
  endTurn() {
      this.gameState.turnCount++;
      // TODO: 자원 채취, 유닛 회복 등 턴 종료 로직 수행
      return { turn: this.gameState.turnCount };
  }
}