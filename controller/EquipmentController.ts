import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Equipment} from "../entity/equipment";
import { InsuranceCarriers } from "../entity/insurance-carriers";

export class EquipmentController {

    private equipmentRepository = getRepository(Equipment);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.equipmentRepository.find({
            relations: ['equipmentTypes', 'location']
        });
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.equipmentRepository.findOne({
            where: {id: request.params.id},
            relations: ['equipmentTypes', 'location', 'insuranceCarriers']
        });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log(request.body);
        const newEquipment = new Equipment();
        newEquipment.manufacturer = request.body.equipment.manufacturer;
        newEquipment.location = request.body.equipment.locationId;
        newEquipment.equipmentTypes = request.body.equipment.equipmentType;
        newEquipment.installation_date = new Date();

        return this.equipmentRepository.save(newEquipment);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let equipmentToRemove = await this.equipmentRepository.findOne(request.params.id);
        await this.equipmentRepository.remove(equipmentToRemove);
    }

}