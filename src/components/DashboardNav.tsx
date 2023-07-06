"use client";

import Image from "next/image";

export default function DashboardNav() {
  return (
    <aside className="bg-black py-12 px-8 rounded-3xl font-montserrat flex flex-col gap-12 text-gray-200 min-w-[240px]" >
      <header>
        <p className="font-bold text-3xl text-white">Board.</p>
      </header>
      <nav>
        <ul className="flex flex-col gap-4 font-normal ">
          <li> <a className="inline-flex gap-4" href="">
            <Image src="/dashboard_icon.svg" alt="Dashboard icon" width={18} height={18}></Image>
            <span>Dashboard</span>
          </a> </li>
          <li> <a className="inline-flex gap-4" href="">
            <Image src="/transaction_icon.svg" alt="Transactions icon" width={18} height={18}></Image>
            <span>Transactions</span>
          </a> </li>
          <li> <a className="inline-flex gap-4" href="">
            <Image src="/schedule_icon.svg" alt="Schedule icon" width={18} height={18}></Image>
            <span>Schedules</span>
          </a> </li>
          <li> <a className="inline-flex gap-4" href="">
            <Image src="/user_icon.svg" alt="User icon" width={18} height={18}></Image>
            <span>Users</span>
          </a> </li>
          <li> <a className="inline-flex gap-4" href="">
            <Image src="/setting_icon.svg" alt="Settings icon" width={18} height={20}></Image>
            <span>Settings</span>
          </a> </li>

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