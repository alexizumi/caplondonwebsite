// src/app/[locale]/page.tsx
'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const t = useTranslations('homepage');
  const tCommon = useTranslations('common');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  // Determine optimal video size based on screen
  useEffect(() => {
    const updateVideoSrc = () => {
      const width = window.innerWidth;

      if (width >= 1920) {
        setVideoSrc('/videos/church-hero.mp4'); // Full HD
      } else if (width >= 1280) {
        setVideoSrc('/videos/church-hero-720p.mp4'); // HD
      } else {
        setVideoSrc('/videos/church-hero-480p.mp4'); // SD for mobile
      }
    };

    updateVideoSrc();
    window.addEventListener('resize', updateVideoSrc);

    return () => window.removeEventListener('resize', updateVideoSrc);
  }, []);

  const handleVideoCanPlay = () => {
    console.log('Video can play - setting as loaded');
    setVideoLoaded(true);
  };

  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>,
  ) => {
    console.error('Video failed to load:', e);
    setVideoError(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Fallback Background */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            background:
              'linear-gradient(135deg, rgba(2, 108, 146, 0.9) 0%, rgba(178, 26, 24, 0.9) 50%, rgba(0, 0, 0, 0.95) 100%)',
          }}
        />

        {/* Single Video Background */}
        {!videoError && videoSrc && (
          <div
            className={`hero-video-container ${videoLoaded ? 'video-loaded' : 'video-loading'}`}
          >
            <video
              className="hero-video-background"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/church-hero-poster.jpg"
              onCanPlay={handleVideoCanPlay}
              onError={handleVideoError}
              aria-label="Church background video"
              role="presentation"
            >
              <source src={videoSrc} type="video/mp4" />
              <source src="/videos/church-hero.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Brand Color Overlay (lighter since video already has effects) */}
        <div className="hero-overlay"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-4">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#b21a18] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-[#c3d21d] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-[#026c92] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="hero-content text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#c3d21d] via-white to-[#c3d21d] bg-clip-text text-transparent animate-fade-in drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200 animate-fade-in-delay drop-shadow-md">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 animate-fade-in-delay drop-shadow-md">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button className="px-8 py-4 bg-gradient-to-r from-[#c3d21d] to-[#b21a18] text-black font-semibold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
              {t('hero.cta')}
            </button>
            <button className="px-8 py-4 border-2 border-[#c3d21d] text-[#c3d21d] font-semibold rounded-full hover:bg-[#c3d21d] hover:text-black transform transition-all duration-300 backdrop-blur-sm">
              {tCommon('learnMore')}
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#c3d21d] animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-[#c3d21d] rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-[#c3d21d] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced Loading Indicator with Progress */}
        {!videoLoaded && !videoError && (
          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center space-x-2 bg-black/50 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="w-4 h-4 border-2 border-[#c3d21d] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-[#c3d21d] text-sm">Loading video...</span>
            </div>
          </div>
        )}

        {/* Error Message */}
        {videoError && (
          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center space-x-2 bg-red-500/80 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="text-white text-sm">Video failed to load</span>
            </div>
          </div>
        )}
      </section>

      {/* Five Pillars */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#026c92] mb-6">
              {t('pillars.title')}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t('mission.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                icon: '👨‍👩‍👧‍👦',
                titleKey: 'pillars.family',
                color: 'from-[#b21a18] to-red-700',
              },
              {
                icon: '📚',
                titleKey: 'pillars.discipleship',
                color: 'from-[#026c92] to-blue-700',
              },
              {
                icon: '🙏',
                titleKey: 'pillars.worship',
                color: 'from-[#c3d21d] to-lime-600',
              },
              {
                icon: '⚡',
                titleKey: 'pillars.ministry',
                color: 'from-[#b21a18] to-[#026c92]',
              },
              {
                icon: '🌍',
                titleKey: 'pillars.evangelism',
                color: 'from-[#026c92] to-[#c3d21d]',
              },
            ].map((pillar, index) => (
              <div key={index} className="group cursor-pointer">
                <div
                  className={`bg-gradient-to-br ${pillar.color} p-8 rounded-2xl text-center text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-bold">{t(pillar.titleKey)}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-[#026c92] via-[#b21a18] to-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#c3d21d]">
              {useTranslations('services')('title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-[#c3d21d]/30">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#c3d21d] to-[#b21a18] text-black font-semibold rounded-full text-sm mb-4">
                {useTranslations('services')('sunday.time')}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#c3d21d]">
                {useTranslations('services')('sunday.title')}
              </h3>
              <p className="text-gray-300">
                {useTranslations('services')('sunday.description')}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-[#c3d21d]/30">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#026c92] to-[#c3d21d] text-white font-semibold rounded-full text-sm mb-4">
                {useTranslations('services')('tuesday.time')}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#c3d21d]">
                {useTranslations('services')('tuesday.title')}
              </h3>
              <p className="text-gray-300">
                {useTranslations('services')('tuesday.description')}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-[#c3d21d]/30">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#b21a18] to-[#026c92] text-white font-semibold rounded-full text-sm mb-4">
                {useTranslations('services')('thursday.time')}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#c3d21d]">
                {useTranslations('services')('thursday.title')}
              </h3>
              <p className="text-gray-300">
                {useTranslations('services')('thursday.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-black to-[#026c92] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#c3d21d]">
            {t('contactSection.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            {t('contactSection.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#c3d21d] to-[#b21a18] p-6 rounded-xl">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-bold mb-2 text-black">
                {t('contactSection.locationTitle')}
              </h3>
              <p className="text-sm text-gray-300">
                {t('contactSection.location')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#c3d21d] to-[#b21a18] p-6 rounded-xl">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-bold mb-2 text-black">
                {t('contactSection.phoneTitle')}
              </h3>
              <p className="text-sm text-gray-300">
                {t('contactSection.phone')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#c3d21d] to-[#b21a18] p-6 rounded-xl">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="font-bold mb-2 text-black">
                {t('contactSection.emailTitle')}
              </h3>
              <p className="text-sm text-gray-300">
                {t('contactSection.email')}
              </p>
            </div>
          </div>

          <button className="px-8 py-4 bg-gradient-to-r from-[#c3d21d] to-[#b21a18] text-black font-semibold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
            {t('contactSection.cta')}
          </button>
        </div>
      </section>
    </div>
  );
}
