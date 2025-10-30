import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WaterSourceTypesModule } from './water-source-types/water-source-types.module';
import { CapturePointsModule } from './capture-points/capture-points.module';
import { UsageReportsModule } from './usage-reports/usage-reports.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    // FIXED: More explicit connection configuration
    MongooseModule.forRoot('mongodb://localhost:27017/water-db', {
      // Add these options for better connection handling
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    }),
    WaterSourceTypesModule,
    CapturePointsModule,
    UsageReportsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}