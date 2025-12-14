import { Controller, Get, Post, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
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
  getNeighbors(@Query('q', ParseIntPipe) q: number, @Query('r', ParseIntPipe) r: number) {
    return this.hexService.getNeighbors(q, r);
  }

  // 두 좌표 간 거리 계산
  @Get('distance')
  getDistance(
    @Query('q1', ParseIntPipe) q1: number,
    @Query('r1', ParseIntPipe) r1: number,
    @Query('q2', ParseIntPipe) q2: number,
    @Query('r2', ParseIntPipe) r2: number,
  ) {
    return this.hexService.getDistance(q1, r1, q2, r2);
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

