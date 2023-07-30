import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const validDataMiddleware =
  (schema: ZodTypeAny) =>
  (request: Request, response: Response, next: NextFunction) => {
    const validatedData = schema.parse(request.body);

    request.body = validatedData;

    return next();
  };

export default validDataMiddleware;
