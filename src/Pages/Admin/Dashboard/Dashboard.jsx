import React from 'react'
import { Link } from 'react-router-dom'


function Dashboard() {
  const dataIcon1 =[
    {icon:'fa-solid fa-house', label:'Dashboard',link:"/admin"},
    {icon:'fa-solid fa-cart-shopping', label:'Orders',link:"/orders"},
    {icon:'fa-solid fa-cart-flatbed', label:'Products',link:"/products"},
    {icon:'fa-solid fa-users', label:'Customers'},

  ]
  const dataIcon2=[
    {icon:'fa-solid fa-user', label:'Profile'},
    {icon:'fa-solid fa-gear', label:'Settings'},
    {icon:'fa-solid fa-right-from-bracket', label:'Logout'},

  ]
  return (
    <div className='w-[15%] h-screen '>
    <div className='h-20 flex pl-9 items-center'>
      <img className='w-[40px]' src='../../../../public/images/logo.png'/>
      <p className='pt-5'>E-Commerce</p>
    </div>
       <div className='flex flex-col text-gray-600 '>
       <ul className=''>
            {dataIcon1.map((item,index)=>(
              <li key={index}
              >
              <Link to={item.link} className="h-14 flex items-center gap-3 pl-9 text-gray-500 hover:text-black border-l-4 border-transparent hover:border-blue-500"><i className={item.icon}></i>{item.label}</Link>
            </li>
            ))}
        </ul>
         <hr className='mt-5 mb-5 '/>
         <ul className=''>
         {dataIcon2.map((item,index)=>(
          <li key={index}
              className="h-14 flex items-center gap-3 pl-9 text-gray-500 hover:text-black border-l-4 border-transparent hover:border-blue-500">
              <i className={item.icon}></i>{item.label}
            </li>
            ))}
         </ul>

         <div className='pl-9 mt-5 text-sm'>
         <button className='bg-blue-500 w-40 flex justify-center h-10 items-center text-white font-bold rounded-xl gap-2'>Genarate Repost <i className="fa-solid fa-plus"></i></button>
         </div>
       </div>


    </div>
  )
}

export default Dashboard