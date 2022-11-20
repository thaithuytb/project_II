import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMeasureDto {
  @IsNumber()
  @IsNotEmpty()
  ph: number;

  @IsNumber()
  @IsNotEmpty()
  d0_do: number;

  @IsNumber()
  @IsNotEmpty()
  amoni: number;

  @IsNumber()
  @IsNotEmpty()
  clorua: number;

  @IsNumber()
  @IsNotEmpty()
  fe: number;
}
