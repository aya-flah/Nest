import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { UsageReport } from './schemas/usage-report.schema';
import { CreateUsageReportDto } from './dto/create-usage-report.dto';
export declare class UsageReportsService {
    private model;
    constructor(model: Model<UsageReport>);
    create(dto: CreateUsageReportDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, UsageReport, {}, {}> & UsageReport & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: (import("mongoose").Document<unknown, {}, UsageReport, {}, {}> & UsageReport & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
    getTotalUsageByPoint(capturePointId: string): Promise<number>;
}
