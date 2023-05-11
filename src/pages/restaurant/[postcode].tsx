import Restaurant from '@/components/Restaurant';
import { NextPageContext } from 'next';
import React, { useState } from 'react';
import data from '../../../data/fake-data.json';

type Props = {
  restaurantList: []
}

export async function getServerSideProps(context: NextPageContext) {
  // const res = await fetch(`https://uk.api.just-eat.io/restaurants/bypostcode/${context.query.postcode}`);
  // const list = await res.json();
  const list = data;

  return {
    props: {
      restaurantList: list.Restaurants,
    },
  }
}


const Restaurants = ({ restaurantList }: Props) => {
  const [ filterIsOpen, setFilterIsOpen ] = useState(false);
  const [ filteredList, setFilteredList ] = useState([]);

  const handleClick = () => {
    // if (!filterIsOpen) return null;

    setFilteredList(restaurantList.filter((restaurant: {IsOpenNow: Boolean}) => restaurant.IsOpenNow));
    setFilterIsOpen(!filterIsOpen);
    console.log(filterIsOpen);
  }

  const listOfPlaces = filterIsOpen ? filteredList : restaurantList;

  const buttonClasses = {
    selected: "bg-blue-700 text-white",
    unselected: "border-blue-700 border-4 text-black"
  }

  return (
    <div>
      <h1 className='text-xl m-2 font-extrabold'>List of Restaurants</h1>
      <div className='my-2 flex'>
        <p className='m-2 font-semibold'>Filters:</p>
        <button className={`button rounded-full py-2 px-3 ${filterIsOpen ? buttonClasses.selected : buttonClasses.unselected}`} onClick={() => handleClick()}>Open Now</button>
      </div>
      <div  className='grid grid-cols-3 gap-2'>
      {listOfPlaces.map((restaurant, key) => (
          <Restaurant restaurant={restaurant} key={key} />
        ))}
      </div>
    </div>
  )
}

export default Restaurants;
