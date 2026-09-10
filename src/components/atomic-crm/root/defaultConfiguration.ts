import type { ConfigurationContextValue } from "./ConfigurationContext";
// Import the logos as module assets so Vite resolves their URL relative to the
// JS chunk (import.meta.url), not the current route. A plain "./logos/..." path
// breaks on nested routes like /oauth/consent and under a deployment sub-path.
import darkModeLogo from "./logos/logo_atomic_crm_dark.svg";
import lightModeLogo from "./logos/logo_atomic_crm_light.svg";

export const defaultDarkModeLogo = darkModeLogo;
export const defaultLightModeLogo = lightModeLogo;

export const defaultCurrency = "USD";

export const defaultTitle = "Atomic CRM";

export const defaultCompanySectors = [
  { value: "communication-services", label: "Communication Services" },
  { value: "consumer-discretionary", label: "Consumer Discretionary" },
  { value: "consumer-staples", label: "Consumer Staples" },
  { value: "energy", label: "Energy" },
  { value: "financials", label: "Financials" },
  { value: "health-care", label: "Health Care" },
  { value: "industrials", label: "Industrials" },
  { value: "information-technology", label: "Information Technology" },
  { value: "materials", label: "Materials" },
  { value: "real-estate", label: "Real Estate" },
  { value: "utilities", label: "Utilities" },
];

export const defaultDealStages = [
  { value: "opportunity", label: "Opportunity" },
  { value: "proposal-sent", label: "Proposal Sent" },
  { value: "in-negociation", label: "In Negotiation" },
  { value: "won", label: "Won" },
  { value: "lost", label: "Lost" },
  { value: "delayed", label: "Delayed" },
];

export const defaultDealPipelineStatuses = ["won"];

export const defaultDealCategories = [
  { value: "other", label: "Other" },
  { value: "copywriting", label: "Copywriting" },
  { value: "print-project", label: "Print project" },
  { value: "ui-design", label: "UI Design" },
  { value: "website-design", label: "Website design" },
];

export const defaultNoteStatuses = [
  { value: "cold", label: "Cold", color: "#7dbde8" },
  { value: "warm", label: "Warm", color: "#e8cb7d" },
  { value: "hot", label: "Hot", color: "#e88b7d" },
  { value: "in-contract", label: "In Contract", color: "#a4e87d" },
];

export const defaultTaskTypes = [
  { value: "none", label: "None" },
  { value: "email", label: "Email" },
  { value: "demo", label: "Demo" },
  { value: "lunch", label: "Lunch" },
  { value: "meeting", label: "Meeting" },
  { value: "follow-up", label: "Follow-up" },
  { value: "thank-you", label: "Thank you" },
  { value: "ship", label: "Ship" },
  { value: "call", label: "Call" },
];

export const defaultConfiguration: ConfigurationContextValue = {
  companySectors: defaultCompanySectors,
  currency: defaultCurrency,
  dealCategories: defaultDealCategories,
  dealPipelineStatuses: defaultDealPipelineStatuses,
  dealStages: defaultDealStages,
  noteStatuses: defaultNoteStatuses,
  taskTypes: defaultTaskTypes,
  title: defaultTitle,
  darkModeLogo: defaultDarkModeLogo,
  lightModeLogo: defaultLightModeLogo,
};

// Persian (fa) labels for the same configuration values.
// `value` keys stay identical so existing DB rows keep working —
// only the displayed `label` is translated. Admins can reset to these
// from Settings when the UI locale is Persian.
export const persianCompanySectors = [
  { value: "communication-services", label: "خدمات ارتباطی" },
  { value: "consumer-discretionary", label: "کالاهای مصرفی اختیاری" },
  { value: "consumer-staples", label: "کالاهای مصرفی ضروری" },
  { value: "energy", label: "انرژی" },
  { value: "financials", label: "مالی" },
  { value: "health-care", label: "بهداشت و درمان" },
  { value: "industrials", label: "صنعتی" },
  { value: "information-technology", label: "فناوری اطلاعات" },
  { value: "materials", label: "مواد" },
  { value: "real-estate", label: "املاک" },
  { value: "utilities", label: "خدمات عمومی" },
];

export const persianDealStages = [
  { value: "opportunity", label: "فرصت" },
  { value: "proposal-sent", label: "پیشنهاد ارسال شد" },
  { value: "in-negociation", label: "در حال مذاکره" },
  { value: "won", label: "برده شد" },
  { value: "lost", label: "باخته شد" },
  { value: "delayed", label: "به تعویق افتاد" },
];

export const persianDealCategories = [
  { value: "other", label: "سایر" },
  { value: "copywriting", label: "تولید محتوا" },
  { value: "print-project", label: "پروژه چاپی" },
  { value: "ui-design", label: "طراحی رابط کاربری" },
  { value: "website-design", label: "طراحی وب‌سایت" },
];

export const persianNoteStatuses = [
  { value: "cold", label: "سرد", color: "#7dbde8" },
  { value: "warm", label: "گرم", color: "#e8cb7d" },
  { value: "hot", label: "داغ", color: "#e88b7d" },
  { value: "in-contract", label: "در قرارداد", color: "#a4e87d" },
];

export const persianTaskTypes = [
  { value: "none", label: "بدون نوع" },
  { value: "email", label: "ایمیل" },
  { value: "demo", label: "دمو" },
  { value: "lunch", label: "ناهار" },
  { value: "meeting", label: "جلسه" },
  { value: "follow-up", label: "پیگیری" },
  { value: "thank-you", label: "تشکر" },
  { value: "ship", label: "ارسال" },
  { value: "call", label: "تماس" },
];

export const persianDefaultConfiguration: ConfigurationContextValue = {
  companySectors: persianCompanySectors,
  currency: defaultCurrency,
  dealCategories: persianDealCategories,
  dealPipelineStatuses: defaultDealPipelineStatuses,
  dealStages: persianDealStages,
  noteStatuses: persianNoteStatuses,
  taskTypes: persianTaskTypes,
  title: "اتمیک CRM",
  darkModeLogo: defaultDarkModeLogo,
  lightModeLogo: defaultLightModeLogo,
};
