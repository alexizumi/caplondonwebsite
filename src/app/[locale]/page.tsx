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
        setVideoSrc('/videos/church-hero.mp4');
      } else if (width >= 1280) {
        setVideoSrc('/videos/church-hero-720p.mp4');
      } else {
        setVideoSrc('/videos/church-hero-480p.mp4');
      }
    };

    updateVideoSrc();
    window.addEventListener('resize', updateVideoSrc);

    return () => window.removeEventListener('resize', updateVideoSrc);
  }, []);

  const handleVideoCanPlay = () => {
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

        {/* Brand Color Overlay */}
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

        {/* Loading Indicator */}
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

      {/* Five Pillars - ELEVATION WORSHIP STYLE */}
      <section className="py-20 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('pillars.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('mission.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: t('pillars.family'),
                color: 'from-[#026c92] to-[#025a7a]',
                description: 'Building strong family bonds in Christ',
              },
              {
                title: t('pillars.discipleship'),
                color: 'from-[#b21a18] to-[#8b1513]',
                description: 'Growing in faith and knowledge',
              },
              {
                title: t('pillars.worship'),
                color: 'from-[#c3d21d] to-[#9fb516]',
                description: 'Praising God with heart and soul',
              },
              {
                title: t('pillars.ministry'),
                color: 'from-[#026c92] to-[#b21a18]',
                description: 'Serving God and community',
              },
              {
                title: t('pillars.evangelism'),
                color: 'from-[#b21a18] to-[#c3d21d]',
                description: 'Sharing the Gospel with the world',
              },
            ].map((pillar, index) => (
              <div key={index} className="group">
                <div className={`relative bg-gradient-to-br ${pillar.color} rounded-2xl p-8 h-80 flex flex-col justify-between overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl`}>
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="w-full h-full bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-white/80 text-sm font-medium uppercase tracking-wider mb-3">
                      Core Value
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* CTA Arrow */}
                  <div className="relative z-10 flex justify-between items-end">
                    <div></div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times - ELEVATION WORSHIP STYLE */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find the right experience for you
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              No matter where you are, online or in person, become a part of all God is doing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                ),
                title: useTranslations('services')('sunday.title'),
                time: useTranslations('services')('sunday.time'),
                description: useTranslations('services')('sunday.description'),
                color: 'from-[#026c92] to-[#025a7a]',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ),
                title: useTranslations('services')('tuesday.title'),
                time: useTranslations('services')('tuesday.time'),
                description: useTranslations('services')('tuesday.description'),
                color: 'from-[#b21a18] to-[#8b1513]',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                ),
                title: useTranslations('services')('thursday.title'),
                time: useTranslations('services')('thursday.time'),
                description: useTranslations('services')('thursday.description'),
                color: 'from-[#c3d21d] to-[#9fb516]',
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 h-96 flex flex-col justify-between overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl`}>
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="w-full h-full bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="text-white/90 mb-6">
                      {service.icon}
                    </div>
                    
                    {/* Time Badge */}
                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                      <span className="text-white font-semibold text-sm">{service.time}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/90 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="relative z-10">
                    <button className="flex items-center text-white font-semibold group-hover:text-white/80 transition-colors">
                      Learn more 
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Get in Touch Section - ELEVATION STYLE */}
<section className="py-20 bg-[#000000] text-white">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
      Get in Touch
    </h2>
    <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
      We&apos;d love to hear from you! Here&apos;s how you can connect with us, wherever you are.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          ),
          title: "Send Us an Email",
          description: "Reach out to our support team directly via email for any inquiries or assistance.",
          link: "Email Us",
          href: "mailto:info@caplondonchurch.co.uk"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          ),
          title: "Give Us a Call",
          description: "Speak with our friendly representatives during business hours for immediate support.",
          link: "Call Now",
          href: "tel:+442012345678"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          ),
          title: "Live Chat Support",
          description: "Connect with us instantly through our live chat for quick questions and real-time help.",
          link: "Start Chat",
          href: "#"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          ),
          title: "Visit Our Location",
          description: "Find our physical office or store location and get directions to visit us in person.",
          link: "Get Directions",
          href: "#"
        },
      ].map((contact, index) => (
        <div key={index} className="text-left">
          <div className="text-white mb-6">
            {contact.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-4">
            {contact.title}
          </h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            {contact.description}
          </p>
          <a 
            href={contact.href}
            className="inline-flex items-center text-white font-semibold hover:text-gray-300 transition-colors group"
          >
            {contact.link}
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      ))}
    </div>

    <div className="mt-16">
      <a 
        href="#" 
        className="inline-flex items-center text-white font-semibold text-lg hover:text-gray-300 transition-colors group"
      >
        View All Contact Options
        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</section>


    </div>
  );
}