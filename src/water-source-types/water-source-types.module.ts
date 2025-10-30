import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WaterSourceTypesController } from './water-source-types.controller';
import { WaterSourceTypesService } from './water-source-types.service';
import { WaterSourceType, WaterSourceTypeSchema } from './schemas/water-source-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WaterSourceType.name, schema: WaterSourceTypeSchema },
    ]),
  ],
  controllers: [WaterSourceTypesController],
  providers: [WaterSourceTypesService],
})
export class WaterSourceTypesModule {}