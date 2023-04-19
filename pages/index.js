import Head from 'next/head'
import { Inter, Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Container } from '@chakra-ui/react'
import Employee from './Employee'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home({ employee }) {
  return (
    <>
      <Head>
        <title>Employee Contact & Payroll Manager</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Employee></Employee>
      </main>
    </>
  )
}
