"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapacityGuard = void 0;
const common_1 = require("@nestjs/common");
const capture_points_service_1 = require("../capture-points/capture-points.service");
const usage_reports_service_1 = require("../usage-reports/usage-reports.service");
let CapacityGuard = class CapacityGuard {
    capturePointsService;
    usageReportsService;
    constructor(capturePointsService, usageReportsService) {
        this.capturePointsService = capturePointsService;
        this.usageReportsService = usageReportsService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const { capturePointId, amount } = request.body;
        const capturePoint = await this.capturePointsService.findOne(capturePointId);
        if (!capturePoint) {
            throw new common_1.BadRequestException('Point de captage introuvable');
        }
        const totalUsage = await this.usageReportsService.getTotalUsageByPoint(capturePointId);
        const remainingCapacity = capturePoint.capacity - totalUsage;
        if (amount > remainingCapacity) {
            throw new common_1.BadRequestException({
                message: 'Ressource insuffisante',
                error: 'Bad Request',
                statusCode: 400,
            });
        }
        return true;
    }
};
exports.CapacityGuard = CapacityGuard;
exports.CapacityGuard = CapacityGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [capture_points_service_1.CapturePointsService,
        usage_reports_service_1.UsageReportsService])
], CapacityGuard);
//# sourceMappingURL=capacity.guard.js.map