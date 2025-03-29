import React, { useState } from 'react'
import Filter from '../Pages/Filter'
import Products from '../Pages/Products'
import { useParams } from 'react-router-dom'

function Shop() {

 const {slug} =useParams() // url se paramenter nikal liya
const [Rating,setRating]=useState(1)

const [price,setPrice]=useState({from:0 ,to:1000})

  return (
    <div className='grid grid-cols-6'>
        <div className='col-span-1 bg-blue-50'>
            <Filter slug={slug} Rating={Rating} setRating={setRating} price={price} setPrice={setPrice} />
        </div>

        <div className='col-span-5 bg-blue-100 p-3'>
         <Products slug={slug} Rating={Rating} price={price}   />
        </div>


    </div>


  )
}

export default Shop