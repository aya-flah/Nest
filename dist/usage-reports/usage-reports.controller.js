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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageReportsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const usage_reports_service_1 = require("./usage-reports.service");
const create_usage_report_dto_1 = require("./dto/create-usage-report.dto");
const capacity_guard_1 = require("../guards/capacity.guard");
let UsageReportsController = class UsageReportsController {
    service;
    constructor(service) {
        this.service = service;
    }
    async create(dto) {
        return this.service.create(dto);
    }
    async findAll() {
        return this.service.findAll();
    }
};
exports.UsageReportsController = UsageReportsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(capacity_guard_1.CapacityGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Ajouter un rapport de consommation' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Rapport créé avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Contraintes non respectées ou ressource insuffisante' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Problème au niveau du serveur' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usage_report_dto_1.CreateUsageReportDto]),
    __metadata("design:returntype", Promise)
], UsageReportsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer les rapports' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Rapports récupérés avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Problème au niveau du serveur' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsageReportsController.prototype, "findAll", null);
exports.UsageReportsController = UsageReportsController = __decorate([
    (0, swagger_1.ApiTags)('usage-reports'),
    (0, common_1.Controller)('usage-reports'),
    __metadata("design:paramtypes", [usage_reports_service_1.UsageReportsService])
], UsageReportsController);
//# sourceMappingURL=usage-reports.controller.js.map