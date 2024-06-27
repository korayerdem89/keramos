import dynamic from "next/dynamic";
import Footer8 from "@/components/footer/footer-8";
import Header9 from "@/components/header/header-9";
import Hero9 from "@/components/hero/hero-9";
import TopHeader from "@/components/header/header-9/top-header";
import Testimonial from "@/components/home/home-9/Testimonial";
import Link from "next/link";
import AboutIntro from "@/components/home/home-9/AboutIntro";
import WhyChoose from "@/components/home/home-9/WhyChoose";
import Cruise3 from "@/components/cruise/Cruise3";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Keramos Sailing",
  description: "Cruises",
};

const home = () => {
  const t = useTranslations("Home");
  return (
    <>
      {/* End Page Title */}

      <TopHeader />
      {/* End Header top Banner */}

      <Header9 />
      {/* End Header 9 */}

      <Hero9 />
      {/* End Hero 9 */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{t("cruisestitle")}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">{t("cruisesdescriptions")}</p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20">
            <Cruise3 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Features Cruise Deals Sections */}

      <AboutIntro />
      {/* About Intro Cruise  Sections */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-4 col-lg-5">
              <h2 className="text-30 fw-600">{t("whychoosetitle")}</h2>
              <p className="mt-5">{t("whychoosetitle2")}</p>
              <p className="text-dark-1 mt-40 sm:mt-20">{t("whychoosedescriptions")}</p>
              <div className="d-inline-block mt-40 sm:mt-20">
                <a href="#" className="button -md -blue-1 bg-yellow-1 text-dark-1">
                  {t("more")} <div className="icon-arrow-top-right ml-15" />
                </a>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xl-6 offset-xl-1 col-lg-7">
              <div className="row y-gap-60">
                <WhyChoose />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Why Choose  Sections */}

      <section className="section-bg layout-pt-lg layout-pb-lg bg-light-2">
        <div className="section-bg__item col-12">
          <img src="/img/testimonials/testimonialbg.webp" alt="image" />
        </div>
        {/* End section bg */}

        <div className="container">
          <div className="row justify-center pt-50 md:pt-30">
            <div className="col-xl-7 col-lg-10">
              <div className="overflow-hidden">
                <Testimonial />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .contaienr */}
      </section>
      {/* End testimonial section */}

      <Footer8 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home), { ssr: false });
