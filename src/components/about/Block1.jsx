import { useTranslations } from "next-intl";
import Image from "next/image";

const Block1 = () => {
  const t = useTranslations("About");
  return (
    <>
      <div className="col-lg-5">
        <h2 className="text-30 fw-600">{t("title")}</h2>
        <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20">{t("descriptions")}</p>
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <Image
          width={400}
          height={400}
          src="/img/about/about.png"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      {/* End .col */}
    </>
  );
};

export default Block1;
