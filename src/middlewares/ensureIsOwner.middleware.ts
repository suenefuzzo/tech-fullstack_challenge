import { NextFunction, Request, Response } from "express";

const ensureIsOwnerMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {

};

export default ensureIsOwnerMiddleware
