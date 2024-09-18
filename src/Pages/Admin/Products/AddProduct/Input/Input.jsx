import React from 'react'

function Input({dataAddInput}) {
  return (
    <div>
        {dataAddInput.map((item, index)=>(
        <div key={index} className='flex flex-col space-y-2'>
       <label>{item.label}</label>
       <input type={item.type} className={`${item.style} border border-gray-300 py-2 px-2 rounded-lg`} placeholder={item.placeholder} />
       </div>
       ))}
    </div>
    
  )
}

export default Input