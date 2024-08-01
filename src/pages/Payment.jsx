import React from "react";
import { NavLink } from "react-router-dom";

const Payment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Payment Page</h2>
        <p className="mb-4">Your payment was successful!</p>
        <NavLink to = "/"><button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go to Home
        </button></NavLink>
        
      </div>
    </div>
  );
};

export default Payment;
