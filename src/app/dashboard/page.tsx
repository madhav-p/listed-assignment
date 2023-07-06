import DashboardHeader from "@/components/DasboardHeader";
import DashboardNav from "@/components/DashboardNav";
import SummaryCard from "@/components/SummaryCard";
import Image from "next/image";
import getData, { UserData } from "@/data";
import Activities from "@/components/Activities";
import TopProducts from "@/components/TopProducts";


type SummariesProps = Awaited<ReturnType<typeof getData>>["summary"]

const Summaries: React.FC<SummariesProps> = ({ revenue, transactions, likes, users }) => {
  const currencyFormatter = new Intl.NumberFormat('en-us', { style: "currency", currency: "USD", maximumFractionDigits: 0 })

  const numberFormatter = new Intl.NumberFormat('en-us', {})
  return (<section className="grid gap-4 xl:grid-cols-4 md:grid-cols-2">
    <SummaryCard
      classname="bg-[#DDEFE0]"
      icon={{ src: "/total_revenue_icon.svg", alt: "Revenue icon" }}
      total={currencyFormatter.format(revenue)} title="Total Revenues" ></SummaryCard>
    <SummaryCard
      classname="bg-[#F4ECDD]"
      icon={{ src: "/total_transactions_icon.svg", alt: "Transctions icon" }}
      total={numberFormatter.format(transactions)} title="Total Transactions" ></SummaryCard>
    <SummaryCard
      classname="bg-[#EFDADA]"
      icon={{ src: "/total_likes_icon.svg", alt: "Like icon" }}
      total={numberFormatter.format(likes)} title="Total Likes" ></SummaryCard>
    <SummaryCard
      classname="bg-[#DEE0EF]"
      icon={{ src: "/total_users_icon.svg", alt: "Users icon" }}
      total={numberFormatter.format(users)} title="Total Users" ></SummaryCard>
  </section>)
}

type TodayScheduleProps = {
  data: UserData["schedule"]
}

const TodaySchedule: React.FC<TodayScheduleProps> = ({ data }) => {
  const COLORS = ["#9BDD7C", "#6972C3"]
  return (<article className="p-4 bg-white rounded-xl">
    <header className="flex justify-between">
      <h2 className="text-xl font-bold font-montserrat">Today&apos;s Schedule</h2>
      <section className="inline-flex gap-2 items-center">
        <small>See All</small>
        <Image alt={"Chevron icon right"}
          className="rotate-270"
          src={"/chevron_right_icon.svg"} width={6} height={6}></Image>
      </section>
    </header>
    <main className="flex flex-col gap-4 mt-4">
      {
        data.filter((v, i) => i < 2).map((s, i) => (

          <article key={i} style={{ borderColor: COLORS[i % COLORS.length] }} className={`border-l-4 px-2 py-1`}>
            <h3 className="text-lg font-lato font-bold">{s.title}</h3>
            <p className="text-sm">{s.from}-{s.to}</p>
            <p className="text-sm">at {s.location}</p>
          </article>
        ))
      }
      {/* <DashboardHighlight className="border-[#6972C3]" title="Check operation" duration="18.00-20.00" location="at Central Jakarta" ></DashboardHighlight> */}
    </main>
  </article>)
}

export default async function DashboardPage() {


  const { summary, activities, products, schedule } = await getData();

  return (
    <article className="bg-gray-100 h-screen p-8">
      <section className="flex overflow-hidden h-full gap-4">
        <DashboardNav></DashboardNav>
        <section className="w-full overflow-auto scroll-m-0">
          <DashboardHeader></DashboardHeader>
          <main className="flex flex-col gap-6 p-4">
            <Summaries {...summary}></Summaries>
            <Activities data={activities}></Activities>
            <section className="grid lg:grid-cols-2 gap-4">
              <TopProducts data={products}></TopProducts>
              <TodaySchedule data={schedule}></TodaySchedule>
            </section>
          </main>
        </section>
      </section>
    </article>
  )

}