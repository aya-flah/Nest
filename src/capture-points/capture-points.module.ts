import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CapturePointsController } from './capture-points.controller';
import { CapturePointsService } from './capture-points.service';
import { CapturePoint, CapturePointSchema } from './schemas/capture-point.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CapturePoint.name, schema: CapturePointSchema },
    ]),
  ],
  controllers: [CapturePointsController],
  providers: [CapturePointsService],
  exports: [CapturePointsService],
})
export class CapturePointsModule {}