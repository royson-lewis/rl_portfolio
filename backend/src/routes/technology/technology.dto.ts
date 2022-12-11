import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTechnologyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  logo: string;
}

export class UpdateTechnologyDto extends CreateTechnologyDto {
  @IsOptional()
  name: string;

  @IsOptional()
  logo: string;
}
