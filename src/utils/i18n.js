// Get the language from the URL
export function getLanguageFromUrl(pathname) {
  // Check if the URL starts with a language code
  if (pathname.startsWith('/vi/')) {
    return 'vi';
  } else if (pathname.startsWith('/en/')) {
    return 'en';
  }
  
  // Default to Vietnamese
  return 'vi';
}

// Load translations from config
export function useTranslations(language) {
  // Import the config file
  const config = {
    "languages": {
      "vi": {
        "name": "Tiếng Việt",
        "translations": {
          "home": "Trang chủ",
          "news": "Tin tức",
          "analysis": "Phân tích",
          "guides": "Hướng dẫn",
          "about": "Giới thiệu",
          "featuredStories": "Bài viết nổi bật",
          "trendingNow": "Xu hướng",
          "latestNews": "Tin mới nhất",
          "viewAll": "Xem tất cả",
          "subscribeNewsletter": "Đăng ký nhận tin",
          "newsletterDesc": "Nhận tin tức và phân tích mới nhất về tiền điện tử vào hộp thư của bạn.",
          "emailPlaceholder": "Email của bạn",
          "subscribe": "Đăng ký",
          "yourTrustedSource": "Nguồn tin cậy của bạn về tin tức và phân tích tiền điện tử.",
          "quickLinks": "Liên kết nhanh",
          "resources": "Tài nguyên",
          "cryptoGlossary": "Từ điển Crypto",
          "toolsCalculators": "Công cụ & Máy tính",
          "learnCrypto": "Học về Crypto",
          "faq": "Câu hỏi thường gặp",
          "copyright": "© 2023 CryptoInsights. Tất cả quyền được bảo lưu.",
          "privacyPolicy": "Chính sách bảo mật",
          "termsOfService": "Điều khoản dịch vụ",
          "disclaimer": "Tuyên bố miễn trừ trách nhiệm"
        }
      },
      "en": {
        "name": "English",
        "translations": {
          "home": "Home",
          "news": "News",
          "analysis": "Analysis",
          "guides": "Guides",
          "about": "About",
          "featuredStories": "Featured Stories",
          "trendingNow": "Trending Now",
          "latestNews": "Latest News",
          "viewAll": "View All",
          "subscribeNewsletter": "Subscribe to Newsletter",
          "newsletterDesc": "Get the latest crypto news and analysis delivered to your inbox.",
          "emailPlaceholder": "Your email",
          "subscribe": "Subscribe",
          "yourTrustedSource": "Your trusted source for cryptocurrency news and analysis.",
          "quickLinks": "Quick Links",
          "resources": "Resources",
          "cryptoGlossary": "Crypto Glossary",
          "toolsCalculators": "Tools & Calculators",
          "learnCrypto": "Learn Crypto",
          "faq": "FAQ",
          "copyright": "© 2023 CryptoInsights. All rights reserved.",
          "privacyPolicy": "Privacy Policy",
          "termsOfService": "Terms of Service",
          "disclaimer": "Disclaimer"
        }
      }
    }
  };

  // Get translations for the specified language, fallback to English if not found
  const translations = config.languages[language]?.translations || config.languages.en.translations;
  
  // Return a function that gets a translation by key
  return function(key) {
    return translations[key] || key;
  };
}
