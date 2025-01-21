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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("../auth/auth.service");
let AuthGuard = class AuthGuard {
    constructor(jwtService, authService) {
        this.jwtService = jwtService;
        this.authService = authService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const checkTokens = request.headers.authorization;
        if (!checkTokens) {
            throw new common_1.UnauthorizedException('Authorization token not found');
        }
        const token = checkTokens.startsWith('Bearer ')
            ? checkTokens.split(' ')[1]
            : null;
        if (!token) {
            throw new common_1.UnauthorizedException('Invalid token format');
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.JWT_SECRET,
            });
            if (payload.exp && Date.now() >= payload.exp * 1000) {
                throw new common_1.UnauthorizedException('Token has expired');
            }
            const user = await this.authService.getUser(payload.sub);
            if (!user) {
                throw new common_1.UnauthorizedException(`User with id ${payload.id} not found`);
            }
            request['user'] = user;
        }
        catch (error) {
            console.error('JWT verification failed:', error);
            throw new common_1.UnauthorizedException(error.message || 'Unauthorized');
        }
        return true;
    }
    extractTokenFromCookie(request) {
        return request.cookies['token'];
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        auth_service_1.AuthService])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map