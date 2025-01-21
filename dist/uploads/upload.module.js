"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadModule = void 0;
const common_1 = require("@nestjs/common");
const upload_controller_1 = require("./upload.controller");
const platform_express_1 = require("@nestjs/platform-express");
let uploadModule = class uploadModule {
};
exports.uploadModule = uploadModule;
exports.uploadModule = uploadModule = __decorate([
    (0, common_1.Module)({
        imports: [platform_express_1.MulterModule.register()],
        controllers: [upload_controller_1.UploadController],
        providers: [],
        exports: [],
    })
], uploadModule);
//# sourceMappingURL=upload.module.js.map