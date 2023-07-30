import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import Client from "../../entities/client.entity";
import { AppError } from "../../errors/error";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import { Repository } from "typeorm";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createTokenService = async (
  loginData: TLoginRequest
): Promise<string> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepository.findOne({
    where: {
      email: loginData.email,
    },
  });

  if (!client) {
    throw new AppError("Invalid credentials", 401);
  }

  const matchPassword = await compare(loginData.password, client.password);

  if (!matchPassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign(
    { clientName: client.full_name },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: client.id.toString(),
    }
  );

  return token;
};

export default createTokenService;
