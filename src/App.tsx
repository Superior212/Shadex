import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import CartPage from "./pages/Cart";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
