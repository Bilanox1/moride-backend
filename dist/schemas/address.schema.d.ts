import { Location } from './location.schema';
export declare class Address {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    location: Location;
}
export declare const AddressSchema: import("mongoose").Schema<Address, import("mongoose").Model<Address, any, any, any, import("mongoose").Document<unknown, any, Address> & Address & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Address, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Address>> & import("mongoose").FlatRecord<Address> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
