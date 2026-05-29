import { LANGS } from "./translations";
import { useI18n } from "./I18nContext";

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { lang, setLang } = useI18n();

  return (
    <div
      className={`flex items-center gap-1 font-sans text-xs font-bold tracking-wider ${className}`}
      role="group"
      aria-label="Language selector"
    >
      {LANGS.map((item, idx) => (
        <span key={item.code} className="flex items-center">
          {idx > 0 && <span className="text-text-muted/40 mx-1">|</span>}
          <button
            type="button"
            onClick={() => setLang(item.code)}
            aria-pressed={lang === item.code}
            className={`transition-colors cursor-pointer ${
              lang === item.code
                ? "text-primary-fixed"
                : "text-text-muted hover:text-on-surface"
            }`}
            id={`lang-switch-${item.code}`}
          >
            {item.label}
          </button>
        </span>
      ))}
    </div>
  );
}
