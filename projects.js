const projectsData = [
    {
        id: "01",
        title: "Skank-X",
        colorTheme: "rose",
        desc: {
            ar: "تطبيق ويب حديث يركز على الأداء العالي وتجربة مستخدم سلسة ونظيفة.",
            en: "Modern web application focusing on high performance and clean UI/UX."
        },
        tags: ["HTML5/CSS3", "JavaScript", "UI/UX"],
        iconClass: "fa-solid fa-code",
        type: "Web App",
        url: "https://skank-x.github.io/-/",
        isHiddenInitially: false
    },
    {
        id: "02",
        title: "NEON VOGUE",
        colorTheme: "pink", // لون زهري/نيون يتماشى مع اسم وتصميم البراند
        desc: {
            ar: "براند ملابس مصري بتصميم أجنبي عصري، يركز على تجربة تسوق تفاعلية وجذابة.",
            en: "An Egyptian clothing brand with a modern foreign design aesthetic, focusing on an interactive and engaging shopping experience."
        },
        tags: ["Front-End", "E-commerce", "Modern UI"],
        iconClass: "fa-solid fa-shirt", // أيقونة ملابس/أزياء
        type: "Fashion & Retail",
        url: "https://elnenx.github.io/Brand-/",
        isHiddenInitially: false // سيظهر ضمن أول 4 مشاريع
    },
    {
        id: "03",
        title: "Hectar Modern",
        colorTheme: "blue",
        desc: {
            ar: "منصة تجارة إلكترونية وشركات. التركيز على تجربة مستخدم سلسة وسرعة تحميل فائقة.",
            en: "Modern eCommerce & Corporate Platform. Focusing on seamless user experience and fast loading speeds."
        },
        tags: ["WordPress", "WooCommerce", "Elementor Pro"],
        iconClass: "fa-solid fa-laptop-code",
        type: "Web App",
        url: "https://www.hectarmodern.com/ar",
        isHiddenInitially: false
    },
    {
        id: "04",
        title: "Adfaz",
        colorTheme: "purple",
        desc: {
            ar: "موقع شركة ووكالة. تحويل تصميمات واجهة المستخدم (UI/UX) بدقة لقالب ووردبريس قوي ومخصص.",
            en: "Corporate & Agency Website. Tailored UI/UX design converted into a pixel-perfect robust WordPress theme."
        },
        tags: ["WordPress", "Custom UI", "Technical SEO"],
        iconClass: "fa-solid fa-building",
        type: "Corporate",
        url: "https://adfaz.sa/",
        isHiddenInitially: false
    },
    {
        id: "05",
        title: "El Dahan",
        colorTheme: "orange",
        desc: {
            ar: "موقع سلسلة مطاعم. تطوير منيو تفاعلي سريع وعرض ذكي لفروع المطعم.",
            en: "Restaurant Chain Portal. Developed a high-performance interactive menu and locations showcase."
        },
        tags: ["WordPress", "Performance Tuned", "Figma to WP"],
        iconClass: "fa-solid fa-utensils",
        type: "Food & Bev",
        url: "https://www.eldahan.com/",
        isHiddenInitially: true // تم إخفاؤه مبدئياً ليظهر عند الضغط على باقي المشاريع
    },
    {
        id: "06",
        title: "WDE NYCourier",
        colorTheme: "cyan",
        desc: {
            ar: "منصة شحن ولوجستيات. ربط أنظمة تتبع معقدة وحساب تلقائي لأسعار الشحن.",
            en: "Logistics & Courier Portal. Integrated complex tracking systems and shipping rate calculations."
        },
        tags: ["WordPress", "API Integration", "Tracking App"],
        iconClass: "fa-solid fa-truck-fast",
        type: "Logistics",
        url: "https://wdenycourier.com",
        isHiddenInitially: true
    },
    {
        id: "07",
        title: "Hustler Brand",
        colorTheme: "green",
        desc: {
            ar: "متجر شوبيفاي. تحسين معدلات التحويل باستخدام أكواد Liquid مخصصة وبناء مسارات بيع ذكية.",
            en: "Shopify eCommerce Store. Optimized conversion rates with customized liquid templates and sales funnels."
        },
        tags: ["Shopify", "Liquid Code", "CRO Strategy"],
        iconClass: "fa-brands fa-shopify",
        type: "eCommerce",
        url: "https://hustlerbrand-egy.myshopify.com",
        isHiddenInitially: true
    },
    {
        id: "08",
        title: "Sutra Stores",
        colorTheme: "rose",
        desc: {
            ar: "منصة تجارة إلكترونية. بناء متجر موثوق وقابل للتطوير باستخدام إمكانيات ووكومرس المتقدمة.",
            en: "eCommerce Platform. Built a reliable and scalable store using advanced WooCommerce functionalities."
        },
        tags: ["WooCommerce", "Payment Gateway", "Security"],
        iconClass: "fa-solid fa-store",
        type: "Retail",
        url: "https://sutrastores.com/",
        isHiddenInitially: true
    },
    {
        id: "09",
        title: "ZEX EG",
        colorTheme: "teal",
        desc: {
            ar: "متجر شوبيفاي. إنشاء تكاملات مخصصة وتحسين تجربة التسوق لتحقيق أقصى قدر من التحويلات.",
            en: "Shopify Store. Created custom integrations and localized the shopping experience for maximum conversions."
        },
        tags: ["Shopify", "Custom Apps", "Conversion Focus"],
        iconClass: "fa-brands fa-shopify",
        type: "eCommerce",
        url: "https://zex-eg.myshopify.com/",
        isHiddenInitially: true
    },
    {
        id: "10",
        title: "TFT VIP Trade",
        colorTheme: "yellow",
        desc: {
            ar: "منصة تداول واستثمار. تأمين قواعد البيانات وبناء لوحات تحكم مخصصة للمستخدمين.",
            en: "Trading & Investment Platform. Secured data handling and built custom dashboards for users."
        },
        tags: ["WordPress", "Data APIs", "High Security"],
        iconClass: "fa-solid fa-chart-line",
        type: "Finance",
        url: "https://tftviptrade.com/",
        isHiddenInitially: true
    }
];

