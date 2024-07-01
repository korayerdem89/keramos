"use client";
import { useTranslations } from "next-intl";
import ReactPlayer from "react-player";
import React from "react";

const HeroSection = () => {
  const t = useTranslations("Banner");
  return (
    <div className="hero-section">
      <div className="video-background">
        <ReactPlayer
          url="https://vimeo.com/973018476?share=copy"
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      </div>
      <div className="content-overlay">
        <h1 className="sm:text-16 md:text-20 xl:text-40  sm:w-1/1 lg:w/1-2 fw-300">
          {t("descriptions")}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
