/**
 * Hexagon 타일을 처리하기 위한 Hex 클래스
 * Axial Coordinate (q, r) 시스템을 사용합니다.
 */
export class Hex {
  constructor(public readonly q: number, public readonly r: number) {}

  /**
   * 인접한 6개 타일의 좌표를 반환합니다.
   * Axial Coordinate에서 인접 타일의 방향 벡터:
   * (1, 0), (1, -1), (0, -1), (-1, 0), (-1, 1), (0, 1)
   */
  getNeighbors(): Hex[] {
    const directions: [number, number][] = [
      [1, 0],   // 동쪽
      [1, -1],  // 북동쪽
      [0, -1],  // 북서쪽
      [-1, 0],  // 서쪽
      [-1, 1],  // 남서쪽
      [0, 1],   // 남동쪽
    ];

    return directions.map(([dq, dr]) => new Hex(this.q + dq, this.r + dr));
  }

  /**
   * 두 타일 사이의 거리를 계산합니다.
   * @param other 다른 Hex 타일
   * @returns 두 타일 사이의 거리
   */
  getDistance(other: Hex): number {
    const dq = this.q - other.q;
    const dr = this.r - other.r;
    // Axial coordinate에서 거리 계산
    // Cube coordinate로 변환: (q, r, -q-r)
    // 거리 = (|dq| + |dr| + |dq + dr|) / 2
    return (Math.abs(dq) + Math.abs(dr) + Math.abs(dq + dr)) / 2;
  }

  /**
   * 두 Hex 객체가 같은 좌표를 가지는지 비교합니다.
   */
  equals(other: Hex): boolean {
    return this.q === other.q && this.r === other.r;
  }

  /**
   * Hex 좌표를 문자열로 표현합니다.
   */
  toString(): string {
    return `Hex(${this.q}, ${this.r})`;
  }
}

