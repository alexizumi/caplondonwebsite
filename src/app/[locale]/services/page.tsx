// src/app/[locale]/services/page.tsx
import { useTranslations } from 'next-intl';

export default function ServicesPage() {
  const t = useTranslations('services');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#026c92] via-[#b21a18] to-black"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#c3d21d]">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">{t('subtitle')}</p>
        </div>
      </section>

      {/* Weekly Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#026c92] mb-6">
              {t('weekly.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('weekly.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sunday Service */}
            <div className="bg-gradient-to-br from-[#026c92] to-blue-400 rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-6">🙏</div>
              <h3 className="text-2xl font-bold mb-4">{t('sunday.title')}</h3>
              <div className="text-3xl font-bold text-[#c3d21d] mb-4">
                {t('sunday.time')}
              </div>
              <p className="text-gray-200 mb-6">{t('sunday.description')}</p>
              <ul className="text-left text-gray-200 space-y-2">
                <li>• {t('sunday.worship')}</li>
                <li>• {t('sunday.preaching')}</li>
                <li>• {t('sunday.fellowship')}</li>
                <li>• {t('sunday.prayer')}</li>
              </ul>
            </div>

            {/* Tuesday Prayer */}
            <div className="bg-gradient-to-br from-[#026c92] to-blue-400 rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-6">🤲</div>
              <h3 className="text-2xl font-bold mb-4">{t('tuesday.title')}</h3>
              <div className="text-3xl font-bold text-[#c3d21d] mb-4">
                {t('tuesday.time')}
              </div>
              <p className="text-gray-200 mb-6">{t('tuesday.description')}</p>
              <ul className="text-left text-gray-200 space-y-2">
                <li>• {t('tuesday.intercession')}</li>
                <li>• {t('tuesday.healing')}</li>
                <li>• {t('tuesday.breakthrough')}</li>
                <li>• {t('tuesday.community')}</li>
              </ul>
            </div>

            {/* Thursday Bible Study */}
            <div className="bg-gradient-to-br from-[#026c92] to-blue-400 rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-6">📖</div>
              <h3 className="text-2xl font-bold mb-4">{t('thursday.title')}</h3>
              <div className="text-3xl font-bold text-[#c3d21d] mb-4">
                {t('thursday.time')}
              </div>
              <p className="text-gray-200 mb-6">{t('thursday.description')}</p>
              <ul className="text-left text-gray-200 space-y-2">
                <li>• {t('thursday.study')}</li>
                <li>• {t('thursday.discussion')}</li>
                <li>• {t('thursday.growth')}</li>
                <li>• {t('thursday.application')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#026c92] mb-6">
              {t('special.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('special.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                titleKey: 'special.youth.title',
                descKey: 'special.youth.description',
                timeKey: 'special.youth.time',
                icon: '🔥',
                color: 'from-purple-500 to-pink-500',
              },
              {
                titleKey: 'special.womens.title',
                descKey: 'special.womens.description',
                timeKey: 'special.womens.time',
                icon: '👩‍👩‍👧‍👧',
                color: 'from-pink-500 to-rose-500',
              },
              {
                titleKey: 'special.mens.title',
                descKey: 'special.mens.description',
                timeKey: 'special.mens.time',
                icon: '👨‍👨‍👦‍👦',
                color: 'from-blue-500 to-indigo-500',
              },
              {
                titleKey: 'special.children.title',
                descKey: 'special.children.description',
                timeKey: 'special.children.time',
                icon: '👶',
                color: 'from-yellow-400 to-orange-500',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}
                >
                  <span className="text-2xl text-white">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#026c92] mb-4">
                  {t(service.titleKey)}
                </h3>
                <p className="text-[#b21a18] font-medium mb-4">
                  {t(service.timeKey)}
                </p>
                <p className="text-gray-600">{t(service.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#026c92] mb-8">
            {t('expect.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-12">{t('expect.subtitle')}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎵',
                titleKey: 'expect.worship.title',
                descKey: 'expect.worship.description',
              },
              {
                icon: '📢',
                titleKey: 'expect.word.title',
                descKey: 'expect.word.description',
              },
              {
                icon: '🤝',
                titleKey: 'expect.community.title',
                descKey: 'expect.community.description',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#026c92] mb-3">
                  {t(item.titleKey)}
                </h3>
                <p className="text-gray-600">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#026c92] via-[#b21a18] to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#c3d21d]">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">{t('cta.description')}</p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#c3d21d] to-[#b21a18] text-black font-semibold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
            {t('cta.button')}
          </button>
        </div>
      </section>
    </div>
  );
}
