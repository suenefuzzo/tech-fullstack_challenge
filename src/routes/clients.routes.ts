import { Router } from "express"
import { createClientController, 
    // listClientsController 
} 
    from "../controllers/clients.controller"
import validDataMiddleware from "../middlewares/validData.middleware"
import { clientSchemaRequest } from "../schemas/clients.schema"
import checksExistingEmailMiddleware from "../middlewares/checksExistingEmail.middleware"

const clientsRoutes = Router()

clientsRoutes.post("", validDataMiddleware(clientSchemaRequest), checksExistingEmailMiddleware, createClientController)

// clientsRoutes.get("", listClientsController)

export  {
    clientsRoutes
}