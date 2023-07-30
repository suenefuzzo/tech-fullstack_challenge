import { z } from "zod"
import { clientSchema, clientSchemaRequest, clientSchemaResponse, manyClientsSchemaReponse } from "../schemas/clients.schema"

type TClient = z.infer<typeof clientSchema>
type TClientRequest = z.infer<typeof clientSchemaRequest>
type TClientResponse = z.infer<typeof clientSchemaResponse>
type TManyCLientsResponse = z.infer<typeof manyClientsSchemaReponse>

export {
    TClient,
    TClientRequest,
    TClientResponse
}