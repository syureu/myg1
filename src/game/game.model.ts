export interface HexCoordinate {
    q: number;
    r: number;
  }
  
  export interface Unit {
    id: string;
    type: 'TANK' | 'INFANTRY';
    position: HexCoordinate;
    owner: string; // user ID
  }
  
  // 전체 게임판의 상태를 담는 거대한 객체
  export interface GameState {
    turnCount: number;
    map: any[]; // 일단 심플하게
    units: Unit[];
    // 여기에 더 많은 데이터가 추가됨
  }
  