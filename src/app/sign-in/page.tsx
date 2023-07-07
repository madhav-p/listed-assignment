import Image from "next/image";

import SignInForm from "./SignInForm";
import { signIn } from "next-auth/react";
import GoogleSingIn from "./GoogleSignIn";
import AppleSingIn from "./AppleSignIn";

export default function SignInPage() {

  return (
    <article className={"w-full min-h-screen grid  md:grid-cols-[2fr_3fr] grid-cols-1  font-lato"}  >
      <aside className="bg-black grid place-content-center p-8">
        <p className={"text-white font-bold text-6xl font-montserrat"}>
          Board.
        </p>
      </aside>
      <main className="bg-gray-100 text-black grid place-content-center p-8 gap-4">
        <header className=" text-center md:text-left">
          <h1 className={"font-bold text-2xl font-montserrat"}>Sign In</h1>
          <p className="font-normal text-lg">Sign in to your Account</p>
        </header>
        <main className="flex flex-col gap-4" >
          <section className="flex w-full justify-evenly gap-2 flex-wrap">
            <GoogleSingIn></GoogleSingIn>
            <AppleSingIn></AppleSingIn>
          </section>
          <SignInForm></SignInForm>
        </main>
        <footer >
          <p className="text-sm text-center">
            <span className="text-gray-500">
              Don&apos;t have an account?
            </span> {" "}
            <a href="/register" className="text-blue-600">
              Register here
            </a>
          </p>
        </footer>
      </main>
    </article>
  )
}