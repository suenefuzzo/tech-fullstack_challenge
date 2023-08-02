import { AppDataSource } from "../../data-source";
import Client from "../../entities/client.entity";
import {
  TClientRequest,
  TClientResponse,
} from "../../interfaces/clients.interface";
import { clientSchemaResponse } from "../../schemas/clients.schema";

const updateClientService = async (
  clientData: TClientRequest,
  clientId: number
): Promise<TClientResponse> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const oldData: Client | null = await clientRepository.findOneBy({
    id: clientId,
  });


  const newData: Client = clientRepository.create({
    ...oldData,
    ...clientData
  });

  await clientRepository.save(newData);

  const returnClient: TClientResponse = clientSchemaResponse.parse(newData);

  return returnClient;
};

export default updateClientService;
