import React, { useContext, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

import toast from "react-hot-toast";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../Context/MainContext";

export default function Header() {

  const navigate=useNavigate()

  const location=useLocation()

  const {cart,setCart,userData,setUserdata}=useContext(Context)


  const LogoutHandler =()=>{
    localStorage.removeItem("token"); // Token ko udana
    setUserdata("");
  toast.success("Logout Successfully"); // Notification dena
  navigate("/login"); // Page redirect karna
  }



  useEffect(() => {
    if (userData=="" && location.pathname != "/register" ) {
      navigate("/login");
    }
    if (userData && location.pathname === "/login") {
      navigate("/");
    }
  }, [userData,location.pathname]);


  

  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-semibold">
        <Link className="text-white hover:text-gray-300">Products</Link>
      </div>

      <nav className="space-x-6 text-lg">

     <Link to={"/"}>
    
     <span className="hover:text-gray-300"> Home </span>
      
     </Link>


     
     <Link to={"/about"}>
    
     <span className="hover:text-gray-300"> About </span>
      
     </Link>

     
     <Link to={"/shop"}>
    
     <span className="hover:text-gray-300"> Shop </span>
      
     </Link>

       
      </nav>

      <div className="flex items-center space-x-4">
            <div className="relative">
                <Link to={"/Cart-Details"}>
              <button className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
                <FaShoppingCart className="h-6 w-6" />
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2">
                  {cart.length}
                </span>
              </button>
                </Link>
            </div>
            <button onClick={()=>setCart([])} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Clear Cart
            </button>

          {
            !userData ?   // user! "" ,undefined,& null hai to login wala btn show or nhi to logout wala

          <Link to={"/login"}>
          
          <button className="bg-blue-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Login
            </button>

          </Link>

          :

          <button onClick={LogoutHandler } className="bg-gray-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              LogOut
            </button>
          }


  


        


            
          </div>
    </header>


  );
}
