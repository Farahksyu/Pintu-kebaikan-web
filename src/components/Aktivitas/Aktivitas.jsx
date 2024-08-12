import Button from "../Button/Button";
import Card2 from "../Card/Card2";
import { cardActivities } from "../../Data/ContentData";

function Aktivitas() {
  return (
    <div className="relative bg-[url('/src/assets/images/Rectangle.png')] bg-no-repeat bg-contain">
      <div className="p-20">
        <h1
          className="flex flex-col items-center text-3xl text-light text-bold
      "
        >
          Aktivitas Penyaluran Dana
        </h1>
        <div className="flex flex-row justify-center gap-10 m-10">
          <div>
            <p className="text-light">Total dana masuk Oktober</p>
            <h5 className="text-accent font-bold m-2">Rp 21.000.000</h5>
          </div>

          <div>
            <p className="text-light">Total dana masuk tersalurkan</p>
            <h5 className="text-accent font-bold m-2">Rp 21.000.000</h5>{" "}
          </div>
        </div>
        <div className="flex justify-center gap-5">
          <Button
            title="Sedekah Ilmu Profesi"
            className="bg-dark text-light border border-white-500"
          />
          <Button
            title="Sedekah Ilmu Profesi"
            className="bg-dark text-light border border-white-500"
          />
          <Button
            title="Sedekah Ilmu Profesi"
            className="bg-dark text-light border border-white-500"
          />
        </div>
      </div>

      <div className="flex justify-center gap-10">
        {cardActivities.map((cardActivity, index) => (
          <Card2
            key={index}
            title={cardActivity.title}
            description={cardActivity.description}
            percentage={cardActivity.percentage}
          />
        ))}
      </div>
    </div>
  );
}
export default Aktivitas;
