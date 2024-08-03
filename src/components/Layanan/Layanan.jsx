import Card from "../Card/Card";

function Layanan() {
  return (
    <>
      <div className="p-20 mt-10 text-center bg-[url('/src/assets/images/Image.png')] bg-no-repeat h-screen bg-cover bg-center">
        <h1 className="text-2xl text-light font-bold">Layanan Pintukebaikan</h1>
        <p className="text-xl text-light text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio
          beatae ullam molestias veritatis officiis, temporibus aliquid.
        </p>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
}

export default Layanan;
