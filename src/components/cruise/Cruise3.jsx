import pick from "lodash/pick";
import { NextIntlClientProvider, useMessages } from "next-intl";
import CruisesList from "./CruisesList";
import { useTranslations } from "next-intl";

export default function Counter() {
  // Receive messages provided in `i18n.ts` …
  const messages = useMessages();

  return (
    <NextIntlClientProvider
      messages={
        // … and provide the relevant messages
        pick(messages, "Banner")
      }
    >
      <CruisesList />
    </NextIntlClientProvider>
  );
}
