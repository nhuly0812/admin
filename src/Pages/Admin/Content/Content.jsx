import React from 'react'
import Item from './Item/Item'
import Chart from './Chart/Chart'
import Orders from '../Orders/Orders'


function Content() {
  return (
    <div className=''>
        <h1 className=' h-20 flex items-center ml-10 text-2xl '>Dashboard</h1>
        <Item/>
        <Chart/>
      
        <Orders/>

    </div>
  )
}

export default Content