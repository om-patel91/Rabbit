import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import { Toaster } from 'sonner';
import Login from './pages/Login';
import Register from "./pages/Register";
import Profile from './pages/Profile';
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails"
import Checkout from "./components/Cart/Checkout"; 
import OrderConfirmation from "./pages/OrderConfirmation"
import OrderDetailsPage from './pages/OrderDetailsPage';
import MyOrdersPage from './pages/MyOrdersPage';

//Without index: only the layout shows on /.
//With index: the layout plus a default child (Home) shows on /.

const App = () => {
  return (

    <BrowserRouter>
    <Toaster position="top-right"/>
      <Routes>
      <Route path="/" element={<UserLayout/>}> 
      <Route index element={<Home/>} /> 
      {/* The index child means: when the path matches the parent exactly (/), also render <Home/> inside the parent’s <Outlet/>. */}
     <Route path="login" element={<Login/>}/>
     <Route path="register" element={<Register/>}/>
     <Route path="profile" element={<Profile/>}/>
     <Route path="collections/:collection" element={<CollectionPage/>}/>
     <Route path="product/:id" element={<ProductDetails/>}/>
     <Route path="checkout" element={<Checkout/>}/>
     <Route path="order-confirmation" 
     element={<OrderConfirmation/>}
     />
     <Route path="order/:id" element={<OrderDetailsPage/>}/>
     <Route path="my-orders" element={<MyOrdersPage/>}/>
      </Route>
      <Route>{ /* Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
