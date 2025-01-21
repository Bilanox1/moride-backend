import { Document, HydratedDocument } from 'mongoose';
export type PharmacyDocument = HydratedDocument<Pharmacy>;
export declare class Pharmacy extends Document {
    name: string;
    phone: string;
    city: string;
    image: string;
    imageMobile: string;
    latitude: number;
    longitude: number;
    detailedAddress: string;
    email: string;
    isOnDuty: boolean;
    description?: string;
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
