
import Content from "../Pages/Admin/Content/Content";
import DetailProduct from "../Pages/Admin/Products/DetailProduct/DetailProduct";
import Orders from "../Pages/Admin/Orders/Orders";
import Products from "../Pages/Admin/Products/Products";
import EditProduct from "../Pages/Admin/Products/EditProduct/EditProduct";
import AddProduct from "../Pages/Admin/Products/AddProduct/AddProduct";


const publicRoutes =[
    {path: '/admin', component: Content},
    {path: '/orders', component: Orders},
    {path: '/products', component: Products},
    {path: '/add_product', component: AddProduct},
    {path: '/detail_product/:id', component: DetailProduct},
    {path: '/edit_product/:id', component: EditProduct},
    
]

const privateRoutes=[

]

export {publicRoutes, privateRoutes}