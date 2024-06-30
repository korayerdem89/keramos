"use client";

import Image from "next/image";
import Slider from "react-slick";
import teamData from "../../data/teamData";

const Team1 = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  // custom navigation
  function Arrow(props) {
    let name =
      props.type === "next"
        ? "arrow-top-right d-flex items-center text-24 arrow-right-hover arrow-next"
        : "arrow-top-right d-flex items-center text-24 arrow-left-hover arro-prev";

    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-arrow-right"></i>
        </>
      ) : (
        <>
          <span className="icon icon-arrow-left"></span>
        </>
      );
    return (
      <button className={name} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      <Slider {...settings} nextArrow={<Arrow type="next" />} prevArrow={<Arrow type="prev" />}>
        {teamData.map((item) => (
          <div className="swiper-slide" key={item.id}>
            <Image
              width={1200}
              height={1538}
              src={item.img}
              alt="image"
              className="rounded-4 col-12"
            />
            <div className="mt-10">
              <div className="text-24 lh-15 fw-600">{item.name}</div>
              <div className="text-16 fw-500 lh-15">{item.designation}</div>
              <div className="text-14 lh-15 pt-10">{item.desc}</div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Team1;
