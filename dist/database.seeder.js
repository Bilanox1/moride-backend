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
exports.DatabaseSeeder = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schemas/user.schema");
const pharmacy_schema_1 = require("./schemas/pharmacy.schema");
const review_schema_1 = require("./schemas/review.schema");
const notification_schema_1 = require("./schemas/notification.schema");
const bcrypt = require("bcryptjs");
let DatabaseSeeder = class DatabaseSeeder {
    constructor(userModel, pharmacyModel, reviewModel, notificationModel) {
        this.userModel = userModel;
        this.pharmacyModel = pharmacyModel;
        this.reviewModel = reviewModel;
        this.notificationModel = notificationModel;
    }
    async seed() {
        await this.clearDatabase();
        const users = await this.seedUsers();
        const pharmacies = await this.seedPharmacies();
        await this.seedReviews(users, pharmacies);
        await this.seedNotifications(users, pharmacies);
        console.log('Database seeded successfully!');
    }
    async clearDatabase() {
        await this.userModel.deleteMany({});
        await this.pharmacyModel.deleteMany({});
        await this.reviewModel.deleteMany({});
        await this.notificationModel.deleteMany({});
    }
    async seedUsers() {
        const hashedPassword = await bcrypt.hash('password123', 10);
        const users = await this.userModel.create([
            {
                firstName: 'Admin',
                lastName: 'User',
                email: 'admin@example.com',
                password: hashedPassword,
                role: 'admin',
                isVerified: true,
                lastLocation: {
                    type: 'Point',
                    coordinates: [2.3522, 48.8566],
                },
            },
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                password: hashedPassword,
                role: 'user',
                isVerified: true,
                lastLocation: {
                    type: 'Point',
                    coordinates: [2.3522, 48.8566],
                },
            },
        ]);
        return users;
    }
    async seedPharmacies() {
        const pharmacies = await this.pharmacyModel.create([
            {
                name: 'Pharmacie Centrale',
                address: {
                    street: '123 Rue de la Paix',
                    city: 'Youssoufia',
                    postalCode: '46000',
                    country: 'Morocco',
                    location: {
                        type: 'Point',
                        coordinates: [-8.5298, 32.2462],
                    },
                },
                phone: '+212123456789',
                email: 'centrale@pharmacy.com',
                openingHours: [
                    { day: 'Monday', open: '09:00', close: '19:00' },
                    { day: 'Tuesday', open: '09:00', close: '19:00' },
                    { day: 'Wednesday', open: '09:00', close: '19:00' },
                    { day: 'Thursday', open: '09:00', close: '19:00' },
                    { day: 'Friday', open: '09:00', close: '19:00' },
                    { day: 'Saturday', open: '09:00', close: '19:00' },
                    { day: 'Sunday', open: '10:00', close: '13:00' },
                ],
                services: ['Vaccination', 'Blood Pressure Test', 'Diabetes Screening'],
                isOnGard: false,
            },
            {
                name: 'Pharmacie du Marché',
                address: {
                    street: '45 Avenue des Champs-Élysées',
                    city: 'Youssoufia',
                    postalCode: '46000',
                    country: 'Morocco',
                    location: {
                        type: 'Point',
                        coordinates: [-8.5298, 32.2462],
                    },
                },
                phone: '+212987654321',
                email: 'marche@pharmacy.com',
                openingHours: [
                    { day: 'Monday', open: '08:00', close: '20:00' },
                    { day: 'Tuesday', open: '08:00', close: '20:00' },
                    { day: 'Wednesday', open: '08:00', close: '20:00' },
                    { day: 'Thursday', open: '08:00', close: '20:00' },
                    { day: 'Friday', open: '08:00', close: '20:00' },
                    { day: 'Saturday', open: '09:00', close: '17:00' },
                    { day: 'Sunday', open: '10:00', close: '13:00' },
                ],
                services: ['24/7 Service', 'Vaccination', 'Medical Devices'],
                isOnGard: true,
            },
        ]);
        return pharmacies;
    }
    async seedReviews(users, pharmacies) {
        await this.reviewModel.create([
            {
                pharmacyId: pharmacies[0]._id,
                userId: users[1]._id,
                rating: 4,
                comment: 'Great service and friendly staff!',
            },
            {
                pharmacyId: pharmacies[1]._id,
                userId: users[1]._id,
                rating: 5,
                comment: 'Very convenient location and extended hours.',
            },
        ]);
    }
    async seedNotifications(users, pharmacies) {
        await this.notificationModel.create([
            {
                userId: users[1]._id,
                pharmacyId: pharmacies[0]._id,
                message: 'Your prescription is ready for pickup',
                isRead: false,
            },
            {
                userId: users[1]._id,
                message: 'Welcome to PharmaDirect! Complete your profile to get personalized recommendations.',
                isRead: true,
            },
        ]);
    }
};
exports.DatabaseSeeder = DatabaseSeeder;
exports.DatabaseSeeder = DatabaseSeeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(pharmacy_schema_1.Pharmacy.name)),
    __param(2, (0, mongoose_1.InjectModel)(review_schema_1.Review.name)),
    __param(3, (0, mongoose_1.InjectModel)(notification_schema_1.Notification.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], DatabaseSeeder);
//# sourceMappingURL=database.seeder.js.map