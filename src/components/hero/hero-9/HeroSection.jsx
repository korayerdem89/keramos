"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Player } from "video-react";
import { useTranslations } from "next-intl";
import ReactPlayer from "react-player";
const HeroSection = () => {
  const t = useTranslations("Banner");
  return (
    <>
      <section className="masthead -type-9">
        <div className="masthead-slider js-masthead-slider-9">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: ".hero9-next-active",
              prevEl: ".hero9-prev-active",
            }}
          >
            <SwiperSlide>
              <div className="masthead__bg">
                <ReactPlayer
                  playing
                  loop
                  controls={false}
                  muted
                  width="100%"
                  height="100%"
                  url="https://vimeo.com/972511060"
                />
              </div>
              {/* End .masthead__bg */}
              <div className="container pb-60">
                <div className="row justify-center">
                  <div className="col-xl-19">
                    <div className="text-center">
                      <h2
                        className="text-30 lg:text-20 fw-300 sm:text-14 text-white "
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        {t("title2")}
                      </h2>

                      <h1
                        className="text-60 lg:text-40 sm:text-20 text-white"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        {t("title3")}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .container */}
            </SwiperSlide>
          </Swiper>

          <div className="masthead-slider__nav -prev">
            <button className="button py-10 hero9-prev-active">
              <span className="h-1 w-48 bg-white"></span>
            </button>
          </div>

          <div className="masthead-slider__nav -next">
            <button className="button py-10 hero9-next-active">
              <span className="h-1 w-48 bg-white"></span>
            </button>
          </div>
        </div>
        {/* End slider */}

        {/* End scroll target section */}
      </section>
      {/* End section */}
    </>
  );
};

export default HeroSection;
