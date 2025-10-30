import { HttpStatus } from '@nestjs/common';
import { CapturePointsService } from './capture-points.service';
import { CreateCapturePointDto } from './dto/create-capture-point.dto';
import { UpdateCapturePointDto } from './dto/update-capture-point.dto';
export declare class CapturePointsController {
    private readonly service;
    constructor(service: CapturePointsService);
    create(dto: CreateCapturePointDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schemas/capture-point.schema").CapturePoint, {}, {}> & import("./schemas/capture-point.schema").CapturePoint & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./schemas/capture-point.schema").CapturePoint, {}, {}> & import("./schemas/capture-point.schema").CapturePoint & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
    update(id: string, dto: UpdateCapturePointDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schemas/capture-point.schema").CapturePoint, {}, {}> & import("./schemas/capture-point.schema").CapturePoint & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
}
