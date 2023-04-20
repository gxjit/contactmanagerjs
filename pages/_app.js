// import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Montserrat, Raleway } from 'next/font/google'

// const raleway = Raleway({ subsets: ['latin'] })
// const montserrat = Montserrat({ subsets: ['latin'] })

// export const theme = extendTheme({
//   fonts: {
//     body: `${raleway.className}, system-ui, sans-serif`,
//     heading: `${montserrat.className}, Georgia, serif`,
//   },
// })
// theme={theme}

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
