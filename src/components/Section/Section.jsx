import Button from "../Button/Button";
function Section() {
  return (
    <>
      <div className="flex items-center justify-between text-text p-10 mt-10">
        <div className="h-full ml-20">
          <img src="src/assets/images/Image.png" alt="" />
        </div>
        <div className="text-text mt-10 mr-10">
          <h1 className="font-semibold text-2xl">
            Bantu Anak Yatim sampai Mandiri
          </h1>
          <p className="mt-6 text-xl">
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
