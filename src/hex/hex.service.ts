import { Injectable } from '@nestjs/common';
import { Hex } from '@libs/common';

@Injectable()
export class HexService {
  test(): any {
    const hex = new Hex(0, 0);
    const neighbors = hex.getNeighbors();
    const distance = hex.getDistance(new Hex(2, 1));

    return { hex, neighbors, distance };
  }

  /**
   * 특정 좌표의 인접한 6개 타일 좌표를 반환합니다.
   */
  getNeighbors(q: number, r: number): {
    center: { q: number; r: number };
    neighbors: Array<{ q: number; r: number }>;
  } {
    const hex = new Hex(q, r);
    const neighbors = hex.getNeighbors();

    return {
      center: { q, r },
      neighbors: neighbors.map((n) => ({ q: n.q, r: n.r })),
    };
  }

  /**
   * 두 좌표 간의 거리를 계산합니다.
   */
  getDistance(
    q1: number,
    r1: number,
    q2: number,
    r2: number,
  ): {
    from: { q: number; r: number };
    to: { q: number; r: number };
    distance: number;
  } {
    const hex1 = new Hex(q1, r1);
    const hex2 = new Hex(q2, r2);
    const distance = hex1.getDistance(hex2);

    return {
      from: { q: q1, r: r1 },
      to: { q: q2, r: r2 },
      distance,
    };
  }
}