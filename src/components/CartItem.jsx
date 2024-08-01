import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart");
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-4 md:p-5 justify-between mt-2 mb-2 mx-4 md:mx-5 border-b-[3px] border-slate-500">
      <div className="flex flex-row items-center gap-4 md:gap-5">
        <div className="w-full md:w-[30%]">
          <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
        </div>
        <div className="w-full md:w-[70%] self-start space-y-4 md:space-y-5 ml-0 md:ml-5">
          <h1 className="text-lg md:text-xl text-slate-700 font-semibold">{item.title}</h1>
          <p className="text-sm md:text-base text-slate-700 font-medium">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <p className="text-green-600 font-bold text-lg">${item.price}</p>
            <button
              className="mt-2 md:mt-0 text-red-800 bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-2 md:p-3"
              onClick={removeFromCart}
            >
              <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;


// import { AiFillDelete } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import { toast } from "react-hot-toast";
// import { remove } from "../redux/Slices/cartSlice";

// const CartItem = ({ item }) => {
//   const dispatch = useDispatch();

//   const removeFromCart = () => {
//     dispatch(remove(item.id));
//     toast.error("Item Removed From Cart");
//   };

//   return (
//     <div className="flex flex-col lg:flex-row items-center p-5 justify-between mt-2 mb-2 mx-5 border-b-[3px] border-slate-500">
//       <div className="flex flex-row gap-5 items-center w-full">
//         <div className="w-1/3 lg:w-[30%]">
//           <img src={item.image} alt={item.title} className="object-cover" />
//         </div>
//         <div className="w-2/3 lg:w-[70%] self-start space-y-5 ml-5">
//           <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
//           <p className="text-base text-slate-700 font-medium">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</p>
//           <div className="flex items-center justify-between">
//             <p className="text-green-600 font-bold text-lg">${item.price}</p>
//             <button
//               className="text-red-800 bg-red-200 hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
//               onClick={removeFromCart}
//             >
//               <AiFillDelete size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;

