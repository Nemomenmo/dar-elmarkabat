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
            phone: "+201022006906",
            whatsapp: "201022006906"
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
            whatsapp: "201032177049"
        },
        locationUrl: null
    },
    {
        id: "restaurants",
        gridSize: "medium",
        category: "الطعام",
        name: "المطاعم والكافيتيريات",
        heroImg: "./assets/restaurants/hero.jpg"
    },
    {
        id: "chalets",
        gridSize: "medium",
        category: "استجمام",
        name: "الشاليهات",
        heroImg: "./assets/chalets/hero.jpg"
    },
    {
        id: "swimming-pool",
        gridSize: "medium",
        category: "ترفيه",
        name: "حمام السباحة",
        heroImg: "./assets/swimming-pool/hero.jpg"
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
