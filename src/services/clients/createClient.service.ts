import { AppDataSource } from "../../data-source";
import Client from "../../entities/client.entity";
import { TClientRequest, TClientResponse } from "../../interfaces/clients.interface";
import { Repository } from "typeorm"
import { clientSchemaResponse } from "../../schemas/clients.schema";

const createClientService = async (clientData: TClientRequest): Promise<TClientResponse> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client = clientRepository.create(clientData)
    await clientRepository.save(client)

    const returnClient: TClientResponse = clientSchemaResponse.parse(client)

    return returnClient
}

export {
    createClientService
}