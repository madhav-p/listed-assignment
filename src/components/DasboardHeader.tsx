"use client";

import Image from "next/image";

const Avatar = ({ src, className }: { src: string, className?: string }) => {
  return <Image src={src} alt="Profile photo" width={16} height={16} className={`rounded-full ${className}`}></Image>
}

export default function DashboardHeader() {
  return (
    <header className="p-4 w-full flex justify-between " >
      <section>

        <h1 className="text-2xl font-bold font-montserrat mr-auto">Dashboard</h1>
      </section>
      <section className="flex gap-4 h-max">

        <form action="" className="rounded-full bg-white focus-within:border-4 overflow-hidden px-4 py-1 border-gray-800 inline-flex gap-1">

          <input type="search" name="" className=" placeholder-slate-500 w-[150px]" id="" placeholder="Search ..." />
          <Image src="/search_icon.svg" alt="Search Icon" height={14} width={14}></Image>
        </form>
        <Image src="/bell_icon.svg" alt="Notifications Icon" height={14} width={14}></Image>
        <Avatar className="text-black" src="/user_icon.svg"></Avatar>
        {/* <Image src="/search_icon.svg" alt="Search Icon" height={14} width={14}></Image> */}
      </section>

    </header>
  )
}