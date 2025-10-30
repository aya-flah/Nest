import { HttpStatus } from '@nestjs/common';
import { UsageReportsService } from './usage-reports.service';
import { CreateUsageReportDto } from './dto/create-usage-report.dto';
export declare class UsageReportsController {
    private readonly service;
    constructor(service: UsageReportsService);
    create(dto: CreateUsageReportDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schemas/usage-report.schema").UsageReport, {}, {}> & import("./schemas/usage-report.schema").UsageReport & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./schemas/usage-report.schema").UsageReport, {}, {}> & import("./schemas/usage-report.schema").UsageReport & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
}
