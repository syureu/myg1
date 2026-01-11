import { IsNumber } from 'class-validator';

export class GetDistanceDto {
  @IsNumber()
  q1: number;

  @IsNumber()
  r1: number;

  @IsNumber()
  q2: number;

  @IsNumber()
  r2: number;
}
