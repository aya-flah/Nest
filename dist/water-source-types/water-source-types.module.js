"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterSourceTypesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const water_source_types_controller_1 = require("./water-source-types.controller");
const water_source_types_service_1 = require("./water-source-types.service");
const water_source_type_schema_1 = require("./schemas/water-source-type.schema");
let WaterSourceTypesModule = class WaterSourceTypesModule {
};
exports.WaterSourceTypesModule = WaterSourceTypesModule;
exports.WaterSourceTypesModule = WaterSourceTypesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: water_source_type_schema_1.WaterSourceType.name, schema: water_source_type_schema_1.WaterSourceTypeSchema },
            ]),
        ],
        controllers: [water_source_types_controller_1.WaterSourceTypesController],
        providers: [water_source_types_service_1.WaterSourceTypesService],
    })
], WaterSourceTypesModule);
//# sourceMappingURL=water-source-types.module.js.map