import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Admin from "./pages/Admin";

export default function App(){
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products" element={<Navigate to="/category/all" replace />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
