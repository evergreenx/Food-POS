import FetchDishes from '@/hooks/FetchDishes';
import Image from 'next/image';
import React from 'react';

import FoodImg from '../../../public/images/food.jpg';
export default function HotDishes() {
  return (
    <div className='flex'>
      <FetchDishes dishes={'hot dishes'} />
      {/* <FetchDishes dishes={'rice'} /> */}
    </div>
  );
}
