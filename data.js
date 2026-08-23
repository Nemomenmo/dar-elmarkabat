const facilitiesData = [
    {
        id: "hotel",
        gridSize: "large",
        category: "إقامة",
        name: "فندق شاريـوت",
        nameEn: "Chariot Hotel",
        shortDesc: "راحة وجودة في قلب دار المركبات",
        fullDesc: "وجهتك الآمنة والمريحة. مصمم ليقدم لك ولعائلتك تجربة ضيافة استثنائية، مع غرف مجهزة بالكامل لضمان راحتك طوال فترة إقامتك داخل دار المركبات.",
        heroImg: "./assets/hotel/hero.jpg",
        galleryHero: "./assets/hotel/1.jpg",
        galleryThumbs: ["./assets/hotel/2.jpg", "./assets/hotel/3.jpg"],
        menu: [], 
        amenities: [
            { icon: "fas fa-concierge-bell", text: "استقبال 24 ساعة" },
            { icon: "fas fa-wifi", text: "إنترنت Wi-Fi" },
            { icon: "fas fa-snowflake", text: "تكييف" },
            { icon: "fas fa-car", text: "موقف سيارات" },
            { icon: "fas fa-utensils", text: "خدمة الغرف والمطعم" },
            { icon: "fas fa-ring", text: "غرف للعرسان وتجهيز العرائس" }
        ],
        contact: {
            phone: "01022006906",
            whatsapp: "+201022006906"
        },
        locationUrl: "https://maps.app.goo.gl/cQcMkU4UgcAsrKpr9?g_st=ac"
    },
    {
        id: "sweet-palace",
        gridSize: "large",
        category: "حلويات ومقهى",
        name: "Sweet Palace",
        nameEn: "",
        shortDesc: "أرقى الحلويات والمشروبات",
        fullDesc: "المكان الأمثل لتذوق أشهى الحلويات الشرقية والغربية. سواء كنت تبحث عن فنجان قهوة دافئ، أو تخطط لطلب تورتة زفافك، نحن هنا لنصنع لحظاتك السعيدة.",
        heroImg: "./assets/sweet-palace/hero.jpg",
        galleryHero: "./assets/sweet-palace/1.jpg",
        galleryThumbs: ["./assets/sweet-palace/2.jpg", "./assets/sweet-palace/3.jpg"],
        menu: ["./assets/sweet-palace/menu/1.jpg", "./assets/sweet-palace/menu/2.jpg"],
        amenities: [
            { icon: "fas fa-birthday-cake", text: "حلويات وتورتات" },
            { icon: "fas fa-mug-hot", text: "مشروبات ساخنة وباردة" },
            { icon: "fas fa-bread-slice", text: "مخبوزات طازجة" },
            { icon: "fas fa-glass-cheers", text: "تجهيز المناسبات والزفاف" },
            { icon: "fas fa-clock", text: "11:00 صباحاً — 11:00 مساءً" }
        ],
        contact: {
            phone: "01032177049",
            whatsapp: "+201032177049"
        },
        locationUrl: null
    },
   {
        id: "golden-restaurant",
        gridSize: "medium",
        category: "طعام فاخر",
        name: "المطعم الذهبي",
        nameEn: "Golden Restaurant",
        shortDesc: "أشهى المأكولات وتجربة طعام راقية (VIP)",
        fullDesc: "استمتع بتجربة طعام استثنائية في المطعم الذهبي، حيث نقدم قائمة متنوعة ترضي جميع الأذواق. بدءاً من الإفطار الشهي، مروراً بالبيتزا والكريبات، وصولاً إلى المشويات والمأكولات الشرقية والغربية والحلويات، كل ذلك في أجواء راقية تناسب العائلات وكبار الزوار (VIP).",
        heroImg: "./assets/golden-restaurant/hero.jpg",
        galleryHero: "./assets/golden-restaurant/1.jpg",
        galleryThumbs: ["./assets/golden-restaurant/2.jpg", "./assets/golden-restaurant/3.jpg"],
        menu: [
            "./assets/golden-restaurant/menu/1.jpg",
            "./assets/golden-restaurant/menu/2.jpg",
            "./assets/golden-restaurant/menu/3.jpg",
            "./assets/golden-restaurant/menu/4.jpg",
            "./assets/golden-restaurant/menu/5.jpg",
            "./assets/golden-restaurant/menu/6.jpg",
            "./assets/golden-restaurant/menu/7.jpg",
            "./assets/golden-restaurant/menu/8.jpg",
            "./assets/golden-restaurant/menu/9.jpg"
        ],
        amenities: [
            { icon: "fas fa-pizza-slice", text: "بيتزا، كريبات، ومأكولات شرقية وغربية" },
            { icon: "fas fa-fire", text: "مشويات طازجة وإفطار مميز" },
            { icon: "fas fa-ice-cream", text: "تشكيلة من الحلويات" },
            { icon: "fas fa-crown", text: "قاعات طعام راقية (VIP Dining)" },
            { icon: "fas fa-clock", text: "9:00 صباحاً — 10:00 مساءً" }
        ],
        contact: {
            phone: "0223428242",
            whatsapp: "+201070322434"
        },
        locationUrl: null
    },
    {
        id: "chalets",
        gridSize: "medium",
        category: "استجمام",
        name: "الشاليهات",
        nameEn: "Chalets",
        shortDesc: "ملاذ عائلي هادئ للاستجمام",
        fullDesc: "وجهتك المثالية لقضاء عطلة عائلية ممتعة في أجواء من الهدوء التام. وتوفر لك ولعائلتك مساحة راقية للراحة والابتعاد عن صخب الحياة، مع تصميم يضمن راحتكم المطلقة.",
        heroImg: "./assets/chalets/hero.jpg",
        galleryHero: "./assets/chalets/1.jpg",
        galleryThumbs: ["./assets/chalets/2.jpg", "./assets/chalets/3.jpg"],
        menu: [], 
        amenities: [
            { icon: "fas fa-users", text: "شاليهات عائلية (تتسع من 4 إلى 6 أفراد)" },
            { icon: "fas fa-swimming-pool", text: "إطلالة مباشرة على المسبح" },
            { icon: "fas fa-snowflake", text: "مكيفة بالكامل" },
            { icon: "fas fa-tv", text: "شاشات عرض LED" },
            { icon: "fas fa-bath", text: "حمام خاص مجهز (بانيو)" },
            { icon: "fas fa-cocktail", text: "ميني بار" }
        ],
        contact: {
            phone: "01022006906",
            whatsapp: "+201022006906"
        },
        locationUrl: null
    },
    {
        id: "swimming-pool",
        gridSize: "medium",
        category: "ترفيه",
        name: "حمام السباحة",
        nameEn: "Swimming Pool",
        shortDesc: "أوقات ممتعة ومنعشة لجميع أفراد الأسرة",
        fullDesc: "ملاذك المثالي للترفيه والانتعاش. يتميز حمام السباحة بتصميم يناسب الجميع مع أعماق متدرجة تبدأ من 80 سم وحتى 4 أمتار. تذكرة الفترة الحرة موحدة وتمنحك ميزة الدخول إلى الدار والاستمتاع بالمسبح طوال الفترة المقررة لتجربة عائلية متكاملة.",
        heroImg: "./assets/swimming-pool/hero.jpg",
        galleryHero: "./assets/swimming-pool/1.jpg",
        galleryThumbs: ["./assets/swimming-pool/2.jpg", "./assets/swimming-pool/3.jpg"],
        menu: [], 
        amenities: [
            { icon: "fas fa-clock", text: "الفترة الحرة: من 10 صباحاً حتى 4 عصراً" },
            { icon: "fas fa-ticket-alt", text: "تذكرة موحدة (تشمل دخول الدار ونزول المسبح)" },
            { icon: "fas fa-money-bill-wave", text: "الأيام العادية: 170ج (فوق 6 سنوات) | 110ج (تحت 6 سنوات)" },
            { icon: "fas fa-calendar-star", text: "العطلات والأعياد: 190ج (فوق 6 سنوات) | 115ج (تحت 6 سنوات)" },
            { icon: "fas fa-water", text: "أعماق متدرجة تناسب الجميع (من 80 سم إلى 4 أمتار)" }
        ],
        contact: {
            phone: "0223428242",
            whatsapp: "+201070322434"
        },
        locationUrl: null
    },
    {
        id: "events-office",
        gridSize: "large",
        category: "مناسبات",
        name: "مكتب الحفلات والقاعات",
        nameEn: "Wedding & Event Halls",
        shortDesc: "قاعات فاخرة لتخليد أجمل ذكرياتك",
        fullDesc: "نصنع لك لحظات لا تُنسى في أرقى القاعات مع باقات متكاملة:<br><br><strong>باقة الماسة (Open Air) ونفرتاري (مغلقة ومكيفة):</strong><br>• السعة: 100 إلى 225 فرد (بـ 12,000 جنيه).<br>• تشمل: تصوير فيديو، كوشة، دانس فلور، دي جي، شاشات عرض، ليزر، وشو شربات.<br><br><strong>باقات قاعة سفن سكاي 7 Sky الأسطورية:</strong><br>• 200 فرد (24,000ج) | 300 فرد (26,000ج) | 400 فرد (29,000ج) | 500 فرد (32,000ج) | 600 فرد (35,000ج).<br>• تشمل: سويت هدية لتجهيز العروسة، فيديو 2 كاميرا وميكسر، شاشة بانوراما، ديكورات سيلنج، وسنتر بيس.<br><br><strong>إضافات اختيارية:</strong> فوتوسيشن، زفة دمياطي، ميك أب ارتيست، تورتة، ماكينة سحاب، وفاير شو.<br><em>للتواصل المباشر مع قاعة سفن سكاي: 01153045141 - 01096679676</em>",
        heroImg: "./assets/events/hero.jpg",
        galleryHero: "./assets/events/1.jpg",
        galleryThumbs: ["./assets/events/2.jpg", "./assets/events/3.jpg"],
        
        /* THE NEW SMART ALBUM */
        menuBtnText: "ألبوم صور القاعات",
        menuBtnIcon: "fas fa-images",
        menu: [
            "./assets/events/album/1.jpg",
            "./assets/events/album/2.jpg",
            "./assets/events/album/3.jpg",
            "./assets/events/album/4.jpg",
            "./assets/events/album/5.jpg",
            "./assets/events/album/6.jpg",
            "./assets/events/album/7.jpg",
            "./assets/events/album/8.jpg",
            "./assets/events/album/9.jpg"
        ],
        
        amenities: [
            { icon: "fas fa-ring", text: "قاعة سفن سكاي 7 Sky (تتسع حتى 700 فرد)" },
            { icon: "fas fa-gem", text: "قاعتي الماسة ونفرتاري (تتسع حتى 225 فرد)" },
            { icon: "fas fa-camera", text: "باقات تصوير وفيديو متكاملة" },
            { icon: "fas fa-magic", text: "إضافات مميزة: فاير شو، سحاب، وزفة دمياطي" },
            { icon: "fas fa-star", text: "سويت مجاني لتجهيز العروسة (باقة سفن سكاي)" }
        ],
        contact: {
            phone: "01103307919",
            whatsapp: "+201103307919"
        },
        locationUrl: null
    },
    {
        id: "sports",
        gridSize: "small",
        category: "رياضة",
        name: "الأنشطة",
        heroImg: "./assets/sports/hero.jpg"
    },
    {
        id: "photohub",
        gridSize: "small",
        category: "خدمات",
        name: "Photo Hub",
        heroImg: "./assets/photohub/hero.jpg"
    },
    {
        id: "market",
        gridSize: "small",
        category: "تسوق",
        name: "الماركت",
        heroImg: "./assets/market/hero.jpg"
    }
];