import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Shop from "../pages/Shop/Shop"
import ProductDet from "../pages/ProductDet/ProductDet"
import Cart from "../pages/Cart/Cart"
import Checkout from "../pages/Checkout/Checkout"
import OrderSuccess from "../pages/OrderStatus/OrderSuccess"
import ScrollToTop from "../components/ScrollToTop"
import SignUp from "../pages/Auth/SignUp"

export const CustomRouter = () => {
    return <BrowserRouter>
    <ScrollToTop />
   <div>
   <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Shop />} />
        <Route path="/search/:category" element={<Shop />} />
        <Route path="/product/:productId" element={<ProductDet />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderSuccess" element={<OrderSuccess />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
   </div>
    
    </BrowserRouter>
}