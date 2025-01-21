import { CreatePharmacyDto } from './dto/createPharmacy';
import { Pharmacy } from 'src/schemas/pharmacy.schema';
import { Model } from 'mongoose';
export declare class PharmacyServices {
    private pharmacyModel;
    constructor(pharmacyModel: Model<Pharmacy>);
    createPharmacy(data: CreatePharmacyDto): Promise<Pharmacy>;
    getAllPharmacies(): Promise<Pharmacy[]>;
    getPharmacyById(id: string): Promise<Pharmacy>;
    updatePharmacy(id: string, updateData: Partial<Pharmacy>): Promise<Pharmacy>;
    deletePharmacy(id: string): Promise<boolean>;
    setPharmacyOnDuty(id: string): Promise<Pharmacy | null>;
}
