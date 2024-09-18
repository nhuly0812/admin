import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const dataProducts = [
    {
      id: 1,
      image: 'https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2020/04/thuoc-nho-mat-new-vrohto.jpg',
      title: 'Eye Drops',
      status: 'In Stock',
      price: '200',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',

      description_detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",
      product_quantity: "120"
    },
    {
      id: 2,
      image: 'https://shipthuocnhanh.vn/images/upload/images/Lacrifresh_ocu-dry_0-20.jpg',
      title: 'Vitamin C Tablets',
      status: 'Out of Stock',
      price: '150',
      description: 'High-quality Vitamin C tablets to boost your immune system.',

      description_detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",
      product_quantity: "120"
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      title: 'Pain Reliever',
      status: 'In Stock',
      price: '300',
      description: 'Effective pain reliever for headaches and muscle pain.',

      description_detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",
      product_quantity: "120"
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      title: 'Cough Syrup',
      status: 'In Stock',
      price: '250',
      description: 'Relieves cough and soothes your throat.',

      description_detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",
      product_quantity: "120"
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/150',
      title: 'Antibiotic Ointment',
      status: 'Out of Stock',
      price: '180',
      description: 'Ointment to treat minor cuts and scrapes.',

      description_detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",
      product_quantity: "120"
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/150',
      title: 'Allergy Pills',
      status: 'In Stock',
      price: '220',
      description: 'Relieves symptoms of allergies like sneezing and itching.',

      description_detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",
      product_quantity: "120"
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/150',
      title: 'Multivitamins',
      status: 'In Stock',
      price: '400',
      description: 'Comprehensive multivitamins for daily health.',

      description_detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",
      product_quantity: "120"
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/150',
      title: 'Cold Medicine',
      status: 'Out of Stock',
      price: '270',
      description: 'Medicine to relieve cold symptoms and promote recovery.',

      description_detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",
      product_quantity: "120"
    },
    {
      id: 9,
      image: 'https://via.placeholder.com/150',
      title: 'Digestive Enzyme',
      status: 'In Stock',
      price: '350',
      description: 'Aids in digestion and reduces bloating.',

      description_detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",
      product_quantity: "120"
    },
    {
      id: 10,
      image: 'https://via.placeholder.com/150',
      title: 'Eye Cream',
      status: 'In Stock',
      price: '500',
      description: 'Nourishes and rejuvenates the delicate skin around the eyes.',

      description_detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor sit amet consectetur adipisicing elit., eaque. Porro dolorem asperiores eos nostrum corrupti! Sit officia distinctio quidem amet nulla",
      product_quantity: "120"
    },
  ];
  
  const [isOpen, setIsOpen] = useState(false);

  // useEffect để lắng nghe sự thay đổi của isOpen
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Vô hiệu hóa cuộn trang khi mở modal
    } else {
      document.body.style.overflow = 'auto'; // Bật lại cuộn trang khi đóng modal
    }

    return () => {
      document.body.style.overflow = 'auto'; // Đảm bảo khôi phục lại cuộn trang khi component bị huỷ
    };
  }, [isOpen]);

  // Hàm để mở modal
  const openModal = () => setIsOpen(true);

  // Hàm để đóng modal
  const closeModal = () => setIsOpen(false);

  // Hàm xử lý hành động xóa
  const handleDelete = () => {
    console.log("Item deleted");
    closeModal(); // Đóng modal sau khi xác nhận xóa
  };
  return (
  <div className='flex justify-center'>
      <div className='w-[94%] flex flex-col'>
      <h1 className=' h-20 flex items-center text-2xl '>Products</h1>

      <Link to={'/add_product'} className='flex justify-end items-center mb-3'>
      <button className='bg-blue-500 w-20 h-10 text-white rounded-lg'>ADD</button>
      </Link>

       {/* <div className='bg-white h-20 shadow-md mb-5 flex items-center px-5 gap-5 rounded-lg'>
      <span className='text-gray-500'>Filter Orders</span>
  <select className='border px-2 py-3  border-gray-200 w-40 rounded-lg'>
  <option value="all">All</option>
  {[...new Set(dataOrders.map(item => item.status))]
    .map((status, index) => (
      <option key={index} value={status}>
        {status}
      </option>
    ))}
</select>
    </div> */}
    <div className='grid grid-cols-4 gap-5'>
    {dataProducts.map((item, index) => (
      <div className='bg-white p-4 border rounded-lg box-border shadow-lg' key={index}>
        <img src={item.image} className='w-60 h-auto mx-auto' alt={item.title} />
        <div className='mt-4 flex justify-between'>
          <h4 className='text-lg font-bold'>{item.title}</h4>
          <span className='text-gray-500'>{item.status}</span>
        </div>
        <span className='block mt-2 text-green-600 font-semibold'>${item.price}</span>
        <p className='mt-2 text-sm text-gray-600'>{item.description}</p>

        <div className='flex justify-between mt-2'>
      <Link to={`/detail_product/${item.id}`} state={{ product: item }} >
      <div className='bg-blue-500 h-9 w-10 flex items-center justify-center rounded-lg hover:bg-blue-400'> <i className="fa-solid fa-eye text-white text-xs"></i>
      </div>
      </Link>

          <div className='flex gap-1 text-gray-500'>
         <Link to={`/edit_product/${item.id}`} state={{ product: item }}>
         <i className="fa-solid fa-pen border border-gray-200 h-9 w-10 flex items-center justify-center rounded-lg text-xs hover:border-gray-300 hover:text-gray-700"></i>
         </Link>
          <i onClick={openModal} className="fa-solid fa-trash-can border border-gray-200 h-9 w-10 flex items-center justify-center rounded-lg text-xs hover:border-gray-300 hover:text-gray-700"></i>
          </div>
        </div>
      </div>
    ))}
  </div>
  {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          {/* Modal Content */}
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
            <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
            <p className="text-gray-600 mb-6">
              Do you really want to delete this item? This process cannot be undone.
            </p>

            <div className="flex justify-end space-x-4">
              {/* Nút Cancel */}
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded" onClick={closeModal}>
                Cancel
              </button>

              {/* Nút Confirm Delete */}
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  </div>
  )
}

export default Products