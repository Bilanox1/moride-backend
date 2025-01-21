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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const user_schema_1 = require("./schemas/user.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(userModel, jwtService, configService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    generateToken(payload, expiresIn = '90d') {
        return this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_SECRET'),
            expiresIn,
        });
    }
    async create(createAuthDto) {
        const { username, email, password } = createAuthDto;
        const checkUser = await this.userModel.findOne({ email });
        if (checkUser) {
            throw new common_1.HttpException('User with this email already exists.', common_1.HttpStatus.CONFLICT);
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await this.userModel.create({
            username,
            email,
            password: hashedPassword,
        });
        const payload = { email: newUser.email, sub: newUser.id };
        const token = this.generateToken(payload);
        return token;
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new common_1.HttpException('Invalid email or password.', common_1.HttpStatus.UNAUTHORIZED);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new common_1.HttpException('Invalid email or password.', common_1.HttpStatus.UNAUTHORIZED);
        }
        const payload = { email: user.email, sub: user.id };
        const token = this.generateToken(payload);
        return { token };
    }
    async resetPassword(resetPasswordDto) {
        const { email, newPassword } = resetPasswordDto;
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();
        return { message: 'Password successfully updated' };
    }
    async getUser(id) {
        console.log('================');
        console.log(id);
        console.log('================');
        const userData = await this.userModel.findById(id);
        return userData;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map