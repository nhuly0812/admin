import React from 'react'
import Input from './Input/Input'
import Textarea from './Textarea/Textarea'

function AddProduct() {
  const dataAddInput=[
    {label:'Product Image', type:'file',style:"border-none -px-2" },
    {label:'Product Name', type:'text', placeholder:"Type product name here"},
    {label:'Product Price', type:'text',placeholder:"Enter product price here"},
    {label:'Stock Qunatity', type:'text', placeholder:"Enter product stock quality"},
  ]

  const dataAddTextarea =[
    {label:'Short description', placeholder:"Enter product shorrt description here", rows:"3",cols:"50" },
    {label:'Full description', placeholder:"Enter product stock quality",rows:"5",cols:"50"},
   
  ]
  return (
    <div className='flex justify-center'>
    <div className='w-[94%] flex flex-col'>
      <h1 className=' h-20 flex items-center text-2xl'>Add New Product</h1>

      <div className='bg-white w-[65%] space-y-5 p-5 shadow-lg rounded-lg'>
       <Input dataAddInput={dataAddInput}/>
       <Textarea dataAddTextarea={dataAddTextarea} />
      <button className='bg-blue-500 text-white px-5 py-3 rounded-lg'>
      <i className="fa-solid fa-plus px-1"></i> Add Product
      </button>
      </div>
        
    </div>
    </div>
  )
}

export default AddProduct