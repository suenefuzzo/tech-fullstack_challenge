import { Request, Response } from "express";
import { TClientInfoResponse, TClientRequest, TClientResponse } from "../interfaces/clients.interface";
import { createClientService } from "../services/clients/createClient.service";
import getClientInfoService from "../services/clients/getClientInfo.service";
import updateClientService from "../services/clients/updateClient.service";
import deleteClientService from "../services/clients/deleteClient.service";

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

const updateClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const clientData: TClientRequest = request.body

  const clientId: number = Number(request.params.id)
  console.log(clientId, "AAAAAAAAAAAAAAAAAAA")

  const newClientData: TClientResponse = await updateClientService(clientData, clientId)

  return response.json(newClientData)
};

const deleteClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const clientId: number = Number(request.params.id)

  await deleteClientService(clientId)

  return response.status(204).send()
};

export {
  createClientController,
  getClientInfoController,
  updateClientController,
  deleteClientController,
};
