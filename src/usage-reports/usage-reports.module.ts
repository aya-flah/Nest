import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsageReportsController } from './usage-reports.controller';
import { UsageReportsService } from './usage-reports.service';
import { UsageReport, UsageReportSchema } from './schemas/usage-report.schema';
import { CapturePointsModule } from '../capture-points/capture-points.module';
import { CapacityGuard } from '../guards/capacity.guard';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UsageReport.name, schema: UsageReportSchema },
    ]),
    CapturePointsModule,
  ],
  controllers: [UsageReportsController],
  providers: [UsageReportsService, CapacityGuard],
  exports: [UsageReportsService],
})
export class UsageReportsModule {}
