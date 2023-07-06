"use client";
import { UserData } from "@/data";
import { useState } from "react";
import { ResponsiveContainer, Cell, Pie, PieChart } from 'recharts';

type ActivitesProps = {
  data: UserData["products"],
}

const monthFormater = Intl.DateTimeFormat('en-us', {
  month: "short", year: "numeric"
})
const COLORS = ['#98D89E', '#F6DC7D', '#EE8484', '#6972C3'];
export default function TopProducts({ data }: ActivitesProps) {
  const [selection, setSelection] = useState(0);
  const chartData = data[selection].items;
  return (<article className="p-4 bg-white rounded-xl">
    <header className="flex justify-between">
      <h2 className="text-xl font-bold font-montserrat">Top Products</h2>
      <section className="inline-flex gap-2 items-center">
        <form action="" onSubmit={(e) => { e.preventDefault() }}>
          <select name="" id="" value={selection} onChange={(e) => setSelection(+e.target.value)}>
            {data.map((m, i) => (

              <option value={i} key={i}>{
                monthFormater.formatRange(new Date(Date.UTC(2023, m.month, 0, 0, 0, 0)), new Date(Date.UTC(2023, m.month + 1, 0, 0, 0, 0)))
              }</option>
            ))}

          </select>
        </form>
      </section>
    </header>
    <main className="grid grid-cols-2 gap-4 mt-4">
      <section className="w-[150px] h-[150px] mt-2">

        <ResponsiveContainer width={"100%"} height={"100%"}>

          <PieChart  >

            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={70}
              fill="#8884d8"
              dataKey="percentage"
            >

              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

          </PieChart>
        </ResponsiveContainer>
      </section>
      <section>
        <ul className="flex flex-col gap-2">
          {chartData.map((v, i) => (
            <li key={i} className="inline-flex gap-2">
              <svg style={{
                color: COLORS[i % COLORS.length]
              }} className="mt-2" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="currentColor" />
              </svg>
              <section>
                <h3 className="text-md font-bold font-montserrat">
                  {v.name}
                </h3>
                <p className="text-gray-700">
                  {v.percentage}%
                </p>
              </section>
            </li>
          ))}
        </ul>
      </section>
    </main>
  </article>)
}