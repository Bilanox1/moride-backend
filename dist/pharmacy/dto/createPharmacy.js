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
exports.CreatePharmacyDto = void 0;
const class_validator_1 = require("class-validator");
class CreatePharmacyDto {
}
exports.CreatePharmacyDto = CreatePharmacyDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Pharmacy name must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Pharmacy name is required.' }),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Phone number must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Phone number is required.' }),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'City name must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'City is required.' }),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Latitude is required.' }),
    __metadata("design:type", Number)
], CreatePharmacyDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Longitude is required.' }),
    __metadata("design:type", Number)
], CreatePharmacyDto.prototype, "longitude", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Detailed address must be a string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Detailed address is required.' }),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "detailedAddress", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Invalid email format.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required.' }),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'isOnDuty is required.' }),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "isOnDuty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Description must be a string.' }),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Image is expected as a string (URL or base64).' }),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Image is expected as a string (URL or base64).' }),
    __metadata("design:type", String)
], CreatePharmacyDto.prototype, "imageMobile", void 0);
//# sourceMappingURL=createPharmacy.js.map