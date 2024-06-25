import pick from "lodash/pick";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Header from "./Header";

export default function Index() {
  // Receive messages provided in `i18n.ts` …
  const messages = useMessages();

  return (
    <NextIntlClientProvider
      messages={
        // … and provide the relevant messages
        pick(messages, "Header")
      }
    >
      <Header />
    </NextIntlClientProvider>
  );
}
