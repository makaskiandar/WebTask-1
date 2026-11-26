
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Home from "./Pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
