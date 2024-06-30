"use client";

import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "@/components/common/ScrollTop";
import { NextIntlClientProvider } from "next-intl";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "@/styles/index.scss";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function ClientLayout({ children, locale, messages }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body>
        <main>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
            <SrollTop />
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
