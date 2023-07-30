import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors/error"
import jwt from "jsonwebtoken"
import "dotenv/config"

const validTokenMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
    let token: string | undefined = request.headers.authorization

    if (!token) {
        throw new AppError("Missing bearer token", 401);
      }
    
    token = token.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if(error){
            return response.status(401).json({
                message: "Invalid token"
            })
        }

        response.locals.clientId = decoded.id

        return next()
    })
}

export default validTokenMiddleware