import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Shop from "../pages/Shop/Shop"

export const CustomRouter = () => {
    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Shop />} />
        <Route path="/search/:category" element={<Shop />} />
    </Routes>
    </BrowserRouter>
}