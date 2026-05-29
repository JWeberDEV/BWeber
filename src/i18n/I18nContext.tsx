import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { translations, localeMap, type Lang, type Translation } from "./translations";

const STORAGE_KEY = "bweber-lang";

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  locale: string;
  t: Translation;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "pt";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "pt" || saved === "en" || saved === "es") return saved;
  // Fall back to the browser language when there is no saved preference.
  const nav = window.navigator.language.slice(0, 2).toLowerCase();
  if (nav === "en") return "en";
  if (nav === "es") return "es";
  return "pt";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const value: I18nContextValue = {
    lang,
    setLang,
    locale: localeMap[lang],
    t: translations[lang],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside an I18nProvider");
  }
  return ctx;
}
