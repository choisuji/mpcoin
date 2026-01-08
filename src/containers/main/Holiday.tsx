'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const SLIDES = [
  { id: 1, title: 'MP Coin Holiday live1', img: '/images/pumpkin.png' },
  { id: 2, title: 'MP Coin Holiday live2', img: '/images/pumpkin.png' },
  { id: 3, title: 'MP Coin Holiday live3', img: '/images/pumpkin.png' },
  { id: 4, title: 'MP Coin Holiday live4', img: '/images/pumpkin.png' }
];

const swiperOptions = {
  spaceBetween: 50,
  slidesPerView: 1,
  pagination: { clickable: true },
  modules: [Pagination],
};

const Holiday = () => {
  return (
    <div id="Holiday" className="eventItem">
      <Swiper {...swiperOptions}>
        {SLIDES.map(({ id, title, img }, index) => (
          <SwiperSlide key={id} className={`swiperItem${id}`}>
            <div className="holidayItem">
              <div className="img">
                <Image
                  className="holidayThumnail"
                  src={img}
                  alt="holidayThumnail"
                  width={864}
                  height={484}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 864px"
                />
              </div>

              <div className="txt">
                <h5 className="dft mb-none c_lorg font-Medium conbox conbox_xxs">
                  {title}
                </h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Holiday;
