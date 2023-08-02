import { DeepPartial } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contacts.entity";
import { AppError } from "../../errors/error";
import { TContactResponse, TContactUpdate } from "../../interfaces/contacts.interface";
import { contactSchemaResponse } from "../../schemas/contact.schema";

const updateContactService = async (updatedData: TContactUpdate, contactId: number): Promise<any> => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const oldContact= await contactRepository.findOneBy({id: contactId})

    if(!oldContact){
        throw new AppError("Contact not found", 404)
    }

    const newContactData = contactRepository.create({
        ...oldContact,
        ...(updatedData as DeepPartial<Contact>)
    })

    await contactRepository.save(newContactData)

    const returnContact = contactSchemaResponse.parse(newContactData)

    return returnContact
}

export default updateContactService