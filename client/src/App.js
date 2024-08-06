import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import MerchantForm from './components/MerchantForm';
import AddUsersToMerchant from './components/AddUsersToMerchant';
import ProductForm from './components/ProductForm';


const App = () => {
  return (
   <BrowserRouter>
     <Home />
     <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-merchant" element={<MerchantForm />} />
        <Route path='/add-users-to-merchant' element={<AddUsersToMerchant />} />
        <Route path='/create-product' element={<ProductForm />} />
     </Routes>
   
   </BrowserRouter>
  )
}

export default App
