import Slider from "react-slick";
import NextArrow from "../../ui/NextArrow";
import PrevArrow from "../../ui/PrevArrow";
import MostUsed from "./MostUsed";
import ClothesTypes from "./ClothesTypes";

function ClothesStats() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow type="statistics" />,
    prevArrow: <PrevArrow type="statistics" />,
  };

  return (
    <div className="lg:mr-3 lg:border-r-2 lg:border-color-light-brown lg:pr-2">
      <Slider {...settings}>
        <MostUsed type="tops" />
        <MostUsed type="bottoms" />
        <MostUsed type="outerwear" />
        <MostUsed type="footwear" />
      </Slider>
      <ClothesTypes />
    </div>
  );
}

export default ClothesStats;
