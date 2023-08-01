import { AppDataSource } from "../../data-source"
import Client from "../../entities/client.entity"
import { Repository } from "typeorm"
import { TClientInfoResponse } from "../../interfaces/clients.interface"


const getClientInfoService = async (clientId: number): Promise<TClientInfoResponse> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

    try {
      const client: Client | null = await clientRepository.findOne({ where: {
        id: clientId
      }});

      if (!client) {
        throw new Error("Client not found");
      }

      const clientInfo: TClientInfoResponse = {
        full_name: client.full_name,
        email: client.email,
        telephone: client.telephone,
      };
  
      return clientInfo;
    } catch (error) {
      throw new Error("Error");
    }
}

export default getClientInfoService