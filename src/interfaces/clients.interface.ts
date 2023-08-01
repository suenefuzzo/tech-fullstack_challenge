import { z } from "zod"
import { clientInfoResponse, clientSchema, clientSchemaRequest, clientSchemaResponse } from "../schemas/clients.schema"
import { type } from "os"

type TClient = z.infer<typeof clientSchema>
type TClientRequest = z.infer<typeof clientSchemaRequest>
type TClientResponse = z.infer<typeof clientSchemaResponse>
type TClientInfoResponse = z.infer<typeof clientInfoResponse>

export {
    TClient,
    TClientRequest,
    TClientResponse,
    TClientInfoResponse
}