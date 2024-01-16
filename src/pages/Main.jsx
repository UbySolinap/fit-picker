import ClothesSelector from "../features/picker/ClothesSelector";
import { getTops } from "../services/apiClothes"

function Main() {

  return (
    <div className="max-container pt-6">
      <ClothesSelector type="Tops" queryFunc={getTops}/>
    </div>
  );
}

export default Main;
