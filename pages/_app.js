import { GlobalProvider } from "@utils/GlobalContext";
import "@styles/globals.css";
import { Inter } from '@next/font/google';
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" storageKey='theme'>
      {/* <GlobalProvider> */}
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      {/* </GlobalProvider> */}
    </ThemeProvider>
  )
}

export default MyApp