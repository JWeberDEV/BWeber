import { ActiveTab } from "../types";
import { useState } from "react";
import { Shield, FileText, Globe, Landmark, Linkedin, Instagram } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const { t } = useI18n();
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; title: string; content: string } | null>(null);

  const showPrivacy = () => {
    setLegalModal({
      isOpen: true,
      title: t.footer.privacyTitle,
      content: t.footer.privacyContent,
    });
  };

  const showTerms = () => {
    setLegalModal({
      isOpen: true,
      title: t.footer.termsTitle,
      content: t.footer.termsContent,
    });
  };

  return (
    <footer className="w-full pt-20 pb-12 bg-surface-container-lowest border-t border-border-muted mt-auto">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Brand info */}
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tight text-on-surface">
            <Landmark className="w-6 h-6 text-primary-fixed" />
            <span>BWeber</span>
          </div>
          <p className="font-sans text-sm text-text-muted leading-relaxed">
            {t.footer.brandDesc}
          </p>
        </div>

        {/* Links Column */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 sm:gap-24">
          <div className="flex flex-col gap-4">
            <span className="font-sans text-xs font-bold text-primary-fixed uppercase tracking-widest">
              {t.footer.navTitle}
            </span>
            <button
              onClick={() => {
                setActiveTab(ActiveTab.Home);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left font-sans text-sm text-text-muted hover:text-on-surface transition-colors cursor-pointer"
            >
              {t.footer.home}
            </button>
            <button
              onClick={() => {
                setActiveTab(ActiveTab.Servicos);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left font-sans text-sm text-text-muted hover:text-on-surface transition-colors cursor-pointer"
            >
              {t.footer.servicos}
            </button>
            <button
              onClick={() => {
                setActiveTab(ActiveTab.Sobre);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left font-sans text-sm text-text-muted hover:text-on-surface transition-colors cursor-pointer"
            >
              {t.footer.sobreNos}
            </button>
            <button
              onClick={() => {
                setActiveTab(ActiveTab.Contato);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left font-sans text-sm text-text-muted hover:text-on-surface transition-colors cursor-pointer"
            >
              {t.footer.contato}
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-sans text-xs font-bold text-primary-fixed uppercase tracking-widest">
              {t.footer.legalTitle}
            </span>
            <button
              onClick={showPrivacy}
              className="text-left font-sans text-sm text-text-muted hover:text-on-surface transition-colors cursor-pointer"
            >
              {t.footer.privacy}
            </button>
            <button
              onClick={showTerms}
              className="text-left font-sans text-sm text-text-muted hover:text-on-surface transition-colors cursor-pointer"
            >
              {t.footer.terms}
            </button>
          </div>

          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <span className="font-sans text-xs font-bold text-primary-fixed uppercase tracking-widest">
              {t.footer.socialTitle}
            </span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-sans text-sm text-text-muted hover:text-on-surface transition-colors"
            >
              <Linkedin className="w-4 h-4 text-primary-fixed" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/bweber.digital.py/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-sans text-sm text-text-muted hover:text-on-surface transition-colors"
            >
              <Instagram className="w-4 h-4 text-primary-fixed" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-16 pt-8 border-t border-border-muted flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-xs text-text-muted text-center md:text-left">
          © {new Date().getFullYear()} {t.footer.copyrightSuffix}
        </p>
        <div className="flex gap-4">
          <button
            onClick={showPrivacy}
            className="text-text-muted hover:text-primary-fixed transition-colors p-1"
            title={t.footer.securityBadge}
          >
            <Shield className="w-5 h-5" />
          </button>
          <button
            onClick={showTerms}
            className="text-text-muted hover:text-primary-fixed transition-colors p-1"
            title={t.footer.docsLicensing}
          >
            <FileText className="w-5 h-5" />
          </button>
          <a
            href="#"
            className="text-text-muted hover:text-primary-fixed transition-colors p-1"
            title={t.footer.displayLanguage}
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </div>

      {legalModal && legalModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-surface-container-high border border-border-muted rounded-xl max-w-xl w-full p-8 relative shadow-2xl">
            <h3 className="font-serif text-2xl text-primary-fixed mb-4">
              {legalModal.title}
            </h3>
            <p className="font-sans text-sm text-on-surface-variant whitespace-pre-line leading-relaxed mb-8 max-h-[350px] overflow-y-auto pr-2">
              {legalModal.content}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="bg-primary-container text-on-primary-fixed hover:bg-primary-fixed font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                {t.footer.modalUnderstood}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
