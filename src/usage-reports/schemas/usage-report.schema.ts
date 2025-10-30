import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export enum ReportStatus {
  ACTIVE = 'active',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Schema({ collection: 'usageReports' })
export class UsageReport extends Document {
  @Prop({ type: Types.ObjectId, ref: 'CapturePoint', required: true })
  capturePointId: Types.ObjectId;

  @Prop({ required: true, min: 0 })
  amount: number;

  @Prop({ 
    required: true, 
    enum: Object.values(ReportStatus),
    default: ReportStatus.ACTIVE 
  })
  status: string;

  @Prop({ default: Date.now })
  reportDate: Date;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const UsageReportSchema = SchemaFactory.createForClass(UsageReport);
