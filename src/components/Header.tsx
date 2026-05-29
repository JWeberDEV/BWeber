import { ActiveTab } from "../types";
import { MessageSquare, Menu, X, Landmark } from "lucide-react";
import { useState } from "react";
import { useI18n } from "../i18n/I18nContext";
import LanguageSwitcher from "../i18n/LanguageSwitcher";

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenWhatsApp: (initialMsg?: string) => void;
}

export default function Header({ activeTab, setActiveTab, onOpenWhatsApp }: HeaderProps) {
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: ActiveTab.Home, label: t.nav.home },
    { id: ActiveTab.Servicos, label: t.nav.servicos },
    { id: ActiveTab.Sobre, label: t.nav.sobre },
    { id: ActiveTab.Contato, label: t.nav.contato },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    // Smooth scroll to top when changing tab
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/85 backdrop-blur-xl border-b border-border-muted transition-all duration-300">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick(ActiveTab.Home)}
          className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tight text-on-surface hover:opacity-90 active:scale-98 transition-all"
          id="brand-logo-btn"
        >
          <Landmark className="w-6 h-6 text-primary-fixed" />
          <span>BWeber</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs uppercase tracking-widest font-bold pb-1 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-primary-fixed border-b-2 border-primary-fixed"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action button and Language selection */}
        <div className="hidden md:flex items-center gap-6">
          <LanguageSwitcher />
          <button
            onClick={() => onOpenWhatsApp(t.header.specialistMsg)}
            className="bg-primary-container text-on-primary-fixed hover:bg-primary-fixed px-6 py-3 font-sans text-xs font-bold tracking-wider rounded-lg active:scale-95 hover:shadow-lg hover:shadow-primary-container/10 transition-all duration-200 cursor-pointer"
            id="whatsapp-header-btn"
          >
            {t.header.whatsappBtn}
          </button>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex md:hidden items-center gap-4">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-primary-fixed p-2 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 border-b border-border-muted px-margin-mobile py-8 space-y-6 flex flex-col justify-center animate-fade-in">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-lg font-serif tracking-wide py-2 ${
                    isActive ? "text-primary-fixed font-bold border-l-2 border-primary-fixed pl-3" : "text-on-surface-variant"
                  }`}
                  id={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenWhatsApp(t.header.mobileMsg);
            }}
            className="w-full bg-primary-container text-on-primary-fixed hover:bg-primary-fixed py-4 font-bold text-xs tracking-wider rounded-lg active:scale-95 transition-all text-center flex items-center justify-center gap-2"
            id="mobile-whatsapp-header-btn"
          >
            <MessageSquare className="w-4 h-4" />
            {t.header.mobileWhatsappBtn}
          </button>
        </div>
      )}
    </nav>
  );
}
