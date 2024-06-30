import { useTranslations } from "next-intl";

const Faq = () => {
  const t = useTranslations("FAQ");
  const faqContent = [
    {
      id: 1,
      collapseTarget: "One",
      title: t("faq1"),
      content: t("answer1"),
    },
    {
      id: 2,
      collapseTarget: "Two",
      title: t("faq2"),
      content: t("answer2"),
    },
    {
      id: 3,
      collapseTarget: "Three",
      title: t("faq3"),
      content: t("answer3"),
    },
    {
      id: 4,
      collapseTarget: "Four",
      title: t("faq4"),
      content: t("answer4"),
    },
    {
      id: 5,
      collapseTarget: "Five",
      title: t("faq5"),
      content: t("answer5"),
    },
    {
      id: 6,
      collapseTarget: "Six",
      title: t("faq6"),
      content: t("answer6"),
    },
  ];
  return (
    <>
      {faqContent.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.collapseTarget}`}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className="icon-plus" />
                <i className="icon-minus" />
              </div>
              <div className="button text-dark-1 text-start">{item.title}</div>
            </div>
            {/* End accordion button */}

            <div
              className="accordion-collapse collapse"
              id={item.collapseTarget}
              data-bs-parent="#Faq1"
            >
              <div className="pt-15 pl-60">
                <p className="text-15">{item.content}</p>
              </div>
            </div>
            {/* End accordion conent */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
