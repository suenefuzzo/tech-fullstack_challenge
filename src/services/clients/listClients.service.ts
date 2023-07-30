import { AppDataSource } from "../../data-source"
import Client from "../../entities/client.entity"
import { Repository } from "typeorm"
import { TClientResponse } from "../../interfaces/clients.interface"
import { manyClientsSchemaReponse } from "../../schemas/clients.schema"

// const listClientsService = async (): Promise<TClientResponse[]> => {
//     const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

//     const clients: Client[] | null = await clientRepository.find()

//     const validClients: TClientResponse[] = manyClientsSchemaReponse.parse(clients)

//     return validClients
// }

// export default listClientsService