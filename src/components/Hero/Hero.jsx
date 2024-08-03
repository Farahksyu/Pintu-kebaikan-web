import Button from "../Button/Button";

function Hero() {
  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden">
        <div className="flex">
          <div className="relative w-1/2">
            <img
              src="src/assets/images/Hero.png"
              className="w-full h-screen object-cover"
              alt="Left Image"
            />
            <div className="absolute top-0 left-0 w-full h-full items-center justify-center text-light">
              <h1 className="text-4xl p-10 font-semibold">
                Bantu Seluruh <span className="text-secondary">Anak Yatim</span>{" "}
                Membangun Masa Depan
              </h1>
              <p className="ml-10 mr-10 text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </p>
              <div className="flex justify-around -ml-5 mt-10">
                <div className="">
                  <h1 className="font-bold text-2xl">100+</h1>
                  <p className="text-lg">Lorem ipsum.</p>
                </div>
                <div className="">
                  <h1 className="font-bold text-2xl">100+</h1>
                  <p className="text-lg">Lorem ipsum.</p>
                </div>
                <div className="">
                  <h1 className="font-bold text-2xl">100+</h1>
                  <p className="text-lg">Lorem ipsum.</p>
                </div>
              </div>
              <div className="ml-10 mt-10">
                <Button />
              </div>
            </div>
          </div>
          <div className="relative w-1/2">
            <img
              src="src/assets/images/Image.png"
              className="w-full h-screen object-cover"
              alt="Right Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
