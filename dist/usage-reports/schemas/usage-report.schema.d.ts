import { Document, Types } from 'mongoose';
export declare enum ReportStatus {
    ACTIVE = "active",
    COMPLETED = "completed",
    CANCELLED = "cancelled"
}
export declare class UsageReport extends Document {
    capturePointId: Types.ObjectId;
    amount: number;
    status: string;
    reportDate: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const UsageReportSchema: import("mongoose").Schema<UsageReport, import("mongoose").Model<UsageReport, any, any, any, Document<unknown, any, UsageReport, any, {}> & UsageReport & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UsageReport, Document<unknown, {}, import("mongoose").FlatRecord<UsageReport>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<UsageReport> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
