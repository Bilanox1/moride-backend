export declare class Location {
    type: string;
    coordinates: number[];
}
export declare const LocationSchema: import("mongoose").Schema<Location, import("mongoose").Model<Location, any, any, any, import("mongoose").Document<unknown, any, Location> & Location & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Location, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Location>> & import("mongoose").FlatRecord<Location> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
