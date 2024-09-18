import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TableOrder from './TableOrder/TableOrder';

function Orders() {
  const dataOrders =[
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "John Doe",
      orderId: 12345,
      amount: 150,
      status: "Un-paid",
      dateCreated: "01/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Jane Doe",
      orderId: 12346,
      amount: 200,
      status: "Paid",
      dateCreated: "02/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Tom Smith",
      orderId: 12347,
      amount: 120,
      status: "Paid",
      dateCreated: "03/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Anna Lee",
      orderId: 12348,
      amount: 250,
      status: "Paid",
      dateCreated: "04/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Max Wong",
      orderId: 12349,
      amount: 180,
      status: "Completed",
      dateCreated: "05/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Emily Zhang",
      orderId: 12350,
      amount: 300,
      status: "Completed",
      dateCreated: "06/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Michael King",
      orderId: 12351,
      amount: 400,
      status: "Paid",
      dateCreated: "07/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Sarah Carter",
      orderId: 12352,
      amount: 220,
      status: "Paid",
      dateCreated: "08/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Lisa Brown",
      orderId: 12353,
      amount: 130,
      status: "Completed",
      dateCreated: "09/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "David Green",
      orderId: 12354,
      amount: 290,
      status: "Un-paid",
      dateCreated: "10/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Harry White",
      orderId: 12355,
      amount: 310,
      status: "Completed",
      dateCreated: "11/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Megan Blue",
      orderId: 12356,
      amount: 180,
      status: "Un-paid",
      dateCreated: "12/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Peter Black",
      orderId: 12357,
      amount: 240,
      status: "Paid",
      dateCreated: "13/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Oliver Grey",
      orderId: 12358,
      amount: 170,
      status: "Completed",
      dateCreated: "14/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Chloe Smith",
      orderId: 12359,
      amount: 260,
      status: "Un-paid",
      dateCreated: "15/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Jackson Tan",
      orderId: 12360,
      amount: 390,
      status: "Paid",
      dateCreated: "16/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Olivia Moon",
      orderId: 12361,
      amount: 270,
      status: "Completed",
      dateCreated: "17/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Ethan Hill",
      orderId: 12362,
      amount: 350,
      status: "Un-paid",
      dateCreated: "18/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Mia Harper",
      orderId: 12363,
      amount: 290,
      status: "Completed",
      dateCreated: "19/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Lucas Wright",
      orderId: 12364,
      amount: 210,
      status: "Un-paid",
      dateCreated: "20/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Noah King",
      orderId: 12365,
      amount: 250,
      status: "Completed",
      dateCreated: "21/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Lily Evans",
      orderId: 12366,
      amount: 320,
      status: "Paid",
      dateCreated: "22/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Liam Wood",
      orderId: 12367,
      amount: 280,
      status: "Paid",
      dateCreated: "23/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Emma Stone",
      orderId: 12368,
      amount: 340,
      status: "Completed",
      dateCreated: "24/01/2024",
    },
    {
      image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
      client: "Ava White",
      orderId: 12369,
      amount: 360,
      status: "Un-paid",
      dateCreated: "25/01/2024",
    },
  ]

    const location = useLocation();
    const showSelect = location.pathname === '/orders';
  
    const [filterStatus, setFilterStatus] = useState('all'); // Thêm trạng thái cho bộ lọc
  
    // Hàm xử lý khi thay đổi giá trị lọc
    const handleFilterChange = (e) => {
      setFilterStatus(e.target.value);
    };
  
    // Lọc dữ liệu dựa trên giá trị filterStatus
    const filteredOrders = filterStatus === 'all' 
      ? dataOrders 
      : dataOrders.filter(order => order.status === filterStatus);
  
    return (  
      <div className='flex justify-center'>
        <div className='flex flex-col w-[94%]'>
          <h1 className=' h-20 flex items-center text-2xl'>Orders</h1>
          {showSelect && ( 
            <div className='bg-white h-20 shadow-md mb-5 flex items-center px-5 gap-5 rounded-lg'>
              <span className='text-gray-500'>Filter Orders</span>
              <select 
                className='border px-2 py-3 border-gray-200 w-40 rounded-lg'
                value={filterStatus}
                onChange={handleFilterChange} // Gọi hàm khi thay đổi giá trị
              >
                <option value="all">All</option>
                {[...new Set(dataOrders.map(item => item.status))].map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          )}
          <TableOrder dataOrders={filteredOrders} /> {/* Truyền danh sách đã lọc */}
        </div> 
      </div>
    );
  }
  
  export default Orders;
  