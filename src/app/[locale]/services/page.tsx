// src/app/[locale]/services/page.tsx
'use client';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ServicesPage() {
  const t = useTranslations('services');
  const locale = useLocale();

  const contactPath = `/${locale}/contact`;
  const contactFormHref = {
    pathname: `/${locale}/contact`,
    hash: 'contact-form',
  };

  const services = [
    {
      key: 'sunday',
      color: 'from-[#026c92] to-[#025a7a]',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
    },
    {
      key: 'tuesday',
      color: 'from-[#b21a18] to-[#8b1513]',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      key: 'thursday',
      color: 'from-[#c3d21d] to-[#9fb516]',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Elevation Style */}
      <section className="relative h-96 md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#026c92] via-[#b21a18] to-[#000000]"></div>

        {/* Orbs sutis */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-12 left-12 w-72 h-72 bg-[#b21a18] rounded-full mix-blend-multiply blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute top-32 right-16 w-72 h-72 bg-[#c3d21d] rounded-full mix-blend-multiply blur-xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute bottom-12 left-40 w-72 h-72 bg-[#026c92] rounded-full mix-blend-multiply blur-xl opacity-10 animate-pulse delay-2000"></div>
        </div>

        {/* Conteúdo do Hero */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#c3d21d] via-white to-[#c3d21d] bg-clip-text text-transparent drop-shadow-lg">
            Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md max-w-3xl mx-auto">
            Find the right experience for you — online or in person.
          </p>
        </div>
      </section>

      {/* Service Times - Elevation Style */}
      <section id="service-times" className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find the right experience for you
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              No matter where you are, become a part of all God is doing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, index) => (
              <div key={s.key} className="group">
                <div
                  className={`relative bg-gradient-to-br ${s.color} rounded-2xl p-8 h-96 flex flex-col justify-between overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl`}
                >
                  {/* Padrão de fundo */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="w-full h-full bg-white rounded-full translate-x-8 -translate-y-8"></div>
                  </div>

                  {/* Conteúdo */}
                  <div className="relative z-10">
                    <div className="text-white/90 mb-6">{s.icon}</div>

                    {/* Badge de horário */}
                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                      <span className="text-white font-semibold text-sm">
                        {t(`${s.key}.time`)}
                      </span>
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {t(`${s.key}.title`)}
                    </h3>

                    {/* Descrição */}
                    <p className="text-white/90 text-sm leading-relaxed mb-6">
                      {t(`${s.key}.description`)}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="relative z-10">
                    <Link
                      href={contactFormHref}
                      className="flex items-center text-white font-semibold group-hover:text-white/80 transition-colors"
                    >
                      Learn more
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us This Sunday - CTA Section */}
      <section className="py-20 bg-[#000000] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Join us This Sunday
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Experience the power of worship and community. Whether you&apos;re
            joining us for the first time or you&apos;re a regular, we
            can&apos;t wait to see you there.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={contactFormHref}
              className="px-8 py-4 bg-gradient-to-r from-[#c3d21d] to-[#b21a18] text-black font-semibold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              Plan your visit
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <button className="px-8 py-4 border-2 border-[#c3d21d] text-[#c3d21d] font-semibold rounded-full hover:bg-[#c3d21d] hover:text-black transform transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// import { useTranslations } from 'next-intl';

// export default function ServicesPage() {
//   const t = useTranslations('services');

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-96 flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#026c92] via-[#b21a18] to-black"></div>
//         <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#c3d21d]">
//             {t('title')}
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-200">{t('subtitle')}</p>
//         </div>
//       </section>

//       {/* Weekly Services */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#026c92] mb-6">
//               {t('weekly.title')}
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               {t('weekly.subtitle')}
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Sunday Service */}
//             <div className="bg-gradient-to-br from-[#026c92] to-blue-400 rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="text-6xl mb-6">🙏</div>
//               <h3 className="text-2xl font-bold mb-4">{t('sunday.title')}</h3>
//               <div className="text-3xl font-bold text-[#c3d21d] mb-4">
//                 {t('sunday.time')}
//               </div>
//               <p className="text-gray-200 mb-6">{t('sunday.description')}</p>
//               <ul className="text-left text-gray-200 space-y-2">
//                 <li>• {t('sunday.worship')}</li>
//                 <li>• {t('sunday.preaching')}</li>
//                 <li>• {t('sunday.fellowship')}</li>
//                 <li>• {t('sunday.prayer')}</li>
//               </ul>
//             </div>

//             {/* Tuesday Prayer */}
//             <div className="bg-gradient-to-br from-[#026c92] to-blue-400 rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="text-6xl mb-6">🤲</div>
//               <h3 className="text-2xl font-bold mb-4">{t('tuesday.title')}</h3>
//               <div className="text-3xl font-bold text-[#c3d21d] mb-4">
//                 {t('tuesday.time')}
//               </div>
//               <p className="text-gray-200 mb-6">{t('tuesday.description')}</p>
//               <ul className="text-left text-gray-200 space-y-2">
//                 <li>• {t('tuesday.intercession')}</li>
//                 <li>• {t('tuesday.healing')}</li>
//                 <li>• {t('tuesday.breakthrough')}</li>
//                 <li>• {t('tuesday.community')}</li>
//               </ul>
//             </div>

//             {/* Thursday Bible Study */}
//             <div className="bg-gradient-to-br from-[#026c92] to-blue-400 rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="text-6xl mb-6">📖</div>
//               <h3 className="text-2xl font-bold mb-4">{t('thursday.title')}</h3>
//               <div className="text-3xl font-bold text-[#c3d21d] mb-4">
//                 {t('thursday.time')}
//               </div>
//               <p className="text-gray-200 mb-6">{t('thursday.description')}</p>
//               <ul className="text-left text-gray-200 space-y-2">
//                 <li>• {t('thursday.study')}</li>
//                 <li>• {t('thursday.discussion')}</li>
//                 <li>• {t('thursday.growth')}</li>
//                 <li>• {t('thursday.application')}</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Special Services */}
//       <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#026c92] mb-6">
//               {t('special.title')}
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               {t('special.subtitle')}
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               {
//                 titleKey: 'special.youth.title',
//                 descKey: 'special.youth.description',
//                 timeKey: 'special.youth.time',
//                 icon: '🔥',
//                 color: 'from-purple-500 to-pink-500',
//               },
//               {
//                 titleKey: 'special.womens.title',
//                 descKey: 'special.womens.description',
//                 timeKey: 'special.womens.time',
//                 icon: '👩‍👩‍👧‍👧',
//                 color: 'from-pink-500 to-rose-500',
//               },
//               {
//                 titleKey: 'special.mens.title',
//                 descKey: 'special.mens.description',
//                 timeKey: 'special.mens.time',
//                 icon: '👨‍👨‍👦‍👦',
//                 color: 'from-blue-500 to-indigo-500',
//               },
//               {
//                 titleKey: 'special.children.title',
//                 descKey: 'special.children.description',
//                 timeKey: 'special.children.time',
//                 icon: '👶',
//                 color: 'from-yellow-400 to-orange-500',
//               },
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <div
//                   className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}
//                 >
//                   <span className="text-2xl text-white">{service.icon}</span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#026c92] mb-4">
//                   {t(service.titleKey)}
//                 </h3>
//                 <p className="text-[#b21a18] font-medium mb-4">
//                   {t(service.timeKey)}
//                 </p>
//                 <p className="text-gray-600">{t(service.descKey)}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* What to Expect */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#026c92] mb-8">
//             {t('expect.title')}
//           </h2>
//           <p className="text-xl text-gray-600 mb-12">{t('expect.subtitle')}</p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: '🎵',
//                 titleKey: 'expect.worship.title',
//                 descKey: 'expect.worship.description',
//               },
//               {
//                 icon: '📢',
//                 titleKey: 'expect.word.title',
//                 descKey: 'expect.word.description',
//               },
//               {
//                 icon: '🤝',
//                 titleKey: 'expect.community.title',
//                 descKey: 'expect.community.description',
//               },
//             ].map((item, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-6xl mb-4">{item.icon}</div>
//                 <h3 className="text-xl font-bold text-[#026c92] mb-3">
//                   {t(item.titleKey)}
//                 </h3>
//                 <p className="text-gray-600">{t(item.descKey)}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-gradient-to-br from-[#026c92] via-[#b21a18] to-black text-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#c3d21d]">
//             {t('cta.title')}
//           </h2>
//           <p className="text-xl text-gray-300 mb-8">{t('cta.description')}</p>
//           <button className="px-8 py-4 bg-gradient-to-r from-[#c3d21d] to-[#b21a18] text-black font-semibold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
//             {t('cta.button')}
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }
