import { SessionProvider } from 'next-auth/react'
import './globals.css'
import { montserrat, lato, opensans } from "@/fonts"
import SessionWraper from './Session'

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
        <SessionWraper >
          {children}
        </SessionWraper>
      </body>
    </html>
  )
}
