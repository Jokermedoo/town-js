import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Components
import SocialPlatformIcons from '../components/SocialPlatformIcons';
import FloatingChatAssistant from '../components/FloatingChatAssistant';
import TestimonialCard from '../components/TestimonialCard';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';

// Icons
import { ArrowUp } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:url" content={`https://townmediaagent.ai/${router.locale}`} />
        <meta property="og:locale" content={router.locale} />
        
        {/* Alternate languages */}
        <link rel="alternate" hrefLang="ar" href="https://townmediaagent.ai/ar" />
        <link rel="alternate" hrefLang="en" href="https://townmediaagent.ai/en" />
        <link rel="alternate" hrefLang="x-default" href="https://townmediaagent.ai/ar" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://townmediaagent.ai/${router.locale}`} />
      </Head>

      <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <Hero />

        {/* Social Platform Icons */}
        <SocialPlatformIcons />

        {/* Stats Section */}
        <StatsSection />

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t('testimonials.title')}
              </h2>
              <p className="text-xl text-gray-300">
                {t('testimonials.subtitle')}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="أحمد محمد"
                role="مؤثر على إنستجرام"
                content="خدمة ممتازة! زادت متابعيني بشكل طبيعي وحقيقي. الفريق محترف جداً والنتائج مذهلة."
                avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                delay={0.1}
              />
              <TestimonialCard
                name="Sarah Johnson"
                role="Content Creator"
                content="Amazing results! My TikTok engagement increased by 300% in just one month. Highly recommend their AI-powered services."
                avatar="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                delay={0.2}
              />
              <TestimonialCard
                name="محمد العلي"
                role="صاحب قناة يوتيوب"
                content="أفضل استثمار قمت به لقناتي! زاد عدد المشتركين بشكل كبير والمشاهدات تضاعفت عدة مرات."
                avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />

        {/* Floating Chat Assistant */}
        <FloatingChatAssistant />

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: scrollY > 500 ? 1 : 0,
            scale: scrollY > 500 ? 1 : 0
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl z-40 transition-colors duration-200"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'ar', ['common'])),
    },
  };
};