import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private userModel;
    private readonly jwtService;
    private readonly configService;
    constructor(userModel: Model<User>, jwtService: JwtService, configService: ConfigService);
    generateToken(payload: any, expiresIn?: string): string;
    create(createAuthDto: CreateAuthDto): Promise<string>;
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<{
        message: string;
    }>;
    getUser(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
