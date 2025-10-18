import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage } = useLanguage();
  const location = useLocation();

  const navItems = [
    { key: "home", path: "/", icon: "bi-house" },
    { key: "courses", path: "/courses", icon: "bi-book" },
    { key: "news", path: "/news", icon: "bi-newspaper" },
    { key: "research", path: "/research", icon: "bi-file-text" },
    { key: "about", path: "/about", icon: "bi-info-circle" },
    { key: "contact", path: "/contact", icon: "bi-envelope" },
  ];

  const languages = [
    { code: "ar", name: "العربية", flag: "🇱🇧" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm nav-stable">
      <div className="container mx-auto px-4 nav-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg">
              <i className="bi bi-mortarboard-fill text-lg"></i>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-foreground">
                {t("home.hero.title")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-accent/50",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <i className={cn("text-sm", item.icon)}></i>
                <span className="hidden xl:inline">{t(`nav.${item.key}`)}</span>
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium hover:bg-accent/50 transition-colors"
              >
                <i className="bi bi-globe text-sm"></i>
                <span className="hidden sm:inline">
                  {languages.find((l) => l.code === currentLanguage)?.flag}
                </span>
                <i className="bi bi-chevron-down text-xs"></i>
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-popover text-popover-foreground rounded-lg shadow-lg border z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLanguageOpen(false);
                      }}
                      className={cn(
                        "w-full px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground flex items-center space-x-3 transition-colors first:rounded-t-lg last:rounded-b-lg",
                        currentLanguage === lang.code
                          ? "bg-accent text-accent-foreground"
                          : "text-foreground"
                      )}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                      {currentLanguage === lang.code && (
                        <i className="bi bi-check text-primary ml-auto"></i>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent/50 transition-colors"
              title={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? (
                <i className="bi bi-moon-fill text-sm"></i>
              ) : (
                <i className="bi bi-sun-fill text-sm"></i>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors"
            >
              {isMenuOpen ? (
                <i className="bi bi-x-lg text-sm"></i>
              ) : (
                <i className="bi bi-list text-sm"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background/95 backdrop-blur">
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-colors",
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent/50"
                  )}
                >
                  <i className={cn("text-sm", item.icon)}></i>
                  <span>{t(`nav.${item.key}`)}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
