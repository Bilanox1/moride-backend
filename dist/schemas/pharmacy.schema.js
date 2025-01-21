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
exports.PharmacySchema = exports.Pharmacy = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const address_schema_1 = require("./address.schema");
let Pharmacy = class Pharmacy extends mongoose_2.Document {
};
exports.Pharmacy = Pharmacy;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Pharmacy.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: address_schema_1.AddressSchema, required: true }),
    __metadata("design:type", address_schema_1.Address)
], Pharmacy.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Pharmacy.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Pharmacy.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)([
        {
            day: { type: String, required: true },
            open: { type: String, required: true },
            close: { type: String, required: true },
        },
    ]),
    __metadata("design:type", Array)
], Pharmacy.prototype, "openingHours", void 0);
__decorate([
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], Pharmacy.prototype, "services", void 0);
__decorate([
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], Pharmacy.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Pharmacy.prototype, "isOnGard", void 0);
exports.Pharmacy = Pharmacy = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Pharmacy);
exports.PharmacySchema = mongoose_1.SchemaFactory.createForClass(Pharmacy);
//# sourceMappingURL=pharmacy.schema.js.map