import { 
  Injectable, 
  CanActivate, 
  ExecutionContext, 
  BadRequestException 
} from '@nestjs/common';
import { CapturePointsService } from '../capture-points/capture-points.service';
import { UsageReportsService } from '../usage-reports/usage-reports.service';

@Injectable()
export class CapacityGuard implements CanActivate {
  constructor(
    private capturePointsService: CapturePointsService,
    private usageReportsService: UsageReportsService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { capturePointId, amount } = request.body;

    const capturePoint = await this.capturePointsService.findOne(capturePointId);
    
    if (!capturePoint) {
      throw new BadRequestException('Point de captage introuvable');
    }

    const totalUsage = await this.usageReportsService.getTotalUsageByPoint(capturePointId);
    const remainingCapacity = capturePoint.capacity - totalUsage;

    if (amount > remainingCapacity) {
      throw new BadRequestException({
        message: 'Ressource insuffisante',
        error: 'Bad Request',
        statusCode: 400,
      });
    }

    return true;
  }
}