import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../Context/MainContext";


function Products({ slug, Rating, price }) {
  // jab uper url me shop hoga tab slug undfind hoga


  const {cart,setCart,toast}=useContext(Context)

  const [Products, setProducts] = useState([]); // api ka data  Storage  products
  const [limit, setLimit] = useState(30);
  const [Loading, setLoading] = useState(false);

  const getProductsApi = () => {
    let productsApiUrl;
    if (slug == undefined) {
      productsApiUrl = `https://dummyjson.com/products?limit=${limit}`;
    } else {
      productsApiUrl = `https://dummyjson.com/products/category/${slug}?limit=${limit}`; // yaha pe hamne jb slug ki value yani beauty hai to jo slug ke ander aa rha hai vi eske ander daal dege
    }

    axios
      .get(productsApiUrl)
      .then((success) => {
        const FinalData = success.data.products.filter(
          (ProductsDeta, index) => {
            if (
              ProductsDeta.rating >= Rating &&
              ProductsDeta.price >= price.from &&
              ProductsDeta.price <= price.to
            ) {
              return true;
            }
          }
        );
        setProducts(FinalData);
      })
      .catch((error) => {
        console.log(error);
      });
  };





  useEffect(
    () => {
      setLoading(true);
      getProductsApi(); //jb pages first time chale to componets re-render hoga or  api chaliga
      setTimeout(() => {
      setLoading(false);
        
      }, 3000);
    },
    [slug, limit, Rating, price] // jb bhi slug me changes aaye to tb getproductsApi chala do
  );

  return (
    <>
      <h1 className="pb-5 text-2xl ">Total Product : {Products.length}</h1>
      <div className="flex gap-5 flex-wrap">
        {Products.map((productsData, Index) => {
          return  Loading == true ? (
            
            <div className="flex justify-center items-center  bg-gray-100">
            <div className="w-80 p-6 bg-white rounded-lg shadow-md border border-gray-200">
              {/* Skeleton Card Header */}
              <div className="w-16 h-4 bg-gray-300 rounded mb-4 animate-pulse" />
              {/* Skeleton Image Placeholder */}
              <div className="w-full h-48 bg-gray-300 rounded-lg mb-4 animate-pulse" />
              {/* Skeleton Text */}
              <div className="w-3/4 h-4 bg-gray-300 rounded mb-2 animate-pulse" />
              <div className="w-1/2 h-4 bg-gray-300 rounded mb-2 animate-pulse" />
              {/* Skeleton Footer */}
              <div className="w-32 h-8 bg-gray-300 rounded-full animate-pulse" />
            </div>
          </div>
                    
          ) : (
            <ProductsCard key={Index} productsData={productsData}  setCart={setCart} cart={cart} toast={toast} />
          );
        })}
      </div>

      <div className="text-center m-5">
        <button
          onClick={() => setLimit(limit + 10)}
          className="text-white bg-blue-700 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Load More
        </button>
      </div>
    </>
  );
}

export default Products;

function ProductsCard({ productsData ,setCart,cart,toast }) {


  const AddCartHandler =()=>{

      const {id,title,price,category,thumbnail}=productsData

      const ProductDetails={ id,title,price,category,thumbnail , qty:1 }


      const matchCartData=cart.filter(
        (CartData,CartIndex) => {
          return CartData.id==ProductDetails.id
        }
      )

      if(matchCartData.length ==0){

        const FinalProductsDetails=[...cart,ProductDetails]
  
  
        setCart(FinalProductsDetails)
  
  
        toast.success('Product Added In Cart !', {
          duration: 1000, 
        });
      } else{
        toast.error('Product already add in cart !', {
          duration: 1000, 
        });
      }

  }


  return (
    <div className="w-[360px] max-w-sm bg-white border border-gray-300 rounded-lg shadow-xl">
      <Link to={`/products-Details/${productsData.id}`}>
        <img
          className="p-8 rounded-t-lg"
          src={productsData.thumbnail}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-black">
          {productsData.title}
        </h5>


        <h5 className="text-xl font-semibold tracking-tight text-black">
         Category : 
         
         <span className="border px-2 bg-cyan-600 m-2">
         {productsData.category}
         </span>
         
        </h5>

        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ">
            Rating :({productsData.rating})/5
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-black">
            ${productsData.price}
          </span>

          <button 
          onClick={AddCartHandler}
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
