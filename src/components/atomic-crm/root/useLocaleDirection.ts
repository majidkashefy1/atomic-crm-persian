import { useEffect } from "react";
import { useLocaleState } from "ra-core";
import { isRtlLocale } from "../providers/commons/i18nProvider";

/**
 * Syncs <html> dir + lang with the current react-admin locale.
 * - fa → dir="rtl" lang="fa" (Vazirmatn font via CSS)
 * - en/fr → dir="ltr"
 *
 * Must be rendered inside <Admin> (needs StoreContext for useLocaleState).
 */
export const useLocaleDirection = () => {
  const [locale] = useLocaleState();

  useEffect(() => {
    if (typeof document === "undefined") return;
    const rtl = isRtlLocale(locale ?? "en");
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.documentElement.lang = locale ?? "en";
  }, [locale]);
};
