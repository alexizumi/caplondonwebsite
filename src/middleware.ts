// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always', // This ensures /en and /pt are always in the URL
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|en)/:path*'],
};
