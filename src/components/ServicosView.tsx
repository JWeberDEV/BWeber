import { ActiveTab, ServiceItem } from "../types";
import { CheckCircle, ArrowRight, Star } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";

interface ServicosViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  setPreSelectedService: (serviceName: string) => void;
}

// Image URLs are language-independent, keyed by the service id from translations.
const serviceImages: Record<string, string> = {
  ecossistema:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_e211LiQk1WN1Sw7swAt-mm4iH5MpDEob6MyQf2alGY64KSSBR-3x5PkCw7KhyIaXsRJsFx2VJavObC8w6iS3W7Hi6LT64-i92wqv9HzxRwxf79pE60J6S37mUoOiMUNEnhOl_KDTbsVoz90EwORLo_Pv4qgSy68nC8cGSnEGM_AcfbakbPvQB7zNlgkPihZ6AJ9qZD8aCfJwrAgxNOFjmtHO0f3US0aDQXO8QPFORtKvpJgiQQQX3fBtULWWS2OBBcYZlfdcpp8",
  branding:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3nWBKqYU4nNN61WoGfm18QudzIZ4xA5xCg7vb8elQypa_2pSEL2Vl0ST66MLCssCgsm-KPzxqmdmSGnc6CiCWz2X8Px6r5FQfvo8VWrX7wt_9Ns-3AzD1lu6nQK-MkSz3e4xge9M8zeWVX2yZcdMqSA_sOTnBYAZUA54r_1C7LnUBdKNQezw5cnW_nwcPoF4n1UIFDN2upwWeUjG1IHhpSdyRs3HMXiXZiiGguIa2vx2u0R0os9FVz-a2EIPOtJ1buYBpjjs3qXQ",
  trafego:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB3h2dzUP64-hh-zwh7mTjxyrqAwdFiqF6zz3uuXz8fvDcG7_TQvpcL1n3ohqzjT3EEk5yEzpUjni6VvtP9OcypJmaHZ5Z4XBQMq6B2oTi5w0Mqw3vxExYPEf-EHhHfOAgPJ6_J-qTkQhCYcF0UEZLF_SNKDiMC_JYGsB0sLx9F1sLj4FzSGs8bD3W0aZXQYzLPL1hlYgVjkFrTO52dA9VdNSSMOEjSsxAj2imYRD2D05piBJVGQJ5q3iM-w__5CTCQxzPZkI4qZlk",
};

export default function ServicosView({ setActiveTab, setPreSelectedService }: ServicosViewProps) {
  const { t } = useI18n();

  const services: ServiceItem[] = t.servicos.services.map((s) => ({
    ...s,
    image: serviceImages[s.id] ?? "",
  }));

  const handleSelectService = (serviceTitle: string) => {
    setPreSelectedService(serviceTitle);
    setActiveTab(ActiveTab.Contato);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24 space-y-4">
        <div className="flex items-center gap-2 text-primary-fixed">
          <Star className="w-4 h-4 fill-primary-fixed" />
          <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase">
            {t.servicos.eyebrow}
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-on-surface font-semibold max-w-4xl leading-[1.15]">
          {t.servicos.title}
        </h1>
        <p className="font-sans text-base md:text-lg text-text-muted max-w-3xl leading-relaxed">
          {t.servicos.subtitle}
        </p>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-24">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } bg-surface-container-lowest border border-border-muted rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary-fixed/30 hover:shadow-primary-fixed/5 hover:translate-y-[-4px] group`}
              id={`service-block-${service.id}`}
            >
              <div className="lg:w-1/2 relative h-[350px] lg:h-auto min-h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-black/35 z-10"></div>
                <img
                  src={service.image}
                  alt={service.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>

              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-primary-fixed font-semibold">
                  {service.title}
                </h2>
                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 pt-2">
                  {service.points.map((point, ptIdx) => (
                    <div key={ptIdx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-fixed mt-0.5 shrink-0" />
                      <span className="font-sans text-sm text-on-surface">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => handleSelectService(service.title)}
                    className="w-full bg-primary-container text-on-primary-fixed hover:bg-primary-fixed py-4 px-8 font-sans text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer rounded"
                    id={`btn-select-${service.id}`}
                  >
                    {t.servicos.selectBtn}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
