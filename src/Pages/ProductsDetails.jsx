import axios from 'axios';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react'
import { CgLaptop } from 'react-icons/cg';
import { useParams } from 'react-router-dom'
import { Context } from '../Context/MainContext';

function ProductsDetails() {

  const {cart,setCart}=useContext(Context)
  
    const {Products_id}=useParams();

    const [ProductDetails,setDetails]=useState({})



    const  getProductsDetails=()=>{
    axios.get(`https://dummyjson.com/products/${Products_id}`)
    .then(
        (success)=>{
            setDetails(success.data);
        }
    ).catch(
        (error)=>{

        }
    )
    }

  


    // const ProductsDetailsAddCart =()=>{

    //   const { id, title, price, category, thumbnail } = ProductDetails;

    //  const productDetails = { id, title, price, category, thumbnail, qty: 1 };

    //  const updatedCart = [...cart];


    //  setCart(updatedCart)

    // }




    useEffect(
        ()=>{
            getProductsDetails()
        },[]
    )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 py-12">
      <Link to={"/shop"}>
      <div>
           <h1 className='text-4xl border rounded-full border-gray-500 inline-block cursor-pointer'><FaArrowLeftLong /></h1>
      </div>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="w-full max-w-md mx-auto">
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src={ProductDetails.thumbnail}
              alt=""
            />
          </div>

          <div className="flex space-x-4 overflow-x-auto">
          
              <div  className="w-1/4 flex gap-2 m-4">
              {
                 ProductDetails?.images?.map(
                    (img)=>{
                      return(
                        <img
                        className="w-full  h-auto rounded-lg shadow-md cursor-pointer"
                        src={img}
                        alt=""
                      />
                      )
                    }
                 )
              }
               
              </div>
         
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{ProductDetails.title}</h1>
          <p className="text-xl font-semibold text-gray-700">${ProductDetails.price}</p>

          <h5 className="text-xl font-semibold tracking-tight text-black">
         Category : 
         
         <span className="border px-2 text-white bg-cyan-600 m-2">
         {ProductDetails.category}
         </span>
         
        </h5>

          <div className="flex items-center">
            {/* {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`w-5 h-5 ${index < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
              />
            ))} */}


          <p className="text-xl font-semibold text-gray-700"> Rating : ({ProductDetails.rating})/5</p>

            <span className="ml-2 text-gray-500"> reviews:</span>
          </div>

          {/* Description */}
          <p className="text-gray-600">{ProductDetails.description}</p>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <button
            
          // onClick={ProductsDetailsAddCart}

            
            onClick={()=> setCart(cart+1)}
            
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetails