"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import isTextMatched from "@/utils/isTextMatched";
import { useTranslations } from "next-intl";

const Cruise3 = () => {
  const t = useTranslations("Cruise");
  const cruises = [
    {
      id: 1,
      slideImg: ["/img/cruises/tour1.webp"],
      title: "Sunset Cruise",
      ship: "Yelkenlinin Modeli Buraya gelecek",
      delayAnimation: "100",
    },
    {
      id: 2,
      slideImg: ["/img/cruises/tour2.webp"],
      title: "Family Adventure Cruise",
      ship: "Yelkenlinin Modeli Buraya gelecek",
      delayAnimation: "100",
    },
    {
      id: 3,
      slideImg: ["/img/cruises/tour3.webp"],
      title: "Afternoon Cruise",
      ship: "Yelkenlinin Modeli Buraya gelecek",
      delayAnimation: "100",
    },
    {
      id: 4,
      slideImg: ["/img/cruises/tour4.webp"],
      title: "All Day Cruise",
      ship: "Yelkenlinin Modeli Buraya gelecek",
      delayAnimation: "100",
    },
    {
      id: 5,
      slideImg: ["/img/cruises/tour5.webp"],
      title: "Aquarium Cruise",
      ship: "Yelkenlinin Modeli Buraya gelecek",
      delayAnimation: "100",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-popular-car-next",
          prevEl: ".js-popular-car-prev",
        }}
        pagination={{
          el: ".js-car-pag_active",
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {cruises.map((item) => (
          <SwiperSlide key={item.id}>
            <div key={item?.id} data-aos="fade" data-aos-delay={item?.delayAnimation}>
              <Link href={`/cruise-single/${item.id}`} className="cruiseCard -type-1 rounded-4 ">
                <div className="cruiseCard__image position-relative">
                  <div className="carCard__image">
                    <div className="cardImage ratio ratio-6:5">
                      <div className="cardImage__content custom_inside-slider">
                        <Swiper
                          className="mySwiper"
                          modules={[Pagination, Navigation]}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                        >
                          {item?.slideImg?.map((slide, i) => (
                            <SwiperSlide key={i}>
                              <Image
                                width={300}
                                height={300}
                                className="rounded-4 col-12 js-lazy"
                                src={slide}
                                alt="image"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                    {/* End cartImage */}
                  </div>
                  <div className="cardImage__leftBadge">
                    <div
                      className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                        isTextMatched(item?.tag, "cruise only") ? "bg-dark-1 text-white" : ""
                      } ${isTextMatched(item?.tag, "best seller") ? "bg-blue-1 text-white" : ""}  ${
                        isTextMatched(item?.tag, "top rated") ? "bg-yellow-1 text-dark-1" : ""
                      }`}
                    >
                      {item.tag}
                    </div>
                  </div>
                </div>
                {/* End .tourCard__image */}

                <div className="cruiseCard__content mt-10">
                  <div className="text-14 lh-14 text-light-1 mb-5">{item?.ship}</div>
                  <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                    <span>{item?.title}</span>
                  </h4>

                  {/* End .row */}
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-popular-car-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        {/* End arrow prev */}

        <div className="col-auto">
          <div className="pagination -dots text-border js-car-pag_active" />
        </div>
        {/* End arrow pagination */}

        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-popular-car-next">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
        {/* End arrow next */}
      </div>
    </>
  );
};

export default Cruise3;
