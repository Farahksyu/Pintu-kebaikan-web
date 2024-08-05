import Button from "../Button/Button";

function Card({ title, description }) {
  return (
    <div className="flex gap-5 mt-10">
      <div className="flex flex-col max-w-[200px] items-center gap-1 p-4 text-center mb-10 border bg-light rounded-lg border-[#DDDDDD]">
        <img className="w-14" src="src/assets/icons/Vectoricon.png" alt="" />
        <h1>{title}</h1>
        <p>{description}</p>
        <Button title="Donasi Sekarang" className=" text-primary" />
      </div>
    </div>
  );
}

function Card2({ title, description, percentage }) {
  return (
    <div className="flex gap-5 mt-10">
      <div className="flex flex-col max-w-[200px] items-center gap-1 p-4 text-center mb-10 border bg-light rounded-lg border-[#DDDDDD]">
        <img className="w-44" src="src/assets/images/ImageHero.png" alt="" />
        <div className="object-left">
          <Button
            title="tag component"
            className="bg-secondary text-primary m-2"
          />
        </div>

        <h1 className="font-bold">{title}</h1>
        <div className="">
          <p>{description}</p>
          <p>{percentage}</p>
        </div>

        <Button title="click me" className="bg-primary text-light" />
      </div>
    </div>
  );
}
export { Card, Card2 };

//props:property untuk menerima data
