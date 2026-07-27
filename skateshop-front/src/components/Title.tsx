const image = {
  name: "Logo",
  src: "/src/assets/Skateboard.jpg",
  imageSize: "80px",
};

export default function Title() {
  return (
    <div className="col-md-4 d-flex justify-content-space-between align-items-center p-2 m-2">
      <img
        className="rounded-circle me-4"
        src={image.src}
        alt={image.name}
        style={{ width: image.imageSize }}
      />
      <h1 className="text-center ">SkateShop</h1>
    </div>
  );
}
