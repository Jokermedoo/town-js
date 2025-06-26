import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import AnimatedCounter from './AnimatedCounter';
import { Users, Heart, TrendingUp, Star, Award, Zap } from 'lucide-react';

const StatsSection: React.FC = () => {
  const { t } = useTranslation('common');

  const stats = [
    { 
      value: 15000, 
      suffix: '+', 
      label: t('stats.clients'), 
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      description: 'عملاء راضون حول العالم'
    },
    { 
      value: 8500000, 
      suffix: '+', 
      label: t('stats.followers'), 
      icon: Heart,
      color: 'from-pink-500 to-pink-600',
      description: 'متابع حقيقي تم توصيله'
    },
    { 
      value: 97, 
      suffix: '%', 
      label: t('stats.engagement'), 
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      description: 'معدل تفاعل متميز'
    },
    { 
      value: 99, 
      suffix: '%', 
      label: t('stats.satisfaction'), 
      icon: Star,
      color: 'from-yellow-500 to-yellow-600',
      description: 'رضا العملاء المضمون'
    },
    { 
      value: 250, 
      suffix: '%', 
      label: t('stats.growth'), 
      icon: Award,
      color: 'from-purple-500 to-purple-600',
      description: 'نمو متوسط في الشهر الأول'
    },
    { 
      value: 24, 
      suffix: '/7', 
      label: 'دعم فني', 
      icon: Zap,
      color: 'from-orange-500 to-orange-600',
      description: 'دعم متاح على مدار الساعة'
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">{t('stats.title')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </motion.div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
              className="relative group"
            >
              {/* Card Background with Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              <div className="relative bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Value */}
                <div className="mb-4">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                </div>
                
                {/* Label */}
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-white">{stat.label}</h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-white/5 to-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                </div>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              جاهز لتحقيق هذه النتائج؟
            </h3>
            <p className="text-gray-300 mb-6">
              انضم إلى آلاف العملاء الناجحين واحصل على نتائج مذهلة لحساباتك
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              ابدأ رحلتك الآن
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;