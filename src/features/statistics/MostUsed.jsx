import MostUsedImages from "./MostUsedImages";
import Spinner from "../../ui/Spinner";
import SectionHeader from "../../ui/SectionHeader";

import { useClothesStats } from "./useClothesStats";
import MostUsedChart from "./MostUsedChart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSubTypes } from "../picker/pickerSlice";

function MostUsed({ type }) {
  const { clothes, isLoading } = useClothesStats(type);

  const dispatch = useDispatch();

  let threeMostUsedClothes = [];
  if (!isLoading) {
    threeMostUsedClothes = clothes.slice(0, 3);
  }

  // Automatically adds all the subtype in a ui state slice.
  useEffect(
    function () {
      if (!isLoading) {
        dispatch(addSubTypes({ clothes, type }));
      }
    },
    [isLoading, clothes, dispatch, type],
  );

  if (isLoading) return <Spinner />;

  return (
    <div className="mb-5">
      <SectionHeader>
        Most Used {type.charAt(0).toUpperCase() + type.slice(1)}
      </SectionHeader>
      <MostUsedImages images={threeMostUsedClothes} />
      <MostUsedChart clothes={clothes} />
    </div>
  );
}

export default MostUsed;
