window.openIframeModal = function(url, name) {
    const iframeModal = document.getElementById('device-modal');
    const iframeElement = document.getElementById('device-iframe');
    document.body.style.overflow = 'hidden'; 
    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-ext-link').href = url;
    document.getElementById('iframe-loading').style.display = 'flex';
    iframeElement.src = url;
    iframeModal.classList.remove('hidden'); 
    setTimeout(() => iframeModal.classList.remove('opacity-0'), 10);
};

window.closeIframeModal = function() {
    const iframeModal = document.getElementById('device-modal');
    const iframeElement = document.getElementById('device-iframe');
    document.body.style.overflow = '';
    iframeModal.classList.add('opacity-0');
    setTimeout(() => { 
        iframeModal.classList.add('hidden'); 
        iframeElement.src = 'about:blank';
        setTimeout(() => iframeElement.src = '', 50);
    }, 300);
};

window.closeSuccessModal = function(focusForm = false) {
    const successModal = document.getElementById('success-modal');
    const modalContent = document.getElementById('success-modal-content');
    const contactForm = document.getElementById('ajax-contact-form');
    document.body.style.overflow = '';
    successModal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    setTimeout(() => { 
        successModal.classList.add('hidden'); 
        if(focusForm && contactForm) {
            contactForm.querySelector('input[name="name"]').focus();
        }
    }, 300);
};

document.addEventListener('DOMContentLoaded', () => {
    
    // تم تعريف المتغيرات هنا أولاً لمنع حدوث (ReferenceError) الذي أوقف الموقع
    const translations = {
        ar: {
            nav_home: "الرئيسية", nav_about: "نبذة عني", nav_skills: "المهارات", nav_projects: "المشاريع", nav_cv: "سيرتي الذاتية", nav_contact: "تواصل معي", nav_hire: "وظفني",
            hero_badge: "مطور واجهات أمامية", hero_title_1: "نُبسط التقنية. ونصنع الإبداع.", 
            hero_desc: "متخصصون في تطوير الواجهات الأمامية (Front-End) وحلول WordPress، ونحوّل تصميمات Figma إلى مواقع سريعة وسهلة الاستخدام.",
            btn_projects: "شاهد أعمالي", btn_view_cv: "عرض السيرة الذاتية",
            stat_1_num: "+200", stat_1_text: "تصميم واجهات (UX)", stat_2_num: "+15", stat_2_text: "مشروع", stat_3_num: "+10", stat_3_text: "تقنيات وأدوات",
            cv_page_title: "السيرة الذاتية.", cv_title_text: "CV", cv_preview: "معاينة", cv_download: "تنزيل",
            about_badge: "الخبرة والمهارات", about_title: "ما وراء الكود.", about_desc: "أبني حلولاً مخصصة لا تعتمد على القوالب الجاهزة، مع تركيز تام على الأداء وتجربة المستخدم.",
            bento_1_title: "خبرة في بناء الأعمال الرقمية", bento_1_desc: "كمؤسس لـ VORTX Dev، أنا لا أكتب الكود فقط، بل أفهم كيف تعمل الأعمال التجارية على الإنترنت. أقوم بتطوير منصات التجارة الإلكترونية وتحسين معدلات التحويل (CRO) لضمان أن كل سطر برمجي يساهم في زيادة أرباح عملائك.",
            bento_2_title: "ترسانة التقنية", bento_3_title: "Core Web Vitals", bento_4_title: "كيف يمكنني مساعدتك؟",
            srv_1: "متاجر إلكترونية عالية التحويل", srv_1_desc: "بناء وتخصيص متاجر ووكومرس لتحقيق أقصى قدر من المبيعات السلسة.",
            srv_2: "تطوير واجهات متقدمة", srv_2_desc: "تحويل تصاميم Figma المعقدة إلى واجهات دقيقة ومتجاوبة (Pixel Perfect).",
            proj_badge: "معرض الأعمال", proj_title: "أبرز مشاريعي.", btn_preview: "عرض الموقع",
            btn_show_more: "باقي المشاريع", btn_show_less: "إخفاء المشاريع", btn_open_tab: "فتح الموقع", msg_iframe_sec: "بسبب سياسات الأمان الخاصة ببعض المواقع، قد لا يظهر الموقع هنا. اضغط (فتح الموقع) بالأعلى.",
            contact_badge: "تواصل معي", contact_title: "لنقم ببناء شيء عظيم.", contact_desc: "متاح لفرص العمل الحر، وعقود العمل. تواصل معي ودعنا نناقش مشروعك القادم.",
            btn_email: "راسلني عبر الإيميل", btn_whatsapp: "واتساب", form_name: "الاسم الكامل", form_email: "البريد الإلكتروني", form_phone: "رقم الهاتف", form_message: "تفاصيل المشروع", form_send: "إرسال الطلب",
            form_placeholder_name: "اكتب اسمك هنا...", form_placeholder_email: "name@example.com", form_placeholder_phone: "+20 123 456 7890", form_placeholder_msg: "حدثني عن مشروعك القادم بالتفصيل...",
            form_service: "الخدمة المطلوبة", form_service_opt0: "اختر خدمة...", form_service_opt1: "موقع شركة", form_service_opt2: "متجر إلكتروني", form_service_opt3: "تطبيق ويب", form_service_opt4: "لوحة تحكم", form_service_opt5: "تصميم UI/UX", form_service_opt6: "تطوير API", form_service_opt7: "صيانة موقع", form_service_opt8: "أخرى",
            form_budget: "الميزانية", form_budget_opt0: "اختر الميزانية...", form_budget_opt1: "أقل من $200", form_budget_opt2: "$200–$600", form_budget_opt3: "$600–$1,500", form_budget_opt4: "أكثر من $1,500",
            modal_success_title: "🎉 تم إرسال طلب المشروع بنجاح", modal_success_p1: "شكراً لتواصلك! تم استلام طلب مشروعك بنجاح. سأقوم بمراجعة تفاصيل المشروع والتواصل معك في أقرب وقت ممكن.", modal_success_p2: "وقت الرد المتوقع: خلال 24 ساعة.", modal_btn_close: "إغلاق", modal_btn_another: "إرسال طلب آخر", msg_error: "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.",
            footer_text: "Front-End Developer & Founder of VORTX Dev.",
            typewriter_arr: ["Front-End Developer", "WordPress Developer", "UI/UX Designer"]
        },
        en: {
            nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_cv: "My CV", nav_contact: "Contact", nav_hire: "Hire Me",
            hero_badge: "Front-End Developer", hero_title_1: "Simplifying technology. Creating innovation.",
            hero_desc: "Specializing in Front-End development and WordPress solutions, transforming Figma designs into fast, user-friendly websites.",
            btn_projects: "View Projects", btn_view_cv: "View CV",
            stat_1_num: "200+", stat_1_text: "UX Design", stat_2_num: "15+", stat_2_text: "Projects", stat_3_num: "10+", stat_3_text: "Technologies",
            cv_page_title: "My CV.", cv_title_text: "CV", cv_preview: "Preview", cv_download: "Download",
            about_badge: "Experience & Skills", about_title: "Beyond the code.", about_desc: "I build custom, template-free solutions with an absolute focus on performance and user experience.",
            bento_1_title: "Digital Business Expertise", bento_1_desc: "As the founder of VORTX Dev, I don't just write code; I understand how online businesses work. I optimize eCommerce platforms and CRO to ensure every line of code increases your revenue.",
            bento_2_title: "Tech Arsenal", bento_3_title: "Core Web Vitals", bento_4_title: "How I can help?",
            srv_1: "High-Converting eCommerce", srv_1_desc: "Building and customizing WooCommerce stores for maximum seamless sales.",
            srv_2: "Advanced UI Development", srv_2_desc: "Converting complex Figma designs into responsive, pixel-perfect interfaces.",
            proj_badge: "Projects Portfolio", proj_title: "Selected work.", btn_preview: "View Site",
            btn_show_more: "Show More", btn_show_less: "Show Less", btn_open_tab: "Open Web", msg_iframe_sec: "If the site doesn't load due to security policies, click 'Open Web' above.",
            contact_badge: "Contact", contact_title: "Let's build something great.", contact_desc: "Open to freelance opportunities, contract work, and full-time positions. Reach out and let's discuss your next project.",
            btn_email: "Email Me", btn_whatsapp: "WhatsApp", form_name: "Full Name", form_email: "Email Address", form_phone: "Phone Number", form_message: "Project Details", form_send: "Send Request",
            form_placeholder_name: "John Doe", form_placeholder_email: "john@example.com", form_placeholder_phone: "+1 234 567 8900", form_placeholder_msg: "Tell me about your project...",
            form_service: "Service Needed", form_service_opt0: "Select a service...", form_service_opt1: "Business Website", form_service_opt2: "E-commerce Store", form_service_opt3: "Web Application", form_service_opt4: "Dashboard", form_service_opt5: "UI/UX Design", form_service_opt6: "API Development", form_service_opt7: "Website Maintenance", form_service_opt8: "Other",
            form_budget: "Budget", form_budget_opt0: "Select your budget...", form_budget_opt1: "Under $200", form_budget_opt2: "$200–$600", form_budget_opt3: "$600–$1,500", form_budget_opt4: "Over $1,500",
            modal_success_title: "🎉 Request Sent Successfully", modal_success_p1: "Thank you for reaching out! Your project request has been received. I will review your details and contact you soon.", modal_success_p2: "Expected response time: Within 24 hours.", modal_btn_close: "Close", modal_btn_another: "Send Another", msg_error: "Error sending message. Please try again.",
            footer_text: "Front-End Developer & Founder of VORTX Dev.",
            typewriter_arr: ["Front-End Developer", "WordPress Developer", "UI/UX Designer"]
        },
        es: {
            nav_home: "Inicio", nav_about: "Sobre Mí", nav_skills: "Habilidades", nav_projects: "Proyectos", nav_cv: "Mi CV", nav_contact: "Contacto", nav_hire: "Contrátame",
            hero_badge: "Desarrollador Front-End", hero_title_1: "Simplificando tecnología. Creando innovación.", hero_desc: "Especializado en desarrollo Front-End y soluciones WordPress, transformando diseños Figma en sitios web rápidos y fáciles de usar.",
            btn_projects: "Ver Proyectos", btn_view_cv: "Ver CV", stat_1_num: "200+", stat_1_text: "Diseño UX", stat_2_num: "15+", stat_2_text: "Proyectos", stat_3_num: "10+", stat_3_text: "Tecnologías",
            cv_page_title: "Mi CV.", cv_title_text: "CV", cv_preview: "Vista previa", cv_download: "Descargar", about_badge: "Experiencia y Habilidades", about_title: "Más allá del código.", about_desc: "Construyo soluciones personalizadas sin plantillas, con enfoque absoluto en el rendimiento.",
            bento_1_title: "Experiencia en Negocios Digitales", bento_1_desc: "Como fundador de VORTX Dev, entiendo cómo funcionan los negocios en línea. Optimizo el comercio electrónico y el CRO para asegurar el aumento de sus ingresos.", bento_2_title: "Arsenal Tecnológico", bento_3_title: "Core Web Vitals", bento_4_title: "¿Cómo puedo ayudarte?",
            srv_1: "E-commerce de Alta Conversión", srv_1_desc: "Construcción y optimización de tiendas WooCommerce.", srv_2: "Desarrollo UI Avanzado", srv_2_desc: "Conversión de diseños Figma a interfaces responsivas.",
            proj_badge: "Portafolio", proj_title: "Proyectos destacados.", btn_preview: "Ver Sitio", btn_show_more: "Ver Más", btn_show_less: "Ver Menos", btn_open_tab: "Abrir Web", msg_iframe_sec: "El sitio puede bloquear la vista. Haz clic en 'Abrir Web'.",
            contact_badge: "Contacto", contact_title: "Construyamos algo genial.", contact_desc: "Disponible para proyectos freelance. Hablemos de tu próximo proyecto.",
            btn_email: "Enviar Correo", btn_whatsapp: "WhatsApp", form_name: "Nombre", form_email: "Correo", form_phone: "Teléfono", form_message: "Detalles del Proyecto", form_send: "Enviar",
            form_placeholder_name: "Tu nombre...", form_placeholder_email: "correo@ejemplo.com", form_placeholder_phone: "+34 123 456 789", form_placeholder_msg: "Cuéntame sobre tu proyecto...",
            form_service: "Servicio Necesario", form_service_opt0: "Selecciona un servicio...", form_service_opt1: "Sitio Corporativo", form_service_opt2: "Tienda Online", form_service_opt3: "App Web", form_service_opt4: "Dashboard", form_service_opt5: "Diseño UI/UX", form_service_opt6: "Desarrollo API", form_service_opt7: "Mantenimiento", form_service_opt8: "Otro",
            form_budget: "Presupuesto", form_budget_opt0: "Selecciona...", form_budget_opt1: "Menos de $200", form_budget_opt2: "$200–$600", form_budget_opt3: "$600–$1,500", form_budget_opt4: "Más de $1,500",
            modal_success_title: "🎉 Solicitud Enviada", modal_success_p1: "¡Gracias por contactarme! He recibido tu solicitud. Revisaré los detalles y te responderé pronto.", modal_success_p2: "Tiempo de respuesta: 24 horas.", modal_btn_close: "Cerrar", modal_btn_another: "Enviar Otra", msg_error: "Error al enviar. Intenta de nuevo.",
            footer_text: "Desarrollador Front-End y Fundador de VORTX Dev.",
            typewriter_arr: ["Desarrollador Front-End", "Desarrollador WordPress", "Diseñador UI/UX"]
        },
        fr: {
            nav_home: "Accueil", nav_about: "À Propos", nav_skills: "Compétences", nav_projects: "Projets", nav_cv: "Mon CV", nav_contact: "Contact", nav_hire: "Embauchez-moi",
            hero_badge: "Développeur Front-End", hero_title_1: "Simplifier la technologie. Créer l'innovation.", hero_desc: "Spécialisé dans le développement Front-End et WordPress, transformant les conceptions Figma en sites Web rapides et intuitifs.",
            btn_projects: "Voir Projets", btn_view_cv: "Voir CV", stat_1_num: "200+", stat_1_text: "Design UX", stat_2_num: "15+", stat_2_text: "Projets", stat_3_num: "10+", stat_3_text: "Technologies",
            cv_page_title: "Mon CV.", cv_title_text: "CV", cv_preview: "Aperçu", cv_download: "Télécharger", about_badge: "Expérience & Compétences", about_title: "Au-delà du code.", about_desc: "Je crée des solutions personnalisées sans modèle, axées sur la performance.",
            bento_1_title: "Expertise Commerciale Numérique", bento_1_desc: "En tant que fondateur de VORTX Dev, je comprends les affaires en ligne. J'optimise le commerce électronique pour augmenter vos revenus.", bento_2_title: "Arsenal Technologique", bento_3_title: "Core Web Vitals", bento_4_title: "Comment puis-je aider ?",
            srv_1: "E-commerce à haute conversion", srv_1_desc: "Création et optimisation de boutiques WooCommerce.", srv_2: "Développement UI Avancé", srv_2_desc: "Conversion de conceptions Figma en interfaces réactives.",
            proj_badge: "Portfolio", proj_title: "Projets en vedette.", btn_preview: "Voir le Site", btn_show_more: "Voir Plus", btn_show_less: "Voir Moins", btn_open_tab: "Ouvrir Web", msg_iframe_sec: "Le site bloque la vue. Cliquez sur 'Ouvrir Web'.",
            contact_badge: "Contact", contact_title: "Construisons ensemble.", contact_desc: "Disponible pour des projets freelance. Parlons de votre prochain projet.",
            btn_email: "Envoyer Email", btn_whatsapp: "WhatsApp", form_name: "Nom", form_email: "Email", form_phone: "Téléphone", form_message: "Détails du projet", form_send: "Envoyer",
            form_placeholder_name: "Votre nom...", form_placeholder_email: "email@exemple.com", form_placeholder_phone: "+33 123 456 789", form_placeholder_msg: "Parlez-moi de votre projet...",
            form_service: "Service Requis", form_service_opt0: "Sélectionnez...", form_service_opt1: "Site d'entreprise", form_service_opt2: "Boutique en ligne", form_service_opt3: "App Web", form_service_opt4: "Tableau de bord", form_service_opt5: "Design UI/UX", form_service_opt6: "Développement API", form_service_opt7: "Maintenance", form_service_opt8: "Autre",
            form_budget: "Budget", form_budget_opt0: "Sélectionnez...", form_budget_opt1: "Moins de 200$", form_budget_opt2: "200$–600$", form_budget_opt3: "600$–1500$", form_budget_opt4: "Plus de 1500$",
            modal_success_title: "🎉 Demande Envoyée", modal_success_p1: "Merci ! J'ai bien reçu votre demande et vous contacterai très bientôt.", modal_success_p2: "Temps de réponse : 24 heures.", modal_btn_close: "Fermer", modal_btn_another: "Envoyer Autre", msg_error: "Erreur d'envoi. Veuillez réessayer.",
            footer_text: "Développeur Front-End et Fondateur de VORTX Dev.",
            typewriter_arr: ["Développeur Front-End", "Développeur WordPress", "Designer UI/UX"]
        },
        de: {
            nav_home: "Startseite", nav_about: "Über Mich", nav_skills: "Fähigkeiten", nav_projects: "Projekte", nav_cv: "Mein CV", nav_contact: "Kontakt", nav_hire: "Engagieren",
            hero_badge: "Front-End Entwickler", hero_title_1: "Technologie vereinfachen. Innovation schaffen.", hero_desc: "Spezialisiert auf Front-End und WordPress-Lösungen, verwandeln wir Figma-Designs in schnelle Websites.",
            btn_projects: "Projekte", btn_view_cv: "CV Ansehen", stat_1_num: "200+", stat_1_text: "UX Design", stat_2_num: "15+", stat_2_text: "Projekte", stat_3_num: "10+", stat_3_text: "Technologien",
            cv_page_title: "Mein CV.", cv_title_text: "CV", cv_preview: "Vorschau", cv_download: "Herunterladen", about_badge: "Erfahrung", about_title: "Jenseits des Codes.", about_desc: "Ich erstelle maßgeschneiderte, vorlagenfreie Lösungen mit Fokus auf Leistung.",
            bento_1_title: "Digitale Geschäftsexpertise", bento_1_desc: "Als Gründer von VORTX Dev verstehe ich, wie Online-Geschäfte funktionieren. Ich maximiere Ihre E-Commerce-Umsätze.", bento_2_title: "Tech-Arsenal", bento_3_title: "Core Web Vitals", bento_4_title: "Wie kann ich helfen?",
            srv_1: "Konversionsstarker E-Commerce", srv_1_desc: "Aufbau und Optimierung von WooCommerce-Shops.", srv_2: "Fortgeschrittene UI-Entwicklung", srv_2_desc: "Umwandlung komplexer Figma-Designs.",
            proj_badge: "Portfolio", proj_title: "Ausgewählte Arbeiten.", btn_preview: "Website", btn_show_more: "Mehr Zeigen", btn_show_less: "Weniger Zeigen", btn_open_tab: "Web Öffnen", msg_iframe_sec: "Site blockiert Vorschau. Klick 'Web Öffnen'.",
            contact_badge: "Kontakt", contact_title: "Lass uns bauen.", contact_desc: "Verfügbar für freiberufliche Projekte. Lass uns sprechen.",
            btn_email: "Email Senden", btn_whatsapp: "WhatsApp", form_name: "Name", form_email: "Email", form_phone: "Telefon", form_message: "Projekt details", form_send: "Senden",
            form_placeholder_name: "Dein Name...", form_placeholder_email: "email@beispiel.de", form_placeholder_phone: "+49 123 456 789", form_placeholder_msg: "Erzähl mir von deinem Projekt...",
            form_service: "Dienstleistung", form_service_opt0: "Wählen...", form_service_opt1: "Unternehmenswebsite", form_service_opt2: "Online-Shop", form_service_opt3: "Web-App", form_service_opt4: "Dashboard", form_service_opt5: "UI/UX Design", form_service_opt6: "API-Entwicklung", form_service_opt7: "Wartung", form_service_opt8: "Andere",
            form_budget: "Budget", form_budget_opt0: "Wählen...", form_budget_opt1: "Unter 200$", form_budget_opt2: "200$–600$", form_budget_opt3: "600$–1500$", form_budget_opt4: "Über 1500$",
            modal_success_title: "🎉 Anfrage Gesendet", modal_success_p1: "Danke! Ich habe Ihre Anfrage erhalten und werde mich bald melden.", modal_success_p2: "Antwortzeit: 24 Stunden.", modal_btn_close: "Schließen", modal_btn_another: "Noch eine Senden", msg_error: "Fehler beim Senden. Bitte versuchen Sie es erneut.",
            footer_text: "Front-End Entwickler & Gründer von VORTX Dev.",
            typewriter_arr: ["Front-End Entwickler", "WordPress Entwickler", "UI/UX Designer"]
        },
        zh: {
            nav_home: "首页", nav_about: "关于", nav_skills: "技能", nav_projects: "项目", nav_cv: "我的简历", nav_contact: "联系", nav_hire: "雇用我",
            hero_badge: "前端开发工程师", hero_title_1: "简化技术。创造创新。", hero_desc: "专注于前端开发和WordPress解决方案，将Figma设计转化为快速、用户友好的网站。",
            btn_projects: "查看项目", btn_view_cv: "查看简历", stat_1_num: "200+", stat_1_text: "UX设计", stat_2_num: "15+", stat_2_text: "项目", stat_3_num: "10+", stat_3_text: "技术",
            cv_page_title: "我的简历.", cv_title_text: "简历", cv_preview: "预览", cv_download: "下载", about_badge: "经验与技能", about_title: "代码之外。", about_desc: "我构建无模板的定制解决方案，绝对关注性能和用户体验。",
            bento_1_title: "数字商业专长", bento_1_desc: "作为VORTX Dev的创始人，我了解在线业务。我优化电子商务以增加您的收入。", bento_2_title: "技术武器库", bento_3_title: "核心Web指标", bento_4_title: "我能帮什么忙？",
            srv_1: "高转化电子商务", srv_1_desc: "构建和优化WooCommerce商店。", srv_2: "高级UI开发", srv_2_desc: "将Figma设计转换为像素级完美的界面。",
            proj_badge: "作品集", proj_title: "精选项目。", btn_preview: "查看网站", btn_show_more: "显示更多", btn_show_less: "显示更少", btn_open_tab: "打开网页", msg_iframe_sec: "由于安全策略，请点击“打开网页”。",
            contact_badge: "联系我", contact_title: "让我们创造伟大。", contact_desc: "可接受自由职业项目。联系我，讨论您的下一个项目。",
            btn_email: "发送邮件", btn_whatsapp: "WhatsApp", form_name: "全名", form_email: "电子邮箱", form_phone: "电话号码", form_message: "项目详情", form_send: "发送请求",
            form_placeholder_name: "您的名字...", form_placeholder_email: "name@example.com", form_placeholder_phone: "+86 123 4567 8900", form_placeholder_msg: "告诉我关于您的项目...",
            form_service: "所需服务", form_service_opt0: "选择服务...", form_service_opt1: "企业网站", form_service_opt2: "电子商务", form_service_opt3: "Web应用程序", form_service_opt4: "仪表盘", form_service_opt5: "UI/UX设计", form_service_opt6: "API开发", form_service_opt7: "网站维护", form_service_opt8: "其他",
            form_budget: "预算", form_budget_opt0: "选择预算...", form_budget_opt1: "$200 以下", form_budget_opt2: "$200–$600", form_budget_opt3: "$600–$1,500", form_budget_opt4: "$1,500 以上",
            modal_success_title: "🎉 请求已发送", modal_success_p1: "感谢您的联系！我已经收到您的请求，将尽快与您联系。", modal_success_p2: "预计回复时间：24小时内。", modal_btn_close: "关闭", modal_btn_another: "再发送一个", msg_error: "发送错误，请重试。",
            footer_text: "前端开发工程师 & VORTX Dev 创始人",
            typewriter_arr: ["前端开发工程师", "WordPress 开发者", "UI/UX 设计师"]
        },
        hi: {
            nav_home: "होम", nav_about: "मेरे बारे में", nav_skills: "कौशल", nav_projects: "प्रोजेक्ट्स", nav_cv: "मेरा सीवी", nav_contact: "संपर्क", nav_hire: "मुझे काम पर रखें",
            hero_badge: "फ्रंट-एंड डेवलपर", hero_title_1: "प्रौद्योगिकी को सरल बनाना। नवाचार बनाना।", hero_desc: "फ्रंट-एंड डेवलपमेंट और वर्डप्रेस समाधानों में विशेषज्ञता, फिगमा डिज़ाइनों को तेज़, उपयोगकर्ता के अनुकूल वेबसाइटों में बदलना।",
            btn_projects: "प्रोजेक्ट्स देखें", btn_view_cv: "सीवी देखें", stat_1_num: "200+", stat_1_text: "UX डिज़ाइन", stat_2_num: "15+", stat_2_text: "प्रोजेक्ट्स", stat_3_num: "10+", stat_3_text: "तकनीक",
            cv_page_title: "मेरा सीवी.", cv_title_text: "सीवी", cv_preview: "पूर्वावलोकन", cv_download: "डाउनलोड", about_badge: "अनुभव और कौशल", about_title: "कोड के परे।", about_desc: "मैं प्रदर्शन और उपयोगकर्ता अनुभव पर पूर्ण ध्यान देने के साथ कस्टम समाधान बनाता हूं।",
            bento_1_title: "डिजिटल व्यवसाय विशेषज्ञता", bento_1_desc: "VORTX Dev के संस्थापक के रूप में, मैं समझता हूँ कि ऑनलाइन व्यवसाय कैसे काम करते हैं। मैं आपके राजस्व को बढ़ाने के लिए ईकामर्स को अनुकूलित करता हूं।", bento_2_title: "तकनीकी शस्त्रागार", bento_3_title: "कोर वेब वाइटल्स", bento_4_title: "मैं कैसे मदद कर सकता हूँ?",
            srv_1: "उच्च-रूपांतरण ईकामर्स", srv_1_desc: "WooCommerce स्टोर्स का निर्माण और अनुकूलन।", srv_2: "उन्नत UI विकास", srv_2_desc: "जटिल Figma डिज़ाइनों को उत्तरदायी इंटरफेस में बदलना।",
            proj_badge: "पोर्टफोलियो", proj_title: "चयनित कार्य।", btn_preview: "साइट देखें", btn_show_more: "और दिखाएं", btn_show_less: "कम दिखाएं", btn_open_tab: "वेब खोलें", msg_iframe_sec: "साइट दृश्य को रोक सकती है। 'वेब खोलें' पर क्लिक करें।",
            contact_badge: "संपर्क करें", contact_title: "आइए कुछ शानदार बनाएं।", contact_desc: "फ्रीलांस परियोजनाओं के लिए उपलब्ध। संपर्क करें और अपने अगले प्रोजेक्ट पर चर्चा करें।",
            btn_email: "ईमेल भेजें", btn_whatsapp: "WhatsApp", form_name: "पूरा नाम", form_email: "ईमेल", form_phone: "फ़ोन नंबर", form_message: "प्रोजेक्ट विवरण", form_send: "अनुरोध भेजें",
            form_placeholder_name: "आपका नाम...", form_placeholder_email: "name@example.com", form_placeholder_phone: "+91 123 456 7890", form_placeholder_msg: "मुझे अपने प्रोजेक्ट के बारे में बताएं...",
            form_service: "आवश्यक सेवा", form_service_opt0: "चुनें...", form_service_opt1: "कॉर्पोरेट वेबसाइट", form_service_opt2: "ईकामर्स स्टोर", form_service_opt3: "वेब ऐप", form_service_opt4: "डैशबोर्ड", form_service_opt5: "UI/UX डिज़ाइन", form_service_opt6: "API विकास", form_service_opt7: "रखरखाव", form_service_opt8: "अन्य",
            form_budget: "बजट", form_budget_opt0: "चुनें...", form_budget_opt1: "$200 से कम", form_budget_opt2: "$200–$600", form_budget_opt3: "$600–$1,500", form_budget_opt4: "$1,500 से अधिक",
            modal_success_title: "🎉 अनुरोध भेजा गया", modal_success_p1: "संपर्क करने के लिए धन्यवाद! मुझे आपका अनुरोध मिल गया है। मैं जल्द ही आपसे संपर्क करूंगा।", modal_success_p2: "प्रतिक्रिया समय: 24 घंटे।", modal_btn_close: "बंद करें", modal_btn_another: "एक और भेजें", msg_error: "त्रुटि। कृपया पुनः प्रयास करें।",
            footer_text: "फ्रंट-एंड डेवलपर और VORTX Dev के संस्थापक",
            typewriter_arr: ["फ्रंट-एंड डेवलपर", "वर्डप्रेस डेवलपर", "UI/UX डिज़ाइनर"]
        }
    };

    let currentLang = 'ar';
    let isExpanded = false;

    // تم إعلان متغيرات الآلة الكاتبة هنا مبكراً لتجنب أي أخطاء
    let typeWriterStrings = translations['ar'].typewriter_arr;
    let isDeleting = false, currentStringIndex = 0, currentCharIndex = 0;
    const typeWriterElement = document.getElementById('typewriter-text');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const toggleBtn = document.getElementById('toggle-more-projects');

    function initProjects() {
        const grid = document.getElementById('projects-grid');
        if (!grid) return;

        if (typeof window.projectsData === 'undefined') {
            console.error("لم يتم العثور على بيانات المشاريع");
            return;
        }

        const colorsMap = {
            rose: { border: 'hover:border-rose-500/50', bg: 'bg-rose-500/5', bgHover: 'group-hover:bg-rose-500/10', text: 'group-hover:text-rose-400', num: 'group-hover:text-rose-500/10' },
            blue: { border: 'hover:border-blue-500/50', bg: 'bg-blue-500/5', bgHover: 'group-hover:bg-blue-500/10', text: 'group-hover:text-blue-400', num: 'group-hover:text-blue-500/10' },
            purple: { border: 'hover:border-purple-500/50', bg: 'bg-purple-500/5', bgHover: 'group-hover:bg-purple-500/10', text: 'group-hover:text-purple-400', num: 'group-hover:text-purple-500/10' },
            orange: { border: 'hover:border-orange-500/50', bg: 'bg-orange-500/5', bgHover: 'group-hover:bg-orange-500/10', text: 'group-hover:text-orange-400', num: 'group-hover:text-orange-500/10' },
            cyan: { border: 'hover:border-cyan-500/50', bg: 'bg-cyan-500/5', bgHover: 'group-hover:bg-cyan-500/10', text: 'group-hover:text-cyan-400', num: 'group-hover:text-cyan-500/10' },
            green: { border: 'hover:border-green-500/50', bg: 'bg-green-500/5', bgHover: 'group-hover:bg-green-500/10', text: 'group-hover:text-green-400', num: 'group-hover:text-green-500/10' },
            pink: { border: 'hover:border-pink-500/50', bg: 'bg-pink-500/5', bgHover: 'group-hover:bg-pink-500/10', text: 'group-hover:text-pink-400', num: 'group-hover:text-pink-500/10' },
            teal: { border: 'hover:border-teal-500/50', bg: 'bg-teal-500/5', bgHover: 'group-hover:bg-teal-500/10', text: 'group-hover:text-teal-400', num: 'group-hover:text-teal-500/10' },
            yellow: { border: 'hover:border-yellow-500/50', bg: 'bg-yellow-500/5', bgHover: 'group-hover:bg-yellow-500/10', text: 'group-hover:text-yellow-400', num: 'group-hover:text-yellow-500/10' }
        };

        let htmlContent = '';
        let hasHidden = false;
        
        window.projectsData.forEach((proj) => {
            const c = colorsMap[proj.colorTheme] || colorsMap.blue;
            const hiddenClasses = proj.isHiddenInitially ? 'project-hidden hidden translate-y-8' : 'reveal reveal-init';
            if (proj.isHiddenInitially) hasHidden = true;
            
            let tagsHtml = proj.tags.map(tag => `<span class="pill px-3 py-1.5 text-xs rounded-md text-gray-300">${tag}</span>`).join('');

            htmlContent += `
            <div class="glass-card p-8 flex flex-col group relative overflow-hidden project-item border border-white/10 ${c.border} ${hiddenClasses} hover:-translate-y-2">
                <div class="absolute top-0 right-0 w-64 h-64 ${c.bg} rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150 ${c.bgHover}"></div>
                <div class="flex-grow z-10 relative">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold ${c.text} transition-colors" dir="ltr">${proj.title}</h3>
                        <div class="text-5xl font-black text-white/5 font-mono ${c.num} transition-colors">${proj.id}</div>
                    </div>
                    <p class="text-gray-400 mb-8 leading-relaxed dynamic-proj-desc" data-proj-id="${proj.id}"></p>
                    <div class="flex flex-wrap gap-2 mb-8" dir="ltr">${tagsHtml}</div>
                </div>
                <div class="mt-auto pt-5 border-t border-white/10 flex justify-between items-center z-10 relative">
                    <span class="text-xs text-gray-500 font-mono"><i class="${proj.iconClass} mx-1"></i> ${proj.type}</span>
                    <button onclick="openIframeModal('${proj.url}', '${proj.title}')" class="text-sm font-semibold text-white ${c.text} transition-colors flex items-center gap-2 cursor-pointer" aria-label="Preview ${proj.title}">
                        <span data-i18n="btn_preview"></span> <i class="fa-solid fa-arrow-left ltr:fa-arrow-right group-hover:-translate-x-1 ltr:group-hover:translate-x-1 transition-transform"></i>
                    </button>
                </div>
            </div>`;
        });

        grid.innerHTML = htmlContent;
        if(hasHidden && toggleBtn) toggleBtn.classList.remove('hidden');
    }
    initProjects();

    const toggleIcon = document.getElementById('toggle-icon');

    function updateShowMoreText() {
        if (!toggleBtn) return;
        toggleBtn.querySelector('span').innerHTML = translations[currentLang][isExpanded ? 'btn_show_less' : 'btn_show_more'];
        if(toggleIcon) toggleIcon.className = isExpanded ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down";
    }

    const langNames = { ar: 'العربية', en: 'English', es: 'Español', fr: 'Français', de: 'Deutsch', zh: '中文', hi: 'हिन्दी' };

    function setLanguage(lang) {
        currentLang = lang;
        const isRtl = (lang === 'ar');
        
        document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        document.body.dir = isRtl ? 'rtl' : 'ltr';
        document.documentElement.classList.toggle('ltr', !isRtl);
        document.documentElement.classList.toggle('rtl', isRtl);
        
        const desktopLangText = document.getElementById('current-lang-desktop');
        if (desktopLangText) desktopLangText.innerText = langNames[lang];
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) el.innerHTML = translations[lang][key];
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
        });

        if (typeof window.projectsData !== 'undefined') {
            document.querySelectorAll('.dynamic-proj-desc').forEach(el => {
                const id = el.getAttribute('data-proj-id');
                const proj = window.projectsData.find(p => p.id === id);
                if (proj) el.innerHTML = proj.desc[lang] || proj.desc['en'];
            });
        }

        document.querySelectorAll('.lang-btn-desktop').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.replace('text-gray-400', 'text-blue-400');
                btn.classList.replace('font-medium', 'font-bold');
            } else {
                btn.classList.replace('text-blue-400', 'text-gray-400');
                btn.classList.replace('font-bold', 'font-medium');
            }
        });

        document.querySelectorAll('.lang-btn-mobile').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.replace('text-gray-400', 'text-blue-400');
            } else {
                btn.classList.replace('text-blue-400', 'text-gray-400');
            }
        });

        // تحديث وتصفير الآلة الكاتبة لتتناسب مع اللغة
        typeWriterStrings = translations[lang].typewriter_arr || translations['en'].typewriter_arr;
        currentStringIndex = 0;
        currentCharIndex = 0;
        isDeleting = false;
        
        updateShowMoreText();
        
        // إغلاق قائمة اللغات في الموبايل إن كانت مفتوحة
        const mobileLangDropdown = document.getElementById('mobile-lang-dropdown');
        if(mobileLangDropdown) {
            mobileLangDropdown.classList.add('hidden');
            mobileLangDropdown.classList.remove('flex');
        }
    }

    // تفعيل أزرار اللغات
    document.querySelectorAll('.lang-btn-desktop, .lang-btn-mobile').forEach(btn => {
        btn.addEventListener('click', (e) => {
            setLanguage(e.target.dataset.lang);
        });
    });

    setLanguage('ar'); // بدء التشغيل باللغة العربية

    // تفعيل قائمة لغات الموبايل (Dropdown)
    const mobileLangToggle = document.getElementById('mobile-lang-toggle');
    const mobileLangDropdown = document.getElementById('mobile-lang-dropdown');
    
    if (mobileLangToggle && mobileLangDropdown) {
        mobileLangToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileLangDropdown.classList.toggle('hidden');
            mobileLangDropdown.classList.toggle('flex');
        });
    }

    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    if(mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }

    // إغلاق القوائم عند النقر في أي مكان خارجها (الحل المطلوب)
    document.addEventListener('click', (e) => {
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        }
        if (mobileLangDropdown && !mobileLangDropdown.classList.contains('hidden')) {
            if (!mobileLangDropdown.contains(e.target) && !mobileLangToggle.contains(e.target)) {
                mobileLangDropdown.classList.add('hidden');
                mobileLangDropdown.classList.remove('flex');
            }
        }
    });

    document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('reveal-init');
        revealObserver.observe(el);
    });

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            const hiddenProjects = document.querySelectorAll('.project-hidden'); 
            hiddenProjects.forEach(proj => {
                if(isExpanded) {
                    proj.classList.remove('hidden');
                    setTimeout(() => {
                        proj.classList.remove('translate-y-8');
                        proj.classList.add('transition-all', 'duration-500'); 
                    }, 20);
                } else {
                    proj.classList.add('translate-y-8');
                    setTimeout(() => proj.classList.add('hidden'), 300);
                }
            });
            updateShowMoreText();
        });
    }

    function type() {
        if(!typeWriterElement || typeWriterStrings.length === 0) return;
        const currentString = typeWriterStrings[currentStringIndex];
        typeWriterElement.textContent = currentString.substring(0, currentCharIndex + (isDeleting ? -1 : 1));
        currentCharIndex += isDeleting ? -1 : 1;
        let typeSpeed = isDeleting ? 40 : 80;
        if (!isDeleting && currentCharIndex === currentString.length) { 
            typeSpeed = 2000; isDeleting = true; 
        } else if (isDeleting && currentCharIndex === 0) { 
            isDeleting = false; currentStringIndex = (currentStringIndex + 1) % typeWriterStrings.length; typeSpeed = 500; 
        }
        setTimeout(type, typeSpeed);
    }
    setTimeout(type, 500); 

    const scrollProgress = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');
    let isScrolling = false;
    
    if (backToTopBtn) {
        backToTopBtn.style.transition = 'opacity 0.3s ease, transform 0.3s ease, margin-bottom 0.3s ease';
    }
    
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                if(scrollProgress) {
                    const winScroll = document.documentElement.scrollTop;
                    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    scrollProgress.style.transform = `scaleX(${winScroll / height})`;
                }
                
                if(backToTopBtn) {
                    if (document.documentElement.scrollTop > 500) {
                        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-5');
                    } else {
                        backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-5');
                    }

                    const footer = document.querySelector('footer');
                    if (footer) {
                        const footerRect = footer.getBoundingClientRect();
                        if (footerRect.top < window.innerHeight) {
                            const overlap = window.innerHeight - footerRect.top;
                            backToTopBtn.style.marginBottom = `${overlap}px`;
                        } else {
                            backToTopBtn.style.marginBottom = '0px';
                        }
                    }
                }
                isScrolling = false;
            });
            isScrolling = true;
        }
    }, { passive: true });

    if(backToTopBtn) backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    const contactForm = document.getElementById('ajax-contact-form');
    const submitBtn = document.getElementById('submit-btn');

    function validateField(input) {
        const errorSpan = input.nextElementSibling;
        if (!input.checkValidity()) {
            errorSpan.textContent = currentLang === 'ar' ? 'يرجى إكمال هذا الحقل بشكل صحيح.' : 'Please fill out this field correctly.';
            errorSpan.classList.remove('hidden');
            input.classList.add('border-red-500');
            return false;
        } else {
            errorSpan.classList.add('hidden');
            input.classList.remove('border-red-500');
            return true;
        }
    }

    if(contactForm) {
        contactForm.querySelectorAll('input, select, textarea').forEach(el => {
            el.addEventListener('input', () => validateField(el));
            el.addEventListener('change', () => validateField(el));
        });

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            let isValid = true;
            contactForm.querySelectorAll('input, select, textarea').forEach(el => {
                if (!validateField(el)) isValid = false;
            });
            if (!isValid) return;

            const btnText = document.getElementById('btn-text');
            const btnIcon = document.getElementById('btn-icon');
            const originalText = btnText.innerHTML;
            const originalIcon = btnIcon.className;

            btnText.innerHTML = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
            btnIcon.className = 'fa-solid fa-spinner fa-spin';
            submitBtn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    contactForm.reset();
                    
                    const successModal = document.getElementById('success-modal');
                    const modalContent = document.getElementById('success-modal-content');
                    
                    document.body.style.overflow = 'hidden'; 
                    successModal.classList.remove('hidden');
                    setTimeout(() => {
                        successModal.classList.remove('opacity-0');
                        modalContent.classList.remove('scale-95');
                        modalContent.classList.add('scale-100');
                    }, 10);
                } else throw new Error('Network error');
            } catch (error) { 
                alert(translations[currentLang]['msg_error']);
            } finally {
                btnText.innerHTML = originalText;
                btnIcon.className = originalIcon;
                submitBtn.disabled = false;
            }
        });
    }

    function handleRouting() {
        if(mobileMenu) mobileMenu.classList.add('hidden');
        const isCV = window.location.hash === '#cv';
        const homePage = document.getElementById('home-page');
        const cvPage = document.getElementById('cv-page');
        if(homePage) homePage.classList.toggle('hidden-page', isCV);
        if(cvPage) cvPage.classList.toggle('hidden-page', !isCV);
        if (isCV) window.scrollTo(0, 0);
    }
    window.addEventListener('hashchange', handleRouting);
    handleRouting();
});
