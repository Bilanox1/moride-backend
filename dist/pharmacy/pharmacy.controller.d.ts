import { CreatePharmacyDto } from './dto/createPharmacy';
import { UpdatePharmacyDto } from './dto/updatePharmacy';
import { Pharmacy } from 'src/schemas/pharmacy.schema';
import { PharmacyServices } from './pharmacy.service';
export declare class PharmacyController {
    private readonly pharmacyService;
    constructor(pharmacyService: PharmacyServices);
    create(createPharmacyDto: CreatePharmacyDto, file: Express.Multer.File): Promise<any>;
    findAll(): Promise<{
        message: string;
        data: Pharmacy[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        data: Pharmacy;
    }>;
    update(id: string, updatePharmacyDto: UpdatePharmacyDto): Promise<{
        message: string;
        data: Pharmacy;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    setOnDuty(id: string): Promise<{
        message: string;
        data: Pharmacy;
    }>;
}
