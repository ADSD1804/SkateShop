const imageCard = {
  name: "Wave Deck",
  src: "src/assets/products/decks/deck_wave.png",
  imageSize: "120px",
  price: "120000",
};

export default function ContainerCards() {
  return (
    <div className="containerCard col-md-12 d-flex justify-content-center align-items-center p-2 m-2">
      <div className="card col-md-3 d-flex justify-content-center align-items-center p-2 m-2">
        <img
          src={imageCard.src}
          alt={imageCard.name}
          style={{ width: imageCard.imageSize }}
        />
        <p className="h2">{imageCard.name}</p>
        <p>Precio: {imageCard.price}</p>
      </div>
    </div>
  );
}
