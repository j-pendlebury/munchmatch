import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [postcode, setPostcode] = useState('');

  // useEffect(() => {
  //   setPostcode(postcode.split(' ').join('').toLowerCase())
  // }, [postcode])
  

  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className=" text-2xl m-4">Munch Match</h1>
      <input type='text' className='border-2 mb-2 p-2' placeholder="Enter PostCode here" onChange={(e) => setPostcode(e.target.value)} />
      <Link href={`/restaurant/${postcode.split(' ').join('').toLowerCase()}`}>
        <button className='bg-blue-700 text-white rounded-lg p-3'>Submit</button>
      </Link>
    </main>
  )
}
