"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageReportsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const usage_reports_controller_1 = require("./usage-reports.controller");
const usage_reports_service_1 = require("./usage-reports.service");
const usage_report_schema_1 = require("./schemas/usage-report.schema");
const capture_points_module_1 = require("../capture-points/capture-points.module");
const capacity_guard_1 = require("../guards/capacity.guard");
let UsageReportsModule = class UsageReportsModule {
};
exports.UsageReportsModule = UsageReportsModule;
exports.UsageReportsModule = UsageReportsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: usage_report_schema_1.UsageReport.name, schema: usage_report_schema_1.UsageReportSchema },
            ]),
            capture_points_module_1.CapturePointsModule,
        ],
        controllers: [usage_reports_controller_1.UsageReportsController],
        providers: [usage_reports_service_1.UsageReportsService, capacity_guard_1.CapacityGuard],
        exports: [usage_reports_service_1.UsageReportsService],
    })
], UsageReportsModule);
//# sourceMappingURL=usage-reports.module.js.map