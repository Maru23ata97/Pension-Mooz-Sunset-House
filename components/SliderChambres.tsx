import * as React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper stylesa
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../src/styles.css';

// import required modules
import { EffectCube, Pagination } from 'swiper';
import { getDataFromFirebase } from '../database/getDataFromFirebase';

export default function SliderChambres({ collectionTarget }) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const response = await getDataFromFirebase(collectionTarget);

      console.log(response);
      setData(response);
    })();
  }, []);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {data.map((slide) => (
        <SwiperSlide className="p-0" style={{ height: '12rem', width: '100%' }}>
          <img
            src={slide.url}
            style={{ minWidth: '100% !important', objectFit: 'cover', height: '100% !important' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
