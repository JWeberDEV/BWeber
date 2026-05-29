import { ActiveTab, ContactLead } from "../types";
import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  Mail,
  MapPin,
  CheckCircle,
  Send,
  Landmark,
  Trash2,
} from "lucide-react";
import { useI18n } from "../i18n/I18nContext";

interface ContatoViewProps {
  preSelectedService: string;
  setPreSelectedService: (serviceName: string) => void;
  onOpenWhatsApp: (initialMsg?: string) => void;
}

export default function ContatoView({
  preSelectedService,
  setPreSelectedService,
  onOpenWhatsApp,
}: ContatoViewProps) {
  const { t, locale } = useI18n();
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState(preSelectedService || t.contato.serviceGeneral);
  const [leads, setLeads] = useState<ContactLead[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bweber-leads");
    if (saved) {
      try {
        setLeads(JSON.parse(saved));
      } catch (e) {
        console.error("Failed parsing leads local ledger", e);
      }
    }
  }, []);

  useEffect(() => {
    if (preSelectedService) {
      setService(preSelectedService);
      setMessage(t.contato.preselectMsg.replace("{service}", preSelectedService));
    } else {
      setMessage("");
    }
  }, [preSelectedService, t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) return;

    setIsSubmitting(true);
    setSendFailed(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name,
          whatsapp,
          message,
          serviceInterest: service,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const newLead: ContactLead = {
        id: "lead_" + Date.now(),
        fullName: name,
        whatsapp: whatsapp,
        message: message,
        serviceInterest: service,
        submittedAt: new Date().toLocaleDateString(locale, {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "Pending",
      };

      const updatedLeads = [newLead, ...leads];
      setLeads(updatedLeads);
      localStorage.setItem("bweber-leads", JSON.stringify(updatedLeads));

      setSuccess(true);
      setName("");
      setWhatsapp("");
      setMessage("");
      setPreSelectedService("");

      setTimeout(() => {
        setLeads((prevLeads) => {
          const processed = prevLeads.map((l) =>
            l.id === newLead.id ? { ...l, status: "Reviewed" as const } : l,
          );
          localStorage.setItem("bweber-leads", JSON.stringify(processed));
          return processed;
        });
      }, 5000);
    } catch (err) {
      console.error("Falha ao enviar a solicitação de contato", err);
      setSendFailed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteLeadHistory = (id: string) => {
    const filtered = leads.filter((item) => item.id !== id);
    setLeads(filtered);
    localStorage.setItem("bweber-leads", JSON.stringify(filtered));
  };

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-primary-fixed uppercase block">
                {t.contato.eyebrow}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-on-surface font-semibold max-w-xl leading-[1.15]">
                {t.contato.title}
              </h1>
              <p className="font-sans text-base text-text-muted max-w-lg leading-relaxed">
                {t.contato.subtitle}
              </p>
            </div>

            <div className="bg-surface-container-low border border-border-muted p-8 md:p-10 rounded-xl relative overflow-hidden group shadow-2xl">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="inline-block p-2 border border-primary-fixed/20 rounded bg-primary-fixed/5">
                    <MessageSquare className="w-6 h-6 text-primary-fixed animate-pulse" />
                  </span>
                  <span className="font-sans text-xs font-bold tracking-widest text-primary-fixed uppercase">
                    {t.contato.responseTime}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-on-surface font-semibold leading-snug">
                  {t.contato.specialistTitle}
                </h3>
                <p className="font-sans text-sm text-text-muted max-w-md">
                  {t.contato.specialistText}
                </p>
                <div>
                  <a
                    onClick={() => onOpenWhatsApp(t.contato.whatsappDirectMsg)}
                    className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded font-sans text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-green-500/10 active:scale-95"
                    id="whatsapp-direct-chat-btn"
                    href="https://wa.me/595971565902"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    {t.contato.startChatBtn}
                  </a>
                </div>
              </div>

              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary-fixed/5 rounded-full blur-3xl pointer-events-none transition-colors group-hover:bg-primary-fixed/10" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-2 border-l border-border-muted pl-4">
                <span className="font-sans text-xs font-bold text-text-muted uppercase tracking-wider block">
                  {t.contato.emailLabel}
                </span>
                <a
                  href="mailto:contato@bweberdigital.com"
                  className="font-sans text-sm md:text-base text-on-surface hover:text-primary-fixed transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-primary-fixed" />
                  <span>contato@bweberdigital.com</span>
                </a>
              </div>
              <div className="space-y-2 border-l border-border-muted pl-4">
                <span className="font-sans text-xs font-bold text-text-muted uppercase tracking-wider block">
                  {t.contato.locationLabel}
                </span>
                <span className="font-sans text-sm md:text-base text-on-surface flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary-fixed" />
                  <span>{t.contato.locationValue}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-surface-container-lowest border border-border-muted p-8 md:p-12 rounded-xl shadow-2xl relative">
              <h2 className="font-serif text-2xl sm:text-3xl text-on-surface font-semibold mb-8">
                {t.contato.formTitle}
              </h2>

              {success ? (
                <div
                  className="space-y-6 text-center py-10 animate-fade-in"
                  id="contact-success-state"
                >
                  <div className="w-16 h-16 bg-primary-fixed/10 border border-primary-fixed/30 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-primary-fixed" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-on-surface">
                      {t.contato.successTitle}
                    </h3>
                    <p className="font-sans text-sm text-text-muted max-w-sm mx-auto leading-relaxed">
                      {t.contato.successText}
                    </p>
                  </div>
                  <div className="pt-6">
                    <button
                      onClick={() => setSuccess(false)}
                      className="border border-primary-fixed text-primary-fixed hover:bg-primary-fixed hover:text-black font-sans text-xs font-bold tracking-widest uppercase px-6 py-3 rounded transition-colors cursor-pointer"
                    >
                      {t.contato.successBtn}
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  id="contact-form-portal"
                >
                  <div className="space-y-2">
                    <label className="font-sans text-xs font-bold text-text-muted uppercase tracking-wider block">
                      {t.contato.nameLabel}
                    </label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-surface-container p-4 border border-border-muted rounded focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed/20 text-on-surface font-sans text-sm transition-colors outline-none"
                      placeholder={t.contato.namePlaceholder}
                      id="input-full-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans text-xs font-bold text-text-muted uppercase tracking-wider block">
                      {t.contato.whatsappLabel}
                    </label>
                    <input
                      required
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full bg-surface-container p-4 border border-border-muted rounded focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed/20 text-on-surface font-sans text-sm transition-colors outline-none"
                      placeholder={t.contato.whatsappPlaceholder}
                      id="input-whatsapp"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans text-xs font-bold text-text-muted uppercase tracking-wider block">
                      {t.contato.serviceLabel}
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-surface-container p-4 border border-border-muted rounded focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed/20 text-on-surface font-sans text-sm transition-colors outline-none cursor-pointer"
                      id="input-service-select"
                    >
                      <option value={t.contato.serviceGeneral}>
                        {t.contato.serviceGeneral}
                      </option>
                      {t.servicos.services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans text-xs font-bold text-text-muted uppercase tracking-wider block">
                      {t.contato.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-surface-container p-4 border border-border-muted rounded focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed/20 text-on-surface font-sans text-sm transition-colors outline-none resize-none"
                      placeholder={t.contato.messagePlaceholder}
                      id="input-message"
                    />
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-white text-black hover:bg-primary-fixed font-sans text-xs font-bold tracking-widest uppercase py-5 rounded transition-all cursor-pointer flex items-center justify-center gap-2"
                    id="btn-submit-lead"
                  >
                    {isSubmitting ? (
                      <span>{t.contato.submitting}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contato.submitBtn}</span>
                      </>
                    )}
                  </button>

                  {sendFailed && (
                    <p
                      className="font-sans text-sm text-red-400 text-center"
                      id="contact-error-message"
                      role="alert"
                    >
                      {t.contato.sendError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {leads.length > 0 && (
        <section className="mt-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-4">
          <div className="bg-surface-container border border-border-muted rounded-xl p-8 space-y-6">
            <div className="flex justify-between items-center border-b border-border-muted/50 pb-4">
              <h3 className="font-serif text-lg font-bold text-primary-fixed flex items-center gap-2">
                <Landmark className="w-5 h-5 text-primary-fixed" />
                <span>{t.contato.leadHistoryTitle}</span>
              </h3>
              <p className="font-sans text-xs text-text-muted">
                {t.contato.leadHistorySubtitle}
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-sm">
                <thead>
                  <tr className="border-b border-border-muted text-text-muted uppercase text-xs tracking-wider">
                    <th className="pb-3 pr-4 font-bold">{t.contato.thCliente}</th>
                    <th className="pb-3 pr-4 font-bold">{t.contato.thWhatsapp}</th>
                    <th className="pb-3 pr-4 font-bold">{t.contato.thServico}</th>
                    <th className="pb-3 pr-4 font-bold">{t.contato.thData}</th>
                    <th className="pb-3 pr-4 font-bold">{t.contato.thStatus}</th>
                    <th className="pb-3 text-right font-bold font-sans">
                      {t.contato.thAcoes}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-muted/30">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-black/20 group">
                      <td className="py-4 pr-4 font-semibold text-on-surface">
                        {lead.fullName}
                      </td>
                      <td className="py-4 pr-4 text-text-muted">
                        {lead.whatsapp}
                      </td>
                      <td className="py-4 pr-4 text-primary-fixed text-xs font-bold uppercase tracking-wider">
                        {lead.serviceInterest || t.contato.serviceGeneral}
                      </td>
                      <td className="py-4 pr-4 text-text-muted text-xs">
                        {lead.submittedAt}
                      </td>
                      <td className="py-4 pr-4">
                        <span
                          className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                            lead.status === "Pending"
                              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          }`}
                        >
                          {lead.status === "Pending"
                            ? t.contato.statusPending
                            : t.contato.statusReviewed}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <button
                          onClick={() => deleteLeadHistory(lead.id)}
                          className="text-red-400 hover:text-red-500 hover:bg-red-500/5 p-1 rounded transition-colors cursor-pointer"
                          title={t.contato.removeRecord}
                          id={`delete-lead-${lead.id}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
