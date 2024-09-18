import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { publicRoutes } from './Routes';
import AdminLayout from '~/Components/Layout/AdminLayout/index.jsx';
function App() {
  return (
 <Router>
    <div className=''>
        <Routes>
          {publicRoutes.map((route, index)=>{
            const Layout = route.layout || AdminLayout;
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
          })}
        </Routes>
    </div>
 </Router>
  )
}

export default App
