import { Montserrat, Lato, Open_Sans } from "next/font/google"

export const montserrat =  Montserrat({
  subsets:["latin"],
  weight:["400", "700"],
  style:["normal"],
  display: 'swap',
  variable: '--font-family-montserrat',

})

export const lato =  Lato({
  subsets:["latin"],
  weight:["400", "700"],
  style:["normal"],
  display: 'swap',
  variable: '--font-family-lato',
})

export const opensans =  Open_Sans({
  subsets:["latin"],
  weight:["400", "700"],
  style:["normal"],
  display: 'swap',
  variable: '--font-family-opensans',
})