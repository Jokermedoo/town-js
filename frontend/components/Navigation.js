import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Sparkles, Menu, X, Globe } from 'lucide-react';

const Navigation = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLocale = router.locale === 'ar' ? 'en' : 'ar';
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 rtl:space-x-reverse"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-white">Town Media Agent</span>
              <span className="block text-sm text-blue-400 font-medium">AI Powered</span>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
                whileHover={{ y: -2 }}
              >
                {t(`navigation.${item.key}`)}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </motion.a>
            ))}
          </div>
          
          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Globe className="w-4 h-4" />
              <span>{t('navigation.language')}</span>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 border-t border-gray-800 mt-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ delay: index * 0.1 }}
                className="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-all duration-200 font-medium"
              >
                {t(`navigation.${item.key}`)}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;