import { AppProps } from 'next/app';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
// import '@/styles/colors.css';

import Layout from '@/components/layout/Layout';
import SideBar from '@/components/sidebar/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <SideBar ></SideBar>

    <Layout>
    

      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
