import ClothesStats from "../features/statistics/ClothesStats";
import Activities from "../features/statistics/Activities";

function Statistics() {
  return (
    <div className="w-dvh mx-5 pt-6 lg:mx-8 lg:grid lg:grid-cols-2 2xl:mx-20">
      <ClothesStats />
      <Activities />
    </div>
  );
}

export default Statistics;
