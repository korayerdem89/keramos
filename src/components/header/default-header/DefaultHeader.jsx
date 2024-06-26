"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { homeItems } from "../../data/mainMenuData";

import { isActiveParentChaild } from "@/utils/linkActiveChecker";

import { usePathname } from "next/navigation";

import MobileMenu from "../MobileMenu";
import { useTranslations } from "next-intl";

const Header1 = () => {
  const [navbar, setNavbar] = useState(false);
  const t = useTranslations("Header");
  const pathname = usePathname();
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header className={`header bg-white ${navbar ? "is-sticky" : ""}`}>
        <div className="header__container px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-20">
                  <img src="/img/general/logo-dark.png" alt="logo icon" />
                  <img src="/img/general/logo-dark.png" alt="logo icon" />
                </Link>
                {/* End logo */}

                <div className="header-menu">
                  <div className="header-menu__content">
                    <nav className="menu js-navList">
                      <ul className={`menu__nav text-dark-3 -is-active`}>
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

                        <Link href="/tr/about">{t("about")}</Link>
                        <Link href="/tr/help-center">{t("faqs")}</Link>
                        <Link href="/tr/blog-list-v1">{t("blog")}</Link>

                        <li className={pathname === "/contact" ? "current" : ""}>
                          <Link href="/contact">{t("about")}</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1">
                  <div>
                    <Link
                      href="/login"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div>
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
    </>
  );
};

export default Header1;
