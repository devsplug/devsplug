import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./src/i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  // Used when no locale matches
  defaultLocale: defaultLocale,
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en|fr)/:path*"],
};
