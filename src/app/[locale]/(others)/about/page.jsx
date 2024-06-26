import dynamic from "next/dynamic";
import DefaultHeader from "@/components/header/default-header";
import Footer8 from "@/components/footer/footer-8";

import Block1 from "@/components/about/Block1";
import Image from "next/image";
import Team1 from "@/components/team/Team1";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "About || Keramos Sailing",
  description: "who we are",
};

const About = () => {
  const t = useTranslations("About");
  return (
    <>
      {/* End Page Title */}
      <div className="header-margin"></div>
      {/* header top margin */}
      <DefaultHeader />
      {/* End Header 1 */}
      <div className="py-15" />
      <section className="section-bg layout-pt-lg layout-pb-lg ">
        <div className="section-bg__item col-12">
          <Image width={1920} height={400} src="/img/about/banner.png" alt="image" priority />
        </div>
        {/* End section-bg__item */}

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-12 col-lg-12 col-md-10">
              <h1 className="text-40 md:text-25 fw-600 text-dark-2">{t("bannertitle")}</h1>
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End About Banner Section */}
      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <Block1 />
          </div>
        </div>
      </section>
      {/* End about block section */}
      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{t("ourteam")}</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className=" pt-40 js-section-slider">
            <div className="item_gap-x30">
              <Team1 />
            </div>
          </div>
          {/* End  js-section-slider */}
        </div>
        {/* End container */}
      </section>
      {/* End team section */}
      <Footer8 />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });
