import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  getClientInfoController,
  updateClientController,
} from "../controllers/clients.controller";
import validDataMiddleware from "../middlewares/validData.middleware";
import { clientSchemaRequest } from "../schemas/clients.schema";
import checksExistingEmailMiddleware from "../middlewares/checksExistingEmail.middleware";
import unsureIsOwnerMiddleware from "../middlewares/ensureIsOwner.middleware";
import validTokenMiddleware from "../middlewares/validToken.middleware";

const clientsRoutes = Router();

clientsRoutes.post(
  "",
  validDataMiddleware(clientSchemaRequest),
  checksExistingEmailMiddleware,
  createClientController
);

clientsRoutes.get("", validTokenMiddleware, getClientInfoController);

clientsRoutes.patch("/:id", updateClientController)

clientsRoutes.delete("/:id", deleteClientController)

export { clientsRoutes };
