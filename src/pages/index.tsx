import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import UserInfo from '@/components/UserInfo';

export default function HomePage() {
  return (
    <>
      <Layout>
        {/* <Seo templateTitle='Home' /> */}

        <main className='px-32'>
          <UserInfo />
        </main>
      </Layout>
    </>
  );
}
