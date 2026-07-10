import NavBar from "./components/NavBar.tsx";
import BurgerMenu from "./components/BurgerMenu.tsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="col-md-12 p-4 d-flex justify-content-space-between">
        <BurgerMenu />
        <NavBar />
      </div>
    </>
  );
}

export default App;
