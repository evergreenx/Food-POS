import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Image from 'next/image';

export default function useDishes({ dishes }) {
  const [foodData, setFoodData] = useState([]);
  const APP_ID = '7eacc5e2';
  const API_KEY = '9a645d8682cce8be15d64b6eef45bccd';

  const url = `https://api.edamam.com/search?q=${dishes}&app_id=${APP_ID}&app_key=${API_KEY}`;
  // react query fetch
  const { data, error, status } = useQuery(dishes, () => axios.get(url));

  // console.log(data, dishes);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // function that creates random price
  function randomPrice(range: number) {
    return Math.floor(Math.random() * (range - 1) + 1);
  }

  return (
    <div className='grid gap-4 w-full sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4'>
      {data?.data?.hits?.map((i) => (
        <div
          key={i.recipe.label}
          className='bg-secondary flex flex-col food-card h-64 items-center justify-between mb-20 px-5 py-8 rounded-xl w-56'
        >
          <div className='-m-20 image-container'>
            <Image
              src={i.recipe.image}
              alt='food'
              className='rounded-full'
              height={140}
              width={140}
            />
          </div>

          <div className='food-details text-center'>
            <div className='food-card-title mt-5'>
              <p className='font-bold text-sm'>{i.recipe.label}</p>
            </div>

            <div className='food-card-price text-sm my-3'>${randomPrice(500)}</div>

            <div className='food-available text-LightText text-sm mt-3'>
              {randomPrice(10)} Bowls available
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
