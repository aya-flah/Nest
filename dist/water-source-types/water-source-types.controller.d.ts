import { WaterSourceTypesService } from './water-source-types.service';
import { CreateWaterSourceTypeDto } from './dto/create-water-source-type.dto';
export declare class WaterSourceTypesController {
    private readonly service;
    constructor(service: WaterSourceTypesService);
    create(dto: CreateWaterSourceTypeDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schemas/water-source-type.schema").WaterSourceType, {}, {}> & import("./schemas/water-source-type.schema").WaterSourceType & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    findAll(): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./schemas/water-source-type.schema").WaterSourceType, {}, {}> & import("./schemas/water-source-type.schema").WaterSourceType & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
}
