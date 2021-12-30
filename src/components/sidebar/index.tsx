import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <div className='h-full w-24 rounded-r-xl bg-secondary fixed'>



      <Link href="/">
        <a>Home</a>
      </Link>
      <br></br>
      <Link href="/setting">
        <a>setting</a>
      </Link>


    </div>
  )
}
