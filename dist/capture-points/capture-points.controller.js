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
exports.CapturePointsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const capture_points_service_1 = require("./capture-points.service");
const create_capture_point_dto_1 = require("./dto/create-capture-point.dto");
const update_capture_point_dto_1 = require("./dto/update-capture-point.dto");
let CapturePointsController = class CapturePointsController {
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
    async update(id, dto) {
        return this.service.update(id, dto);
    }
};
exports.CapturePointsController = CapturePointsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Ajouter un point de captage' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Point de captage créé avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Si au moins l'une des contraintes n'est pas respecté" }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Problème au niveau du serveur' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_capture_point_dto_1.CreateCapturePointDto]),
    __metadata("design:returntype", Promise)
], CapturePointsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer les points de captage avec les types' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Points de captage récupérés avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Problème au niveau du serveur' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CapturePointsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Modifier un point de captage' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du point de captage' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Point de captage modifié avec succès' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Problème au niveau du serveur' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_capture_point_dto_1.UpdateCapturePointDto]),
    __metadata("design:returntype", Promise)
], CapturePointsController.prototype, "update", null);
exports.CapturePointsController = CapturePointsController = __decorate([
    (0, swagger_1.ApiTags)('capture-points'),
    (0, common_1.Controller)('capture-points'),
    __metadata("design:paramtypes", [capture_points_service_1.CapturePointsService])
], CapturePointsController);
//# sourceMappingURL=capture-points.controller.js.map