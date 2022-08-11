import Button from "components/button/Button";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import PropTypes from "prop-types";
import "./banner.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useDispatch } from "react-redux";
import { setIndex, setListSongs } from "saga/controlSlice";
const Banner = ({ homeSongs }) => {
  return (
    <section className="rounded-lg">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 4,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination
        autoplay={{
          delay: 2000,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {homeSongs?.length > 0 &&
          homeSongs[0].songs.slice(0, 9).map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <BannerItem
                  homeSongs={homeSongs}
                  index={index}
                  {...item}
                ></BannerItem>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

const BannerItem = ({ bgImage, title, index, homeSongs }) => {
  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(setListSongs(homeSongs[0].songs));
    dispatch(setIndex(index));
  };
  return (
    <div className="relative mt-3 overflow-hidden rounded-lg select-none isolate">
      <div className="overlay inset-0 absolute bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.4)]"></div>
      <img src={bgImage} alt="" className="object-cover max-h-[250px]" />
      <div className="absolute bottom-3 left-3">
        <p className="mb-3 text-xl text-text2 whitespace-nowrap">{title}</p>
        <Button onClick={() => handlePlay()}>Play</Button>
      </div>
    </div>
  );
};

Banner.propTypes = {
  homeSongs: PropTypes.array,
};
export default Banner;
