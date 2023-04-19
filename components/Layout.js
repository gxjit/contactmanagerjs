import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Container } from '@chakra-ui/react'

export default function Layout({ childen }) {
  return (
    <>
      <Head>
        <title>Employee Contact & Payroll Manager</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Container>{childen}</Container>
      </main>
    </>
  )
}
