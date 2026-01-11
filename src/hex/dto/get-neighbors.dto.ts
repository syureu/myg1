import { IsNumber } from 'class-validator';

export class GetNeighborsDto {
  @IsNumber()
  q: number;

  @IsNumber()
  r: number;
}
