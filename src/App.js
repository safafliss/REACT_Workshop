import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products1 from "./components/Products1";
import NavigationBar from "./components/NavigationBar";
import NotFound from "./components/NotFound";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/products" element={<Products1 />} />
        <Route path="/poducts/details/:name" element={<ProductDetail/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
