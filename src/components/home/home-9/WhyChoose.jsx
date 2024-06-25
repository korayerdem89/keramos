import Image from "next/image";
import { useTranslations } from "next-intl";
const WhyChoose = () => {
  const t = useTranslations("Home");
  const whyChooseContent = [
    {
      id: 1,
      icon: "/img/featureIcons/3/1.svg",
      title: t("bestprice"),
      text: t("bestpricedesc"),
      delayAnimaion: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/3/2.svg",
      title: t("easybooking"),
      text: t("easybookingdesc"),
      delayAnimaion: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/3/3.svg",
      title: t("perfectlocation"),
      text: t("perfectlocationdesc"),
      delayAnimaion: "300",
    },
    {
      id: 4,
      icon: "/img/featureIcons/3/4.svg",
      title: t("customercare"),
      text: t("customercaredesc"),
      delayAnimaion: "400",
    },
  ];

  return (
    <>
      {whyChooseContent.map((item) => (
        <div
          className="col-sm-6"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimaion}
          key={item.id}
        >
          <Image width={60} height="60" src={item.icon} alt="image" className="size-60" />
          <h5 className="text-18 fw-500 mt-10">{item.title}</h5>
          <p className="mt-10">{item.text}</p>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
