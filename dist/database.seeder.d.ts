import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { Pharmacy } from './schemas/pharmacy.schema';
import { Review } from './schemas/review.schema';
import { Notification } from './schemas/notification.schema';
export declare class DatabaseSeeder {
    private userModel;
    private pharmacyModel;
    private reviewModel;
    private notificationModel;
    constructor(userModel: Model<User>, pharmacyModel: Model<Pharmacy>, reviewModel: Model<Review>, notificationModel: Model<Notification>);
    seed(): Promise<void>;
    private clearDatabase;
    private seedUsers;
    private seedPharmacies;
    private seedReviews;
    private seedNotifications;
}
