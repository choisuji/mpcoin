'use client';

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SLIDES = [
  { id: 1},
  { id: 2},
  { id: 3},
  { id: 4}
];

const swiperOptions = {
  spaceBetween: 50,
  slidesPerView: 1,
  pagination: { clickable: true },
  modules: [Pagination],
};
const Unlocked = () => {
  return (
    <div id="Unlocked" className="eventItem">
      <Swiper {...swiperOptions}>
        {SLIDES.map(({ id }, index) => (
        <SwiperSlide key={id} className={`swiperItem${id}`}>
          <div className="unlockedItem">
            <div>
              <h5 className="dft mb-none text-center titleTxt">
                MPC: Achievement Unlocked!
              </h5>
              <div className="bottom conbox conbox_xs">
                <div className="img">
                  <Image
                      className="bird"
                      src="/images/bird.png"
                      alt="Mpcoin logo"
                      width={108}
                      height={132}
                      priority
                  />
                </div>
                <div className="txt">
                  <p className="dft mini mb-none">
                    MPC Hits 1 Billion Transactions!🔥 <br />
                    18 months ago, we launched MPC, our revolutionary L2 blockchain and today, we're celebrating an EPIC milestone! Thank you to our amazing community, developers, and pioneers who continue to build and push the limits of what's possible in Web3!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Unlocked;