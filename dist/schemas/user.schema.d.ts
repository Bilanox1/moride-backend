import { Document } from 'mongoose';
import { Location } from './location.schema';
import { Pharmacy } from './pharmacy.schema';
export declare class User extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    favorites: Pharmacy[];
    lastLocation: Location;
    preferredLanguage: string;
    notificationsEnabled: boolean;
    isVerified: boolean;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
