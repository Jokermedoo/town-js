import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "home": "Home",
      "services": "Services",
      "about": "About",
      "contact": "Contact",
      "language": "العربية",
      
      // Hero Section
      "hero.title": "Smart AI Agent for",
      "hero.highlight": "Social Media Growth",
      "hero.subtitle": "Boost your social presence with our intelligent AI agent. Get real followers, likes, views, and engagement across all platforms.",
      "hero.cta": "Start Growing Now",
      "hero.secondary_cta": "Watch Demo",
      
      // Services Section
      "services.title": "Smart Services",
      "services.subtitle": "Comprehensive social media solutions powered by AI",
      "services.instagram.title": "Instagram Growth",
      "services.instagram.desc": "Real followers, likes, and engagement",
      "services.tiktok.title": "TikTok Boost",
      "services.tiktok.desc": "Viral content and authentic views",
      "services.youtube.title": "YouTube Growth",
      "services.youtube.desc": "Subscribers and watch time",
      "services.telegram.title": "Telegram Members",
      "services.telegram.desc": "Active channel subscribers",
      "services.snapchat.title": "Snapchat Growth",
      "services.snapchat.desc": "Story views and friends",
      "services.ads.title": "Smart Ads",
      "services.ads.desc": "AI-optimized advertising campaigns",
      
      // Stats Section
      "stats.title": "Trusted by Thousands",
      "stats.clients": "Happy Clients",
      "stats.followers": "Followers Delivered",
      "stats.engagement": "Engagement Rate",
      "stats.satisfaction": "Satisfaction Rate",
      
      // Testimonials
      "testimonials.title": "What Our Clients Say",
      "testimonials.subtitle": "Real results from real people",
      
      // Chat Assistant
      "chat.title": "AI Assistant",
      "chat.placeholder": "Ask about our services...",
      "chat.suggestions": ["How to grow Instagram?", "Best package for TikTok?", "Pricing information"],
      
      // Footer
      "footer.description": "Your trusted partner for social media growth with AI-powered solutions.",
      "footer.services_title": "Services",
      "footer.company_title": "Company",
      "footer.support_title": "Support",
      "footer.rights": "All rights reserved."
    }
  },
  ar: {
    translation: {
      // Navigation
      "home": "الرئيسية",
      "services": "الخدمات",
      "about": "من نحن",
      "contact": "اتصل بنا",
      "language": "English",
      
      // Hero Section
      "hero.title": "وكيل ذكي بالذكاء الاصطناعي",
      "hero.highlight": "لنمو وسائل التواصل الاجتماعي",
      "hero.subtitle": "عزز حضورك على وسائل التواصل الاجتماعي مع وكيلنا الذكي. احصل على متابعين حقيقيين وإعجابات ومشاهدات وتفاعل عبر جميع المنصات.",
      "hero.cta": "ابدأ النمو الآن",
      "hero.secondary_cta": "شاهد العرض التوضيحي",
      
      // Services Section
      "services.title": "خدمات ذكية",
      "services.subtitle": "حلول شاملة لوسائل التواصل الاجتماعي مدعومة بالذكاء الاصطناعي",
      "services.instagram.title": "نمو الإنستقرام",
      "services.instagram.desc": "متابعين حقيقيين وإعجابات وتفاعل",
      "services.tiktok.title": "تعزيز التيك توك",
      "services.tiktok.desc": "محتوى فيرالي ومشاهدات أصيلة",
      "services.youtube.title": "نمو اليوتيوب",
      "services.youtube.desc": "مشتركين ووقت مشاهدة",
      "services.telegram.title": "أعضاء التلقرام",
      "services.telegram.desc": "مشتركين نشطين في القناة",
      "services.snapchat.title": "نمو السناب شات",
      "services.snapchat.desc": "مشاهدات القصص والأصدقاء",
      "services.ads.title": "إعلانات ذكية",
      "services.ads.desc": "حملات إعلانية محسنة بالذكاء الاصطناعي",
      
      // Stats Section
      "stats.title": "موثوق من قبل الآلاف",
      "stats.clients": "عميل سعيد",
      "stats.followers": "متابع تم توصيله",
      "stats.engagement": "معدل التفاعل",
      "stats.satisfaction": "معدل الرضا",
      
      // Testimonials
      "testimonials.title": "ماذا يقول عملاؤنا",
      "testimonials.subtitle": "نتائج حقيقية من أشخاص حقيقيين",
      
      // Chat Assistant
      "chat.title": "المساعد الذكي",
      "chat.placeholder": "اسأل عن خدماتنا...",
      "chat.suggestions": ["كيف أنمي الإنستقرام؟", "أفضل باقة للتيك توك؟", "معلومات الأسعار"],
      
      // Footer
      "footer.description": "شريكك الموثوق لنمو وسائل التواصل الاجتماعي بحلول مدعومة بالذكاء الاصطناعي.",
      "footer.services_title": "الخدمات",
      "footer.company_title": "الشركة",
      "footer.support_title": "الدعم",
      "footer.rights": "جميع الحقوق محفوظة."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;