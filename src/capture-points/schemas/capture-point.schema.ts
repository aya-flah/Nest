import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'capturePoints' })
export class CapturePoint extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true, min: 0 })
  capacity: number;

  @Prop({ type: Types.ObjectId, ref: 'WaterSourceType', required: true })
  sourceTypeId: Types.ObjectId;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const CapturePointSchema = SchemaFactory.createForClass(CapturePoint);
