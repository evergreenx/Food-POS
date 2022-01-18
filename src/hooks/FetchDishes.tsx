import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function useDishes({ dishes }) {
  const APP_ID = '7eacc5e2';
  const API_KEY = '9a645d8682cce8be15d64b6eef45bccd';
  const url = `https://api.edamam.com/search?q=${dishes}&app_id=${APP_ID}&app_key=${API_KEY}`;
  // react query fetch
  const { data, error, status } = useQuery(dishes, () => axios.get(url));

  console.log(data , dishes);

  return <div>

    hello
  </div>;
}
