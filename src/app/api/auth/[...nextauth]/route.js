import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      //<!-- use-this-for-default-login -->
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // const result = await axios.post(
        //   "http://localhost:3000/api/login",
        //   credentials
        // );
        // console.log(result.data.user);
        // if (result.data.status === 200) {
        //   return result.data.user;
        // } else {
        //   return null;
        // }

        // <!-- use-this-if-database-is-down -->
        const user = {
          name: "user",
          email: "user@gmail.com",
          password: "user",
          role: "user",
        };
        const admin = {
          name: "admin",
          email: "admin@gmail.com",
          password: "admin",
          role: "admin",
        };
        if (credentials.email === user.email && credentials.password === user.password) {
          return user;
        } else if (credentials.email === admin.email && credentials.password === admin.password) {
          return admin;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.role = user.role;
      }
      if (trigger === "update" && session?.name) {
        token.name = session.name;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
