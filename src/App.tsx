import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/Cart";
import ReviewPage from "./pages/ReviewPage";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFoundError from "./components/Not-found";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </div>
  );
};

export default App;
