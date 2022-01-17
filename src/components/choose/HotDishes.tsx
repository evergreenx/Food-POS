import React from 'react';
import Image from 'next/image';
import FoodImg from '../../../public/images/food.jpg';

export default function HotDishes() {
  return (
    <div className='flex'>
      <div className='bg-secondary flex flex-col food-card h-64 items-center justify justify-between px-5 py-8 rounded-xl w-56'>
        <div className='-m-20 image-container'>
          <Image
            src={FoodImg}
            alt='food'
            className='rounded-full'
            height={140}
            width={140}
          />
        </div>

        <div className='food-details text-center'>
          <div className='food-card-title'>
            <p className='font-bold text-sm'>Spicy seasoned seafood noodles</p>
          </div>

          <div className='food-card-price text-sm'>$2.29</div>

          <div className='food-available text-LightText text-sm'>
            10 Bowls available
          </div>
        </div>
      </div>
    </div>
  );
}
