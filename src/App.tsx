import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Store } from "./pages/Store/Store";
import { About } from "./pages/About/About";
import { ShoppingCart } from "./pages/Cart/Cart";
import { Navbar } from "./components/Navbar/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
