import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Locations} from "../entity/locations";

export class LocationsController {

    private locationRepository = getRepository(Locations);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.locationRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.locationRepository.findOne({
            where: {id: request.params.id},
            relations: ['jurisdiction']
        });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.locationRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let locationToRemove = await this.locationRepository.findOne(request.params.id);
        await this.locationRepository.remove(locationToRemove);
    }

}