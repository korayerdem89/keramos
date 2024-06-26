import dynamic from "next/dynamic";

import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";

import Banner from "@/components/destinations/components/Banner";
import CustomerInfo from "@/components/booking-page/CustomerInfo";
import IntroTown from "@/components/destinations/components/IntroTown";

export const metadata = {
  title: "Destinations || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const Destinations = () => {
  return (
    <>
      {/* End Page Title */}
      <div className="header-margin"></div>
      {/* header top margin */}
      <DefaultHeader />
      {/* End Header 1 */}
      <section className="layout-pb-md ">
        <div className="container">
          <div className="row">
            <Banner />
          </div>
          {/* End .row */}

          <div className="row y-gap-20 pt-40">
            <div className="col-auto">
              <h2>What to know before visiting London</h2>
            </div>
            {/* End .col-auto */}

            <IntroTown />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Top Banner,categorie,intro,weather, generic info section */}
      <CustomerInfo />
      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Destinations), { ssr: false });
