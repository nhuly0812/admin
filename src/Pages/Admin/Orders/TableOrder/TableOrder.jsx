import React from 'react'

function TableOrder({dataOrders}) {
 
      return (
       <table className='w-full text-left table-auto border-collapse shadow-md bg-white mb-5'>
      <thead>
        <tr className='border-b border-gray-300 bg-blue-400 text-white'>
          <th className='p-3'>Client</th>
          <th className='p-3'>Order ID</th>
          <th className='p-3'>Amount</th>
          <th className='p-3'>Status</th>
          <th className='p-3'>Date</th>
        </tr>
      </thead>
      <tbody>
        {dataOrders.map((items) => (
          <tr key={items.orderId} className='border-b border-gray-300 hover:bg-gray-50'>
            <td className='flex items-center p-3'>
              <img src={items.image} className='w-8 h-8 object-cover mr-2' alt="Client"/>
              {items.client}
            </td>
            <td className='p-3'>#{items.orderId}</td>
            <td className='p-3'>${items.amount}</td>
            <td className='p-3'
            >
             <span className={`${
                items.status === 'Un-paid' ? 'px-3 py-1 rounded-full bg-red-100 text-red-800' :
                items.status === 'Completed' ? 'px-3 py-1 rounded-full bg-green-100 text-green-800' :
                items.status === 'Paid' ? 'px-3 py-1 rounded-full bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}> {items.status}</span>
            </td>
    
            <td className='p-3'>{items.dateCreated}</td>
          </tr>
        ))}
      </tbody>
    </table>
      )
}

export default TableOrder