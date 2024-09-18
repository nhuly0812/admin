import React from 'react'

function Textarea({dataAddTextarea}) {
  return (
   <>
    {dataAddTextarea.map((item, index)=>(
<div className='flex flex-col space-y-2' key={index}>
      <label>{item.label}</label>    
       <textarea rows={item.rows} cols={item.cols} placeholder={item.placeholder} className='border border-gray-300 py-2 px-2 rounded-lg'>
       </textarea>
      </div>
   ))}
   </>
   
)
}

export default Textarea