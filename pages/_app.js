import '@/styles/globals.css'
import Providers from '@/Redux/Providers'
import React from '@heroicons/react'

export default function App({ Component, pageProps }) {
  return <>
      <Providers><Component {...pageProps} /></Providers>
    </>
}
