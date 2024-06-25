import Link from "next/link";
import { useTranslations } from "next-intl";

const FooterContent = () => {
  const t = useTranslations("Footer");
  const data = [
    {
      id: 1,
      title: t("our"),
      menuList: [
        { name: t("about"), routerPath: "/" },
        { name: t("blog"), routerPath: "/" },
      ],
    },
    {
      id: 2,
      title: t("support"),
      menuList: [{ name: t("contact"), routerPath: "/" }],
    },
  ];
  return (
    <>
      {data.map((item) => (
        <div className="col-lg-4 col-sm-6" key={item.id}>
          <h5 className="text-16 fw-500 mb-30">{item.title}</h5>
          <div className="d-flex y-gap-10 flex-column">
            {item.menuList.map((menu, i) => (
              <Link href={menu.routerPath} key={i}>
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
