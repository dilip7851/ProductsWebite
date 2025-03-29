import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Filter({slug,Rating,setRating,price,setPrice}) {

  const [Category, SetCategory] = useState([]); // api ka data  Storage  Category

  const getCategoryApi = () => {
    axios
      .get(`https://dummyjson.com/products/categories`)  //eske piche hi aa rha hai slug
      .then((success) => {
        SetCategory(success.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const PriceFrom=(event)=>{

    setPrice({...price,from:event.target.value})
  }

  const PriceTo=(event)=>{
    setPrice({...price,to:event.target.value})
    
  }



  useEffect(() => {
    getCategoryApi(); //jb pages first time chale to componets re-render hoga or  api chaliga
  }, []);

  return (

   <>

   {/* Filter by Rating  start*/}
    <div className=' p-3'>
        <h1 className='text-2xl pb-2'>Filter By Rating</h1>
        <h2 onClick={()=> setRating(4)} className={`border  border-gray-300  ${Rating==4 ? 'bg-blue-600 text-white' : ''}  p-1 cursor-pointer mb-2 shadow-inner `}>4 ⭐ & Above</h2>

        <h2 onClick={()=> setRating(3)}  className={`border  border-gray-300  ${Rating==3 ? 'bg-blue-600 text-white' : ''}  p-1 cursor-pointer mb-2 shadow-inner `}>3 ⭐ & Above</h2>

        <h2 onClick={()=> setRating(2)}  className={`border  border-gray-300  ${Rating==2 ? 'bg-blue-600 text-white' : ''}  p-1 cursor-pointer mb-2 shadow-inner `}>2 ⭐ & Above</h2>

        <h2 onClick={()=> setRating(1)}  className={`border  border-gray-300  ${Rating==1 ? 'bg-blue-600 text-white' : ''}  p-1 cursor-pointer mb-2 shadow-inner `}>1 ⭐ & Above</h2>
    </div>

   {/* Filter by Rating End */}


   {/* Filter By price start */}
  <div className="mx-2" >
  <h1 className='text-2xl pb-2 ps-2'>Filter By Price</h1>

      <div className="flex justify-between items-center  m-3 w-48">
        <input onChange={PriceFrom} type="number" placeholder="from" className="border rounded-lg w-20 p-2" value={price.from} />
        to
        <input onChange={PriceTo} type="number" placeholder="to" className="border rounded-lg w-20 p-2" value={price.to} />
      </div>
  </div>



   {/* Filter By price End */}


   

   {/* Filter by Category start */}
    <div className="p-3">
      <h1 className="text-2xl pb-2">Filter by Category</h1>
      <Link to={"/shop"}>
      <h1 className={`border border-black p-2 cursor-pointer my-3 ${slug==undefined ? ' bg-blue-800 text-white' : ''}`}>All Category</h1>
      </Link>
      {Category.map((categoryData, index) => {
        return (
            <Link    to={`/shop/${categoryData.slug}`}   key={index} >
          <div  className={`border border-gray-400 p-2 cursor-pointer my-3 ${categoryData.slug == slug ? 'bg-blue-800  text-white' :'' } `}>
            {categoryData.name}
          </div>
            </Link>
        );
      })}
    </div>
   
   {/* Filter by Category End */}



   </>

  );
}

export default Filter;
