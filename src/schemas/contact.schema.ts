import { z } from "zod";
import { ContactSocialCircle } from "../entities/contacts.entity";

const contactSchema = z.object({
  id: z.number(),
  full_name: z.string().max(100),
  email: z.string().email().max(45),
  telephone: z
    .string()
    .refine((value) => /^\(\d{2}\) \d{5}-\d{4}$/.test(value), {
      message: "Invalid phone number. Use the format (XX) XXXXX-XXXX",
    }),
  social_circle: z.nativeEnum(ContactSocialCircle),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  deletedAt: z.string().nullish(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const contactSchemaResponse = contactSchema

const contactSchemaUpdate = contactSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
  })
  .partial();

const contactInfoResponse = contactSchema.omit({
  id: true,
  password: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const manyContactsSchemaResponse = z.array(contactSchemaResponse);

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactSchemaUpdate,
  contactInfoResponse,
  manyContactsSchemaResponse,
};
