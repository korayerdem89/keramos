"use client";

import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  categorieMobileItems,
  categorieMegaMenuItems,
} from "../../data/mainMenuData";
import { isActiveLink } from "@/utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const MobileMenu = () => {
  const pathname = usePathname();
  const t = useTranslations("Header");
  const [isActiveParent, setIsActiveParent] = useState(false);
  const [isActiveNestedParentTwo, setisActiveNestedParentTwo] = useState(false);
  const [isActiveNestedParent, setisActiveNestedParent] = useState(false);

  const router = useRouter();

  useEffect(() => {
    categorieMegaMenuItems.map((megaMenu) => {
      megaMenu?.menuCol?.map((megaCol) => {
        megaCol?.menuItems?.map((item) => {
          item?.menuList?.map((list) => {
            if (list.routePath?.split("/")[1] == pathname.split("/")[1]) {
              setIsActiveParent(true);
              setisActiveNestedParentTwo(item?.title);
              setisActiveNestedParent(megaMenu?.id);
            }
          });
        });
      });
    });
  }, []);

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <img src="/img/general/logo-dark.svg" alt="brand" />
        </Link>
        {/* End logo */}

        <div className="fix-icon" data-bs-dismiss="offcanvas" aria-label="Close">
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          <MenuItem
            onClick={() => router.push("/tr/")}
            className={pathname === "/tr/" ? "menu-active-link" : ""}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/tr/destinations")}
            className={pathname === "/tr/destinations" ? "menu-active-link" : ""}
          >
            Destinations
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/tr/about")}
            className={pathname === "/tr/about" ? "menu-active-link" : ""}
          >
            About
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/tr/help-center")}
            className={pathname === "/tr/help-center" ? "menu-active-link" : ""}
          >
            FAQ
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/tr/contact")}
            className={pathname === "//tr/contact" ? "menu-active-link" : ""}
          >
            Contact
          </MenuItem>
        </Menu>
      </Sidebar>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Sosyal Medya Hesaplarımız</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
