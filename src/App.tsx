import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import CartPage from "./pages/Cart";
import ReviewPage from "./pages/ReviewPage";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </div>
  );
};

export default App;
