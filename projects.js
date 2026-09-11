// بيانات جميع المشاريع (يمكنك الإضافة، الحذف، أو التعديل عليها بسهولة من هنا)
const projectsData = [
    {
        titleAr: "LIZTR ESSENS – متجر ملابس",
        titleEn: "LIZTR ESSENS – Clothing Store",
        descAr: "متجر إلكتروني لبراند ملابس LIZTR ESSENS، يقدم تجربة تسوق عصرية ومميزة تعكس هوية العلامة التجارية.",
        descEn: "An online store for the clothing brand LIZTR ESSENS, offering a modern and unique shopping experience that reflects the brand identity.",
        img: "https://res.cloudinary.com/dyhlzplzb/image/upload/v1789125545/LIZTR_ESSENS_20260911_141637_0000_e0z3as.png",
        tagsAr: ["متجر إلكتروني", "أزياء"],
        tagsEn: ["Online Store", "Fashion"],
        link: "https://elnenx.github.io/09/"
    },
    {
        titleAr: "سكنك – منصة عقارية",
        titleEn: "Skank – Real Estate Platform",
        descAr: "منصة عقارية لعرض الوحدات والعقارات بشكل منظم، مع تفاصيل وصور ومعلومات كل عقار.",
        descEn: "A real estate platform to display units and properties in an organized manner, with details, photos, and information.",
        img: "https://res.cloudinary.com/dyhlzplzb/image/upload/v1786725994/20260814_194539_0000_n14f8u.png",
        tagsAr: ["منصة عقارية", "ويب"],
        tagsEn: ["Real Estate", "Web"],
        link: "https://skank-x.github.io/-/"
    },
    {
        titleAr: "Dental Clinic – عيادة أسنان",
        titleEn: "Dental Clinic",
        descAr: "موقع احترافي لعيادة أسنان بتصميم طبي عصري، يعرض الخدمات ويسهّل التواصل.",
        descEn: "A professional dental clinic website with a modern medical design, showcasing services and facilitating communication.",
        img: "https://res.cloudinary.com/dyhlzplzb/image/upload/v1786729694/20260814_202735_0000_oejijd.png",
        tagsAr: ["تصميم طبي", "عيادات"],
        tagsEn: ["Medical Design", "Clinics"],
        link: "https://elnenx.github.io/Dental-clinic-/"
    },
    {
        titleAr: "WDNY Courier – شركة شحن",
        titleEn: "WDNY Courier",
        descAr: "موقع احترافي لشركة متخصصة في خدمات الشحن والتوصيل والحلول اللوجستية.",
        descEn: "A professional website for a company specializing in shipping, delivery, and logistics solutions.",
        img: "https://res.cloudinary.com/dyhlzplzb/image/upload/v1786729691/20260814_203028_0000_cw09aj.png",
        tagsAr: ["لوجستيات", "توصيل"],
        tagsEn: ["Logistics", "Delivery"],
        link: "https://wdenycourier.com/"
    },
    {
        titleAr: "Hectar Modern – شركة مقاولات",
        titleEn: "Hectar Modern",
        descAr: "موقع لشركة مقاولات يعرض خدمات البناء والمشاريع التي تقدمها بطريقة احترافية.",
        descEn: "A website for a contracting company displaying construction services and projects in a professional manner.",
        img: "https://res.cloudinary.com/dyhlzplzb/image/upload/v1786729699/20260814_203231_0000_phwzlo.png",
        tagsAr: ["مقاولات", "ويب"],
        tagsEn: ["Contracting", "Web"],
        link: "https://www.hectarmodern.com/ar"
    },
    {
        titleAr: "AD FAZ – تجارة إلكترونية",
        titleEn: "AD FAZ – E-commerce",
        descAr: "منصة رقمية تقدم حلولًا وخدمات لتطوير وإدارة الأعمال الإلكترونية.",
        descEn: "A digital platform providing solutions and services for developing and managing e-businesses.",
        img: "https://res.cloudinary.com/dyhlzplzb/image/upload/v1786729690/2_20260814_202453_0001_svxwfi.png",
        tagsAr: ["تجارة إلكترونية"],
        tagsEn: ["E-commerce"],
        link: "https://adfaz.sa/"
    },
    {
        titleAr: "Brand – متجر ملابس",
        titleEn: "Brand – Clothing Store",
        descAr: "متجر إلكتروني لبراند ملابس، يركز على تجربة تسوق سهلة ومريحة للمستخدمين.",
        descEn: "An online store for a clothing brand, focusing on an easy and comfortable shopping experience for users.",
        img: "https://res.cloudinary.com/dyhlzplzb/image/upload/v1786729694/Untitled_design_20260814_202500_0000_jmirqi.png",
        tagsAr: ["متجر إلكتروني"],
        tagsEn: ["Online Store"],
        link: "https://elnenx.github.io/Brand-/"
    },
    {
        titleAr: "Hustler Brand – متجر",
        titleEn: "Hustler Brand",
        descAr: "متجر إلكتروني لبراند ملابس مصري، لطلب المنتجات بسهولة وبشكل عصري.",
        descEn: "An online store for an Egyptian clothing brand to order products easily and fashionably.",
        img: "https://res.cloudinary.com/dyhlzplzb/image/upload/v1786729700/Untitled_design_20260814_203717_0000_slsrve.png",
        tagsAr: ["متجر مصري"],
        tagsEn: ["Egyptian Store"],
        link: "https://hustlerbrand-egy.myshopify.com/"
    },
    {
        titleAr: "El Dahan – مطعم",
        titleEn: "El Dahan – Restaurant",
        descAr: "موقع إلكتروني لمطعم الدهان لعرض المنيو والفروع لتجربة طلب سلسة وسريعة.",
        descEn: "A website for El Dahan restaurant showing the menu and branches for a seamless and fast ordering experience.",
        img: "https://res.cloudinary.com/dyhlzplzb/image/upload/v1786729695/20260814_204020_0000_gkihtm.png",
        tagsAr: ["مطعم"],
        tagsEn: ["Restaurant"],
        link: "https://www.eldahan.com/"
    },
    {
        titleAr: "TFT VIP TRADE – تداول",
        titleEn: "TFT VIP TRADE – Trading",
        descAr: "منصة متخصصة في الأسواق المالية، تشمل التعليم والتوصيات والاشتراكات.",
        descEn: "A platform specialized in financial markets, including education, recommendations, and subscriptions.",
        img: "https://res.cloudinary.com/dyhlzplzb/image/upload/v1786729694/20260814_204424_0000_hsjqd2.png",
        tagsAr: ["تداول"],
        tagsEn: ["Trading"],
        link: "https://tftviptrade.com/"
    },
    {
        titleAr: "SUTRA – أزياء رجالي",
        titleEn: "SUTRA – Men's Fashion",
        descAr: "متجر إلكتروني متخصص في الأزياء الرجالية مع تجربة تسوق متكاملة وعصرية.",
        descEn: "An online store specializing in men's fashion with an integrated and modern shopping experience.",
        img: "https://res.cloudinary.com/dyhlzplzb/image/upload/v1786729697/Untitled_design_20260814_204622_0000_iyacj0.png",
        tagsAr: ["أزياء رجالي"],
        tagsEn: ["Men's Fashion"],
        link: "https://sutrastores.com/"
    }
];

let visibleProjectsCount = 3; // عدد المشاريع المرئية في البداية

// دالة لتوليد كروت المشاريع باللغة المناسبة
function renderProjects(isEnglish = false) {
    const container = document.getElementById('projects-list');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const counterText = document.getElementById('projects-counter');
    const loadMoreText = document.getElementById('load-more-text');

    if (!container) return;
    
    // إفراغ الحاوية قبل إعادة البناء
    container.innerHTML = ''; 

    projectsData.forEach((project, index) => {
        const isHiddenClass = index >= visibleProjectsCount ? 'hidden hidden-project' : '';
        
        const title = isEnglish ? project.titleEn : project.titleAr;
        const desc = isEnglish ? project.descEn : project.descAr;
        const tags = isEnglish ? project.tagsEn : project.tagsAr;
        const exploreText = isEnglish ? 'Explore Project' : 'استكشف المشروع';

        let tagsHtml = '';
        tags.forEach(tag => {
            tagsHtml += `<span class="bg-primaryLight dark:bg-primary/20 px-3 py-1.5 rounded-lg">${tag}</span>`;
        });

        const html = `
            <div class="${isHiddenClass} bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none flex flex-col group rtl:text-right ltr:text-left transition-colors reveal active">
                <div class="h-48 w-full relative overflow-hidden border-b border-slate-100 dark:border-slate-700">
                    <img src="${project.img}" alt="${title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-[1.35rem] font-black text-dark dark:text-white mb-2">${title}</h3>
                    <p class="text-slate-500 dark:text-slate-400 text-[15px] leading-[1.8] mb-5 font-medium flex-grow">${desc}</p>
                    
                    <div class="flex flex-wrap gap-2 justify-start text-[13px] font-bold text-primary dark:text-blue-400 mb-5">
                        ${tagsHtml}
                    </div>
                    <button onclick="openProjectModal('${project.link}')" class="w-full flex items-center justify-center gap-2 bg-surface dark:bg-slate-700 text-primary dark:text-blue-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors font-bold py-3.5 rounded-xl text-[15px]">
                        <span>${exploreText}</span>
                        <i class="ph ph-arrow-up-left text-lg rtl:rotate-0 ltr:rotate-90"></i>
                    </button>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });

    // تحديث الأرقام والنصوص في زر "عرض المزيد" والعداد
    const total = projectsData.length;
    const hiddenCount = total - visibleProjectsCount;
    
    if (visibleProjectsCount >= total) {
        if(loadMoreBtn) loadMoreBtn.style.display = 'none';
    } else {
        if(loadMoreBtn) {
            loadMoreBtn.style.display = 'flex';
            if(loadMoreText) {
                loadMoreText.innerText = isEnglish ? `Load More Projects (${hiddenCount})` : `عرض باقي المشاريع (${hiddenCount})`;
            }
        }
    }
    
    if(counterText) {
        const visible = Math.min(visibleProjectsCount, total);
        counterText.innerText = isEnglish ? `Showing ${visible} of ${total} projects` : `يتم عرض ${visible} من أصل ${total} مشاريع`;
    }
}

// دالة لمعالجة النقر على زر عرض المزيد
function handleLoadMore() {
    visibleProjectsCount = projectsData.length; // جعل جميع المشاريع مرئية
    
    // إظهار المشاريع المخفية بتأثير حركي بدلاً من إعادة توليدها (لتجربة مستخدم أفضل)
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    hiddenProjects.forEach(project => {
        project.classList.remove('hidden', 'hidden-project');
        project.style.opacity = '0';
        project.style.transform = 'translateY(10px)';
        setTimeout(() => {
            project.style.transition = 'all 0.5s ease-out';
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
        }, 50);
    });
    
    // إخفاء الزر وتحديث العداد
    const loadMoreBtn = document.getElementById('load-more-btn');
    const counterText = document.getElementById('projects-counter');
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    
    if(counterText) {
        counterText.innerText = window.isEn ? `Showing ${projectsData.length} of ${projectsData.length} projects` : `يتم عرض ${projectsData.length} من أصل ${projectsData.length} مشاريع`;
    }
      }
