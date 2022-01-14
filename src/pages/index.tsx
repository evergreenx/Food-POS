import * as React from 'react';
import Dishes from '@/components/dishes';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import UserInfo from '@/components/userInfo';

export default function HomePage() {
  return (
    <>
      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <main className='px-32'>
          <UserInfo />
          <Dishes />
        </main>
      </Layout>
    </>
  );
}
