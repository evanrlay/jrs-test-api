import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {EquipmentTypes} from "../entity/equipment-type";

export class EquipmentTypesController {

    private equipmentTypeRepository = getRepository(EquipmentTypes);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.equipmentTypeRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.equipmentTypeRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.equipmentTypeRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let equipmentTypeToRemove = await this.equipmentTypeRepository.findOne(request.params.id);
        await this.equipmentTypeRepository.remove(equipmentTypeToRemove);
    }

}