export declare class FileUploadService {
    private readonly allowedMimeTypes;
    fileFilter(req: Express.Request, file: Express.Multer.File, cb: (error: any, acceptFile: boolean) => void): void;
}
