"use client";
import { UserData } from "@/data";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type ActivitesProps = {
  data: UserData["activities"],
}

const monthFormater = Intl.DateTimeFormat('en-us', {
  month: "short", year: "numeric"
})
const Activities: React.FC<ActivitesProps> = ({ data }) => {
  const [selection, setSelection] = useState(0);
  const chartData = data[selection].data;
  return <section>
    <article className="p-8 bg-white rounded-xl">
      <header>
        <h2 className="text-xl font-bold font-montserrat">Activities</h2>
      </header>
      <main>
        <section className="my-2 flex justify-between">
          <form action="" onSubmit={(e) => { e.preventDefault() }}>
            <select name="" id="" value={selection} onChange={(e) => setSelection(+e.target.value)}>
              {data.map((m, i) => (

                <option value={i} key={i}>{
                  monthFormater.formatRange(new Date(Date.UTC(2023, m.month, 0, 0, 0, 0)), new Date(Date.UTC(2023, m.month + 1, 0, 0, 0, 0)))
                }</option>
              ))}

            </select>
          </form>
          <section >
            <ul className="inline-flex gap-6">
              <li className="inline-flex items-center gap-1">
                <svg className="text-[#E9A0A0]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="5" fill="currentColor" />
                </svg>
                Guest
              </li>
              <li className="inline-flex items-center gap-1">
                <svg className="text-[#9BDD7C]" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="5" fill="currentColor" />
                </svg>
                User
              </li>
            </ul>
          </section>
        </section>
        <section>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              // width={300}
              // height={300}
              data={[{ user: 100, guest: 200 }, ...chartData, { user: 100, guest: 200 }]}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 0" />
              <XAxis dataKey="week" axisLine={false} tickLine={false}
              />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              {/* <Legend /> */}
              <Line type="monotone" dataKey="guest" stroke="#E9A0A0" activeDot={{ r: 8 }} strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="user" stroke="#9BDD7C" activeDot={{ r: 8 }} strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </section>
      </main>
    </article>
  </section>
}
export default Activities;