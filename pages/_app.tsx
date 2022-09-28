import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useUserStore } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  const user = useUserStore((state: any) => state.user);
  return <Component {...pageProps} user={user} />
}

export default MyApp
