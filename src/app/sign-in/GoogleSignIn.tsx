"use client"
import { signIn } from "next-auth/react"
import Image from "next/image"

export default function GoogleSingIn() {
  return (
    <button className={" text-sm flex gap-2 items-center rounded-full px-4 py-2 bg-white font-montserrat"}
      onClick={(e) => {
        signIn("google", { redirect: false, callbackUrl: "/dashboard" }).then(res => {
          console.log(res)
        })
      }}
    >
      <Image
        src="/google.svg"
        alt="Google Logo"
        width={14}
        height={14}
        priority
      />
      Sign in with Google
    </button>)
}