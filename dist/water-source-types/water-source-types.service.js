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
exports.WaterSourceTypesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const water_source_type_schema_1 = require("./schemas/water-source-type.schema");
let WaterSourceTypesService = class WaterSourceTypesService {
    model;
    constructor(model) {
        this.model = model;
        console.log('✅ WaterSourceTypesService initialized');
    }
    async create(dto) {
        try {
            console.log('📝 Creating water source type:', dto);
            const created = await this.model.create(dto);
            console.log('✅ Water source type created:', created._id);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                message: 'Type de source créé avec succès',
                data: created,
            };
        }
        catch (error) {
            console.error('❌ Error creating water source type:', error);
            throw new common_1.InternalServerErrorException({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Erreur lors de la création',
                error: error.message,
            });
        }
    }
    async findAll() {
        try {
            console.log('📖 Fetching all water source types');
            const data = await this.model.find().exec();
            console.log(`✅ Found ${data.length} water source types`);
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Types de sources récupérés avec succès',
                data,
            };
        }
        catch (error) {
            console.error('❌ Error fetching water source types:', error);
            throw new common_1.InternalServerErrorException({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Problème au niveau du serveur',
            });
        }
    }
};
exports.WaterSourceTypesService = WaterSourceTypesService;
exports.WaterSourceTypesService = WaterSourceTypesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(water_source_type_schema_1.WaterSourceType.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], WaterSourceTypesService);
//# sourceMappingURL=water-source-types.service.js.map