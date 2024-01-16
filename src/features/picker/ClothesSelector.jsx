import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";

import Spinner from "../../ui/Spinner";
import Garment from "./Garment";

function ClothesSelector({ type, queryFunc }) {
  const {
    data: clothes,
    error,
    isLoading,
  } = useQuery({ queryKey: ["clothes"], queryFn: queryFunc });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div className="flex mx-6 md:mx-2 xl:mx-1 mb-2 border-b-2 border-color-light-gray">
        <h1 className="bg-color-dark-gray py-1 rounded-lg px-3 text-2xl md:text-3xl font-bold mb-2 text-white">
          {type}
        </h1>
      </div>
      <Slider {...settings}>
        {clothes.map((garment) => (
          <Garment garment={garment} key={garment.id} />
        ))}
      </Slider>
    </div>
  );
}

export default ClothesSelector;
