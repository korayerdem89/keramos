"use client";

import Slider from "react-slick";

const Categories = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const catContent = [
    { id: 1, icon: "icon-destination", catName: "Tour" },
    { id: 2, icon: "icon-ski", catName: "Activity" },

    { id: 3, icon: "icon-yatch", catName: " Cruise" },
  ];
  return (
    <Slider {...settings}>
      {catContent.map((item) => (
        <div className="col" key={item.id}>
          <button className="d-flex flex-column justify-center px-20 py-15 rounded-4 border-light text-16 lh-14 fw-500 col-12">
            <i className={`${item.icon} text-25 mb-10`} />
            {item.catName}
          </button>
        </div>
      ))}
    </Slider>
  );
};

export default Categories;
