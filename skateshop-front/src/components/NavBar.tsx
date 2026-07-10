const image = {
  name: "Logo",
  src: "/src/assets/Skateboard.jpg",
  imageSize: "80px",
};

function NavBar() {
  return (
    <>
      <div className="col-md-4 d-flex justify-content-space-between border border-2 border-gray rounded p-2 m-2">
        <img
          className="rounded-circle me-4"
          src={image.src}
          alt={image.name}
          style={{ width: image.imageSize }}
        />
        <h1>Skate Shop</h1>
      </div>
      <div className="col-md-3 border border-2 border-gray rounded m-2">
        <input type="text" className="form-control" placeholder="Buscar..." />
      </div>
      <div className="col-md-3 d-flex border border-2 border-gray rounded m-2">
        <ul>
          <li className="d-flex justify-content-start">
            <a href="#">Inicio</a>
          </li>
          <li className="d-flex justify-content-start">
            <a href="#">Productos</a>
          </li>
          <li className="d-flex justify-content-start">
            <a href="#">Carrito</a>
          </li>
          <li className="d-flex justify-content-start">
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
