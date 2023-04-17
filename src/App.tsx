import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Product /> }/>
        <Route path='/add-product' element={<AddProduct />} />
      </Routes>
    </Router>
  )
}

export default App
