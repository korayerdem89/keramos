import { useTranslations } from "next-intl";

const Banner = () => {
  const t = useTranslations("Reservation");
  return (
    <div className="col-12">
      <div className="relative d-flex">
        <img
          src="/img/destinations/banner.webp"
          alt="image"
          className="col-12 rounded-4"
          style={{ minHeight: " 300px" }}
        />
        <div className="absolute z-2 px-50 py-60 md:py-20 md:px-30">
          <h1 className="text-50 fw-600 text-white lg:text-40 md:text-30">{t("bannertitle")}</h1>
          <div className="text-white">{t("bannerdesc")}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
