import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import toast from 'react-hot-toast';
import { app } from '../Firebase/Firbase';
import { Context } from '../Context/MainContext';
import { FcGoogle } from "react-icons/fc";





function Login() {

  const {userData,setUserdata}=useContext(Context)

  const navigate=useNavigate()



  const LoginHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
   
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        toast.success("Login Successfully" , {
          duration: 1200, 
        })

        setUserdata(user.accessToken)

        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        // toast.error("Something went wrong! Please try again.");


        const errorCode = error.code;


        
        if (errorCode === "auth/user-not-found") {
          toast.error("User not found! Please register first.");
        } else if (errorCode === "auth/wrong-password") {
          toast.error("Incorrect Password! Try again.");
        } else if (errorCode === "auth/invalid-email") {
          toast.error("Invalid Email Address!");
        } else {
          toast.error("Something went wrong! Please try again.");
        }
        const errorMessage = error.message;
      });
    

      event.target.reset();


  }



  const GoogleHandler=()=>{
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUserdata(user.accessToken);
        toast.success("Login with Google Successfully", {
          duration: 1200,
        });
        navigate("/");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;

        console.log(error);
        toast.error("Google Authentication Failed! Please try again.");


        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={LoginHandler}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder='Enter your email'
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
             placeholder='Enter your password'
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Login
        </button>



 

   
 
        <button
        onClick={GoogleHandler}
            type="button"
            className="w-full py-2 my-3 px-4 bg-black text-white rounded-md shadow hover:bg-gray-800 flex items-center justify-center gap-2"
          >
            <FcGoogle fontSize={25} /> Continue with google
          </button>



      </form>
      <div className="mt-4 text-center">
        <button className="text-sm text-black">
          Need an account?


          <Link to={"/register"} className='hover:underline p-1 text-blue-800'>
           
           Register here
          </Link>
        </button>
      </div>
    </div>
  </div>
  
  )
}

export default Login