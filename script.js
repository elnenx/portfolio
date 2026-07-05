// Attach Modal functions to Window globally so they work in HTML onclick attributes
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
    // Data & Translations
    const translations = {
        ar: {
            nav_home: "الرئيسية", nav_about: "نبذة عني", nav_skills: "المهارات", nav_projects: "المشاريع", nav_cv: "سيرتي الذاتية", nav_contact: "تواصل معي", nav_hire: "وظفني",
            hero_badge: "مطور واجهات أمامية", hero_title_1: "نُبسط التقنية. ونصنع الإبداع.", 
            hero_desc: "أنا محمد — مطور متخصص في الواجهات الأمامية (Front-End) وحلول الووردبريس. أحول تصميمات Figma إلى مواقع سريعة، آمنة، وسهلة الاستخدام.",
            btn_projects: "شاهد أعمالي", btn_view_cv: "عرض السيرة الذاتية",
            stat_1_num: "+200", stat_1_text: "تصميم واجهات (UX)", stat_2_num: "+15", stat_2_text: "مشروع", stat_3_num: "+10", stat_3_text: "تقنيات وأدوات",
            cv_page_title: "السيرة الذاتية.", cv_title_text: "CV", cv_preview: "معاينة", cv_download: "تنزيل",
            about_badge: "الخبرة والنبذة", about_title: "مطور يركز على الحلول النظيفة والقابلة للتوسع.", 
            about_desc: "أنا مطور واجهات أمامية وووردبريس مع أساس قوي في التطوير المخصص، السيو التقني، وتحسين الأداء. لا أعتمد على القوالب الجاهزة فقط بل أبني حلولاً مخصصة تناسب احتياجات المشروع بدقة.",
            exp_1_title: "مؤسس / مالك", exp_1_desc: "إدارة المشاريع الرقمية، تطوير منصة التجارة الإلكترونية، تحسين تجربة التسوق على ووكومرس، وزيادة المبيعات عبر الإنترنت من خلال تحسين معدل التحويل (CRO).",
            exp_2_title: "مطور واجهات وووردبريس", exp_2_desc: "بناء مواقع احترافية، دمج واجهات برمجة التطبيقات (APIs)، وتطوير حلول مخصصة. التركيز على سرعة الموقع، Core Web Vitals، وحل مشاكل الووردبريس المعقدة.",
            skills_badge: "المهارات والأدوات", skills_title: "الأدوات التي أستخدمها.",
            skill_cat_1: "التقنيات الأساسية", skill_cat_2: "تطوير ووردبريس", skill_cat_3: "تحسين الأداء", skill_cat_4: "التصميم والاستراتيجية",
            skill_1: "برمجة إضافات", skill_2: "تطوير قوالب", skill_3: "سيو تقني", skill_4: "مؤشرات الويب", skill_5: "تسريع المواقع", skill_6: "حماية المواقع", skill_7: "واجهة وتجربة المستخدم", skill_8: "تصميم متجاوب", skill_9: "تحسين التحويلات",
            cap_title: "ما يمكنني تقديمه لعملك", cap_1_title: "الأداء والسرعة", cap_1_desc: "تحسين سرعة تحميل الموقع وضمان التوافق مع مؤشرات الويب الأساسية من جوجل لتحسين ترتيبك في البحث.",
            cap_2_title: "احتراف التجارة الإلكترونية", cap_2_desc: "بناء وتحسين تجارب التسوق على ووكومرس لزيادة معدلات التحويل والمبيعات بشكل ملحوظ.", cap_3_title: "واجهات مستخدم حديثة", cap_3_desc: "تحويل تصميمات Figma إلى واجهات مستخدم دقيقة، متجاوبة، وسهلة الاستخدام على جميع الشاشات.",
            proj_badge: "معرض الأعمال", proj_title: "أبرز مشاريعي.", btn_preview: "عرض الموقع",
            tag_skankx: "تطبيق ويب حديث يركز على الأداء العالي وتجربة مستخدم سلسة ونظيفة.", tag_ecommerce: "منصة تجارة إلكترونية وشركات. التركيز على تجربة مستخدم سلسة وسرعة تحميل فائقة.", tag_corporate: "موقع شركة ووكالة. تحويل تصميمات واجهة المستخدم (UI/UX) بدقة لقالب ووردبريس قوي ومخصص.", tag_restaurant: "موقع سلسلة مطاعم. تطوير منيو تفاعلي سريع وعرض ذكي لفروع المطعم.",
            tag_logistics: "منصة شحن ولوجستيات. ربط أنظمة تتبع معقدة وحساب تلقائي لأسعار الشحن.", tag_shopify: "متجر شوبيفاي. تحسين معدلات التحويل باستخدام أكواد Liquid مخصصة وبناء مسارات بيع ذكية.", tag_ecommerce_2: "منصة تجارة إلكترونية. بناء متجر موثوق وقابل للتطوير باستخدام إمكانيات ووكومرس المتقدمة.", tag_shopify_2: "متجر شوبيفاي. إنشاء تكاملات مخصصة وتحسين تجربة التسوق لتحقيق أقصى قدر من التحويلات.", tag_trading: "منصة تداول واستثمار. تأمين قواعد البيانات وبناء لوحات تحكم مخصصة للمستخدمين.",
            btn_show_more: "باقي المشاريع", btn_show_less: "إخفاء المشاريع", btn_open_tab: "فتح الموقع", msg_iframe_sec: "بسبب سياسات الأمان الخاصة ببعض المواقع، قد لا يظهر الموقع هنا. اضغط (فتح الموقع) بالأعلى.",
            contact_badge: "تواصل معي", contact_title: "لنقم ببناء شيء عظيم.", contact_desc: "متاح لفرص العمل الحر، وعقود العمل. تواصل معي ودعنا نناقش مشروعك القادم.",
            btn_email: "راسلني عبر الإيميل", btn_whatsapp: "واتساب", 
            form_name: "الاسم الكامل", form_email: "البريد الإلكتروني", form_phone: "رقم الهاتف", form_message: "تفاصيل المشروع", form_send: "إرسال الطلب",
            form_placeholder_name: "اكتب اسمك هنا...", form_placeholder_email: "name@example.com", form_placeholder_phone: "+20 123 456 7890", form_placeholder_msg: "حدثني عن مشروعك القادم بالتفصيل...",
            form_service: "الخدمة المطلوبة", form_service_opt0: "اختر خدمة...", form_service_opt1: "موقع شركة", form_service_opt2: "متجر إلكتروني", form_service_opt3: "تطبيق ويب", form_service_opt4: "لوحة تحكم", form_service_opt5: "تصميم UI/UX", form_service_opt6: "تطوير API", form_service_opt7: "صيانة موقع", form_service_opt8: "أخرى",
            form_budget: "الميزانية", form_budget_opt0: "اختر الميزانية...", form_budget_opt1: "أقل من $200", form_budget_opt2: "$200–$600", form_budget_opt3: "$600–$1,500", form_budget_opt4: "أكثر من $1,500",
            modal_success_title: "🎉 تم إرسال طلب المشروع بنجاح", modal_success_p1: "شكراً لتواصلك! تم استلام طلب مشروعك بنجاح. سأقوم بمراجعة تفاصيل المشروع والتواصل معك في أقرب وقت ممكن.", modal_success_p2: "وقت الرد المتوقع: خلال 24 ساعة.", modal_btn_close: "إغلاق", modal_btn_another: "إرسال طلب آخر", msg_error: "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى."
        },
        en: {
            nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_cv: "My CV", nav_contact: "Contact", nav_hire: "Hire Me",
            hero_badge: "Front-End Developer", hero_title_1: "Simplifying technology. Creating innovation.",
            hero_desc: "I'm Mohamed — a developer specializing in custom Front-End interfaces and WordPress solutions. I turn Figma designs into fast, secure, and user-friendly web experiences.",
            btn_projects: "View Projects", btn_view_cv: "View CV",
            stat_1_num: "200+", stat_1_text: "UX Design", stat_2_num: "15+", stat_2_text: "Projects", stat_3_num: "10+", stat_3_text: "Technologies",
            cv_page_title: "My CV.", cv_title_text: "CV", cv_preview: "Preview", cv_download: "Download",
            about_badge: "About & Experience", about_title: "A developer focused on clean, scalable solutions.", 
            about_desc: "I am a specialized Front-End & WordPress Developer with a strong foundation in custom development, technical SEO, and performance optimization. I don't just use templates; I build tailored solutions based on exact project needs.",
            exp_1_title: "Founder / Owner", exp_1_desc: "Managing digital projects, developing the eCommerce platform, optimizing the WooCommerce shopping experience, and improving online sales through conversion rate optimization.",
            exp_2_title: "Front-End / WP Developer", exp_2_desc: "Built professional websites, integrated APIs, and developed custom solutions. Focused on Core Web Vitals, site speed, and troubleshooting complex WordPress issues.",
            skills_badge: "Skills & Arsenal", skills_title: "Tools I use.",
            skill_cat_1: "Core Tech", skill_cat_2: "WP Development", skill_cat_3: "Optimization", skill_cat_4: "Design",
            skill_1: "Custom Plugins", skill_2: "Theme Dev", skill_3: "Technical SEO", skill_4: "Web Vitals", skill_5: "Speed Tuning", skill_6: "Security", skill_7: "UI/UX", skill_8: "Responsive", skill_9: "Conversion Opt.",
            cap_title: "What I Can Do For Your Business", cap_1_title: "Performance & Speed", cap_1_desc: "Improve website loading speed and ensure compliance with Google Core Web Vitals for better ranking.", cap_2_title: "eCommerce Mastery", cap_2_desc: "Build and optimize WooCommerce shopping experiences to increase conversion rates and sales.", cap_3_title: "Modern Interfaces", cap_3_desc: "Translate Figma designs into pixel-perfect, responsive, and intuitive user interfaces.",
            proj_badge: "Projects Portfolio", proj_title: "Selected work.", btn_preview: "View Site",
            tag_skankx: "Modern web application focusing on high performance and clean UI/UX.", tag_ecommerce: "Modern eCommerce & Corporate Platform. Focusing on seamless user experience and fast loading speeds.", tag_corporate: "Corporate & Agency Website. Tailored UI/UX design converted into a pixel-perfect robust WordPress theme.", tag_restaurant: "Restaurant Chain Portal. Developed a high-performance interactive menu and locations showcase.", tag_logistics: "Logistics & Courier Portal. Integrated complex tracking systems and shipping rate calculations.", tag_shopify: "Shopify eCommerce Store. Optimized conversion rates with customized liquid templates and sales funnels.", tag_ecommerce_2: "eCommerce Platform. Built a reliable and scalable store using advanced WooCommerce functionalities.", tag_shopify_2: "Shopify Store. Created custom integrations and localized the shopping experience for maximum conversions.", tag_trading: "Trading & Investment Platform. Secured data handling and built custom dashboards for users.",
            btn_show_more: "Show More Projects", btn_show_less: "Show Less", btn_open_tab: "Open Web", msg_iframe_sec: "If the site doesn't load due to security policies, click 'Open Web' above.",
            contact_badge: "Contact", contact_title: "Let's build something great.", contact_desc: "Open to freelance opportunities, contract work, and full-time positions. Reach out and let's discuss your next project.",
            btn_email: "Email Me", btn_whatsapp: "WhatsApp", 
            form_name: "Full Name", form_email: "Email Address", form_phone: "Phone Number", form_message: "Project Details", form_send: "Send Request",
            form_placeholder_name: "John Doe", form_placeholder_email: "john@example.com", form_placeholder_phone: "+1 234 567 8900", form_placeholder_msg: "Tell me about your project...",
            form_service: "Service Needed", form_service_opt0: "Select a service...", form_service_opt1: "Business Website", form_service_opt2: "E-commerce Store", form_service_opt3: "Web Application", form_service_opt4: "Dashboard", form_service_opt5: "UI/UX Design", form_service_opt6: "API Development", form_service_opt7: "Website Maintenance", form_service_opt8: "Other",
            form_budget: "Budget", form_budget_opt0: "Select your budget...", form_budget_opt1: "Under $200", form_budget_opt2: "$200–$600", form_budget_opt3: "$600–$1,500", form_budget_opt4: "Over $1,500",
            modal_success_title: "🎉 Project Request Sent Successfully", modal_success_p1: "Thank you for reaching out! Your project request has been received successfully. I will review your project details and contact you as soon as possible.", modal_success_p2: "Expected response time: Within 24 hours.", modal_btn_close: "Close", modal_btn_another: "Send Another Request", msg_error: "Error sending message. Please try again."
        }
    };

    let currentLang = 'ar';
    let isExpanded = false;

    const langToggleBtns = [document.getElementById('lang-toggle'), document.getElementById('lang-toggle-mobile')];
    const toggleBtn = document.getElementById('toggle-more-projects');
    const hiddenProjects = document.querySelectorAll('.project-hidden');
    const toggleIcon = document.getElementById('toggle-icon');
    const scrollProgress = document.getElementById('scroll-progress');
    const mobileMenu = document.getElementById('mobile-menu');
    const backToTopBtn = document.getElementById('back-to-top');

    function updateShowMoreText() {
        if (!toggleBtn) return;
        toggleBtn.querySelector('span').innerHTML = translations[currentLang][isExpanded ? 'btn_show_less' : 'btn_show_more'];
        if(toggleIcon) toggleIcon.className = isExpanded ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down";
    }

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        document.documentElement.classList.toggle('ltr', lang === 'en');
        document.documentElement.classList.toggle('rtl', lang === 'ar');
        
        langToggleBtns.forEach(btn => { if(btn) btn.innerText = lang === 'ar' ? 'English' : 'عربي'; });
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) el.innerHTML = translations[lang][key];
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
        });
        updateShowMoreText();
    }

    setLanguage(currentLang);
    langToggleBtns.forEach(btn => { if(btn) btn.addEventListener('click', () => setLanguage(currentLang === 'ar' ? 'en' : 'ar')) });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }

    // Scroll Reveal (Fail-Safe)
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('reveal-init'); // Elements only hide if JS successfully runs
        revealObserver.observe(el);
    });

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            hiddenProjects.forEach(proj => {
                if(isExpanded) {
                    proj.classList.remove('hidden');
                    setTimeout(() => {
                        proj.classList.remove('translate-y-8');
                        proj.classList.add('transition-all', 'duration-500'); // Smooth reveal for Show More
                    }, 20);
                } else {
                    proj.classList.add('translate-y-8');
                    setTimeout(() => proj.classList.add('hidden'), 300);
                }
            });
            updateShowMoreText();
        });
    }

    const typeWriterElement = document.getElementById('typewriter-text');
    const typeWriterStrings = ["Front-End Developer", "WordPress Developer", "UI/UX Designer"];
    let isDeleting = false, currentStringIndex = 0, currentCharIndex = 0;

    function type() {
        if(!typeWriterElement) return;
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

    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                if(scrollProgress) {
                    const winScroll = document.documentElement.scrollTop;
                    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    scrollProgress.style.transform = `scaleX(${winScroll / height})`;
                }
                if(backToTopBtn) {
                    if (document.documentElement.scrollTop > 500) backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-5');
                    else backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-5');
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
