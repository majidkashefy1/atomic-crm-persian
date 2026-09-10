import { mergeTranslations } from "ra-core";
import polyglotI18nProvider from "ra-i18n-polyglot";
import englishMessages from "ra-language-english";
import farsiMessages from "ra-language-farsi";
import frenchMessages from "ra-language-french";
import { raSupabaseEnglishMessages } from "ra-supabase-language-english";
import { raSupabaseFrenchMessages } from "ra-supabase-language-french";
import { englishCrmMessages } from "./englishCrmMessages";
import { frenchCrmMessages } from "./frenchCrmMessages";
import { persianCrmMessages } from "./persianCrmMessages";

const raSupabaseEnglishMessagesOverride = {
  "ra-supabase": {
    auth: {
      password_reset: "Check your emails for a Reset Password message.",
    },
  },
};

const raSupabaseFrenchMessagesOverride = {
  "ra-supabase": {
    auth: {
      password_reset:
        "Consultez vos emails pour trouver le message de reinitialisation du mot de passe.",
    },
  },
};

const raSupabasePersianMessagesOverride = {
  "ra-supabase": {
    auth: {
      password_reset: "برای بازنشانی گذرواژه، ایمیل‌های خود را بررسی کنید.",
    },
  },
};

const englishCatalog = mergeTranslations(
  englishMessages,
  raSupabaseEnglishMessages,
  raSupabaseEnglishMessagesOverride,
  englishCrmMessages,
);

const frenchCatalog = mergeTranslations(
  englishCatalog,
  frenchMessages,
  raSupabaseFrenchMessages,
  raSupabaseFrenchMessagesOverride,
  frenchCrmMessages,
);

const persianCatalog = mergeTranslations(
  englishCatalog,
  // ra-supabase has no farsi pack yet: keep english supabase strings
  // with only the password_reset override translated.
  raSupabaseEnglishMessages,
  raSupabasePersianMessagesOverride,
  farsiMessages,
  persianCrmMessages,
);

export type SupportedLocale = "en" | "fr" | "fa";

export const getInitialLocale = (): SupportedLocale => {
  if (typeof navigator === "undefined") {
    return "en";
  }

  const browserLocale = navigator.languages?.[0] ?? navigator.language ?? "";
  const normalized = browserLocale.toLowerCase();
  if (normalized.startsWith("fa")) {
    return "fa";
  }
  if (normalized.startsWith("fr")) {
    return "fr";
  }

  return "en";
};

export const isRtlLocale = (locale: string) => locale === "fa";

export const i18nProvider = polyglotI18nProvider(
  (locale) => {
    if (locale === "fr") {
      return frenchCatalog;
    }
    if (locale === "fa") {
      return persianCatalog;
    }
    return englishCatalog;
  },
  getInitialLocale(),
  [
    { locale: "en", name: "English" },
    { locale: "fr", name: "Français" },
    { locale: "fa", name: "فارسی" },
  ],
  { allowMissing: true },
);

export const testI18nProvider = polyglotI18nProvider(
  () => englishCatalog,
  "en",
  [{ locale: "en", name: "English" }],
  { allowMissing: true },
);
