// src/app/[locale]/contact/page.tsx
'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    prayerRequest: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your backend or email service
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
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

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#026c92] mb-6">
              {t('info.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('info.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address */}
            <div className="text-center bg-gradient-to-br from-[#026c92] to-blue-700 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-[#c3d21d] mb-4">
                {t('info.address.title')}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {t('info.address.line1')}
                <br />
                {t('info.address.line2')}
                <br />
                {t('info.address.line3')}
              </p>
            </div>

            {/* Phone */}
            <div className="text-center bg-gradient-to-br from-[#b21a18] to-red-700 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-[#c3d21d] mb-4">
                {t('info.phone.title')}
              </h3>
              <p className="text-gray-200 text-sm">
                <a
                  href="tel:+44XXXXXXXXX"
                  className="hover:text-[#c3d21d] transition-colors"
                >
                  +44 XXX XXX XXXX
                </a>
              </p>
              <p className="text-gray-200 text-sm mt-2">
                <a
                  href="https://wa.me/44XXXXXXXXX"
                  className="hover:text-[#c3d21d] transition-colors"
                >
                  WhatsApp
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="text-center bg-gradient-to-br from-[#c3d21d] to-lime-600 rounded-2xl p-8 text-black">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold mb-4">
                {t('info.email.title')}
              </h3>
              <p className="text-gray-800 text-sm">
                <a
                  href="mailto:info@caplondonchurch.co.uk"
                  className="hover:text-[#b21a18] transition-colors"
                >
                  info@caplondonchurch.co.uk
                </a>
              </p>
              <p className="text-gray-800 text-sm mt-2">
                <a
                  href="mailto:pastor@caplondonchurch.co.uk"
                  className="hover:text-[#b21a18] transition-colors"
                >
                  pastor@caplondonchurch.co.uk
                </a>
              </p>
            </div>

            {/* Office Hours */}
            <div className="text-center bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-xl font-bold text-[#c3d21d] mb-4">
                {t('info.hours.title')}
              </h3>
              <div className="text-gray-200 text-sm space-y-1">
                <p>{t('info.hours.weekdays')}</p>
                <p>{t('info.hours.saturday')}</p>
                <p>{t('info.hours.sunday')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#026c92] mb-6">
              {t('form.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('form.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t('form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026c92] focus:border-transparent transition-all duration-300"
                    placeholder={t('form.namePlaceholder')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t('form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026c92] focus:border-transparent transition-all duration-300"
                    placeholder={t('form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t('form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026c92] focus:border-transparent transition-all duration-300"
                    placeholder={t('form.phonePlaceholder')}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t('form.subject')} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026c92] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">{t('form.selectSubject')}</option>
                    <option value="general">
                      {t('form.subjects.general')}
                    </option>
                    <option value="prayer">{t('form.subjects.prayer')}</option>
                    <option value="pastoral">
                      {t('form.subjects.pastoral')}
                    </option>
                    <option value="events">{t('form.subjects.events')}</option>
                    <option value="volunteer">
                      {t('form.subjects.volunteer')}
                    </option>
                    <option value="other">{t('form.subjects.other')}</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t('form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026c92] focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder={t('form.messagePlaceholder')}
                ></textarea>
              </div>

              {/* Prayer Request Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="prayerRequest"
                  name="prayerRequest"
                  checked={formData.prayerRequest}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#026c92] bg-gray-100 border-gray-300 rounded focus:ring-[#026c92] focus:ring-2"
                />
                <label
                  htmlFor="prayerRequest"
                  className="ml-2 text-sm text-gray-700"
                >
                  {t('form.prayerRequest')}
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-[#026c92] to-[#b21a18] text-white font-semibold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t('form.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#026c92] mb-6">
              {t('location.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('location.subtitle')}
            </p>
          </div>

          {/* Placeholder for Google Maps */}
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-600 text-lg">
                {t('location.mapPlaceholder')}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                {t('location.mapNote')}
              </p>
            </div>
          </div>

          {/* Directions */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#026c92] to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🚇</span>
              </div>
              <h3 className="text-xl font-bold text-[#026c92] mb-2">
                {t('directions.tube.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('directions.tube.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-[#b21a18] to-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🚌</span>
              </div>
              <h3 className="text-xl font-bold text-[#026c92] mb-2">
                {t('directions.bus.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('directions.bus.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-[#c3d21d] to-lime-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">🚗</span>
              </div>
              <h3 className="text-xl font-bold text-[#026c92] mb-2">
                {t('directions.car.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('directions.car.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
