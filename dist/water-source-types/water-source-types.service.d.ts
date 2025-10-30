import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { WaterSourceType } from './schemas/water-source-type.schema';
import { CreateWaterSourceTypeDto } from './dto/create-water-source-type.dto';
export declare class WaterSourceTypesService {
    private model;
    constructor(model: Model<WaterSourceType>);
    create(dto: CreateWaterSourceTypeDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, WaterSourceType, {}, {}> & WaterSourceType & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: (import("mongoose").Document<unknown, {}, WaterSourceType, {}, {}> & WaterSourceType & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
}
