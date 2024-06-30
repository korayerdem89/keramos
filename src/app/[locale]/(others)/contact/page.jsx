import dynamic from "next/dynamic";

import DefaultHeader from "@/components/header/default-header";
import Footer8 from "@/components/footer/footer-8";
import Image from "next/image";
import Address from "@/components/block/Address";
import Social from "@/components/common/social/Social";

export const metadata = {
  title: "Contact || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const Contact = () => {
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
              <h1 className="text-40 md:text-25 fw-600 text-dark-2">asdasdasdas</h1>
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container pt-60">
          <div className="row x-gap-80 y-gap-20 justify-between">
            <Address />
            {/* End address com */}

            <div className="col-auto">
              <div className="text-14 text-light-1">Follow us on social media</div>
              <div className="d-flex x-gap-20 items-center mt-10">
                <Social />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Address Section */}

      <Footer8 />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
