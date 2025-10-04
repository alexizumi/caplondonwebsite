// src/app/[locale]/about/page.tsx
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

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

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#b21a18] to-red-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-[#026c92] mb-6">
                {t('mission.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('mission.description')}
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#026c92] to-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">👁️</span>
              </div>
              <h2 className="text-3xl font-bold text-[#026c92] mb-6">
                {t('vision.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars Detailed */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#026c92] mb-6">
              {t('pillars.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pillars.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '👨‍👩‍👧‍👦',
                titleKey: 'pillars.family.title',
                descKey: 'pillars.family.description',
                color: 'from-[#b21a18] to-red-700',
              },
              {
                icon: '📚',
                titleKey: 'pillars.discipleship.title',
                descKey: 'pillars.discipleship.description',
                color: 'from-[#026c92] to-blue-700',
              },
              {
                icon: '🙏',
                titleKey: 'pillars.worship.title',
                descKey: 'pillars.worship.description',
                color: 'from-[#c3d21d] to-lime-600',
              },
              {
                icon: '⚡',
                titleKey: 'pillars.ministry.title',
                descKey: 'pillars.ministry.description',
                color: 'from-[#b21a18] to-[#026c92]',
              },
              {
                icon: '🌍',
                titleKey: 'pillars.evangelism.title',
                descKey: 'pillars.evangelism.description',
                color: 'from-[#026c92] to-[#c3d21d]',
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-br ${pillar.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}
                >
                  <span className="text-2xl text-white">{pillar.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#026c92] mb-4">
                  {t(pillar.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(pillar.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#026c92] mb-6">
              {t('leadership.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('leadership.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for leadership team - you can add real photos later */}
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <div className="bg-gradient-to-br from-[#026c92] to-[#b21a18] w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl text-white">👤</span>
                </div>
                <h3 className="text-xl font-bold text-[#026c92] mb-2">
                  {t(`leadership.member${member}.name`)}
                </h3>
                <p className="text-[#b21a18] font-medium mb-3">
                  {t(`leadership.member${member}.role`)}
                </p>
                <p className="text-gray-600 text-sm">
                  {t(`leadership.member${member}.description`)}
                </p>
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
