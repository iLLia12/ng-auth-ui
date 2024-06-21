"use server";

type SignInPayloadType = {
  emailOrUsername: string;
  password: string;
};

export async function handleSignIn({
  emailOrUsername,
  password,
}: SignInPayloadType): Promise<any> {
  //redirect("/api/auth/signin");
  console.log("SIGN IN !!!!!: ", {
    emailOrUsername,
    password,
  });
}
