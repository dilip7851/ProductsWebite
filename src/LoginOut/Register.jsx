import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/Firbase";
import toast from "react-hot-toast";

function Register() {

  const navigate=useNavigate()

  const RegisterHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...

        toast.success("Registered Successfully!", {
          duration: 1200, 
        });
        
        navigate("/login")
        
      })
      .catch((error) => {
        console.log(error);
        // toast.error("Email already in use!", {
        //   duration: 1200, 
        // });
        const errorCode = error.code;

        if (errorCode === "auth/email-already-in-use") {
          toast.error("Email already in use! Try another.");
        } else if (errorCode === "auth/weak-password") {
          toast.error("Password should be at least 6 characters.");
        } else if (errorCode === "auth/invalid-email") {
          toast.error("Invalid Email Address!");
        } else {
          toast.error("Something went wrong! Please try again.");
        }



        const errorMessage = error.message;
        // ..
      });



      event.target.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={RegisterHandler}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name "
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div> */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <button className="text-sm text-black">
            Already have an account?
            <Link to={"/login"} className="hover:underline p-1 text-blue-800">
              Login here
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
