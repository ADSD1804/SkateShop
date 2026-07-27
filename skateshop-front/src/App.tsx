import NavBar from "./components/NavBar.tsx";
// import BurgerMenu from "./components/BurgerMenu.tsx";
import "./App.css";
import ContainerCards from "./components/ContainerCards.tsx";

export default function App() {
  return (
    <>
      <div className="col-md-12 p-4 w-100 d-flex justify-content-space-between bg-info border border-2 border-gray rounded">
        <NavBar />
      </div>
      <div className="d-flex justify-content-center align-items-center min-vh-100 m-0">
        <ContainerCards />
      </div>
    </>
  );
}
