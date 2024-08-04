import Button from "../Button/Button";

function Card({ title, description }) {
  return (
    <div className="flex gap-5 mt-10">
      <div className="flex flex-col max-w-[200px] items-center gap-1 p-4 text-center mb-10 border bg-light rounded-lg border-[#DDDDDD]">
        <img className="w-14" src="src/assets/icons/Vectoricon.png" alt="" />
        <h1>{title}</h1>
        <p>{description}</p>
        <Button />
      </div>
    </div>
  );
}
export default Card;

//props:property untuk menerima data
