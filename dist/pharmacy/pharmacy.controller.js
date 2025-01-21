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
exports.PharmacyController = void 0;
const common_1 = require("@nestjs/common");
const createPharmacy_1 = require("./dto/createPharmacy");
const updatePharmacy_1 = require("./dto/updatePharmacy");
const pharmacy_service_1 = require("./pharmacy.service");
const roles_decorator_1 = require("../auth/roles/roles.decorator");
const auth_guard_1 = require("../guard/auth.guard");
const admin_guard_1 = require("../guard/admin.guard");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let PharmacyController = class PharmacyController {
    constructor(pharmacyService) {
        this.pharmacyService = pharmacyService;
    }
    async create(createPharmacyDto, file) {
        if (!file) {
            throw new common_1.BadRequestException('File upload failed.');
        }
        const fileUrl = `http://localhost:3000/images/${file.filename}`;
        const fileUrlMobile = `http://10.0.2.2:3000/images/${file.filename}`;
        console.log(fileUrl);
        createPharmacyDto.image = fileUrl;
        createPharmacyDto.imageMobile = fileUrlMobile;
        const pharmacy = await this.pharmacyService.createPharmacy(createPharmacyDto);
        return { message: 'Pharmacy created successfully!', data: pharmacy };
    }
    async findAll() {
        const pharmacies = await this.pharmacyService.getAllPharmacies();
        return { message: 'Pharmacies retrieved successfully!', data: pharmacies };
    }
    async findOne(id) {
        const pharmacy = await this.pharmacyService.getPharmacyById(id);
        if (!pharmacy) {
            return { message: 'Pharmacy not found!', data: null };
        }
        return { message: 'Pharmacy found!', data: pharmacy };
    }
    async update(id, updatePharmacyDto) {
        const updatedPharmacy = await this.pharmacyService.updatePharmacy(id, updatePharmacyDto);
        if (!updatedPharmacy) {
            return { message: 'Pharmacy not found or update failed!', data: null };
        }
        return { message: 'Pharmacy updated successfully!', data: updatedPharmacy };
    }
    async remove(id) {
        console.log(id);
        const result = await this.pharmacyService.deletePharmacy(id);
        if (!result) {
            return { message: 'Pharmacy not found or deletion failed!' };
        }
        return { message: 'Pharmacy deleted successfully!' };
    }
    async setOnDuty(id) {
        const pharmacy = await this.pharmacyService.setPharmacyOnDuty(id);
        if (!pharmacy) {
            return { message: 'Pharmacy not found or operation failed!', data: null };
        }
        return { message: 'Pharmacy set as On Duty successfully!', data: pharmacy };
    }
};
exports.PharmacyController = PharmacyController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.RolesGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './images',
            filename: (req, file, cb) => {
                const prefix = `${Date.now()}-${Math.round(Math.random() * 1e6)}`;
                const filename = `${prefix}${(0, path_1.extname)(file.originalname)}`;
                cb(null, filename);
            },
        }),
        fileFilter: (req, file, cb) => {
            const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (allowedMimeTypes.includes(file.mimetype)) {
                cb(null, true);
            }
            else {
                cb(new common_1.BadRequestException('Invalid file type. Only JPEG, PNG, and GIF are allowed.'), false);
            }
        },
    })),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPharmacy_1.CreatePharmacyDto, Object]),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updatePharmacy_1.UpdatePharmacyDto]),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/set-on-duty'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PharmacyController.prototype, "setOnDuty", null);
exports.PharmacyController = PharmacyController = __decorate([
    (0, common_1.Controller)('pharmacies'),
    __metadata("design:paramtypes", [pharmacy_service_1.PharmacyServices])
], PharmacyController);
//# sourceMappingURL=pharmacy.controller.js.map