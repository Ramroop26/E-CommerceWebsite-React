import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from "./pages/Home";
// import Man from "./pages/Man";
import AdminDashBoard from './AdminDashBoard';
import AddProduct from './adminpages/AddProduct';
import MyCart from './pages/MyCart';
import CheckOut from './pages/CheckOut';
import PaymentDone from './pages/PaymentDone';
import OrderList from './adminpages/OrderList';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
           <Route path="home" element={<Home/>}/>
           {/* <Route path="man" element={<Man/>}/> */}
            <Route path="mycart" element={<MyCart/>}/>
            <Route path="checkout" element={<CheckOut/>}/>
            <Route path="paydone" element={<PaymentDone/>}/>

          </Route>
        </Routes>

          <Routes>
             <Route path="/admin" element={<AdminDashBoard/>}>
              <Route path="addproduct" element={<AddProduct/>}/>
              <Route path="orderlist" element={<OrderList/>}/>  
                         
             </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;