import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { CapturePoint } from './schemas/capture-point.schema';
import { CreateCapturePointDto } from './dto/create-capture-point.dto';
import { UpdateCapturePointDto } from './dto/update-capture-point.dto';
export declare class CapturePointsService {
    private model;
    constructor(model: Model<CapturePoint>);
    create(dto: CreateCapturePointDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, CapturePoint, {}, {}> & CapturePoint & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: (import("mongoose").Document<unknown, {}, CapturePoint, {}, {}> & CapturePoint & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
    update(id: string, dto: UpdateCapturePointDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, CapturePoint, {}, {}> & CapturePoint & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, CapturePoint, {}, {}> & CapturePoint & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
