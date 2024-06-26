import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";
import Social from "../../common/social/Social";
import { useTranslations } from "next-intl";

const index = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="footer -type-2 bg-dark-2 text-white">
      <div className="container">
        <div className="pt-60 pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-4 col-lg-6">
              <img src="/img/general/logo-small.png" alt="image" />
              <div className="row y-gap-30 justify-between pt-30">
                <ContactInfo />
              </div>
              {/* End .row */}

              <div className="mt-60">
                <h5 className="text-16 fw-500 mb-10">{t("socials")}</h5>
                <div className="d-flex x-gap-20 items-center">
                  <Social />
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6">
              <div className="row y-gap-30">
                {/* End .col */}

                <FooterContent />
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-white-15">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
