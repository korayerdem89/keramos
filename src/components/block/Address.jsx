import { useTranslations } from "next-intl";

const Address = () => {
  const t = useTranslations("Contact");
  const addressContent = [
    {
      id: 1,
      colClass: "col-lg-3",
      title: t("address"),
      content: <>Akyaka, Muğla</>,
    },
    {
      id: 2,
      colClass: "col-auto",
      title: t("phonenumber"),
      content: (
        <>
          <a href="tel:+4733378901">+90 123 456 789</a>
        </>
      ),
    },
    {
      id: 3,
      colClass: "col-auto",
      title: t("email"),
      content: (
        <>
          {" "}
          <a href="mailto:info@keramosailing.com">info@keramosailing.com</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div className={`${item.colClass}`} key={item.id}>
          <div className="text-14 text-light-1">{item.title}</div>
          <div className="text-18 fw-500 mt-10">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default Address;
