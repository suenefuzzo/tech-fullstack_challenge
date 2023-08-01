import { z } from "zod"
import { contactInfoResponse, contactSchema, contactSchemaRequest, contactSchemaResponse, contactSchemaUpdate, manyContactsSchemaResponse } from "../schemas/contact.schema"

type TContact = z.infer<typeof contactSchema>
type TContactRequest = z.infer<typeof contactSchemaRequest>
type TContactResponse = z.infer<typeof contactSchemaResponse>
type TContactUpdate = z.infer<typeof contactSchemaUpdate>
type TContactInfoResponse = z.infer<typeof contactInfoResponse>
type TManyContactsSchemaResponse = z.infer<typeof manyContactsSchemaResponse>

export {
    TContact,
    TContactRequest,
    TContactResponse,
    TContactUpdate,
    TContactInfoResponse,
    TManyContactsSchemaResponse
}