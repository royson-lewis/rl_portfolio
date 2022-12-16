import {
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateTechnologyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  logo: string;

  @IsBoolean()
  @IsNotEmpty()
  featured: boolean;

  @IsNumber()
  @IsNotEmpty()
  rank: bigint;

  @IsString()
  @IsOptional()
  accentColor: string;
}
