import { Routes, Route } from "react-router";
import Home from "./Home";
import Products from "./Products";
import Error from "./Error404";
import Contact from "./Contact";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
