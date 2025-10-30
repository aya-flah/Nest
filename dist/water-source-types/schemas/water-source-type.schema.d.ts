import { Document } from 'mongoose';
export declare class WaterSourceType extends Document {
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const WaterSourceTypeSchema: import("mongoose").Schema<WaterSourceType, import("mongoose").Model<WaterSourceType, any, any, any, Document<unknown, any, WaterSourceType, any, {}> & WaterSourceType & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, WaterSourceType, Document<unknown, {}, import("mongoose").FlatRecord<WaterSourceType>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<WaterSourceType> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
