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
exports.UsageReportsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const usage_report_schema_1 = require("./schemas/usage-report.schema");
let UsageReportsService = class UsageReportsService {
    model;
    constructor(model) {
        this.model = model;
        console.log('✅ UsageReportsService initialized');
    }
    async create(dto) {
        try {
            console.log('📝 Creating usage report:', dto);
            const created = await this.model.create(dto);
            console.log('✅ Usage report created:', created._id);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                message: 'Rapport de consommation créé avec succès',
                data: created,
            };
        }
        catch (error) {
            console.error('❌ Error creating usage report:', error);
            throw new common_1.InternalServerErrorException({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Erreur lors de la création",
                error: error.message,
            });
        }
    }
    async findAll() {
        try {
            console.log('📖 Fetching all usage reports');
            const data = await this.model
                .find()
                .populate('capturePointId')
                .exec();
            console.log(`✅ Found ${data.length} usage reports`);
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Rapports récupérés avec succès',
                data,
            };
        }
        catch (error) {
            console.error('❌ Error fetching usage reports:', error);
            throw new common_1.InternalServerErrorException({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Problème au niveau du serveur',
            });
        }
    }
    async getTotalUsageByPoint(capturePointId) {
        console.log(`📊 Calculating total usage for point: ${capturePointId}`);
        const reports = await this.model
            .find({ capturePointId, status: 'active' })
            .exec();
        const total = reports.reduce((sum, report) => sum + report.amount, 0);
        console.log(`✅ Total usage: ${total}`);
        return total;
    }
};
exports.UsageReportsService = UsageReportsService;
exports.UsageReportsService = UsageReportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(usage_report_schema_1.UsageReport.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsageReportsService);
//# sourceMappingURL=usage-reports.service.js.map