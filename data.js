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
        
        menuBtnText: "ألبوم صور الفندق",
        menuBtnIcon: "fas fa-images",
        menu: [
            "./assets/hotel/album/1.jpg",
            "./assets/hotel/album/2.jpg",
            "./assets/hotel/album/3.jpg",
            "./assets/hotel/album/4.jpg"
        ], 

        instructions: [
            "إثبات شخصية لكل الأفراد (البطاقة أو شهادة الميلاد).",
            "قسيمة الزواج في حالة عدم وجود اسم الزوج في بطاقة الزوجة.",
            "في حالة وجود والدة الزوجة، يشترط وجود إثبات صلة القرابة (اسم الأب في البطاقة أو شهادة ميلاد الزوجة).",
            "500 جنيه قيمة التأمين يتم دفعها وقت التسكين وتسترد وقت المغادرة."
        ],

        pricing: [
            {
                id: "civilians",
                title: "المدنيين",
                tiers: [
                    { name: "غرفة مزدوجة (2 فرد)", normal: "1250", holiday: "1350" },
                    { name: "جناح عائلي (4 فرد)", normal: "1600", holiday: "1700" }
                ],
                notes: [
                    "السعر شامل الإفطار بالمطعم الذهبي.",
                    "مواعيد التسكين: 12:00 ظهراً | مواعيد المغادرة: 11:00 صباحاً.",
                    "تأمين 500ج يتم الدفع وقت التسكين والاسترداد وقت المغادرة.",
                    "مواعيد حمام السباحة من 10:00 صباحاً حتى 4:00 مساءاً.",
                    "سعر الفرد لحمام السباحة 50 جنيه."
                ]
            },
            {
                id: "markabat",
                title: "المركبات",
                tiers: [
                    { name: "غرفة مزدوجة (2 فرد)", normal: "500", holiday: "500" },
                    { name: "جناح عائلي (4 فرد)", normal: "625", holiday: "625" }
                ],
                notes: [
                    "الأسعار لعضوية دار ضباط المركبات المجددة للعام الحالي.",
                    "مواعيد التسكين: 12:00 ظهراً | مواعيد المغادرة: 11:00 صباحاً.",
                    "تأمين 500ج يتم الدفع وقت التسكين والاسترداد وقت المغادرة.",
                    "مواعيد حمام السباحة من 10:00 صباحاً حتى 4:00 مساءاً (50 جنيه للفرد)."
                ]
            },
            {
                id: "police",
                title: "القضاء والشرطة",
                tiers: [
                    { name: "غرفة مزدوجة (2 فرد)", normal: "1200", holiday: "1300" },
                    { name: "جناح عائلي (4 فرد)", normal: "1550", holiday: "1650" }
                ],
                notes: [
                    "السعر شامل الإفطار بالمطعم الذهبي.",
                    "مواعيد التسكين: 12:00 ظهراً | مواعيد المغادرة: 11:00 صباحاً.",
                    "تأمين 500ج يتم الدفع وقت التسكين والاسترداد وقت المغادرة.",
                    "مواعيد حمام السباحة من 10:00 صباحاً حتى 4:00 مساءاً.",
                    "سعر الفرد لحمام السباحة 50 جنيه."
                ]
            },
            {
                id: "military",
                title: "القوات المسلحة",
                tiers: [
                    { name: "غرفة مزدوجة (2 فرد)", normal: "1050", holiday: "1150" },
                    { name: "جناح عائلي (4 فرد)", normal: "1500", holiday: "1600" }
                ],
                notes: [
                    "السعر شامل الإفطار بالمطعم الذهبي.",
                    "مواعيد التسكين: 12:00 ظهراً | مواعيد المغادرة: 11:00 صباحاً.",
                    "تأمين 500ج يتم الدفع وقت التسكين والاسترداد وقت المغادرة.",
                    "مواعيد حمام السباحة من 10:00 صباحاً حتى 4:00 مساءاً.",
                    "سعر الفرد لحمام السباحة 50 جنيه."
                ]
            }
        ],

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
            whatsapp: "201022006906"
        },
        locationUrl: "https://maps.app.goo.gl/cQcMkU4UgcAsrKpr9?g_st=ac"
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
        
        menuBtnText: "ألبوم صور الشاليهات",
        menuBtnIcon: "fas fa-images",
        menu: [
            "./assets/chalets/album/1.jpg",
            "./assets/chalets/album/2.jpg",
            "./assets/chalets/album/3.jpg"
        ], 

        instructions: [
            "إثبات شخصية لكل الأفراد (البطاقة أو شهادة الميلاد).",
            "قسيمة الزواج في حالة عدم وجود اسم الزوج في بطاقة الزوجة.",
            "في حالة وجود والدة الزوجة، يشترط وجود إثبات صلة القرابة (اسم الأب في البطاقة أو شهادة ميلاد الزوجة).",
            "500 جنيه قيمة التأمين يتم دفعها وقت التسكين وتسترد وقت المغادرة."
        ],

        pricing: [
            {
                id: "civilians",
                title: "المدنيين",
                tiers: [
                    { name: "شاليه عائلي (4 أفراد)", normal: "1100", holiday: "1200" },
                    { name: "شاليه عائلي (6 أفراد)", normal: "1350", holiday: "1400" }
                ],
                notes: [
                    "Dayuse Family: الشاليه لأسرة واحدة فقط (زوج وزوجة وأولادهم).",
                    "غير مسموح إلا بإضافة فرد واحد مرافق فقط لكل شاليه.",
                    "إضافة الفرد 200ج.",
                    "مواعيد التسكين 10:00 صباحاً | مواعيد المغادرة 09:00 مساءاً.",
                    "تأمين 500ج يتم الدفع وقت التسكين والاسترداد وقت المغادرة.",
                    "مواعيد حمام السباحة من 10 ص إلى 4 م."
                ]
            },
            {
                id: "markabat",
                title: "المركبات",
                tiers: [
                    { name: "شاليه عائلي (4 أفراد)", normal: "450", holiday: "500" },
                    { name: "شاليه عائلي (6 أفراد)", normal: "625", holiday: "625" }
                ],
                notes: [
                    "Dayuse Family: الشاليه لأسرة واحدة فقط (زوج وزوجة وأولادهم).",
                    "غير مسموح إلا بإضافة فرد واحد مرافق فقط لكل شاليه.",
                    "إضافة الفرد 200ج.",
                    "مواعيد التسكين من 10:00 صباحاً إلى 09:00 مساءاً.",
                    "تأمين 500ج يتم الدفع وقت التسكين والاسترداد وقت المغادرة.",
                    "مواعيد حمام السباحة من 10 ص إلى 4 م."
                ]
            },
            {
                id: "police",
                title: "القضاء والشرطة",
                tiers: [
                    { name: "شاليه عائلي (4 أفراد)", normal: "950", holiday: "1000" },
                    { name: "شاليه عائلي (6 أفراد)", normal: "1200", holiday: "1250" }
                ],
                notes: [
                    "Dayuse Family: الشاليه لأسرة واحدة فقط (زوج وزوجة وأولادهم).",
                    "غير مسموح إلا بإضافة فرد واحد) مرافق فقط لكل شاليه.",
                    "إضافة الفرد 200ج.",
                    "مواعيد التسكين 10:00 صباحاً | مواعيد المغادرة 09:00 مساءاً.",
                    "تأمين 500ج يتم الدفع وقت التسكين والاسترداد وقت المغادرة.",
                    "مواعيد حمام السباحة من 10 ص إلى 4 م."
                ]
            },
            {
                id: "military",
                title: "القوات المسلحة",
                tiers: [
                    { name: "شاليه عائلي (4 أفراد)", normal: "750", holiday: "800" },
                    { name: "شاليه عائلي (6 أفراد)", normal: "950", holiday: "1000" }
                ],
                notes: [
                    "Dayuse Family: الشاليه لأسرة واحدة فقط (زوج وزوجة وأولادهم).",
                    "مواعيد التسكين 09:00 صباحاً | مواعيد المغادرة 09:00 مساءاً.",
                    "تأمين 500ج يتم الدفع وقت التسكين والاسترداد وقت المغادرة.",
                    "مواعيد حمام السباحة من 10 ص إلى 4 م."
                ]
            }
        ],

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
            whatsapp: "201022006906"
        },
        locationUrl: null
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
        
        instructions: [
            "ممنوع دخول المأكولات والمشروبات نهائياً.",
            "يجب الاستحمام قبل نزول حمام السباحة وبعد الخروج منه.",
            "يجب الالتزام بالملابس المخصصة لحمام السباحة، وارتداء غطاء الرأس المخصص للسيدات والبنات (البونيه).",
            "الدخول عائلات فقط.",
            "ممنوع تغيير الملابس خارج اللوكر المخصص.",
            "ضرورة الالتزام بالآداب العامة والألفاظ وإلا سينتج عنه الطرد من الدار.",
            "ممنوع دخول الحيوانات الأليفة أو الدراجات البخارية.",
            "تعليمات الإنقاذ: المنقذ هو من يحدد منطقة النزول طبقاً للتشغيل، وعلى الجميع اتباع تعليمات وتوجيهات الأمن حفاظاً على سلامتكم.",
            "الأطفال مسئولية ذويهم بالكامل.",
            "الدار غير مسئولة عن المقتنيات الشخصية."
        ],

        amenities: [
            { icon: "fas fa-clock", text: "الفترة الحرة: من 10 صباحاً حتى 4 عصراً" },
            { icon: "fas fa-ticket-alt", text: "تذكرة موحدة (تشمل دخول الدار ونزول المسبح)" },
            { icon: "fas fa-money-bill-wave", text: "الأيام العادية: 170ج (فوق 6 سنوات) | 110ج (تحت 6 سنوات)" },
            { icon: "fas fa-calendar-star", text: "العطلات والأعياد: 190ج (فوق 6 سنوات) | 115ج (تحت 6 سنوات)" },
            { icon: "fas fa-water", text: "أعماق متدرجة تناسب الجميع (من 80 سم إلى 4 أمتار)" }
        ],
        contact: {
            phone: "0223428242",
            whatsapp: "201070322434"
        },
        locationUrl: null
    },
    {
        id: "sports",
        gridSize: "large",
        category: "رياضة",
        name: "الأنشطة والاشتراكات",
        nameEn: "Sports & Activities",
        shortDesc: "أكاديميات رياضية وملاعب مجهزة لجميع الأعمار",
        fullDesc: "اكتشف طاقاتك وطاقات أبنائك مع باقة متكاملة من الأكاديميات الرياضية التي تشمل كرة القدم، الفنون القتالية، السباحة، وملاعب البادل المجهزة بأعلى المستويات. نوفر مدربين محترفين ومواعيد مرنة تناسب جميع الأفراد.",
        heroImg: "./assets/sports/hero.jpg",
        galleryHero: "./assets/sports/1.jpg",
        galleryThumbs: ["./assets/sports/2.jpg", "./assets/sports/3.jpg"],
        
        menuBtnText: "ألبوم الملاعب والأنشطة",
        menuBtnIcon: "fas fa-images",
        menu: [
            "./assets/sports/album/1.jpg",
            "./assets/sports/album/2.jpg",
            "./assets/sports/album/3.jpg"
        ],
        
        instructions: [
            "الأوراق المطلوبة للتسجيل: 2 صورة شخصية للمشترك.",
            "صورة شهادة الميلاد.",
            "صورة بطاقة ولي الأمر.",
            "شهادة صحية تفيد بخلو المشترك من الأمراض.",
            "تعليمات السباحة: عرض الأخوات يوفر خصم 10% في المبتدئين على جميع الفئات.",
            "في حالة إلغاء الاشتراك يتم خصم الحصص المنفذة مع زيادة 10%.",
            "في حالة كارنيهات الدار أو النوادي غير مجددة يحاسب المشترك بسعر المدني.",
        ],

        pricing: [
            {
                id: "civilians",
                title: "المدنيين",
                tiers: [
                    { name: "كرة قدم (أكاديمية النجم الأوليمبي)", time: "السبت / الخميس (6م - 8م)", price: "700", priceLabel: "اشتراك شهري" },
                    { name: "كرة قدم (أكاديمية Pro City)", time: "الاثنين / الأربعاء (6م - 8م)", price: "600", priceLabel: "اشتراك شهري" },
                    { name: "تايكوندو", time: "السبت / الأربعاء (5م - 6م)", price: "500", priceLabel: "اشتراك شهري" },
                    { name: "جيم سيدات", time: "السبت/الإثنين/الأربعاء/الخميس (6م-7:30م)", price: "500", priceLabel: "اشتراك شهري" },
                    { name: "كيك بوكس", time: "الاثنين / الجمعة (6م - 7م)", price: "650", priceLabel: "اشتراك شهري" },
                    { name: "كونغ فو", time: "السبت / الأربعاء (7م - 8م)", price: "550", priceLabel: "اشتراك شهري" },
                    { name: "مواي تاي", time: "السبت / الأربعاء (6م - 7م)", price: "650", priceLabel: "اشتراك شهري" },
                    { name: "MMA", time: "الاثنين / الجمعة (7م - 8م)", price: "800", priceLabel: "اشتراك شهري" },
                    { name: "كاراتيه (أكاديمية العالمي)", time: "الأحد / الثلاثاء / الخميس (5م - 8م)", price: "600", priceLabel: "اشتراك شهري" },
                    { name: "كاراتيه (إيجار صالة)", time: "الأحد (8م-9م) / الخميس (8:30م-10م)", price: "300", priceLabel: "قيمة الإيجار" },
                    { name: "ملعب بادل", time: "جميع الأيام", price: "350", priceLabel: "سعر الساعة" },
                    { name: "ملعب كرة قدم", time: "جميع الأيام", price: "300", priceLabel: "سعر الساعة" },
                    { name: "سباحة: مجموعة 6 أفراد", time: "يومين في الأسبوع (ساعة)", price: "550", priceLabel: "اشتراك شهري" },
                    { name: "سباحة: مجموعة 4 أفراد", time: "يومين في الأسبوع (ساعة)", price: "800", priceLabel: "اشتراك شهري" },
                    { name: "سباحة: مجموعة 2 أفراد", time: "يومين في الأسبوع (ساعة)", price: "1350", priceLabel: "اشتراك شهري" },
                    { name: "سباحة: فرد خاص", time: "يومين في الأسبوع (من 4:30م إلى 5:30م)", price: "2500", priceLabel: "اشتراك شهري" },
                    { name: "سباحة: حصة مبتدئين", time: "مدة الحصة ساعة واحدة", price: "100", priceLabel: "سعر الحصة" }
                ],
                notes: [
                    "يجب إحضار الأوراق المطلوبة كاملة عند التسجيل المذكورة في زر التعليمات والشروط."
                ]
            },
            {
                id: "forces",
                title: "أسلحة أخرى",
                tiers: [
                    { name: "كرة قدم (أكاديمية النجم الأوليمبي)", time: "السبت / الخميس (6م - 8م)", price: "650", priceLabel: "اشتراك شهري" },
                    { name: "كرة قدم (أكاديمية Pro City)", time: "الاثنين / الأربعاء (6م - 8م)", price: "550", priceLabel: "اشتراك شهري" },
                    { name: "تايكوندو", time: "السبت / الأربعاء (5م - 6م)", price: "450", priceLabel: "اشتراك شهري" },
                    { name: "جيم سيدات", time: "السبت/الإثنين/الأربعاء/الخميس (6م-7:30م)", price: "450", priceLabel: "اشتراك شهري" },
                    { name: "كيك بوكس", time: "الاثنين / الجمعة (6م - 7م)", price: "600", priceLabel: "اشتراك شهري" },
                    { name: "كونغ فو", time: "السبت / الأربعاء (7م - 8م)", price: "500", priceLabel: "اشتراك شهري" },
                    { name: "مواي تاي", time: "السبت / الأربعاء (6م - 7م)", price: "600", priceLabel: "اشتراك شهري" },
                    { name: "MMA", time: "الاثنين / الجمعة (7م - 8م)", price: "750", priceLabel: "اشتراك شهري" },
                    { name: "كاراتيه (أكاديمية العالمي)", time: "الأحد / الثلاثاء / الخميس (5م - 8م)", price: "550", priceLabel: "اشتراك شهري" },
                    { name: "كاراتيه (إيجار صالة)", time: "الأحد (8م-9م) / الخميس (8:30م-10م)", price: "300", priceLabel: "قيمة الإيجار" },
                    { name: "ملعب بادل", time: "جميع الأيام", price: "350", priceLabel: "سعر الساعة" },
                    { name: "ملعب كرة قدم", time: "جميع الأيام", price: "300", priceLabel: "سعر الساعة" },
                    { name: "سباحة: مجموعة 6 أفراد", time: "يومين في الأسبوع (ساعة)", price: "500", priceLabel: "اشتراك شهري" },
                    { name: "سباحة: مجموعة 4 أفراد", time: "يومين في الأسبوع (ساعة)", price: "750", priceLabel: "اشتراك شهري" },
                    { name: "سباحة: مجموعة 2 أفراد", time: "يومين في الأسبوع (ساعة)", price: "1300", priceLabel: "اشتراك شهري" },
                    { name: "سباحة: فرد خاص", time: "يومين في الأسبوع (من 4:30م إلى 5:30م)", price: "2450", priceLabel: "اشتراك شهري" },
                    { name: "سباحة: حصة مبتدئين", time: "مدة الحصة ساعة واحدة", price: "90", priceLabel: "سعر الحصة" }
                ],
                notes: [
                    "يجب إحضار الأوراق المطلوبة كاملة عند التسجيل المذكورة في زر التعليمات والشروط."
                ]
            },
            {
                id: "markabat",
                title: "المركبات",
                tiers: [
                    { name: "كرة قدم (أكاديمية النجم الأوليمبي)", time: "السبت / الخميس (6م - 8م)", price: "600", priceLabel: "اشتراك شهري" },
                    { name: "كرة قدم (أكاديمية Pro City)", time: "الاثنين / الأربعاء (6م - 8م)", price: "500", priceLabel: "اشتراك شهري" },
                    { name: "تايكوندو", time: "السبت / الأربعاء (5م - 6م)", price: "400", priceLabel: "اشتراك شهري" },
                    { name: "جيم سيدات", time: "السبت/الإثنين/الأربعاء/الخميس (6م-7:30م)", price: "400", priceLabel: "اشتراك شهري" },
                    { name: "كيك بوكس", time: "الاثنين / الجمعة (6م - 7م)", price: "550", priceLabel: "اشتراك شهري" },
                    { name: "كونغ فو", time: "السبت / الأربعاء (7م - 8م)", price: "450", priceLabel: "اشتراك شهري" },
                    { name: "مواي تاي", time: "السبت / الأربعاء (6م - 7م)", price: "550", priceLabel: "اشتراك شهري" },
                    { name: "MMA", time: "الاثنين / الجمعة (7م - 8م)", price: "700", priceLabel: "اشتراك شهري" },
                    { name: "كاراتيه (أكاديمية العالمي)", time: "الأحد / الثلاثاء / الخميس (5م - 8م)", price: "500", priceLabel: "اشتراك شهري" },
                    { name: "كاراتيه (إيجار صالة)", time: "الأحد (8م-9م) / الخميس (8:30م-10م)", price: "300", priceLabel: "قيمة الإيجار" },
                    { name: "ملعب بادل", time: "جميع الأيام", price: "350", priceLabel: "سعر الساعة" },
                    { name: "ملعب كرة قدم", time: "جميع الأيام", price: "300", priceLabel: "سعر الساعة" },
                    { name: "سباحة: مجموعة 6 أفراد", time: "يومين في الأسبوع (ساعة)", price: "450", priceLabel: "اشتراك شهري" },
                    { name: "سباحة: مجموعة 4 أفراد", time: "يومين في الأسبوع (ساعة)", price: "700", priceLabel: "اشتراك شهري" },
                    { name: "سباحة: مجموعة 2 أفراد", time: "يومين في الأسبوع (ساعة)", price: "1250", priceLabel: "اشتراك شهري" },
                    { name: "سباحة: فرد خاص", time: "يومين في الأسبوع (من 4:30م إلى 5:30م)", price: "2400", priceLabel: "اشتراك شهري" },
                    { name: "سباحة: حصة مبتدئين", time: "مدة الحصة ساعة واحدة", price: "80", priceLabel: "سعر الحصة" }
                ],
                notes: [
                    "يجب إحضار الأوراق المطلوبة كاملة عند التسجيل المذكورة في زر التعليمات والشروط."
                ]
            }
        ],

        amenities: [
            { icon: "fas fa-futbol", text: "أكاديميات وملاعب كرة قدم مجهزة" },
            { icon: "fas fa-table-tennis", text: "ملاعب بادل حديثة" },
            { icon: "fas fa-swimmer", text: "حمام سباحة وحارات تدريب" },
            { icon: "fas fa-dumbbell", text: "جيم مخصص للسيدات" },
            { icon: "fas fa-hand-rock", text: "صالات فنون قتالية متكاملة" },
            { icon: "fas fa-medal", text: "مدربون معتمدون لجميع الألعاب" }
        ],
        contact: {
            phone: "0223428242",
            whatsapp: "201070322434"
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
        fullDesc: "نصنع لك لحظات لا تُنسى في أرقى القاعات مع باقات متكاملة:<br><br><strong>باقة الماسة (Open Air) ونفرتاري (مغلقة ومكيفة):</strong><br>• السعة: 100 إلى 225 فرد (بـ 12,000 جنيه).<br>• تشمل: تصوير فيديو، كوشة، دانس فلور، دي جي، شاشات عرض، ليزر، وشو شربات.<br><br><strong>باقات قاعة سفن سكاي 7 Sky :</strong><br>• 200 فرد (24,000ج) | 300 فرد (26,000ج) | 400 فرد (29,000ج) | 500 فرد (32,000ج) | 600 فرد (35,000ج).<br>• تشمل: سويت هدية لتجهيز العروسة، فيديو 2 كاميرا وميكسر، شاشة بانوراما، ديكورات سيلنج، وسنتر بيس.<br><br><strong>إضافات اختيارية:</strong> فوتوسيشن، زفة دمياطي، ميك أب ارتيست، تورتة، ماكينة سحاب، وفاير شو.<br><em>للتواصل المباشر مع قاعة سفن سكاي: 01153045141 - 01096679676</em>",
        heroImg: "./assets/events/hero.jpg",
        galleryHero: "./assets/events/1.jpg",
        galleryThumbs: ["./assets/events/2.jpg", "./assets/events/3.jpg"],
        
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
            whatsapp: "201103307919"
        },
        locationUrl: null
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

// --- Google Maps Style Reviews Data ---
const reviewsSummary = {
    rating: 4.2,
    count: "5,841"
};

const reviewsData = [
    { name: "Abdelrahman Faragallah", rating: 5, date: "", text: "مكان لذيذ جدا وفي ملاعب بادل وكوره علي اعلي مستوي واسعارهم مناسبه جدا والاكل كمان جميل واسعار المطاعم تحفه والفندق والشاليهات كمان تحفه عن تجربه مش اخر مره ازور المكان فيها", isLocalGuide: false },
    { name: "Asser Moh", rating: 4, date: "قبل 3 أشهر", text: "فندق يتبع القوات المسلحة، فندق نظيف، استف جيد جدا فى المعاملة، النظافة جيده ، العاملين يقومون بحل اى شكوى فى اسرع وقت الإفطار سيت منيو بين إفطار شرقى او كولد كت ، يوجد wifi جيده بالفندق، يوجد كاتل و سكر و نسكافية و سكر فقط بدون وجود مياه معدنية بالغرفة، قيمة مقابل سعر ممتازة، مكان الفندق ممتازة للتحرك لأى مكان من مدينة نصر و مصر الجديدة و وسط البلد ، يوجد بارك للسيارات مجانى داخل الفندق، يسمح للمدنين بالإقامة فى الفندق", isLocalGuide: true },
    { name: "fatma Abdul Kader", rating: 5, date: "قبل 3 أسابيع", text: "حجزنا داي يوز لحمام السباحة وكان يوم حلو بس أكل المطعم عادي ومسموح دخول بأكل او طلب دليفري وانت تخرج تستلمه", isLocalGuide: false },
    { name: "Samar Ezaat", rating: 5, date: "قبل 4 أشهر", text: "مكان جميل وكل الخدمات جميلة والقاعات تحفة عن تجربة وكل خدمات الدار روعة وناس كلها زوق وتعامل مع الريسبشن ناس ذوق ومحترمين 🥰🥰", isLocalGuide: false },
    { name: "ahmed abd Ellatif yahia", rating: 5, date: "قبل 5 أشهر", text: "كحك و بسكوت كل عيد من عندهم اسعار حلوة و طعم جيد و عملنا فرح اختى فيها كان جميل التنظيم", isLocalGuide: true },
    { name: "Khaled Sokkary", rating: 5, date: "قبل 6 أشهر", text: "They have good capabilities to host social celebrations like wedding and vice versa", isLocalGuide: false },
    { name: "pharaonic wiwi", rating: 4.5, date: "قبل 3 أشهر", text: "قاعات الافراح شيء فوق الخيال.. اكثر من رائعه.. المنظمون منتهى الادب والاحترام والتعاون..", isLocalGuide: true }
];
