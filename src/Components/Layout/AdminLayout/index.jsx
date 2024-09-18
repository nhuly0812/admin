import Dashboard from '../../../Pages/Admin/Dashboard/Dashboard'
import Search from '../../../Pages/Admin/Search/Search'

function Admin({children}) {
  return (
      <div  className='w-full flex'>
      <Dashboard/>
     <div className='w-[85%] h-auto'>
     <Search/>
     <div className='bg-gray-50 min-h-screen'>{children}</div>
     </div>

      </div>

  );
}

export default Admin