import React from 'react'
import { useLocation } from 'react-router-dom'

function DetailProduct() {

  const location = useLocation();
  const product = location.state?.product; // Lấy sản phẩm từ state

  return (
    <div className='flex justify-center '>
      <div className='w-[94%] flex flex-col '>
      <h1 className=' h-20 flex items-center text-2xl'>Products Details</h1>
        <div className='flex justify-center items-center bg-white border border-gray-100 rounded-xl shadow-lg py-10'>
           <div className='w-[50%] max-h-96 flex justify-center'>
           <img src={product.image} className='max-h-96'/>
           </div>
           <div className='flex flex-col justify-center w-[50%] p-10'>
                <h2 className='font-bold text-3xl my-5'>{product.title}</h2>
                 <span className={`${
                product.status === 'Out of Stock' ? 'px-3 py-1 rounded-full bg-red-100 text-red-800' :
                product.status === 'In Stock' ? 'px-3 py-1 rounded-full bg-green-100 text-green-800':  
                'bg-gray-100 text-gray-800'} w-[20%] text-sm flex justify-center font-bold my-5`}>{product.status}</span>
                 <p>{product.description} <br/>
                 {product.description_detail}</p>
                 <span className=' text-2xl my-5 text-green-600 font-semibold'>${product.price}</span>
                 <p>Product Quantity :{product.product_quantity}</p>
           </div>
        </div>
        </div>
    </div>
  )
}

export default DetailProduct