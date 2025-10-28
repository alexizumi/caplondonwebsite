// src/app/[locale]/about/page.tsx
'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen">
      {/* Hero Section - Elevation Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#026c92] via-[#b21a18] to-[#000000]"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-4">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#b21a18] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-[#c3d21d] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-[#026c92] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#c3d21d] via-white to-[#c3d21d] bg-clip-text text-transparent animate-fade-in drop-shadow-lg">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay drop-shadow-md max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Mission & Vision - Elevation Style */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on biblical principles and guided by divine purpose
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group">
              <div className="bg-gradient-to-br from-[#b21a18] to-[#8b1513] rounded-2xl p-8 h-96 flex flex-col justify-between overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="w-full h-full bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <div className="text-white/90 mb-6">
                    <svg
                      className="w-12 h-12"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>

                  {/* Badge */}
                  <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                    <span className="text-white font-semibold text-sm">
                      Our Mission
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {t('mission.title')}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    {t('mission.description')}
                  </p>
                </div>

                {/* CTA */}
                <div className="relative z-10">
                  <button className="flex items-center text-white font-semibold group-hover:text-white/80 transition-colors">
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
                  </button>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group">
              <div className="bg-gradient-to-br from-[#026c92] to-[#025a7a] rounded-2xl p-8 h-96 flex flex-col justify-between overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="w-full h-full bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <div className="text-white/90 mb-6">
                    <svg
                      className="w-12 h-12"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                  </div>

                  {/* Badge */}
                  <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                    <span className="text-white font-semibold text-sm">
                      Our Vision
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {t('vision.title')}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    {t('vision.description')}
                  </p>
                </div>

                {/* CTA */}
                <div className="relative z-10">
                  <button className="flex items-center text-white font-semibold group-hover:text-white/80 transition-colors">
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
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars */}
      <section id="five-pillars" className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('pillars.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('pillars.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1l-2.54 3.4c-.34.45-.98.4-1.28-.1L8.5 9.5c-.32-.53-.88-.84-1.5-.84H5c-.83 0-1.54.5-1.84 1.22L1.04 15H4v7h2v-6h1.5l1.7-5.27L12.5 15H15v7h5z" />
                  </svg>
                ),
                titleKey: 'pillars.family.title',
                descKey: 'pillars.family.description',
                color: 'from-[#026c92] to-[#025a7a]',
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                ),
                titleKey: 'pillars.discipleship.title',
                descKey: 'pillars.discipleship.description',
                color: 'from-[#b21a18] to-[#8b1513]',
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                ),
                titleKey: 'pillars.worship.title',
                descKey: 'pillars.worship.description',
                color: 'from-[#c3d21d] to-[#9fb516]',
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ),
                titleKey: 'pillars.ministry.title',
                descKey: 'pillars.ministry.description',
                color: 'from-[#026c92] to-[#b21a18]',
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                ),
                titleKey: 'pillars.evangelism.title',
                descKey: 'pillars.evangelism.description',
                color: 'from-[#b21a18] to-[#c3d21d]',
              },
            ].map((pillar, index) => (
              <div key={index} className="group">
                <div
                  className={`relative bg-gradient-to-br ${pillar.color} rounded-2xl p-8 h-115 flex flex-col justify-between overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl`}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="w-full h-full bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-white/90 mb-6">{pillar.icon}</div>
                    <div className="text-white/80 text-sm font-medium uppercase tracking-wider mb-3">
                      Core Value
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {t(pillar.titleKey)}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {t(pillar.descKey)}
                    </p>
                  </div>

                  {/* CTA Arrow */}
                  <div className="relative z-10 flex justify-between items-end">
                    <div></div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <svg
                        className="w-4 h-4 text-white"
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section - Elevation Style */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('leadership.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('leadership.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((member, index) => (
              <div key={member} className="group">
                <div
                  className={`bg-gradient-to-br ${
                    index === 0
                      ? 'from-[#026c92] to-[#025a7a]'
                      : index === 1
                      ? 'from-[#b21a18] to-[#8b1513]'
                      : 'from-[#c3d21d] to-[#9fb516]'
                  } rounded-2xl p-8 h-96 flex flex-col items-center justify-center text-center overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl`}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="w-full h-full bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                  </div>

                  {/* Avatar */}
                  <div className="relative z-10 mb-6">
                    <Image
                      src={`/images/leader-${member}.jpg`}
                      alt={t(`leadership.member${member}.name`)}
                      width={96}
                      height={96}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white/30"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t(`leadership.member${member}.name`)}
                    </h3>
                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-4">
                      <span className="text-white font-medium text-sm">
                        {t(`leadership.member${member}.role`)}
                      </span>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {t(`leadership.member${member}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Elevation Style */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#c3d21d] to-[#b21a18] text-black font-semibold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
              {t('cta.button')}
            </button>
            <button className="px-8 py-4 border-2 border-[#c3d21d] text-[#c3d21d] font-semibold rounded-full hover:bg-[#c3d21d] hover:text-black transform transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
