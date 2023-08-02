import { AppDataSource } from "../../data-source";
import Client from "../../entities/client.entity";
import Contact from "../../entities/contacts.entity";
import { AppError } from "../../errors/error";
import { TContactRequest, TContactResponse } from "../../interfaces/contacts.interface";
import { contactSchemaResponse } from "../../schemas/contact.schema";

const createContactService = async (contactData: TContactRequest, clientId: number): Promise<TContactResponse> => {
    const contactRespository = AppDataSource.getRepository(Contact)
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOne({
        where: {
            id: clientId
        }
    })
    console.log(client, "AAAAAAAAAAAAAAAAAAAA")

    if (!client){
        throw new AppError("Client not found", 404)
    }

    const contact: Contact = contactRespository.create({
        ...contactData,
        client
    })
    await contactRespository.save(contact)

    const returnContact: TContactResponse = contactSchemaResponse.parse(contact)

    return returnContact
}

export default createContactService