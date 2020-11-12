import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Users} from "../entity/users";

export class UserController {

    private userRepository = getRepository(Users);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne({
            where: {id: request.params.id},
            relations: ['userType', 'jurisdiction']
        });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const newUser = new Users();
        newUser.email =  request.body.users.email;
        newUser.firstName = request.body.users.firstName;
        newUser.lastName = request.body.users.lastName;
        newUser.jurisdiction = request.body.users.jurisdictionId;
        newUser.userType = request.body.users.userTypeId;
        console.log(request.body, newUser);
        return this.userRepository.save(newUser);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

}