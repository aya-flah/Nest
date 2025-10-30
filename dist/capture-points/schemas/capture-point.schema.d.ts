import { Document, Types } from 'mongoose';
export declare class CapturePoint extends Document {
    name: string;
    location: string;
    capacity: number;
    sourceTypeId: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
export declare const CapturePointSchema: import("mongoose").Schema<CapturePoint, import("mongoose").Model<CapturePoint, any, any, any, Document<unknown, any, CapturePoint, any, {}> & CapturePoint & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CapturePoint, Document<unknown, {}, import("mongoose").FlatRecord<CapturePoint>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<CapturePoint> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
