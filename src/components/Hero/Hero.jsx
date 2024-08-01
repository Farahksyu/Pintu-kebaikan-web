import Button from "../Button/Button";

function Hero() {
  return (
    <div className="flex -left-1.5">
      <div className="overflow-x-hidden text-light">
        <div className="bg-[url('src/assets/images/Hero.png')] absolute w-[761px] h-[630px] z-10 py-12 px-8">
          <h1 className="text-4xl p-10">
            Bantu Seluruh Anak Yatim Membangun Masa Depan
          </h1>
          <p className="ml-10 mr-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </p>
          <div className="flex justify-around gap-8 text-light p-8">
            <div className="">
              <h1 className="font-bold text-xl">100+</h1>
              <p>Lorem ipsum.</p>
            </div>
            <div className="">
              <h1 className="font-bold text-xl">100+</h1>
              <p>Lorem ipsum.</p>
            </div>
            <div className="">
              <h1 className="font-bold text-xl">100+</h1>
              <p>Lorem ipsum.</p>
            </div>
          </div>
          <div className="ml-10">
            <Button />
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <img
          className="absolute w-[958px] h-[630px] left-[480px]"
          src="src/assets/images/Image.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
