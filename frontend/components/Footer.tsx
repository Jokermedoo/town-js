import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Youtube, 
  Send,
  ArrowRight,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  const socialLinks = [
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Youtube, href: '#', color: 'hover:text-red-400' },
    { icon: Send, href: '#', color: 'hover:text-blue-500' },
  ];

  const footerSections = [
    {
      title: t('footer.services_title'),
      links: [
        'نمو الإنستجرام',
        'تعزيز التيك توك',
        'نمو اليوتيوب',
        'أعضاء التيليجرام',
        'إعلانات ذكية'
      ]
    },
    {
      title: t('footer.company_title'),
      links: [
        'من نحن',
        'كيف نعمل',
        'قصص النجاح',
        'الشراكات',
        'المدونة'
      ]
    },
    {
      title: t('footer.support_title'),
      links: [
        'مركز المساعدة',
        'اتصل بنا',
        'الأسئلة الشائعة',
        'دليل المستخدم',
        'تقرير مشكلة'
      ]
    },
    {
      title: t('footer.legal_title'),
      links: [
        'سياسة الخصوصية',
        'شروط الخدمة',
        'سياسة الاسترداد',
        'اتفاقية المستخدم',
        'إخلاء المسؤولية'
      ]
    }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
      }} />
      
      <div className="relative z-10">
        {/* Newsletter Section */}
        <section className="py-16 border-b border-gray-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('footer.newsletter_title')}
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                {t('footer.newsletter_desc')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder={t('footer.newsletter_placeholder')}
                  className="flex-1 bg-gray-800/50 border border-gray-600 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <span>{t('footer.newsletter_button')}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Footer */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Logo */}
                  <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-white">Town Media Agent</span>
                      <span className="block text-sm text-blue-400 font-medium">AI Powered</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {t('footer.description')}
                  </p>
                  
                  {/* Contact Info */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span>support@townmediaagent.ai</span>
                    </div>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span>+966 50 123 4567</span>
                    </div>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      <span>الرياض، المملكة العربية السعودية</span>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    {socialLinks.map(({ icon: Icon, href, color }, index) => (
                      <motion.a
                        key={index}
                        href={href}
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`bg-gray-800/50 p-3 rounded-xl hover:bg-gray-700/50 transition-all duration-300 ${color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Links Sections */}
              {footerSections.map((section, index) => (
                <div key={index} className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-6">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <motion.a
                            href="#"
                            whileHover={{ x: 5 }}
                            className="text-gray-400 hover:text-blue-400 transition-all duration-200 block"
                          >
                            {link}
                          </motion.a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Bar */}
        <section className="py-8 border-t border-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gray-400 text-sm"
              >
                &copy; 2025 Town Media Agent AI. {t('footer.rights')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-center space-x-1 rtl:space-x-reverse text-gray-400 text-sm"
              >
                <span>{t('footer.made_with')}</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>{t('footer.in')} السعودية</span>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;