const config = {
  async redirect({ url, baseUrl }: any) {
    console.log("AUTH: redirect callback: ", { url, baseUrl });
    return "http://localhost:3002";
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
