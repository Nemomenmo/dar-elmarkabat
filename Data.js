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
            whatsapp: "01022006906"
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
            whatsapp: "01032177049"
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
            whatsapp: "201070322434"
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
            whatsapp: "01022006906"
        },
        locationUrl: null
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