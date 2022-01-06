import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Dashboard from '../../../public/images/Dashboard.svg';
import Discount from '../../../public/images/Discount.svg';
import Home from '../../../public/images/Home.svg';
import Logout from '../../../public/images/Log Out.svg';
import Logo from '../../../public/images/Logo.png';
import Message from '../../../public/images/Message.svg';
import Notification from '../../../public/images/Notification.svg';
import Setting from '../../../public/images/Setting.svg';

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div className='bg-secondary fixed flex flex-col h-full items-center justify-between p-5 rounded-r-xl w-24'>
      <div className='logo'>
        <Link href='/' passHref>
          <Image src={Logo} className='h-24 mt-12 mx-auto w-24' alt='logo' />
        </Link>
      </div>

      <section className='flex flex-col h-full sidebar-links'>
        <Tooltip title='Home' placement='right-end'>
          <div className='pt-3 lg:pt-5 xl:pt-10'>
            <Link href='/' passHref>
              <a className={router.pathname == '/' ? 'active' : ''}>
                <Image
                  src={Home}
                  className='cursor-pointer h-24 w-24'
                  alt='logo'
                  height={25}
                  width={25}
                />
              </a>
            </Link>
          </div>
        </Tooltip>

        <Tooltip title='Discount' placement='right-end'>
          <div className='pt-3 lg:pt-5 xl:pt-10'>
            <Link href='/' passHref>
              <Image
                src={Discount}
                className='cursor-pointer h-24 mt-25 w-24'
                alt='logo'
                height={25}
                width={25}
              />
            </Link>
          </div>
        </Tooltip>

        <Tooltip title='Dashboard' placement='right-end'>
          <div className='pt-3 lg:pt-5 xl:pt-10'>
            <Link href='/' passHref>
              <Image
                src={Dashboard}
                className='cursor-pointer h-24 mt-12 w-24'
                alt='logo'
                height={25}
                width={25}
              />
            </Link>
          </div>
        </Tooltip>

        <Tooltip title='Message' placement='right-end'>
          <div className='pt-3 lg:pt-5 xl:pt-10'>
            <Link href='/' passHref>
              <Image
                src={Message}
                className='cursor-pointer h-24 mt-12 w-24'
                alt='logo'
                height={25}
                width={25}
              />
            </Link>
          </div>
        </Tooltip>

        <Tooltip title='Notification' placement='right-end'>
          <div className='pt-3 lg:pt-5 xl:pt-10'>
            <Link href='/' passHref>
              <Image
                src={Notification}
                className='cursor-pointer h-24 mt-12 w-24'
                alt='logo'
                height={25}
                width={25}
              />
            </Link>
          </div>
        </Tooltip>

        <Tooltip title='Setting' placement='right-end'>
          <div className='pt-3 lg:pt-5 xl:pt-10'>
            <Link href='/setting' passHref>
              <Image
                src={Setting}
                className='cursor-pointer h-24 mt-12 w-24'
                alt='logo'
                height={25}
                width={25}
              />
            </Link>
          </div>
        </Tooltip>
      </section>

      <div className='logout'>
        <Image
          src={Logout}
          className='cursor-pointer h-24 mt-12 mx-auto w-24'
          alt='logo'
          height={25}
          width={25}
        />
      </div>
    </div>
  );
}
