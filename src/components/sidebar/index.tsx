import Image from 'next/image';
import Link from 'next/link';
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
  return (
    <div className='bg-secondary fixed flex flex-col h-full items-center justify-between p-5 rounded-r-xl w-24'>
      <div className='logo'>
        <Image src={Logo} className='h-24 mt-12 mx-auto w-24' alt='logo' />
      </div>

      <section className='flex flex-col h-full sidebar-links'>
        <div className='pt-3 lg:pt-5 xl:pt-10'>
          <Link href='/' passHref>
            <Image
              src={Home}
              className='cursor-pointer h-24 w-24'
              alt='logo'
              height={25}
              width={25}
            />
          </Link>
        </div>

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
