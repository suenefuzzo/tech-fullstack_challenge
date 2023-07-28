import { Router } from "express"
import { createClientController } from "../controllers/clients.controller"

const clientsRoutes = Router()

clientsRoutes.post("", createClientController)

export  {
    clientsRoutes
}