"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNav() {
  const pathname = usePathname()
  return (
    <aside className="bg-black py-12 px-8 rounded-3xl font-montserrat flex flex-col gap-12 text-gray-200 min-w-[240px]" >
      <header>
        <p className="font-bold text-3xl text-white">Board.</p>
      </header>
      <nav>
        <ul className="flex flex-col gap-4 font-normal ">
          <li> <Link className={`inline-flex gap-4 ${pathname === "/dashboard" && 'font-bold'}`} href="/dashboard">
            <Image src="/dashboard_icon.svg" alt="Dashboard icon" width={18} height={18}></Image>
            <span>Dashboard</span>
          </Link> </li>
          <li> <Link className={`inline-flex gap-4 ${pathname === "/transaction" && 'font-bold'}`} href="/transaction">
            <Image src="/transaction_icon.svg" alt="Transactions icon" width={18} height={18}></Image>
            <span>Transactions</span>
          </Link> </li>
          <li> <Link className={`inline-flex gap-4 ${pathname === "/schedule" && 'font-bold'}`} href="/schedule">
            <Image src="/schedule_icon.svg" alt="Schedule icon" width={18} height={18}></Image>
            <span>Schedules</span>
          </Link> </li>
          <li> <Link className={`inline-flex gap-4 ${pathname === "/user" && 'font-bold'}`} href="/user">
            <Image src="/user_icon.svg" alt="User icon" width={18} height={18}></Image>
            <span>Users</span>
          </Link> </li>
          <li> <Link className={`inline-flex gap-4 ${pathname === "/setting" && 'font-bold'}`} href="/setting">
            <Image src="/setting_icon.svg" alt="Settings icon" width={18} height={20}></Image>
            <span>Settings</span>
          </Link> </li>

        </ul>
      </nav>
      <aside className="mt-auto text-sm">
        <ul className="flex flex-col gap-3">
          <li><a href="">Help</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </aside>
    </aside>)
}