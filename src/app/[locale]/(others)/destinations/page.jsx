import dynamic from "next/dynamic";

import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";

import Banner from "@/components/destinations/components/Banner";
import CustomerInfo from "@/components/booking-page/CustomerInfo";
import IntroTown from "@/components/destinations/components/IntroTown";
import { useTranslations } from "next-intl";
export const metadata = {
  title: "Destinations || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const Destinations = () => {
  const t = useTranslations("Reservation");
  return (
    <>
      {/* End Page Title */}
      <div className="header-margin"></div>
      {/* header top margin */}
      <DefaultHeader />
      {/* End Header 1 */}
      <section className="layout-pb-md  y-gap-30">
        <div className="container">
          <div className="row">
            <Banner />
          </div>
          {/* End .row */}

          <div className="row y-gap-20 pt-40">
            <div className="col-auto">
              <h2>{t("title")}</h2>
            </div>
            {/* End .col-auto */}

            <IntroTown />
          </div>
          {/* End .row */}
          <div className="row x-gap-40 items-center">
            <CustomerInfo />
            <div className="justify-end pt-30 justify-center d-flex">
              <button className="button h-60 px-70 -dark-1 bg-blue-1 text-white">
                Next <div className="icon-arrow-top-right ml-15" />
              </button>
            </div>
          </div>
          {/* End stepper header part */}

          {/* End main content */}

          {/* End next btn */}
        </div>
        {/* End .container */}
      </section>
      {/* End Top Banner,categorie,intro,weather, generic info section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Destinations), { ssr: false });
