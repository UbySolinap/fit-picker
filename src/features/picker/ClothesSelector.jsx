import { useQuery } from "@tanstack/react-query";
import { getClothesType } from "../../services/apiClothes";
import { useEffect, useRef } from "react";
import Slider from "react-slick";

import Spinner from "../../ui/Spinner";
import Garment from "./Garment";
import ClothesOperation from "./ClothesOperation";
import Button from "../../ui/Button";

import { GrPrevious, GrNext } from "react-icons/gr";

function ClothesSelector({ type, selected }) {
  const {
    data: clothes,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["clothes", type],
    queryFn: () => getClothesType(type),
  });

  const sliderRef = useRef();

  // effect that will jump the display to the selected item.
  useEffect(
    function () {
      // The if was used to prevent the slider from going back to the start once an item was removed from selection.
      if (selected) {
        const selectedItem = clothes?.filter((item) => item.id === selected);
        const index = clothes?.indexOf(selectedItem[0]);
        sliderRef.current?.slickGoTo(index);
      }
    },
    [clothes, selected],
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
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
    <div className="relative mx-6 lg:mx-16 2xl:mx-20">
      <ClothesOperation type={type} />
      <Button type="prev" onClick={() => sliderRef?.current?.slickPrev()}>
        <GrPrevious />
      </Button>
      <Slider {...settings} ref={sliderRef}>
        {clothes.map((garment) => (
          <Garment
            garment={garment}
            key={garment.id}
            selected={selected === garment.id}
            id={garment.id}
          />
        ))}
      </Slider>

      <Button type="next" onClick={() => sliderRef?.current?.slickNext()}>
        <GrNext />
      </Button>
    </div>
  );
}

export default ClothesSelector;
