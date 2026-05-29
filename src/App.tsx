import { useState } from "react";
import { ActiveTab } from "./types";
import Header from "./components/Header";
import HomeView from "./components/HomeView";
import ServicosView from "./components/ServicosView";
import SobreView from "./components/SobreView";
import ContatoView from "./components/ContatoView";
import Footer from "./components/Footer";
import { MessageSquare } from "lucide-react";
import { useI18n } from "./i18n/I18nContext";

export default function App() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Home);
  const [preSelectedService, setPreSelectedService] = useState<string>("");
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [whatsappInitialMsg, setWhatsappInitialMsg] = useState("");

  const handleOpenWhatsApp = (initialMsg?: string) => {
    if (initialMsg) {
      setWhatsappInitialMsg(initialMsg);
    } else {
      setWhatsappInitialMsg("");
    }
    setWhatsappOpen(true);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case ActiveTab.Home:
        return (
          <HomeView
            setActiveTab={setActiveTab}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        );
      case ActiveTab.Servicos:
        return (
          <ServicosView
            setActiveTab={setActiveTab}
            setPreSelectedService={setPreSelectedService}
          />
        );
      case ActiveTab.Sobre:
        return <SobreView setActiveTab={setActiveTab} />;
      case ActiveTab.Contato:
        return (
          <ContatoView
            preSelectedService={preSelectedService}
            setPreSelectedService={setPreSelectedService}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        );
      default:
        return (
          <HomeView
            setActiveTab={setActiveTab}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-on-surface flex flex-col selection:bg-primary-fixed/30 selection:text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-primary-fixed/20 to-transparent pointer-events-none z-10" />

      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      <main className="flex-1 pb-12">{renderActiveView()}</main>

      <Footer setActiveTab={setActiveTab} />

      <a
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl active:scale-90 hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer group"
        title={t.floatingWhatsapp.label}
        id="floating-whatsapp-trigger"
        href="https://wa.me/595971565902"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] group-hover:ml-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap">
          {t.floatingWhatsapp.label}
        </span>
      </a>
    </div>
  );
}
