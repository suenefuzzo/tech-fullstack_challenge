import { Router } from "express";
import { createContactController, deleteContactController, listContactsController, updateContactController } from "../controllers/contacts.controller";
import validTokenMiddleware from "../middlewares/validToken.middleware";
import ensureIsOwnerMiddleware from "../middlewares/ensureIsOwner.middleware";

const contactsRoutes = Router()

contactsRoutes.post("", validTokenMiddleware, createContactController)

contactsRoutes.get("", validTokenMiddleware, listContactsController)

contactsRoutes.patch("/:id", validTokenMiddleware, ensureIsOwnerMiddleware, updateContactController)

contactsRoutes.delete("/:id", validTokenMiddleware, ensureIsOwnerMiddleware, deleteContactController) 

export default contactsRoutes