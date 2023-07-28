import { Request, Response } from "express";

const createClientController = async (request: Request, response: Response) => {
    return response.json("cliente criado")
}

export {
    createClientController
}