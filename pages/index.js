import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import Employee from './Employee'

export default function Home() {
  return (
    <>
      <Head>
        <title>Employee Contact & Payroll Manager</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Employee></Employee>
      </main>
    </>
  )
}
