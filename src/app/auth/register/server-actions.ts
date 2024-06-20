"use server";
import prisma from "../../../db";
import { ApiResponse, ErrorApiResponse } from "../../../lib/utils";

type RegistrationPayloadType = {
  username: string;
  email: string;
  password: string;
};

export async function handleRegister({
  email,
  username,
  password,
}: RegistrationPayloadType): Promise<ApiResponse> {
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
    return { ...new ApiResponse({ user }) };
  } catch (e) {
    // The .code property can be accessed in a type-safe manner
    //@ts-ignore
    if (e.code === "P2002") {
      return {
        ...new ErrorApiResponse([
          //@ts-ignore
          `This ${e.meta.target[0]} has already been registered`,
        ]),
      };
    }
    //@ts-ignore
    return { ...new ErrorApiResponse([`Error code: ${e.code}`]) };
  }
}
