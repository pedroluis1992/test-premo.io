import '@/styles/globals.css'
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const component = <Component {...pageProps} />
  return(
    <>
      <Layout/>
      {component}
      <Footer/>
    </>

  )
}
export default MyApp;
