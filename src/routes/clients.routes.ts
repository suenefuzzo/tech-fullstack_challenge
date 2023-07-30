import { Router } from "express"
import { createClientController } from "../controllers/clients.controller"
import validDataMiddleware from "../middlewares/validData.middleware"
import { clientSchemaRequest } from "../schemas/clients.schema"

const clientsRoutes = Router()

clientsRoutes.post("", validDataMiddleware(clientSchemaRequest), createClientController)

export  {
    clientsRoutes
}