import { AppDataSource } from "../../data-source";
import Client from "../../entities/client.entity";
import { Repository } from "typeorm";
import { TClientInfoResponse } from "../../interfaces/clients.interface";
import { AppError } from "../../errors/error";

const getClientInfoService = async (
  clientId: number
): Promise<TClientInfoResponse> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepository.findOne({
    where: {
      id: clientId,
    },
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  const clientInfo: TClientInfoResponse = {
    full_name: client.full_name,
    email: client.email,
    telephone: client.telephone,
  };

  return clientInfo;
};

export default getClientInfoService;
