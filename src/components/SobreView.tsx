import CEOS from "../../assets/img/CEOS.png";
import { ActiveTab } from "../types";
import { useI18n } from "../i18n/I18nContext";

interface SobreViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function SobreView({ setActiveTab }: SobreViewProps) {
  const { t } = useI18n();
  return (
    <div className="animate-fade-in">
      <section className="relative min-h-[980px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/30 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <img
            alt={t.sobre.heroImgAlt}
            className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-700 ease-in-out"
            src={CEOS}
          />
        </div>

        <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full py-20">
          <div className="max-w-3xl space-y-6">
            <span className="font-sans text-xs font-bold text-primary-fixed tracking-[0.2em] uppercase block">
              {t.sobre.heroEyebrow}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-on-surface leading-[1.1] font-semibold">
              {t.sobre.heroTitle}
            </h1>
            <p className="font-sans text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {t.sobre.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-b border-border-muted">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5 space-y-4 md:sticky md:top-32">
              <span className="inline-block text-xs font-bold tracking-widest text-primary-fixed uppercase">
                {t.sobre.manifestoEyebrow}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-on-surface font-semibold leading-tight">
                {t.sobre.manifestoTitle}
              </h2>
            </div>
            <div className="md:col-span-7 flex flex-col gap-12">
              <div className="p-8 md:p-10 border border-border-muted bg-[#0A1F44]/20 backdrop-blur-sm rounded-xl space-y-6">
                <p className="font-sans text-base md:text-lg text-on-surface leading-relaxed">
                  {t.sobre.manifestoP1}
                </p>
                <p className="font-sans text-base md:text-lg text-on-surface leading-relaxed">
                  {t.sobre.manifestoP2}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-l-2 border-primary-fixed pl-6 py-2 space-y-2">
                  <h3 className="font-serif text-xl text-on-surface font-bold">
                    {t.sobre.visionTitle}
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {t.sobre.visionText}
                  </p>
                </div>

                <div className="border-l-2 border-primary-fixed pl-6 py-2 space-y-2">
                  <h3 className="font-serif text-xl text-on-surface font-bold">
                    {t.sobre.missionTitle}
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {t.sobre.missionText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-black overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-primary-fixed/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-10">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-on-surface font-semibold tracking-tight max-w-3xl mx-auto">
            {t.sobre.ctaTitle}
          </h2>
          <p className="font-sans text-base text-text-muted max-w-2xl mx-auto leading-relaxed">
            {t.sobre.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => {
                setActiveTab(ActiveTab.Contato);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full sm:w-auto bg-primary-container text-on-primary-fixed hover:bg-primary-fixed px-12 py-5 font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer rounded"
              id="about-cta-chat"
            >
              {t.sobre.ctaChat}
            </button>
            <button
              onClick={() => {
                setActiveTab(ActiveTab.Servicos);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full sm:w-auto border border-white text-white hover:bg-white hover:text-black px-12 py-5 font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer rounded"
              id="about-cta-services"
            >
              {t.sobre.ctaServices}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
