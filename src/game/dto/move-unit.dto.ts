import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class MoveUnitDto {
  @IsString()
  @IsNotEmpty()
  unitId: string;

  @IsNumber()
  q: number;

  @IsNumber()
  r: number;
}
