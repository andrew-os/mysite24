import localFont from 'next/font/local'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from "@/components/Layout";

const standard = localFont({
  src: [
   {
      path: "../../public/fonts/standard-book-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/standard-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },

  ],
  variable: "--font-standard",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${standard.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}