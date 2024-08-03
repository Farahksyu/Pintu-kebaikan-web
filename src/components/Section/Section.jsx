import Button from "../Button/Button";
function Section() {
  return (
    <>
      <div className="relative flex items-center justify-between text-text">
        <div className="relative h-full w-full ml-20">
          <img
            className="absolute h-96 -ml-28 -mt-32"
            src="src/assets/images/bg-ellipse.svg"
            alt=""
          />
          <img
            className="relative h-60"
            src="src/assets/images/Image.png"
            alt=""
          />
        </div>
        <div className="text-text mr-28">
          <h1 className="font-bold text-2xl">
            Bantu <span className="text-primary">Anak Yatim</span> sampai
            Mandiri
          </h1>
          <p className="mt-6 text-xl text-text">
            Bantu anak yatim sampai mandiri, dengan data tervalidasi dan laporan
            berkala
          </p>
          <div className="mt-6">
            <div className="flex border border-dotted rounded-lg">
              <img src="src/assets/icons/Sparkle.svg" alt="" />
              <button className="text-lg">
                Mustahiq dengan 34 parameter survey
              </button>
            </div>
            <div className="flex border border-dotted rounded-lg mt-6 mb-6">
              <img src="src/assets/icons/Sparkle.svg" alt="" />
              <button className="text-lg">Profil lengkap anak yatim</button>
            </div>
            <div className="flex border border-dotted rounded-lg">
              <img src="src/assets/icons/Sparkle.svg" alt="" />
              <button className="text-lg">
                Kemudahan lacak aktivitas report dan tracking
              </button>
            </div>
          </div>
          <div className="mt-6">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
export default Section;
