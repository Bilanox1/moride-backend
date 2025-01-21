"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePharmacyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createPharmacy_1 = require("./createPharmacy");
class UpdatePharmacyDto extends (0, mapped_types_1.PartialType)(createPharmacy_1.CreatePharmacyDto) {
}
exports.UpdatePharmacyDto = UpdatePharmacyDto;
//# sourceMappingURL=updatePharmacy.js.map