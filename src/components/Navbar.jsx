// import {FaShoppingCart} from "react-icons/fa"
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {

//   const {cart} = useSelector((state) => state);

//   return (
//     <div >
//       <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

//         <NavLink to="/">
//           <div className="ml-5">
//           <img src="../logo.png" alt="" className="h-14"/>
//           </div>
//         </NavLink>

//           <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
//             <NavLink to="/">
//               <p>Home</p>
//             </NavLink>

//             <NavLink to="/cart">
//               <div className="relative">
//                   <FaShoppingCart className="text-2xl"/>
//                   {
//                     cart.length > 0 &&
//                     <span
//                     className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
//                     justify-center items-center animate-bounce rounded-full text-white" 
//                     >{cart.length}</span>
//                   }
                  
//               </div>
//             </NavLink>
            
//           </div>
//       </nav>
//     </div>
//   )
// };

// export default Navbar;
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="bg-slate-900">
        <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto px-5 lg:px-0">
      <NavLink to="/">
        <img src="../logo.png" alt="Logo" className="h-14" />
      </NavLink>
      <div className="flex items-center font-medium text-slate-100 space-x-6">
        <NavLink to="/" className="hover:text-green-400 transition duration-300">Home</NavLink>
        <NavLink to="/login" className="hover:text-green-400 transition duration-300">Login</NavLink>
        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </nav>
    </div>
  
  );
};

export default Navbar;
