import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Social Platform Icons with Real Colors
const SocialIcon = ({ platform, size = 80, onClick, isActive }) => {
  const icons = {
    instagram: {
      color: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="white" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    tiktok: {
      color: 'linear-gradient(45deg, #ff0050, #00f2ea)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="white" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    youtube: {
      color: '#FF0000',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="white" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    telegram: {
      color: '#0088cc',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="white" d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    },
    snapchat: {
      color: '#FFFC00',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#333" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
        </svg>
      )
    },
    facebook: {
      color: '#1877F2',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="white" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    twitter: {
      color: '#1DA1F2',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="white" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    spotify: {
      color: '#1DB954',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="white" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      )
    },
    soundcloud: {
      color: 'linear-gradient(45deg, #ff5500, #ff8800)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="white" d="M1.175 12.225c-.051 0-.094.046-.101.105l-.233 2.154.233 2.105c.007.059.05.105.101.105.053 0 .094-.046.101-.105l.277-2.105-.277-2.154c-.007-.059-.048-.105-.101-.105zm1.062.748c-.058 0-.103.049-.109.111l-.195 1.406.195 1.355c.006.062.051.111.109.111.061 0 .105-.049.111-.111l.232-1.355-.232-1.406c-.006-.062-.05-.111-.111-.111zm1.055.674c-.067 0-.122.053-.122.124l-.179 1.001.179.955c0 .071.055.124.122.124.07 0 .125-.053.125-.124l.211-.955-.211-1.001c0-.071-.055-.124-.125-.124zm1.063.648c-.077 0-.14.055-.14.134l-.157.724.157.69c0 .079.063.134.14.134.078 0 .139-.055.139-.134l.184-.69-.184-.724c0-.079-.061-.134-.139-.134zm1.061.123c-.086 0-.157.061-.157.144l-.133.601.133.574c0 .083.071.144.157.144.089 0 .16-.061.16-.144l.157-.574-.157-.601c0-.083-.071-.144-.16-.144zm1.066-.123c-.098 0-.18.068-.18.154l-.114.87.114.83c0 .086.082.154.18.154.101 0 .183-.068.183-.154l.134-.83-.134-.87c0-.086-.082-.154-.183-.154zm1.062.109c-.11 0-.197.074-.197.168l-.093.993.093.945c0 .094.087.168.197.168.114 0 .2-.074.2-.168l.11-.945-.11-.993c0-.094-.086-.168-.2-.168zm1.067-.123c-.123 0-.222.08-.222.181l-.071 1.135.071 1.084c0 .101.099.181.222.181.126 0 .225-.08.225-.181l.084-1.084-.084-1.135c0-.101-.099-.181-.225-.181zm1.062.182c-.136 0-.246.087-.246.196l-.05 1.016.05.969c0 .109.11.196.246.196.139 0 .25-.087.25-.196l.058-.969-.058-1.016c0-.109-.111-.196-.25-.196zm1.067-.109c-.148 0-.269.094-.269.212l-.028 1.125.028 1.07c0 .118.121.212.269.212.152 0 .273-.094.273-.212l.033-1.07-.033-1.125c0-.118-.121-.212-.273-.212zm1.063.046c-.162 0-.294.101-.294.225l-.007 1.079.007 1.021c0 .124.132.225.294.225.165 0 .297-.101.297-.225l.009-1.021-.009-1.079c0-.124-.132-.225-.297-.225zm1.067.015c-.175 0-.317.107-.317.24v2.061c0 .133.142.24.317.24.178 0 .32-.107.32-.24V13.23c0-.133-.142-.24-.32-.24zm1.062.108c-.188 0-.341.114-.341.256v1.848c0 .142.153.256.341.256.191 0 .344-.114.344-.256v-1.848c0-.142-.153-.256-.344-.256zm1.067-.123c-.201 0-.364.121-.364.271v2.32c0 .15.163.271.364.271.204 0 .367-.121.367-.271v-2.32c0-.15-.163-.271-.367-.271zm1.062.015c-.214 0-.388.127-.388.285v2.289c0 .158.174.285.388.285.217 0 .391-.127.391-.285v-2.289c0-.158-.174-.285-.391-.285zm1.067-.046c-.227 0-.411.134-.411.301v2.378c0 .167.184.301.411.301.23 0 .414-.134.414-.301v-2.378c0-.167-.184-.301-.414-.301zm1.062.061c-.24 0-.435.141-.435.316v2.255c0 .175.195.316.435.316.243 0 .438-.141.438-.316v-2.255c0-.175-.195-.316-.438-.316zm1.067-.076c-.253 0-.458.148-.458.332v2.407c0 .184.205.332.458.332.256 0 .461-.148.461-.332v-2.407c0-.184-.205-.332-.461-.332zm1.062.045c-.266 0-.482.155-.482.348v2.317c0 .193.216.348.482.348.269 0 .485-.155.485-.348v-2.317c0-.193-.216-.348-.485-.348zm1.067-.061c-.279 0-.505.162-.505.365v2.439c0 .203.226.365.505.365.282 0 .508-.162.508-.365v-2.439c0-.203-.226-.365-.508-.365z"/>
        </svg>
      )
    }
  };

  const iconData = icons[platform];
  if (!iconData) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-300 ${isActive ? 'z-20' : 'z-10'}`}
      style={{ width: size, height: size }}
    >
      <div 
        className="w-full h-full rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 hover:border-white/40 transition-all duration-300"
        style={{ 
          background: iconData.color,
          boxShadow: isActive ? '0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(59,130,246,0.5)' : '0 10px 20px rgba(0,0,0,0.2)'
        }}
      >
        <div className="w-3/5 h-3/5">
          {iconData.svg}
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 hover:opacity-30 transition-opacity duration-300"
        style={{ background: iconData.color, filter: 'blur(20px)' }}
      />
    </motion.div>
  );
};

const PlatformModal = ({ platform, isOpen, onClose }) => {
  const { t } = useTranslation();
  
  const platformInfo = {
    instagram: {
      nameAr: 'إنستجرام',
      nameEn: 'Instagram',
      descAr: 'زيادة المتابعين والإعجابات والمشاهدات بطريقة طبيعية وآمنة',
      descEn: 'Increase followers, likes, and views naturally and safely',
      features: ['متابعين حقيقيين', 'إعجابات', 'مشاهدات القصص', 'تعليقات'],
      color: 'from-pink-500 to-orange-500'
    },
    tiktok: {
      nameAr: 'تيك توك',
      nameEn: 'TikTok',
      descAr: 'تعزيز المحتوى الخاص بك وزيادة المشاهدات والمتابعين',
      descEn: 'Boost your content and increase views and followers',
      features: ['مشاهدات الفيديو', 'متابعين', 'إعجابات', 'مشاركات'],
      color: 'from-pink-500 to-cyan-500'
    },
    youtube: {
      nameAr: 'يوتيوب',
      nameEn: 'YouTube',
      descAr: 'نمي قناتك مع مشتركين حقيقيين ووقت مشاهدة أطول',
      descEn: 'Grow your channel with real subscribers and longer watch time',
      features: ['مشتركين', 'مشاهدات', 'إعجابات', 'وقت المشاهدة'],
      color: 'from-red-500 to-red-600'
    },
    telegram: {
      nameAr: 'تلجرام',
      nameEn: 'Telegram',
      descAr: 'زيادة أعضاء القناة والمجموعة بشكل فعال',
      descEn: 'Effectively increase channel and group members',
      features: ['أعضاء القناة', 'مشاهدات المنشورات', 'تفاعل', 'مشتركين نشطين'],
      color: 'from-blue-500 to-blue-600'
    },
    snapchat: {
      nameAr: 'سناب شات',
      nameEn: 'Snapchat',
      descAr: 'زيادة الأصدقاء ومشاهدات القصص',
      descEn: 'Increase friends and story views',
      features: ['إضافة أصدقاء', 'مشاهدات القصص', 'نقاط سناب', 'تفاعل'],
      color: 'from-yellow-400 to-yellow-500'
    },
    facebook: {
      nameAr: 'فيسبوك',
      nameEn: 'Facebook',
      descAr: 'تنمية صفحتك مع متابعين حقيقيين وتفاعل أكبر',
      descEn: 'Grow your page with real followers and greater engagement',
      features: ['متابعين الصفحة', 'إعجابات', 'مشاركات', 'تعليقات'],
      color: 'from-blue-600 to-blue-700'
    },
    twitter: {
      nameAr: 'تويتر',
      nameEn: 'Twitter',
      descAr: 'زيادة المتابعين والتفاعل مع التغريدات',
      descEn: 'Increase followers and engagement with tweets',
      features: ['متابعين', 'إعجابات', 'إعادة تغريد', 'مشاهدات'],
      color: 'from-blue-400 to-blue-500'
    },
    spotify: {
      nameAr: 'سبوتيفاي',
      nameEn: 'Spotify',
      descAr: 'زيادة مستمعين الموسيقى والبودكاست',
      descEn: 'Increase music and podcast listeners',
      features: ['مستمعين', 'تشغيلات', 'متابعين', 'حفظ الأغاني'],
      color: 'from-green-500 to-green-600'
    },
    soundcloud: {
      nameAr: 'ساوند كلاود',
      nameEn: 'SoundCloud',
      descAr: 'تعزيز الموسيقى الخاصة بك مع مستمعين حقيقيين',
      descEn: 'Promote your music with real listeners',
      features: ['تشغيلات الموسيقى', 'متابعين', 'إعجابات', 'تعليقات'],
      color: 'from-orange-500 to-orange-600'
    }
  };

  const info = platformInfo[platform];
  if (!info) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className={`bg-gradient-to-br ${info.color} p-1 rounded-3xl max-w-md w-full mx-4`}
          >
            <div className="bg-gray-900/95 backdrop-blur-xl rounded-3xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {t('language') === 'English' ? info.nameAr : info.nameEn}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t('language') === 'English' ? info.descAr : info.descEn}
                </p>
              </div>
              
              <div className="space-y-3 mb-8">
                {info.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                  >
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${info.color}`} />
                    <span className="text-gray-200">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex space-x-4 rtl:space-x-reverse">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-1 bg-gradient-to-r ${info.color} text-white font-bold py-3 px-6 rounded-xl transition-all duration-300`}
                >
                  {t('language') === 'English' ? 'اطلب الآن' : 'Order Now'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-xl hover:border-gray-400 transition-colors duration-300"
                >
                  {t('language') === 'English' ? 'إغلاق' : 'Close'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SocialPlatformIcons = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const { t } = useTranslation();

  const platforms = [
    'instagram', 'tiktok', 'youtube', 'telegram', 
    'snapchat', 'facebook', 'twitter', 'spotify', 'soundcloud'
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            {t('language') === 'English' ? 'منصات التواصل الاجتماعي' : 'Social Media Platforms'}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('language') === 'English' 
              ? 'اختر المنصة التي تريد تنميتها واكتشف خدماتنا المتخصصة' 
              : 'Choose the platform you want to grow and discover our specialized services'
            }
          </p>
        </motion.div>

        {/* Icons Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SocialIcon 
                platform={platform}
                size={100}
                onClick={() => setSelectedPlatform(platform)}
                isActive={selectedPlatform === platform}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">
            {t('language') === 'English' 
              ? 'انقر على أي أيقونة لمعرفة المزيد عن الخدمات المتاحة' 
              : 'Click on any icon to learn more about available services'
            }
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            {t('language') === 'English' ? 'ابدأ الآن' : 'Start Now'}
          </motion.button>
        </motion.div>
      </div>

      {/* Platform Modal */}
      <PlatformModal 
        platform={selectedPlatform}
        isOpen={!!selectedPlatform}
        onClose={() => setSelectedPlatform(null)}
      />
    </div>
  );
};

export default SocialPlatformIcons;