import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"


const handler = NextAuth({
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        if(!credentials){
          return null;
        }
        const  {email, password} = credentials;
        if(email !== process.env.TEST_USER_EMAIL! || password !==process.env.TEST_USER_PASSWORD){
          return null
        }
        return {
          id: "1", name: "Test user", email:process.env.TEST_USER_EMAIL!
        }
        
      }
    })
  ],
  pages:{
    signIn:"/sign-in",
    newUser:"/register",
  }
})

export { handler as GET, handler as POST }