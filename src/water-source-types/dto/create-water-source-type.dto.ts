import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWaterSourceTypeDto {
  @ApiProperty({ example: 'Puits' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "Source d'eau souterraine" })
  @IsString()
  @IsNotEmpty()
  description: string;
}
