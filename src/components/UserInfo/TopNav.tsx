import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function TopNav() {
  function addDate() {
    const date = new Date();
    const day = date.getUTCDate();
    const dayofWeek = date.getDay();

    const year = date.getFullYear();

    const dayString = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const shortMonth = date.toLocaleString('en-us', {
      month: 'short',
    });
    const dateString = `${dayString[dayofWeek]} , ${day} ${shortMonth} ${year}`;

    return dateString;
  }

  return (
    <header className='flex items-center justify-between'>
      <div className='p-4'>
        <h2>Jaegar Resto</h2>

        <time>{addDate()}</time>
      </div>

      <div className='border-2 border-inputBorder flex items-center px-4 py-3 rounded-lg space-x-6 focus:inputBorder'>
        <FaSearch className='text-xl' />

        <input
          type='text-sm'
          className='bg-bgprimary placeholder:text-LightText text-base focus:outline-none'
          placeholder='Search for food, coffe, etc'
        />
      </div>
    </header>
  );
}
