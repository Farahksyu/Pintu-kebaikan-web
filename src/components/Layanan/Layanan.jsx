import Card from "../Card/Card";
import { dataCards } from "../../Data/ContentData";

function Layanan() {
  return (
    <>
      <div className="p-20 mt-10 text-center bg-[url('/src/assets/images/ImageHero.png')] bg-no-repeat h-screen bg-cover bg-center">
        <h1 className="text-2xl text-light font-bold">Layanan Pintukebaikan</h1>
        <p className="text-xl text-light text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio
          beatae ullam molestias veritatis officiis, temporibus aliquid.
        </p>
        <div className="flex flex-row justify-center gap-10">
          {dataCards.map(
            (
              dataCard,
              index //mapping harus ada datanya nah disini datanya di dataCards //dataCard merupakan bagian dari dataCards
            ) => (
              <Card
                key={index} //key(unique value untuk pembeda komponen (biasanya ada id jika tdk ada id bisa menggunakan index kalau datanya berbentuk array )) untuk mengambil semua data card
                title={dataCard.title}
                description={dataCard.description}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Layanan;
