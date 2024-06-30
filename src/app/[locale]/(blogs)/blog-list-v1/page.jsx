import React from "react";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import LocationTopBar from "@/components/common/LocationTopBar";
import Footer8 from "@/components/footer/footer-8";
import Blog1 from "@/components/blog/Blog1";

export const metadata = {
  title: "Blog List V1 || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const BlogListV1 = () => {
  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Travel articles</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Lorem ipsum is placeholder text commonly used in site.
                </p>
              </div>
            </div>
          </div>
          <Blog1 />
        </div>
      </section>

      <CallToActions />
      {/* End Call To Actions Section */}

      <Footer8 />
      {/* End Call To Actions Section */}
    </>
  );
};

export default BlogListV1;
