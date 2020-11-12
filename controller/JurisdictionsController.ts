import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Jurisdictions} from "../entity/jurisdictions";

export class JurisdictionsController {

    private jurisdictionRepository = getRepository(Jurisdictions);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.jurisdictionRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.jurisdictionRepository.findOne({
            where: {id: request.params.id},
            relations: ['inspectors']
        });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.jurisdictionRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let jurisdictionToRemove = await this.jurisdictionRepository.findOne(request.params.id);
        await this.jurisdictionRepository.remove(jurisdictionToRemove);
    }

}