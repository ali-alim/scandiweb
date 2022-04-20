import Category from "./components/Category/Category";
import Navbar from "./components/Navbar/Navbar";
import CartPage from "./pages/CartPage/CartPage";
import ProductPage from "./pages/ProductPage/ProductPage";


function App() {
  return (
    <div>
      <Navbar />
      {/* <ProductPage /> */}
      <CartPage />
      {/* <Category /> */}
    </div>
  );
}

export default App;
