import Wrapper from "@/components/layout/Wrapper";
import MainHome from "./(homes)/home_9/page";
import { useTranslations } from "next-intl";
export const metadata = {
  title: "Keramos - Travel Website",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

export default function Home() {
  const t = useTranslations('Index');
  console.log(t('title'));
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
