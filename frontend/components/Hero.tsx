import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { Play, Sparkles, Zap, TrendingUp, Users, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation('common');

  const floatingIcons = [
    { Icon: Sparkles, delay: 0, position: { top: '20%', left: '10%' } },
    { Icon: Zap, delay: 0.5, position: { top: '30%', right: '15%' } },
    { Icon: TrendingUp, delay: 1, position: { bottom: '30%', left: '8%' } },
    { Icon: Users, delay: 1.5, position: { top: '40%', left: '85%' } },
    { Icon: Star, delay: 2, position: { bottom: '20%', right: '10%' } },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
        
        {/* Animated Background Pattern */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, #06b6d4 0%, transparent 70%)
            `,
            backgroundSize: '100% 100%',
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
            y: [-20, 20, -20],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: delay,
          }}
          className="absolute text-blue-400/50 pointer-events-none"
          style={position}
        >
          <Icon className="w-8 h-8 md:w-12 md:h-12" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Trusted By Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-blue-600/10 border border-blue-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <Star className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">{t('hero.trusted_by')}</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-white">{t('hero.title')}</span>
              <br />
              <span className="text-gradient-primary bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t('hero.highlight')}
              </span>
            </h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-5 px-10 rounded-full text-lg shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center space-x-3 rtl:space-x-reverse">
                <Sparkles className="w-6 h-6" />
                <span>{t('hero.cta')}</span>
              </span>
              
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            
            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-600 hover:border-blue-500 text-white font-bold py-5 px-10 rounded-full text-lg transition-all duration-300 backdrop-blur-sm hover:bg-blue-500/10 group"
            >
              <span className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <Play className="w-4 h-4 text-white ml-1" />
                </div>
                <span>{t('hero.secondary_cta')}</span>
              </span>
            </motion.button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '10K+', label: 'عميل سعيد' },
              { value: '5M+', label: 'متابع' },
              { value: '99%', label: 'رضا العملاء' },
              { value: '24/7', label: 'دعم فني' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center p-2">
          <motion.div 
            className="w-1 h-3 bg-blue-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;