import profissionais from "../../assets/img/profissionais.png";
import { ActiveTab } from "../types";
import { ArrowRight, MessageSquare, Monitor, TrendingUp, Cpu, Award } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";

interface HomeViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenWhatsApp: (initialMsg?: string) => void;
}

export default function HomeView({ setActiveTab, onOpenWhatsApp }: HomeViewProps) {
  const { t } = useI18n();
  return (
    <div className="animate-fade-in">
      <section className="relative pt-40 pb-28 px-margin-mobile md:px-margin-desktop bg-black overflow-hidden">

        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-fixed/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-12 w-[300px] h-[300px] bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10">
          <div className="md:col-span-9 space-y-8 md:space-y-10">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary-fixed leading-[1.1] tracking-tight max-w-4xl">
              {t.home.heroTitle}
            </h1>
            <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
              {t.home.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onOpenWhatsApp(t.home.heroWhatsappMsg)}
                className="bg-primary-container text-on-primary-fixed hover:bg-primary-fixed px-8 py-5 text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl shadow-primary-container/10 cursor-pointer"
                id="hero-whatsapp-btn"
              >
                <MessageSquare className="w-5 h-5" />
                {t.home.heroWhatsappBtn}
              </button>
              <button
                onClick={() => {
                  setActiveTab(ActiveTab.Servicos);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="border border-surface-white text-surface-white hover:bg-surface-white hover:text-black px-8 py-5 text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
                id="hero-services-btn"
              >
                {t.home.heroServicesBtn}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contexto Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-[#0A1F44] border-y border-border-muted relative">
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-border-muted bg-black/40 backdrop-blur-sm rounded-lg hover:border-primary-fixed/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="font-serif text-5xl font-bold text-primary-fixed block mb-4 group-hover:scale-102 transform transition-transform duration-300">
                  {t.home.stat1Value}
                </span>
                <p className="font-sans text-base text-on-surface leading-relaxed">
                  {t.home.stat1Text}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary-fixed tracking-wider uppercase">
                <span>{t.home.stat1Label}</span>
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>

            <div className="p-8 border border-border-muted bg-black/40 backdrop-blur-sm rounded-lg hover:border-primary-fixed/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="font-serif text-5xl font-bold text-primary-fixed block mb-4 group-hover:scale-102 transform transition-transform duration-300">
                  {t.home.stat2Value}
                </span>
                <p className="font-sans text-base text-on-surface leading-relaxed">
                  {t.home.stat2Text}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary-fixed tracking-wider uppercase">
                <span>{t.home.stat2Label}</span>
                <Monitor className="w-4 h-4" />
              </div>
            </div>

            <div className="p-8 border border-border-muted bg-black/40 backdrop-blur-sm rounded-lg hover:border-primary-fixed/30 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="font-serif text-5xl font-bold text-primary-fixed block mb-4 group-hover:scale-102 transform transition-transform duration-300">
                  {t.home.stat3Value}
                </span>
                <p className="font-sans text-base text-on-surface leading-relaxed">
                  {t.home.stat3Text}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary-fixed tracking-wider uppercase">
                <span>{t.home.stat3Label}</span>
                <Award className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-black text-center">
        <div className="max-w-container-max mx-auto">
          <span className="text-xs font-bold tracking-widest text-primary-fixed uppercase mb-4 block">
            {t.home.solutionsEyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-on-surface mb-20 max-w-3xl mx-auto leading-tight">
            {t.home.solutionsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8 text-center">

            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 mb-8 flex items-center justify-center border border-primary-fixed/20 group-hover:border-primary-fixed group-hover:bg-primary-fixed/5 rounded transition-all duration-300">
                <Monitor className="w-8 h-8 text-primary-fixed" />
              </div>
              <h3 className="font-serif text-2xl text-on-surface mb-4 group-hover:text-primary-fixed transition-colors">
                {t.home.card1Title}
              </h3>
              <p className="font-sans text-sm text-text-muted leading-relaxed max-w-xs">
                {t.home.card1Text}
              </p>
            </div>

            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 mb-8 flex items-center justify-center border border-primary-fixed/20 group-hover:border-primary-fixed group-hover:bg-primary-fixed/5 rounded transition-all duration-300">
                <MessageSquare className="w-8 h-8 text-primary-fixed" />
              </div>
              <h3 className="font-serif text-2xl text-on-surface mb-4 group-hover:text-primary-fixed transition-colors">
                {t.home.card2Title}
              </h3>
              <p className="font-sans text-sm text-text-muted leading-relaxed max-w-xs">
                {t.home.card2Text}
              </p>
            </div>

            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 mb-8 flex items-center justify-center border border-primary-fixed/20 group-hover:border-primary-fixed group-hover:bg-primary-fixed/5 rounded transition-all duration-300">
                <Cpu className="w-8 h-8 text-primary-fixed" />
              </div>
              <h3 className="font-serif text-2xl text-on-surface mb-4 group-hover:text-primary-fixed transition-colors">
                {t.home.card3Title}
              </h3>
              <p className="font-sans text-sm text-text-muted leading-relaxed max-w-xs">
                {t.home.card3Text}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-border-muted">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative group overflow-hidden rounded-xl border border-border-muted shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img
              alt={t.home.foundersImgAlt}
              className="w-full h-[550px] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-102 group-hover:scale-100"
              src={profissionais}
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <span className="font-sans text-xs font-bold text-primary-fixed tracking-wider uppercase">
              {t.home.foundersEyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-on-surface font-bold leading-tight">
              {t.home.foundersName}
            </h2>
            <p className="font-sans text-base text-text-muted leading-relaxed">
              {t.home.foundersP1}
            </p>
            <p className="font-sans text-base text-text-muted leading-relaxed">
              {t.home.foundersP2}
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setActiveTab(ActiveTab.Sobre);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="border border-primary-fixed text-primary-fixed hover:bg-primary-fixed hover:text-black px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
                id="founders-learn-more-btn"
              >
                {t.home.foundersBtn}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-black text-center relative overflow-hidden border-t border-border-muted">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-fixed/5 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-on-surface leading-tight max-w-3xl mx-auto">
            {t.home.finalTitle}
          </h2>
          <p className="font-sans text-base text-on-surface-variant max-w-2xl mx-auto">
            {t.home.finalText}
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenWhatsApp(t.home.finalWhatsappMsg)}
              className="bg-primary-container text-on-primary-fixed hover:bg-primary-fixed px-12 py-6 text-sm font-bold tracking-widest uppercase rounded shadow-2xl active:scale-95 transition-all duration-200 cursor-pointer"
              id="final-cta-whatsapp-btn"
            >
              {t.home.finalBtn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
