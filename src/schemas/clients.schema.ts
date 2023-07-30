import { z } from "zod";

const clientSchema = z.object({
  id: z.number(),
  full_name: z.string().max(100),
  email: z.string().email().max(45),
  telephone: z
    .string()
    .refine((value) => /^\(\d{2}\) \d{4}-\d{4}$/.test(value), {
      message: "Telefone inválido. Use o formato (XX) XXXX-XXXX",
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

const clientSchemaResponse = clientSchema

export {
    clientSchema,
    clientSchemaRequest,
    clientSchemaResponse
}