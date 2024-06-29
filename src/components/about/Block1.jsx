import { useTranslations } from "next-intl";
import Image from "next/image";

const Block1 = () => {
  const t = useTranslations("About");
  return (
    <>
      <div className="col-lg-5">
        <h2 className="text-30 fw-600">{t("title")}</h2>
        <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20">
          London is a shining example of a metropolis at the highest peak of modernity and boasts an
          economy and cultural diversity that’s the envy of other global superpowers.
          <br />
          <br />
          Take the opportunity to acquaint yourself with its fascinating history chronicled by
          institutions like the British Museum as well as see how far it has come by simply riding
          the Tube and passing by celebrated landmarks like Buckingham Palace, Westminster Abbey,
          and marvels like Big Ben, the London Eye, and the Tower Bridge.
        </p>
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
