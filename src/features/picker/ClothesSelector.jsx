import { useEffect, useRef } from "react";
import { useClothesType } from "./useClothesType";
import { useDispatch } from "react-redux";
import { addSubTypes } from "./pickerSlice";
import Slider from "react-slick";

import Spinner from "../../ui/Spinner";
import Garment from "./Garment";
import ClothesOperation from "./ClothesOperation";

import NextArrow from "../../ui/NextArrow";
import PrevArrow from "../../ui/PrevArrow";
import SectionHeader from "../../ui/SectionHeader";

function ClothesSelector({ type, selected }) {
  const { clothes, isLoading } = useClothesType(type);

  const dispatch = useDispatch();

  // Automatically adds all the subtype in a ui state slice.
  useEffect(
    function () {
      if (!isLoading) {
        dispatch(addSubTypes({ clothes, type }));
      }
    },
    [isLoading, clothes, dispatch, type],
  );

  const sliderRef = useRef();

  // effect that will jump the display to the selected item when a change occurs.
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
    nextArrow: <NextArrow type="main" />,
    prevArrow: <PrevArrow type="main" />,
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
    <div className="mx-6 lg:mx-16 2xl:mx-20">
      <SectionHeader>
        {type.charAt(0).toUpperCase() + type.slice(1)} Section
      </SectionHeader>

      <ClothesOperation type={type} />

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
    </div>
  );
}

export default ClothesSelector;
