import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: "bi-book-fill",
      title: t("about.value1.title"),
      description: t("about.value1.description"),
    },
    {
      icon: "bi-people-fill",
      title: t("about.value2.title"),
      description: t("about.value2.description"),
    },
    {
      icon: "bi-award-fill",
      title: t("about.value3.title"),
      description: t("about.value3.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {t("about.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {t("about.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <i className="bi bi-bullseye text-2xl text-primary ml-3 rtl:mr-3"></i>
                <h2 className="text-3xl font-bold text-contrast-strong">
                  {t("about.missionTitle")}
                </h2>
              </div>
              <p className="text-lg text-contrast-medium leading-relaxed">
                {t("about.missionText")}
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-lg border">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                {t("about.goals.title")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 ml-3 rtl:mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    {t("about.goals.goal1")}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 ml-3 rtl:mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    {t("about.goals.goal2")}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 ml-3 rtl:mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    {t("about.goals.goal3")}
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 ml-3 rtl:mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    {t("about.goals.goal4")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-lg p-8 shadow-lg border">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {t("about.vision.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.vision.description")}
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <i className="bi bi-eye-fill text-2xl text-primary ml-3 rtl:mr-3"></i>
                <h2 className="text-3xl font-bold text-contrast-strong">
                  {t("about.visionTitle")}
                </h2>
              </div>
              <p className="text-lg text-contrast-medium leading-relaxed">
                {t("about.visionText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <i className="bi bi-heart-fill text-2xl text-primary ml-3 rtl:mr-3"></i>
              <h2 className="text-3xl font-bold text-contrast-strong">
                {t("about.valuesTitle")}
              </h2>
            </div>
            <p className="text-lg text-contrast-medium max-w-3xl mx-auto">
              {t("about.valuesSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-md text-center border"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={cn("text-2xl text-primary", value.icon)}></i>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t("about.stats.title")}
            </h2>
            <p className="text-primary-foreground/80">
              {t("about.stats.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">
                {t("about.stats.courses")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-primary-foreground/80">
                {t("about.stats.students")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-primary-foreground/80">
                {t("about.stats.research")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-foreground/80">
                {t("about.stats.satisfaction")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
