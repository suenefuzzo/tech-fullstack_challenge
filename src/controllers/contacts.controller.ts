import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import {
  TContactRequest,
  TManyContactsResponse,
} from "../interfaces/contacts.interface";
import listContactsService from "../services/contacts/listContacts.service";
import updateContactService from "../services/contacts/updateContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";

const createContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactData: TContactRequest = request.body;
  const clientId: number = response.locals.clientId;

  const newContact = await createContactService(contactData, clientId);

  return response.status(201).json(newContact);
};

const listContactsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const clientId: number = response.locals.clientId;

  const listContacts: TManyContactsResponse = await listContactsService(
    clientId
  );

  return response.json(listContacts);
};

const updateContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = Number(request.params.id);
  const updatedData = request.body;

  const updatedContact = await updateContactService(updatedData, contactId);

  return response.json(updatedContact);
};

const deleteContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = Number(request.params.id);
  await deleteContactService(contactId);

  return response.status(204).send();
};

export {
  createContactController,
  listContactsController,
  updateContactController,
  deleteContactController,
};
