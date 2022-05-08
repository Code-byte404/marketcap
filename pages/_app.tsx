import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {MoralisProvider} from 'react-moralis'
import {CoinMarketProvider} from '../context/context'


function MyApp({ Component, pageProps }: AppProps) {
  console.log('server url = ',process.env.NEXT_PUBLIC_SERVER)
  console.log('server url = ',process.env.NEXT_PUBLIC_APP_ID)
  return (
    <MoralisProvider
    serverUrl="https://avvfbwjat4lr.usemoralis.com:2053/server"
    appId="GjHPFmVql4WX5ZqJyPhLDNC52imq39OWJRftlAsI"
    >
      <CoinMarketProvider>
          <Component {...pageProps} />
      </CoinMarketProvider>
      
    </MoralisProvider>)

}

export default MyApp
