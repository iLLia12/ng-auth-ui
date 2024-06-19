import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import githubConfig from "../_config/github";
import credentialsConfig from "../_config/credentials";
import callbacks from "../_config/callbacks";

const authOptions = {
  providers: [
    GithubProvider(githubConfig),
    CredentialsProvider(credentialsConfig),
  ],
  callbacks,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
