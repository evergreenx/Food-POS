import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import { useQuery } from 'react-query';

import FoodImg from '../../../public/images/food.jpg';
export default function HotDishes() {
  const intialQuery = 'hot dishes';
  //  env variables
  const apiKey = process.env.API_KEY;
  const apiID = process.env.API_ID;
  const url = `https://api.edamam.com/search?q=${intialQuery}&app_id=${apiID}&app_key=${apiKey}`;
  // react query fetch
  const { data, error, status } = useQuery('hotDishes', () =>
    axios.get(url)
  );



  console.log(data)
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
