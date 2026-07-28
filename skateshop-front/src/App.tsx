import NavBar from "./components/NavBar.tsx";
import "./App.css";
import ContainerCards from "./components/ContainerCards.tsx";
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <div className="col-md-12 p-4 w-100 d-flex justify-content-space-between bg-info border border-2 border-gray rounded">
      <NavBar />
    </div>
    //  <Routes>
    //   <Route path="/" element={<ContainerCards />} />
    // </Routes>
  );
}
