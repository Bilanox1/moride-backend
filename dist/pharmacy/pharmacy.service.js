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
exports.PharmacyServices = void 0;
const common_1 = require("@nestjs/common");
const pharmacy_schema_1 = require("../schemas/pharmacy.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let PharmacyServices = class PharmacyServices {
    constructor(pharmacyModel) {
        this.pharmacyModel = pharmacyModel;
    }
    async createPharmacy(data) {
        const checkPharmacy = await this.pharmacyModel.findOne({
            email: data.email,
        });
        console.log(checkPharmacy);
        if (checkPharmacy) {
            throw new common_1.HttpException('Pharmacy with this email already exists.', common_1.HttpStatus.CONFLICT);
        }
        const pharmacy = new this.pharmacyModel(data);
        console.log(pharmacy);
        return await pharmacy.save();
    }
    async getAllPharmacies() {
        return await this.pharmacyModel.find().exec();
    }
    async getPharmacyById(id) {
        return await this.pharmacyModel.findById(id).exec();
    }
    async updatePharmacy(id, updateData) {
        if (updateData.email) {
            const checkPharmacy = await this.pharmacyModel.findOne({
                email: updateData.email,
            });
            if (checkPharmacy) {
                throw new common_1.HttpException('Pharmacy with this email already exists.', common_1.HttpStatus.CONFLICT);
            }
        }
        return await this.pharmacyModel
            .findByIdAndUpdate(id, updateData, { new: true })
            .exec();
    }
    async deletePharmacy(id) {
        const result = await this.pharmacyModel.findByIdAndDelete(id).exec();
        return result !== null;
    }
    async setPharmacyOnDuty(id) {
        const pharmacy = await this.pharmacyModel.findById(id).exec();
        if (!pharmacy) {
            return null;
        }
        pharmacy.isOnDuty = true;
        return await pharmacy.save();
    }
};
exports.PharmacyServices = PharmacyServices;
exports.PharmacyServices = PharmacyServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(pharmacy_schema_1.Pharmacy.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PharmacyServices);
//# sourceMappingURL=pharmacy.service.js.map