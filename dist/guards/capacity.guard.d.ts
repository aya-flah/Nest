import { CanActivate, ExecutionContext } from '@nestjs/common';
import { CapturePointsService } from '../capture-points/capture-points.service';
import { UsageReportsService } from '../usage-reports/usage-reports.service';
export declare class CapacityGuard implements CanActivate {
    private capturePointsService;
    private usageReportsService;
    constructor(capturePointsService: CapturePointsService, usageReportsService: UsageReportsService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
