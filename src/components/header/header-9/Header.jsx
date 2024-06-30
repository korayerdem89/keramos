"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import MobileMenu from "../MobileMenu";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { homeItems } from "@/data/mainMenuData";

import { isActiveParentChaild } from "@/utils/linkActiveChecker";
const Header1 = () => {
  const [navbar, setNavbar] = useState(false);
  const t = useTranslations("Header");
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const pathname = usePathname();
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      {" "}
      <header className={`header mt-40  ${navbar ? "is-sticky bg-dark-1" : ""}`}>
        <div className="header__container container">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-50">
                  <img src="/img/general/logo.png" alt="logo icon" />
                </Link>
                {/* End logo */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="header-menu">
                  <div className="header-menu__content">
                    <nav className="menu js-navList">
                      <ul className={`menu__nav text-white -is-active`}>
                        <li
                          className={`${
                            isActiveParentChaild(homeItems, pathname) ? "current" : ""
                          } menu-item-has-children`}
                        >
                          <Link href="/">{t("home")}</Link>
                        </li>
                        {/* End home page menu */}

                        <li className={pathname === "/destinations" ? "current" : ""}>
                          <Link href="/tr/destinations">{t("destinations")}</Link>
                        </li>
                        {/* End Destinatinos single menu */}
                        <li className={pathname === "/tr/about" ? "current" : ""}>
                          <Link href="/tr/about">{t("about")}</Link>
                        </li>
                        <li className={pathname === "/tr/help-center" ? "current" : ""}>
                          <Link href="/tr/help-center">{t("faqs")}</Link>
                        </li>
                        <li className={pathname === "/tr/blog-list-v1" ? "current" : ""}>
                          <Link href="/tr/blog-list-v1">{t("blog")}</Link>
                        </li>
                        <li className={pathname === "/tr/contact" ? "current" : ""}>
                          <Link href="/contact">{t("contact")}</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* End header-menu */}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-20 text-white">
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End header */}
    </>
  );
};

export default Header1;
