import "../index.css";

const imageError = {
  name: "Error 404",
  src: "src/assets/error404.png",
  imageSize: "150px",
};

export default function Error() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>ERROR 404</h1>
        <p>No se encontró la ruta</p>
        <h2>D:</h2>
        <img
          src={imageError.src}
          alt={imageError.name}
          style={{ width: imageError.imageSize }}
        />
      </div>
    </>
  );
}
