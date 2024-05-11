import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Component/Footer/Footer";
import men_banner from "./Component/Assets/banner_mens.png";
import women_baneer from "./Component/Assets/banner_women.png";
import kids_baneer from "./Component/Assets/banner_kids.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />}></Route>
          <Route
            path="/womens"
            element={<ShopCategory banner={women_baneer} category="women" />}
          ></Route>
          <Route path="/kids" element={<ShopCategory banner={kids_baneer} category="kid" />}></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
