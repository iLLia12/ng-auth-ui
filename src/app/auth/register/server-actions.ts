"use server";
import prisma from "../../../db";

//const prisma = new PrismaClient();

type RegistrationPayloadType = {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export async function handleRegister({
  email,
  username,
  password,
  passwordConfirm,
}: RegistrationPayloadType) {
  const user = await prisma.user.create({
    data: {
      email,
      username,
      password,
    },
  });
}
