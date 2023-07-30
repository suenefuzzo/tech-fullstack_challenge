import { Request, Response } from "express";
import { TClientRequest } from "../interfaces/clients.interface";
import { createClientService } from "../services/clients/createClient.service";

const createClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const clientData: TClientRequest = request.body;

  const newClient = await createClientService(clientData);

  return response.status(201).json(newClient);
};

export { createClientController };
