import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { AppError } from "../error";
import { Repository } from "typeorm"
import Client from "../entities/client.entity";

const checksExistingEmailMiddleware = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const clientEmail: string = request.body.email;

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    if(!clientEmail){
        return next()
    }

    const client = await clientRepository.find({
        where: {
            email: clientEmail
        }
    })

    if(client.length > 0){
        throw new AppError("Email already exists", 409)
    };

    return next();
}

export default checksExistingEmailMiddleware