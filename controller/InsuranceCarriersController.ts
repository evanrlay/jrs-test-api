import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {InsuranceCarriers} from "../entity/insurance-carriers";

export class InsuranceCarriersController {

    private insuranceCarrierRepository = getRepository(InsuranceCarriers);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.insuranceCarrierRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.insuranceCarrierRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.insuranceCarrierRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let insuranceCarrierToRemove = await this.insuranceCarrierRepository.findOne(request.params.id);
        await this.insuranceCarrierRepository.remove(insuranceCarrierToRemove);
    }

}