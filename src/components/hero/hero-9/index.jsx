import pick from "lodash/pick";
import { NextIntlClientProvider, useMessages } from "next-intl";
import HeroSection from "./HeroSection";

export default function Counter() {
  // Receive messages provided in `i18n.ts` …
  const messages = useMessages();

  return (
    <NextIntlClientProvider
      messages={
        // … and provide the relevant messages
        pick(messages, "Banner")
      }
      locale="tr"
    >
      <HeroSection />
    </NextIntlClientProvider>
  );
}
