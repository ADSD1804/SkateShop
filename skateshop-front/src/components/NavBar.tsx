import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";
import "../index.css";

const image = {
  name: "Logo",
  src: "/src/assets/Skateboard.png",
  imageSize: "100px",
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="col-md-12 d-flex justify-content-space-between align-items-center">
        <nav className="navbar" ref={navRef}>
          <img
            className="rounded-circle me-4"
            src={image.src}
            alt={image.name}
            style={{ width: image.imageSize }}
          />
          <h1 className="text-center ">SkateShop</h1>

          <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contactenos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
