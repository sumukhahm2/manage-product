
import './App.css';
import {Button} from 'react-bootstrap'
import Navigation from './Navigation'
import {Routes,Route} from 'react-router-dom'
import AddProduct from './AddProduct'
import AllProducts from './AllProducts'
import AdminProducts from './AdminProducts'
import Cart from './Cart'
import Order from './order'
function App() {
  return (
    <div>
      
      <header >
       <Navigation/>
      </header>
        <main>
          <Routes>
             <Route path='/shop' element={<AllProducts/>}/>
             <Route path='/products'/>
             <Route path='/add-product' element={<AddProduct/>}/>
             <Route path='/admin-products' element={<AdminProducts/>}/>
             <Route path='/cart' element={<Cart/>}/>
             <Route path='/orders' element={<Order/>}/>
          </Routes>
      </main>
    </div>
  );
}

export default App;
