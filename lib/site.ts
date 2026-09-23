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
export const DATA_SECURITY_PATH = "/datasakerhet";
export const PRIVACY_PATH = "/integritet";
export const TERMS_PATH = "/anvandarvillkor";
export const DELETE_ACCOUNT_PATH = "/radera-konto";

export const PUBLIC_PATHS = [
  "/",
  APPEN_PATH,
  ABOUT_PATH,
  CONTACT_PATH,
  DATA_SECURITY_PATH,
  DELETE_ACCOUNT_PATH,
  PRIVACY_PATH,
  TERMS_PATH,
] as const;
