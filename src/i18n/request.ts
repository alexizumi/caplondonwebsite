// src/app/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales, type Locale } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validate that the incoming locale is supported
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;

    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error('Error loading messages for locale:', locale, error);
    // Fallback to default locale
    const fallbackMessages = (
      await import(`../../messages/${defaultLocale}.json`)
    ).default;
    return {
      locale: defaultLocale,
      messages: fallbackMessages,
    };
  }
});
