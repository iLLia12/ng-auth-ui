const config = {
  async redirect({ url, baseUrl }: any) {
    console.log(`AUTH:  src/app/api/auth/_config/callbacks.ts: `, {
      url,
      baseUrl,
    });
    return process.env.REDIRECT_URL || "";
  },
  async signIn({ user, account, profile, email, credentials }: any) {
    console.log("AUTH: signIn callback: ", {
      user,
      account,
      profile,
      email,
      credentials,
    });
    return true;
  },
  async session({ session, token, user }: any) {
    console.log("AUTH: session callback: ", { session, token, user });
    return session;
  },
  async jwt({ token, user, account, profile, isNewUser }: any) {
    console.log("AUTH: jwt callback: ", {
      token,
      user,
      account,
      profile,
      isNewUser,
    });
    return token;
  },
};

export default config;
