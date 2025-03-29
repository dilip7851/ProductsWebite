import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/MainContext'

import { Link } from 'react-router-dom'

function CartDetails() {


  const {cart,setCart,toast}=useContext(Context)


  const [totalPrice,setTotalPrice]=useState(0)


  const getPrice=()=>{
    let total=0;

    cart.forEach( (CartPrice,CartIndex)=> {
       total=total+(CartPrice.price*CartPrice.qty)
      //  0=0+ (9*1)
    });

    setTotalPrice(total)
  }


  useEffect(
    ()=>{
      getPrice()
    },[cart]
  )


  return (
    <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

    {cart.length==0 ? <h2 className='text-center text-4xl my-5'>Not item  found!</h2> : ""}
  
    <div className="flex space-x-8">
      {/* Left Section: Cart Items Table */}
      <div className="w-2/3 overflow-x-auto">
        <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left text-sm font-semibold text-gray-700">Product</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-700">Category</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-700">Quantity</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-700">Price</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-700">Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* Cart Item 1 */}


            {



              cart.map(
                (CartData,CartIndex)=>{
                  return(

                    <CartRow key={CartIndex} CartData={CartData} CartIndex={CartIndex}  setCart={setCart} cart={cart} toast={toast}   totalPrice={totalPrice} />
                  )
                }
              )
            }
            
            
            
            
            
            
            
            
  
            {/* More items can be added in similar rows */}
          </tbody>
        </table>
      </div>
  
      {/* Right Section: Cart Summary */}
      <div className="w-1/3 p-6 bg-gray-50 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
  
        <table className="w-full table-auto">
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4 text-gray-700">PriceAllProducts</td>
              <td className="py-3 px-4 text-right text-gray-800">${totalPrice.toFixed(2)}</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 text-gray-700">Tax</td>
              <td className="py-3 px-4 text-right text-gray-800">{(totalPrice *10/100).toFixed(2)}</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 text-gray-700 font-semibold">FinalTotalPrice</td>
              <td className="py-3 px-4 text-right text-gray-800 font-semibold">${(totalPrice+(totalPrice *10/100)).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
  
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 mt-6">
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
  
  )
}

export default CartDetails



function CartRow ({CartData,CartIndex ,setCart ,cart,toast,totalPrice}) {




  const getQty=(event,index)=>{

      const NewQty=event.target.value;

    if(NewQty>0){

      const OldQty=[...cart];
      OldQty[index].qty=NewQty;
      setCart(OldQty)
    }

  }

 const CartDeleteBtn = (ClickIndexNumber)=> {


  const OldData=[...cart]

  OldData.splice(ClickIndexNumber,1)


  setCart(OldData)

  toast.success("Cart Item Remove !", {
    duration: 1000,
  })

 }





  return(
    
    <tr className="border-b hover:bg-gray-50 ">
  <Link to={`/products-Details/${CartData.id}`}>
    <td className="p-4 flex items-center">
      <img src={CartData.thumbnail} alt="Product Image" className="w-16 h-16 object-cover rounded-md mr-4" />
      <span className="text-gray-800">{CartData.title}</span>
    </td>
  </Link>
    <td className="p-4 text-gray-700">{CartData.category}</td>
    <td className="p-4">
      <div className="flex items-center gap-2">
        {/* <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded">-</button> */}
        <input
         type="number"
          className='w-16 border-2 border-black '
          value={CartData.qty}
           onChange={(e)=> getQty(e,CartIndex)}
        />
        {/* <span className="mx-3" defaultValue={CartData.qty}>1</span> */}
        {/* <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded">+</button> */}
      </div>
    </td>
    <td className="p-4 text-gray-800">${(CartData.price , totalPrice).toFixed(2)}</td>
    <td className="p-4">
      <button onClick={()=>CartDeleteBtn(CartIndex)} className=" border p-2 bg-red-500 text-white">Delete</button>
    </td>
  </tr>

  )
}