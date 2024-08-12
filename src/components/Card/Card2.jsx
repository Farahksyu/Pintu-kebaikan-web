import Button from "../Button/Button";
function Card2({ title, description, percentage }) {
  return (
    <div className="flex gap-5 mt-10">
      <div className="flex flex-col max-w-[200px] gap-1 p-4 mb-10 border bg-light rounded-lg border-[#DDDDDD]">
        <img className="w-44" src="src/assets/images/ImageHero.png" alt="" />
        <div className="object-left">
          <Button
            title="tag component"
            className="bg-secondary text-primary m-2"
          />
        </div>

        <h1 className="font-bold">{title}</h1>
        <div>
          <p>{description}</p>
          <p>{percentage}</p>
        </div>

        <Button title="click me" className="bg-primary text-light" />
      </div>
    </div>
  );
}

export default Card2;
