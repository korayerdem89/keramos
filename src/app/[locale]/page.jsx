import Wrapper from "@/components/layout/Wrapper";
import MainHome from "./(homes)/home_9/page";

export const metadata = {
  title: "Keramos - Travel Website",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
