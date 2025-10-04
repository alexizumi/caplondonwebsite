// src/app/components/layout/Navigation.tsx
'use client';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    // Navigate to new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('services'), href: `/${locale}/services` },
    { name: t('events'), href: `/${locale}/events` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const isCurrentPage = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-[#026c92]/95 backdrop-blur-sm fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center">
              <h1 className="text-xl font-bold text-white hover:text-[#c3d21d] transition-colors duration-300">
                CAP London Church
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isCurrentPage(item.href)
                      ? 'bg-[#c3d21d] text-black shadow-lg'
                      : 'text-white hover:text-[#c3d21d] hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-1">
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                  locale === 'en'
                    ? 'bg-[#c3d21d] text-black shadow-md'
                    : 'text-white hover:text-[#c3d21d] hover:bg-white/20'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => switchLocale('pt')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                  locale === 'pt'
                    ? 'bg-[#c3d21d] text-black shadow-md'
                    : 'text-white hover:text-[#c3d21d] hover:bg-white/20'
                }`}
              >
                PT
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#c3d21d] p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`h-6 w-6 transform transition-transform duration-300 ${
                    isMenuOpen ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100 pb-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isCurrentPage(item.href)
                    ? 'bg-[#c3d21d] text-black shadow-lg'
                    : 'text-white hover:text-[#c3d21d] hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
