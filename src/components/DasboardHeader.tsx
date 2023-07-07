"use client";

"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Avatar = ({ src, className }: { src: string, className?: string }) => {
  return <Image onClick={() => {
    signOut({ redirect: true, callbackUrl: "/sign-in" })
  }} src={src} alt="Profile photo" width={24} height={24} className={`w-[24px] h-[24px] cursor-pointer rounded-full ${className}`}></Image>
}

export default function DashboardHeader() {
  const session = useSession();
  return (
    <header className="p-4 w-full flex justify-between " >
      <section>

        <h1 className="text-2xl font-bold font-montserrat mr-auto">Dashboard</h1>
      </section>
      <section className="flex gap-4 h-max items-center">

        <form action="" className="rounded-full bg-white focus-within:border-4 overflow-hidden px-4 py-1 border-gray-800 inline-flex gap-1">

          <input type="search" name="" className=" placeholder-slate-500 w-[150px]" id="" placeholder="Search ..." />
          <Image src="/search_icon.svg" alt="Search Icon" height={14} width={14}></Image>
        </form>
        <Image src="/bell_icon.svg" alt="Notifications Icon" height={14} width={14}></Image>
        <Avatar className="text-black" src={session.data?.user?.image ?? "/test_user_avatar.svg"}

        ></Avatar>
        {/* <Image src="/search_icon.svg" alt="Search Icon" height={14} width={14}></Image> */}
      </section>

    </header>
  )
}