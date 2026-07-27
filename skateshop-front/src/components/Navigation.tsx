export default function Navigation() {
  return (
    <div className="col-md-3 d-flex m-2">
      <ul className="col-md-12 list-unstyled d-flex justify-content-space-between align-items-center">
        <li className="col-md-3 d-flex justify-content-center align-items-center">
          <a className="text-reset text-decoration-none" href="/">
            Inicio
          </a>
        </li>
        <li className="col-md-3 d-flex justify-content-center align-items-center">
          <a className="text-reset text-decoration-none" href="/productos">
            Productos
          </a>
        </li>
        <li className="col-md-3 d-flex justify-content-center align-items-center">
          <a className="text-reset text-decoration-none" href="/carrito">
            Carrito
          </a>
        </li>
        <li className="col-md-3 d-flex justify-content-center align-items-center">
          <a className="text-reset text-decoration-none" href="/contacto">
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
}
