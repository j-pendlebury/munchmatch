import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { UrlObject } from 'url'

type Props = {
  restaurant: {
    Name: String,
    Postcode: String,
    Url: UrlObject,
    IsOpenNow: Boolean,
    LogoUrl: HTMLImageElement
  }
}

const Restaurant = ({ restaurant }: Props) => {
  return (
    <div className='p-2 border-2'>
      <Image src={restaurant.LogoUrl} alt={`${restaurant.Name} Logo`} width="100" height="100"></Image>
      <p className='text-lg font-bold'>{restaurant.Name}</p>
      <p>{restaurant.Postcode}</p>
      <p>{restaurant.IsOpenNow ? 'OPEN' : 'CLOSED'}</p>
      <Link href={restaurant.Url}>
        <button className='button rounded-full bg-red-100 p-2'>Go to {restaurant.Name}</button>
      </Link>
    </div>
  )
}

export default Restaurant
