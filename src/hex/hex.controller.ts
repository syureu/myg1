import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { HexService } from './hex.service';
import { GetNeighborsDto } from './dto/get-neighbors.dto';
import { GetDistanceDto } from './dto/get-distance.dto';

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
  getNeighbors(@Query() getNeighborsDto: GetNeighborsDto) {
    return this.hexService.getNeighbors(getNeighborsDto.q, getNeighborsDto.r);
  }

  // 두 좌표 간 거리 계산
  @Get('distance')
  getDistance(@Query() getDistanceDto: GetDistanceDto) {
    return this.hexService.getDistance(
      getDistanceDto.q1,
      getDistanceDto.r1,
      getDistanceDto.q2,
      getDistanceDto.r2,
    );
  }

  // POST 방식으로 좌표 전달하여 인접 타일 조회
  @Post('neighbors')
  getNeighborsPost(@Body() getNeighborsDto: GetNeighborsDto) {
    return this.hexService.getNeighbors(getNeighborsDto.q, getNeighborsDto.r);
  }

  // POST 방식으로 두 좌표 간 거리 계산
  @Post('distance')
  getDistancePost(@Body() getDistanceDto: GetDistanceDto) {
    return this.hexService.getDistance(
      getDistanceDto.q1,
      getDistanceDto.r1,
      getDistanceDto.q2,
      getDistanceDto.r2,
    );
  }
}

