import Link from "next/link";

import { homeItems } from "../../data/mainMenuData";

import { isActiveParentChaild } from "@/utils/linkActiveChecker";

import { usePathname } from "next/navigation";

const MainMenu = ({ style = "" }) => {
  const pathname = usePathname();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${
            isActiveParentChaild(homeItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <Link href="/">home</Link>
        </li>
        {/* End home page menu */}

        <li className={pathname === "/destinations" ? "current" : ""}>
          <Link href="/tr/destinations">destinations</Link>
        </li>
        {/* End Destinatinos single menu */}

        <Link href="/tr/about">about</Link>
        <Link href="/tr/help-center">faqs</Link>
        <Link href="/tr/blog-list-v1">blog</Link>

        <li className={pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
