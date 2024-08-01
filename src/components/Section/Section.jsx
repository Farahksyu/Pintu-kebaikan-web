import Button from "../Button/Button";
function Section() {
  return (
    <>
      <div className="">
        <div className="">
          <img src="src/assets/images/Image.png" alt="" />
        </div>
        <div className="">
          <h1> Bantu Anak Yatim sampai Mandiri</h1>
          <p>
            Bantu anak yatim sampai mandiri, dengan data tervalidasi dan laporan
            berkala
          </p>
          <div>
            <div className="flex">
              <img src="src/assets/icons/Sparkle.svg" alt="" />
              <button>Mustahiq dengan 34 parameter survey</button>
            </div>
            <div className="flex">
              <img src="src/assets/icons/Sparkle.svg" alt="" />
              <button>Profil lengkap anak yatim</button>
            </div>
            <div className="flex">
              <img src="src/assets/icons/Sparkle.svg" alt="" />
              <button>Kemudahan lacak aktivitas report dan tracking</button>
            </div>
          </div>
          <Button />
        </div>
      </div>
    </>
  );
}
export default Section;
