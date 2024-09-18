import { useLocation } from 'react-router-dom';

function EditProduct() {
    
  const location = useLocation();
  const product = location.state?.product; // Lấy sản phẩm từ state

  return (
    <div>
       <h2>
       {product.title}
       </h2>
    </div>
  )
}

export default EditProduct