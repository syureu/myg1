import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { HexService } from './hex.service';

@Controller('hex')
export class HexController {
  constructor(private readonly hexService: HexService) {}

  // 기본 테스트 엔드포인트
  @Get('test')
  test() {
    return this.hexService.test();
  }

  // 특정 좌표의 인접 타일 조회
  @Get('neighbors')
  getNeighbors(@Query('q') q: string, @Query('r') r: string) {
    const qNum = parseInt(q, 10);
    const rNum = parseInt(r, 10);
    return this.hexService.getNeighbors(qNum, rNum);
  }

  // 두 좌표 간 거리 계산
  @Get('distance')
  getDistance(
    @Query('q1') q1: string,
    @Query('r1') r1: string,
    @Query('q2') q2: string,
    @Query('r2') r2: string,
  ) {
    const q1Num = parseInt(q1, 10);
    const r1Num = parseInt(r1, 10);
    const q2Num = parseInt(q2, 10);
    const r2Num = parseInt(r2, 10);
    return this.hexService.getDistance(q1Num, r1Num, q2Num, r2Num);
  }

  // POST 방식으로 좌표 전달하여 인접 타일 조회
  @Post('neighbors')
  getNeighborsPost(@Body() body: { q: number; r: number }) {
    return this.hexService.getNeighbors(body.q, body.r);
  }

  // POST 방식으로 두 좌표 간 거리 계산
  @Post('distance')
  getDistancePost(
    @Body() body: { q1: number; r1: number; q2: number; r2: number },
  ) {
    return this.hexService.getDistance(
      body.q1,
      body.r1,
      body.q2,
      body.r2,
    );
  }
}

