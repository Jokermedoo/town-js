import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './App.css';
import './i18n';

// Icons
import { 
  MessageCircle, 
  Instagram, 
  Music4, 
  Youtube, 
  Send, 
  Camera,
  Zap,
  Users,
  Heart,
  Eye,
  Star,
  ArrowUp,
  Globe,
  TrendingUp,
  Sparkles,
  BarChart3,
  Target
} from 'lucide-react';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration]);
  
  return <span>{count.toLocaleString()}{suffix}</span>;
};

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
      }}
      className="relative group bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="bg-blue-600/20 rounded-xl p-4 w-fit mb-6 group-hover:bg-blue-600/30 transition-colors duration-300">
          <Icon className="text-blue-400 w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ name, role, content, avatar, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed">{content}</p>
      <div className="flex text-yellow-400 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
    </motion.div>
  );
};

// Floating Chat Assistant
const FloatingChatAssistant = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-gray-800/95 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 w-80 shadow-2xl"
          >
            <h3 className="text-white font-bold mb-4">{t('chat.title')}</h3>
            <div className="space-y-2 mb-4">
              {t('chat.suggestions', { returnObjects: true }).map((suggestion, index) => (
                <button
                  key={index}
                  className="block w-full text-left text-sm text-gray-300 hover:text-blue-400 p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder={t('chat.placeholder')}
              className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

function App() {
  const { t, i18n } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [isRTL, i18n.language]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-40 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Town Media Agent AI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <a href="#home" className="hover:text-blue-400 transition-colors">{t('home')}</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">{t('services')}</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">{t('about')}</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">{t('contact')}</a>
            </div>
            
            <button
              onClick={toggleLanguage}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              {t('language')}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-gray-900 to-purple-900/50" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)',
              backgroundSize: '100% 100%',
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {t('hero.title')}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  {t('hero.highlight')}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                >
                  {t('hero.cta')}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-600 hover:border-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
                >
                  {t('hero.secondary_cta')}
                </motion.button>
              </div>
            </motion.div>
            
            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
              {[Instagram, Music4, Youtube, Send, Camera].map((Icon, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [-20, 20, -20],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="absolute text-blue-400/30"
                  style={{
                    left: `${20 + index * 15}%`,
                    top: `${30 + (index % 2) * 20}%`,
                  }}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Instagram}
              title={t('services.instagram.title')}
              description={t('services.instagram.desc')}
              delay={0.1}
            />
            <ServiceCard
              icon={Music4}
              title={t('services.tiktok.title')}
              description={t('services.tiktok.desc')}
              delay={0.2}
            />
            <ServiceCard
              icon={Youtube}
              title={t('services.youtube.title')}
              description={t('services.youtube.desc')}
              delay={0.3}
            />
            <ServiceCard
              icon={Send}
              title={t('services.telegram.title')}
              description={t('services.telegram.desc')}
              delay={0.4}
            />
            <ServiceCard
              icon={Camera}
              title={t('services.snapchat.title')}
              description={t('services.snapchat.desc')}
              delay={0.5}
            />
            <ServiceCard
              icon={Zap}
              title={t('services.ads.title')}
              description={t('services.ads.desc')}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('stats.title')}
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 10000, suffix: '+', label: t('stats.clients'), icon: Users },
              { value: 5000000, suffix: '+', label: t('stats.followers'), icon: Heart },
              { value: 95, suffix: '%', label: t('stats.engagement'), icon: TrendingUp },
              { value: 99, suffix: '%', label: t('stats.satisfaction'), icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50"
              >
                <div className="bg-blue-600/20 rounded-full p-4 w-fit mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
      <footer className="bg-gray-800/50 backdrop-blur-xl border-t border-gray-700/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Town Media Agent AI</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {[Instagram, Music4, Youtube, Send].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="bg-gray-700/50 p-3 rounded-lg hover:bg-blue-600/20 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.services_title')}</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">TikTok</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Telegram</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.company_title')}</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">{t('about')}</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">{t('contact')}</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700/50 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Town Media Agent AI. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>

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
  );
}

export default App;