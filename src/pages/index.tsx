import * as React from 'react';
import Dishes from '@/components/dishes';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import UserInfo from '@/components/userInfo';
import { QueryClient, QueryClientProvider } from "react-query";

export default function HomePage() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <main className='px-32'>
          <UserInfo />
          <Dishes />
        </main>
      </Layout>
      </QueryClientProvider >
    </>
  );
}
