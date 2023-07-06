import Image from "next/image";

type SummaryCardProps = {
  title: string,
  total: string,
  icon: {
    src: string,
    alt: string,
  },
  classname: string

}

export default function SummaryCard({ title, total, icon: { src, alt }, classname }: SummaryCardProps) {
  return (
    <article className={`rounded-xl p-4 grid grid-cols-[1fr_max-content] ${classname}`}>
      <section>
        <h3 className="font-lato mt-6">{title}</h3>
        <p className="text-2xl font-bold font-opensans">
          {total}
        </p>
      </section>
      <section>
        <Image width={24} height={24}
          src={src} alt={alt}></Image>
      </section>
    </article>
  )
}