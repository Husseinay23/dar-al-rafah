import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);

    // Update HTML attributes
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";

    // Update font family
    const root = document.documentElement;
    if (lng === "ar") {
      root.style.fontFamily = "Tajawal, Cairo, system-ui, sans-serif";
      root.classList.add("rtl");
      root.classList.remove("ltr");
    } else {
      root.style.fontFamily = "Inter, system-ui, sans-serif";
      root.classList.add("ltr");
      root.classList.remove("rtl");
    }

    // Keep navigation stable - don't flip layout
    const navElements = document.querySelectorAll(
      ".nav-stable, .nav-container"
    );
    navElements.forEach((el) => {
      (el as HTMLElement).style.direction = "ltr";
    });

    // Force re-render by updating body class
    document.body.className = document.body.className
      .replace(/rtl|ltr/g, "")
      .trim();
    document.body.classList.add(lng === "ar" ? "rtl" : "ltr");
  };

  useEffect(() => {
    // Set initial language and direction
    const currentLang = i18n.language || "ar";
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    // Set initial font family and classes
    const root = document.documentElement;
    if (currentLang === "ar") {
      root.style.fontFamily = "Tajawal, Cairo, system-ui, sans-serif";
      root.classList.add("rtl");
      root.classList.remove("ltr");
    } else {
      root.style.fontFamily = "Inter, system-ui, sans-serif";
      root.classList.add("ltr");
      root.classList.remove("rtl");
    }

    // Set body class
    document.body.className = document.body.className
      .replace(/rtl|ltr/g, "")
      .trim();
    document.body.classList.add(currentLang === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    isRTL: i18n.language === "ar",
  };
};
