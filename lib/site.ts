export const SITE_URL = "https://www.grannsam.nu";
export const SITE_NAME = "Grannsam";
export const SITE_LEGAL_NAME = "Grannsam AB";
export const SITE_SLOGAN = "För ett starkare grannskap";
export const CANONICAL_HOST = "www.grannsam.nu";

export const CONTACT_EMAIL = "info@grannsam.nu";
export const CONTACT_PHONE = "+46736418699";
export const CONTACT_PHONE_DISPLAY = "+46 73 641 86 99";

export const APPEN_PATH = "/appen";
export const CONTACT_PATH = "/kontakt";
export const BOOK_DEMO_PATH = "/kontakt?intent=demo";
export const ABOUT_PATH = "/om-oss";
export const FAQ_PATH = "/faq";
export const DATA_SECURITY_PATH = "/datasakerhet";
export const PRIVACY_PATH = "/integritet";
export const TERMS_PATH = "/anvandarvillkor";
export const DELETE_ACCOUNT_PATH = "/radera-konto";

/** Transactional mail landing. Kept out of PUBLIC_PATHS so it stays out of the sitemap. */
export const AUTH_CALLBACK_PATH = "/auth/callback";
export const APP_AUTH_URL = "grannsam://auth/callback";
export const IOS_APP_STORE_URL = "https://apps.apple.com/app/id6805535420";
export const ANDROID_APP_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.grannsam.app";

export const PUBLIC_PATHS = [
  "/",
  APPEN_PATH,
  ABOUT_PATH,
  FAQ_PATH,
  CONTACT_PATH,
  DATA_SECURITY_PATH,
  DELETE_ACCOUNT_PATH,
  PRIVACY_PATH,
  TERMS_PATH,
] as const;
