import { Document } from 'mongoose';
import { User } from './user.schema';
import { Pharmacy } from './pharmacy.schema';
export declare class Notification extends Document {
    userId: User;
    pharmacyId: Pharmacy;
    message: string;
    isRead: boolean;
}
export declare const NotificationSchema: import("mongoose").Schema<Notification, import("mongoose").Model<Notification, any, any, any, Document<unknown, any, Notification> & Notification & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Notification, Document<unknown, {}, import("mongoose").FlatRecord<Notification>> & import("mongoose").FlatRecord<Notification> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
