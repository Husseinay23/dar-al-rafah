import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {t("contact.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {t("contact.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-lg shadow-lg p-8 border">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">
              {t("contact.form.title")}
            </h2>

            {isSubmitted ? (
              <div className="text-center py-8">
                <i className="bi bi-check-circle-fill text-6xl text-green-500 mx-auto mb-4"></i>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {t("contact.form.successTitle")}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t("contact.form.successMessage")}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {t("contact.form.sendAnother")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
                    placeholder={t("contact.form.messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground ml-2 rtl:mr-2"></div>
                      {t("contact.form.sending")}
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send-fill text-sm ml-2 rtl:mr-2"></i>
                      {t("contact.send")}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-contrast-strong mb-6">
                {t("contact.info.title")}
              </h2>
              <p className="text-contrast-medium mb-8">
                {t("contact.info.description")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-envelope-fill text-primary text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {t("contact.info.email")}
                  </h3>
                  <p className="text-muted-foreground">info@daralrafah.com</p>
                  <p className="text-muted-foreground">
                    support@daralrafah.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-telephone-fill text-primary text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {t("contact.info.phone")}
                  </h3>
                  <p className="text-muted-foreground">+961 70 123 456</p>
                  <p className="text-muted-foreground">+961 1 234 567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-geo-alt-fill text-primary text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {t("contact.info.address")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.info.address1")}
                  </p>
                  <p className="text-muted-foreground">
                    {t("contact.info.address2")}
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {t("contact.faq.title")}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    {t("contact.faq.q1")}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t("contact.faq.a1")}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    {t("contact.faq.q2")}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t("contact.faq.a2")}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    {t("contact.faq.q3")}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t("contact.faq.a3")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
