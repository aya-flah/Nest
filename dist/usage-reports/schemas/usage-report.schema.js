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
exports.UsageReportSchema = exports.UsageReport = exports.ReportStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var ReportStatus;
(function (ReportStatus) {
    ReportStatus["ACTIVE"] = "active";
    ReportStatus["COMPLETED"] = "completed";
    ReportStatus["CANCELLED"] = "cancelled";
})(ReportStatus || (exports.ReportStatus = ReportStatus = {}));
let UsageReport = class UsageReport extends mongoose_2.Document {
    capturePointId;
    amount;
    status;
    reportDate;
    createdAt;
    updatedAt;
};
exports.UsageReport = UsageReport;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'CapturePoint', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], UsageReport.prototype, "capturePointId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, min: 0 }),
    __metadata("design:type", Number)
], UsageReport.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: Object.values(ReportStatus),
        default: ReportStatus.ACTIVE
    }),
    __metadata("design:type", String)
], UsageReport.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], UsageReport.prototype, "reportDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], UsageReport.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], UsageReport.prototype, "updatedAt", void 0);
exports.UsageReport = UsageReport = __decorate([
    (0, mongoose_1.Schema)({ collection: 'usageReports' })
], UsageReport);
exports.UsageReportSchema = mongoose_1.SchemaFactory.createForClass(UsageReport);
//# sourceMappingURL=usage-report.schema.js.map