import ClientLayout from "./ClientLayout";
import { getMessages } from "next-intl/server";
export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <ClientLayout locale={locale} messages={messages}>
      {children}
    </ClientLayout>
  );
}
