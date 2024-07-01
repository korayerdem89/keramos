import { useTranslations } from "next-intl";

const ContactInfo = () => {
  const t = useTranslations("Footer");
  const contactContent = [
    {
      id: 1,
      title: t("phone"),
      action: "tel:+(1) 123 456 7890",
      text: "+(90) 123 456 7890",
    },
    {
      id: 2,
      title: t("email"),
      action: "mailto:info@keramosailing.com",
      text: "info@keramosailing.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="col-sm-6" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
