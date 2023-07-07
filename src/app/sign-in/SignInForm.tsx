"use client";
import { signIn } from "next-auth/react"
import { useState } from "react";
import { redirect, useSearchParams } from 'next/navigation'

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  return (<form action="" className="bg-white p-8 rounded-xl grid gap-3"
    onSubmit={(e) => {
      e.preventDefault();

      const url = new URL(window.location.href);
      url.searchParams.delete("callbackUrl")
      url.searchParams.delete("error")
      signIn("credentials", {
        email,
        password,
        callbackUrl: "/dashboard",
        // redirect: false
      }).then((res: any) => {

        if (res.error) {
          setError(res.error);
          return;
        }
        console.log(res)
      }).catch(e => {
        console.error(e)
      })
    }}
  >
    <label htmlFor="">
      <p className="font-normal mb-1">Email address</p>
      <input className="w-full bg-gray-200 px-3 py-2 rounded-lg placeholder-slate-600" type="text" name="email" id="email" placeholder="johndoe@gmail.com" value={email} onChange={e => { setEmail(e.target.value) }} />
    </label>
    <label htmlFor="">
      <p className="font-normal mb-1">Password</p>
      <input className="w-full bg-gray-200 px-3 py-2 rounded-lg placeholder-slate-600" type="password" name="password" id="password" placeholder="password" value={password} onChange={e => { setPassword(e.target.value) }} />
    </label>
    <a href="/forgot-password" className="text-blue-500 text-sm"> Forgot Password? </a>

    <p style={error !== "" ? {} : { display: "none" }} className="text-red-500 ">
      Error! Invalid credentials
    </p>
    <button className={"bg-black text-white rounded-lg p-2 font-montserrat"}>
      Sign In
    </button>
  </form>)
}