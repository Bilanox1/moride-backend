import { Document } from 'mongoose';
import { Address } from './address.schema';
export declare class Pharmacy extends Document {
    name: string;
    address: Address;
    phone: string;
    email: string;
    openingHours: Array<{
        day: string;
        open: string;
        close: string;
    }>;
    services: string[];
    images: string[];
    isOnGard: boolean;
}
export declare const PharmacySchema: import("mongoose").Schema<Pharmacy, import("mongoose").Model<Pharmacy, any, any, any, Document<unknown, any, Pharmacy> & Pharmacy & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Pharmacy, Document<unknown, {}, import("mongoose").FlatRecord<Pharmacy>> & import("mongoose").FlatRecord<Pharmacy> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
