import { AppDataSource } from "../../data-source";
import Client from "../../entities/client.entity";
import Contact from "../../entities/contacts.entity";
import { AppError } from "../../errors/error";
import {
  TContactResponse,
  TManyContactsResponse,
} from "../../interfaces/contacts.interface";
import { manyContactsSchemaResponse } from "../../schemas/contact.schema";

const listContactsService = async (clientId: number): Promise<TManyContactsResponse> => {
    const contactRespository = AppDataSource.getRepository(Contact);
    const clientRepository = AppDataSource.getRepository(Client);

    const client: Client | null = await clientRepository.findOne({
      where: {
        id: clientId,
      },
    });

    if (!client) {
      throw new AppError("Client not found", 404);
    }

    const contacts: Contact[] | null = await contactRespository.find({
      where: {
        client: {
          id: clientId
        }
      },
    });

    const returnContacts = manyContactsSchemaResponse.parse(contacts);

    return returnContacts;

};

export default listContactsService;
