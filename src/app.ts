import "reflect-metadata"
import "express-async-errors"
import express, { Application } from "express"
import { clientsRoutes } from "./routes/clients.routes"
import { handleErros } from "./errors/error"
import sessionRoutes from "./routes/session.routes"
import contactsRoutes from "./routes/contacts.routes"

const app: Application = express()

app.use(express.json())

app.use("/clients", clientsRoutes)
app.use("/login", sessionRoutes)
app.use("/contacts", contactsRoutes)

app.use(handleErros)

export default app
