import logo from "./logo.svg";
import "./App.css";
import { Input } from "./components/inputs";
import { Buttons } from "./components/buttons";
import { SignUp } from "./modules/auth/signup";
import { Register } from "./modules/auth/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllProducts } from "./modules/products/allProducts";
import { SingleProduct } from "./modules/products/singleProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/register" element={<Register />} />
          <Route path='/products' element={<AllProducts/>} />
          <Route path='/single_product/:id' element={<SingleProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
