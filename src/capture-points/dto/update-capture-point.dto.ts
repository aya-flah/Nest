import { IsString, IsNumber, Min, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCapturePointDto {
  @ApiProperty({ example: 1200, required: false })
  @IsNumber()
  @Min(0)
  @IsOptional()
  capacity?: number;

  @ApiProperty({ example: 'Zone industrielle Nord - Secteur A', required: false })
  @IsString()
  @IsOptional()
  location?: string;
}