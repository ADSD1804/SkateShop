import NavBar from "./components/NavBar.tsx";
import "./App.css";
import { BrowserRouter, Routes } from "react-router";
import Router from "./components/Router.tsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Router />
      </BrowserRouter>
    </>
  );
}
