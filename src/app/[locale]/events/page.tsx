// src/app/[locale]/events/page.tsx
'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function EventsPage() {
  const t = useTranslations('events');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', labelKey: 'categories.all' },
    { id: 'worship', labelKey: 'categories.worship' },
    { id: 'conference', labelKey: 'categories.conference' },
    { id: 'community', labelKey: 'categories.community' },
    { id: 'youth', labelKey: 'categories.youth' },
    { id: 'special', labelKey: 'categories.special' },
  ];

  // Mock events data - in real app, this would come from your CMS
  const events = [
    {
      id: 1,
      category: 'worship',
      date: '2025-02-15',
      time: '10:00',
      titleKey: 'upcoming.event1.title',
      descKey: 'upcoming.event1.description',
      locationKey: 'upcoming.event1.location',
      featured: true,
    },
    {
      id: 2,
      category: 'conference',
      date: '2025-03-01',
      time: '18:00',
      titleKey: 'upcoming.event2.title',
      descKey: 'upcoming.event2.description',
      locationKey: 'upcoming.event2.location',
      featured: true,
    },
    {
      id: 3,
      category: 'youth',
      date: '2025-02-28',
      time: '19:30',
      titleKey: 'upcoming.event3.title',
      descKey: 'upcoming.event3.description',
      locationKey: 'upcoming.event3.location',
      featured: false,
    },
    {
      id: 4,
      category: 'community',
      date: '2025-03-15',
      time: '14:00',
      titleKey: 'upcoming.event4.title',
      descKey: 'upcoming.event4.description',
      locationKey: 'upcoming.event4.location',
      featured: false,
    },
  ];

  const filteredEvents =
    selectedCategory === 'all'
      ? events
      : events.filter((event) => event.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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

      {/* Featured Events */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#026c92] mb-6">
              {t('featured.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('featured.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events
              .filter((event) => event.featured)
              .map((event) => (
                <div
                  key={event.id}
                  className="bg-gradient-to-br from-[#026c92] to-[#b21a18] rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-[#c3d21d] text-black px-4 py-2 rounded-full text-sm font-bold">
                      {t(`categories.${event.category}`)}
                    </span>
                    <span className="text-[#c3d21d] font-bold">
                      {event.time}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-[#c3d21d]">
                    {t(event.titleKey)}
                  </h3>

                  <p className="text-gray-200 mb-6 leading-relaxed">
                    {t(event.descKey)}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-300 mb-1">
                        📅 {formatDate(event.date)}
                      </p>
                      <p className="text-sm text-gray-300">
                        📍 {t(event.locationKey)}
                      </p>
                    </div>
                    <button className="bg-[#c3d21d] text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300">
                      {t('register')}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#026c92] mb-6">
              {t('upcoming.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('upcoming.subtitle')}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#026c92] text-white shadow-lg'
                    : 'bg-white text-[#026c92] hover:bg-[#026c92] hover:text-white shadow-md'
                }`}
              >
                {t(category.labelKey)}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Event Image Placeholder */}
                <div
                  className={`h-48 bg-gradient-to-br ${
                    event.category === 'worship'
                      ? 'from-[#c3d21d] to-lime-600'
                      : event.category === 'conference'
                        ? 'from-[#026c92] to-blue-700'
                        : event.category === 'youth'
                          ? 'from-purple-500 to-pink-500'
                          : 'from-[#b21a18] to-red-700'
                  } flex items-center justify-center`}
                >
                  <span className="text-6xl text-white">
                    {event.category === 'worship'
                      ? '🎵'
                      : event.category === 'conference'
                        ? '📢'
                        : event.category === 'youth'
                          ? '🔥'
                          : '🤝'}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-100 text-[#026c92] px-3 py-1 rounded-full text-sm font-medium">
                      {t(`categories.${event.category}`)}
                    </span>
                    <span className="text-[#b21a18] font-bold text-sm">
                      {event.time}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#026c92] mb-3">
                    {t(event.titleKey)}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {t(event.descKey)}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-gray-500">
                      📅 {formatDate(event.date)}
                    </p>
                    <p className="text-sm text-gray-500">
                      📍 {t(event.locationKey)}
                    </p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#026c92] to-[#b21a18] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    {t('learnMore')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#026c92] mb-8">
            {t('regular.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-12">{t('regular.subtitle')}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#c3d21d] to-lime-600 rounded-2xl p-6 text-black">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-bold mb-2">
                {t('regular.sunday.title')}
              </h3>
              <p className="text-lg font-semibold mb-2">
                {t('regular.sunday.time')}
              </p>
              <p className="text-sm">{t('regular.sunday.description')}</p>
            </div>

            <div className="bg-gradient-to-br from-[#026c92] to-blue-700 rounded-2xl p-6 text-white">
              <div className="text-4xl mb-4">🤲</div>
              <h3 className="text-xl font-bold mb-2 text-[#c3d21d]">
                {t('regular.tuesday.title')}
              </h3>
              <p className="text-lg font-semibold mb-2 text-[#c3d21d]">
                {t('regular.tuesday.time')}
              </p>
              <p className="text-sm text-gray-200">
                {t('regular.tuesday.description')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#b21a18] to-red-700 rounded-2xl p-6 text-white">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-2 text-[#c3d21d]">
                {t('regular.thursday.title')}
              </h3>
              <p className="text-lg font-semibold mb-2 text-[#c3d21d]">
                {t('regular.thursday.time')}
              </p>
              <p className="text-sm text-gray-200">
                {t('regular.thursday.description')}
              </p>
            </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#c3d21d] to-[#b21a18] text-black font-semibold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
              {t('cta.subscribe')}
            </button>
            <button className="px-8 py-4 border-2 border-[#c3d21d] text-[#c3d21d] font-semibold rounded-full hover:bg-[#c3d21d] hover:text-black transform transition-all duration-300">
              {t('cta.contact')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
