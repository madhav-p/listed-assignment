import './globals.css'
import { montserrat, lato, opensans } from "@/fonts"

export const metadata = {
  title: 'Board App',
  description: 'NextJs Demo App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${opensans.variable} ${lato.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
