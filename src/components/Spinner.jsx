// import React from 'react'
// import "./Spinner.css";

// const Spinner = () => {
//   return (
//     <div className='flex justify-between items-center w-[100%] h-screen'>
//       <div className='spinner'></div>
//     </div>
//   )
// }

// export default Spinner
import React from 'react'
import "./Spinner.css";
export default function Loading() {
  return (
    <div className='flex w-full h-[100vh] justify-center items-center'>
        <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
</div>
    </div>
  )
}