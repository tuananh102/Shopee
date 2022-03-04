import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from './pages/ProductDetails'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Home />}></Route>
      <Route path="/products/:id" element={<ProductDetails />}></Route>
    </Routes>
  );
}

export default App;
