"use server";
import prisma from "../../../db";
import { ApiResponse, ErrorApiResponse } from "../../../lib/utils";
import { redirect } from "next/navigation";

type RegistrationPayloadType = {
  username: string;
  email: string;
  password: string;
};

export async function handleRegister({
  email,
  username,
  password,
}: RegistrationPayloadType): Promise<ApiResponse | void | {}> {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password,
        provider: "credentials",
        isEmailConfirmed: false,
      },
    });
  } catch (e) {
    //@ts-ignore
    if (e.code === "P2002") {
      // The .code property can be accessed in a type-safe manner
      //@ts-ignore
      return {
        ...new ErrorApiResponse([
          //@ts-ignore
          `This ${e.meta.target[0]} has already been registered`,
        ]),
      };
    }
    throw e;
  }
  redirect("/api/auth/signin");
}
