import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import Contact from "../entities/contacts.entity"

const ensureIsOwnerMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact)

  const contactId = Number(request.params.id)
  const clientId = response.locals.clientId

  const contact = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      client: true,
    },
  })

  if(!contact){
    response.status(404).json({
      message: "Contact not found"
    })
  }

  if(contact?.client.id != clientId){
    response.status(403).json({
      message: "You don´t have permission"
    })
  }

  return next()
};

export default ensureIsOwnerMiddleware;
