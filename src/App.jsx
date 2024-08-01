// import { Routes } from "react-router-dom";
// import Navbar from "./components/Navbar"
// import { Route } from "react-router-dom";
// import Home from "./pages/Home"
// import Cart from "./pages/Cart"

// const App = () => {
//   return (<div>
//         <div className="bg-slate-900">
//           <Navbar/>
//         </div>
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/cart" element={<Cart/>} />
//         </Routes>
//   </div>)
// };

// export default App;
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Payment from './pages/Payment';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="">
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/payment" element={user ? <Payment /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;







