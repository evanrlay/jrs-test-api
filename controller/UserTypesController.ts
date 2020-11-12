import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { UserType } from "../entity/user-type";

export class UserTypesController {

    private userTypeRepository = getRepository(UserType);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userTypeRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userTypeRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userTypeRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userTypeToRemove = await this.userTypeRepository.findOne(request.params.id);
        await this.userTypeRepository.remove(userTypeToRemove);
    }

}