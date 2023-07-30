import { z } from "zod";

const clientSchema = z.object({
  id: z.number(),
  full_name: z.string().max(100),
  email: z.string().email().max(45),
  password: z.string().max(120),
  telephone: z
    .string()
    .refine((value) => /^\(\d{2}\) \d{5}-\d{4}$/.test(value), {
      message: "Telefone inválido. Use o formato (XX) XXXXX-XXXX",
    }),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  deletedAt: z.string().nullish(),
});

const clientSchemaRequest = clientSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true
})

const clientSchemaResponse = clientSchema.omit({
    password: true
})

const manyClientsSchemaReponse = z.array(clientSchemaResponse)

export {
    clientSchema,
    clientSchemaRequest,
    clientSchemaResponse,
    manyClientsSchemaReponse
}