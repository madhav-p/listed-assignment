"use client"
import { signIn } from "next-auth/react"
import Image from "next/image"

export default function AppleSingIn() {
  return (
    <button className={" text-sm flex gap-2 items-center rounded-full px-4 py-2 bg-white font-montserrat"}
      onClick={(e) => {
        signIn("apple", { callbackUrl: "/dashboard" })
      }}
    >
      <Image
        src="/apple.svg"
        alt="Apple Logo"
        width={14}
        height={14}
        priority
      />
      Sign in with Apple
    </button>)
}