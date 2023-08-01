import { Request, Response } from "express";
import {
  TClientRequest,
  TClientResponse,
} from "../interfaces/clients.interface";
import { createClientService } from "../services/clients/createClient.service";
import getClientInfoService from "../services/clients/getClientInfo.service";

const createClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const clientData: TClientRequest = request.body;

  const newClient = await createClientService(clientData);

  return response.status(201).json(newClient);
};

const getClientInfoController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const clientId = response.locals.clientId; 

  const clientInfo = await getClientInfoService(clientId); 

  if (!clientInfo) {
    return response.status(404).json({ message: "Client not found" });
  }

  return response.json(clientInfo);
};

export { createClientController, getClientInfoController };
