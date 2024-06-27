import { useTranslations } from "next-intl";

const IntroTown = () => {
  const t = useTranslations("Reservation");

  function formatDescription(description) {
    return description.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  }
  return (
    <>
      <div className="col-xl-8">
        <p className="text-15 text-dark-1">{formatDescription(t("descriptions"))}</p>
      </div>
      {/* End .col */}

      <div className="col-xl-4">
        <div className="relative d-flex ml-35 xl:ml-0">
          <img src="/img/destinations/map.png" alt="image" className="col-12 rounded-4" />
        </div>
      </div>
    </>
  );
};

export default IntroTown;
