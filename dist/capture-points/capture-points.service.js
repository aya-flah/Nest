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
exports.CapturePointsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const capture_point_schema_1 = require("./schemas/capture-point.schema");
let CapturePointsService = class CapturePointsService {
    model;
    constructor(model) {
        this.model = model;
        console.log('✅ CapturePointsService initialized');
    }
    async create(dto) {
        try {
            console.log('📝 Creating capture point:', dto);
            const created = await this.model.create(dto);
            console.log('✅ Capture point created:', created._id);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                message: 'Point de captage créé avec succès',
                data: created,
            };
        }
        catch (error) {
            console.error('❌ Error creating capture point:', error);
            throw new common_1.InternalServerErrorException({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: "Erreur lors de la création",
                error: error.message,
            });
        }
    }
    async findAll() {
        try {
            console.log('📖 Fetching all capture points');
            const data = await this.model
                .find()
                .populate('sourceTypeId')
                .exec();
            console.log(`✅ Found ${data.length} capture points`);
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Points de captage récupérés avec succès',
                data,
            };
        }
        catch (error) {
            console.error('❌ Error fetching capture points:', error);
            throw new common_1.InternalServerErrorException({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Problème au niveau du serveur',
            });
        }
    }
    async update(id, dto) {
        try {
            console.log(`📝 Updating capture point ${id}:`, dto);
            const updated = await this.model
                .findByIdAndUpdate(id, dto, { new: true })
                .exec();
            if (!updated) {
                throw new common_1.NotFoundException('Point de captage non trouvé');
            }
            console.log('✅ Capture point updated:', updated._id);
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Point de captage modifié avec succès',
                data: updated,
            };
        }
        catch (error) {
            console.error('❌ Error updating capture point:', error);
            throw new common_1.InternalServerErrorException({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Problème au niveau du serveur',
            });
        }
    }
    async findOne(id) {
        console.log(`📖 Finding capture point: ${id}`);
        return this.model.findById(id).exec();
    }
};
exports.CapturePointsService = CapturePointsService;
exports.CapturePointsService = CapturePointsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(capture_point_schema_1.CapturePoint.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CapturePointsService);
//# sourceMappingURL=capture-points.service.js.map