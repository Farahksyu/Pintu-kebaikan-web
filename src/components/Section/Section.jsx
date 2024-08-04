import Button from "../Button/Button";
function Section() {
  return (
    <div className="min-h-screen">
      <div className="relative ">
        <img
          className="absolute top-1 -z-10 w-[954px] h-[954px]"
          src="src/assets/images/bg-ellipse.svg"
          alt=""
        />
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-text ">
          <div className="w-1/2 py-10">
            <img
              className="w-[450px] h-[494px] object-cover"
              src="src/assets/images/ImageHero.png"
              alt=""
            />
          </div>
          <div className="text-text w-1/2">
            <h1 className="font-bold text-2xl">
              Bantu <span className="text-primary">Anak Yatim</span> sampai
              Mandiri
            </h1>
            <p className="mt-6 text-xl text-text">
              Bantu anak yatim sampai mandiri, dengan data tervalidasi dan
              laporan berkala
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
              <Button
                title="Daftar Sekarang"
                className="bg-primary text-light"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section;
