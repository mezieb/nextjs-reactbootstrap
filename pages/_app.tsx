import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import SSRProvider from 'react-bootstrap/SSRProvider'
import Myfooter from '@/components/layouts/Myfooter'
import Mynavbar from '@/components/layouts/Mynavbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Mynavbar/>
  <Component {...pageProps} />
    <Myfooter/>
  </SSRProvider>
  )
}
