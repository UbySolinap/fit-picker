import { useEffect } from "react";
import { getTops } from "../services/apiClothes";

function Main() {
  useEffect(function() {
    getTops().then(data=>console.log(data))
  }, [])

  return (
    <div>
      <h1>This is a main page</h1>
    </div>
  );
}

export default Main;
