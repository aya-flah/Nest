import { IsMongoId, IsNotEmpty, IsNumber, Min, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsageReportDto {
  @ApiProperty({ example: '507f1f77bcf86cd799439011' })
  @IsMongoId()
  @IsNotEmpty()
  capturePointId: string;

  @ApiProperty({ example: 100 })
  @IsNumber()
  @Min(0)
  amount: number;

  @ApiProperty({ example: 'active' })
  @IsString()
  @IsNotEmpty()
  status: string;
}