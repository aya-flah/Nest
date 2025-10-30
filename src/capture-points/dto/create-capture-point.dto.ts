import { IsString, IsNotEmpty, IsNumber, Min, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCapturePointDto {
  @ApiProperty({ example: 'Puits Central' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Zone industrielle Nord' })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({ example: 1000 })
  @IsNumber()
  @Min(0)
  capacity: number;

  @ApiProperty({ example: '507f1f77bcf86cd799439011' })
  @IsMongoId()
  @IsNotEmpty()
  sourceTypeId: string;
}