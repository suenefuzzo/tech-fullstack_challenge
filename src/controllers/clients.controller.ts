import { Request, Response } from "express";
import {
  TClientRequest,
  TClientResponse,
} from "../interfaces/clients.interface";
import { createClientService } from "../services/clients/createClient.service";
// import listClientsService from "../services/clients/listClients.service";

const createClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const clientData: TClientRequest = request.body;

  const newClient = await createClientService(clientData);

  return response.status(201).json(newClient);
};

// const listClientsController = async (
//   request: Request,
//   response: Response
// ): Promise<Response> => {
//   const listCLients: TClientResponse[] = await listClientsService();

//   return response.json(listCLients);
// };

export { 
  createClientController, 
  // listClientsController 
};
