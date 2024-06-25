import Link from "next/link";

import { homeItems } from "../../data/mainMenuData";

import { isActiveParentChaild } from "@/utils/linkActiveChecker";
import { useTranslations } from "next-intl";

import { usePathname } from "next/navigation";
import { useState } from "react";

const MainMenu = ({ style = "" }) => {
  const pathname = usePathname();

  const t = useTranslations("Header");
  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${
            isActiveParentChaild(homeItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <Link href="/">{t("home")}</Link>
        </li>
        {/* End home page menu */}

        <li className={pathname === "/destinations" ? "current" : ""}>
          <Link href="/destinations">{t("destinations")}</Link>
        </li>
        {/* End Destinatinos single menu */}

        <Link href="/about">{t("about")}</Link>
        <Link href="/help-center">{t("faqs")}</Link>
        <Link href="/blog-list-v1">{t("blog")}</Link>

        <li className={pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">{t("about")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
