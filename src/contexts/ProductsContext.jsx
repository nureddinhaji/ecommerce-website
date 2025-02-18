import { createContext, useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {

    const {i18n} = useTranslation();


    const value = useMemo(() => (
        i18n.language === "ar" ?
        [
            {
                "id": 1,
                "name": "يد تحكم HAVIT HV-G92",
                "discount": 40,
                "price": 160,
                "image": "HAVIT HV-G92 Gamepad.webp",
                "otherImages": [
                    "HAVIT HV-G92 Gamepad.webp",
                    "HAVIT HV-G92 Gamepad-1.webp",
                    "HAVIT HV-G92 Gamepad-2.webp",
                    "HAVIT HV-G92 Gamepad-3.webp"
                ],
                "rate": 5,
                "ratesCount": 88,
                "stock": 4,
                "mainCategory": "ألعاب",
                "categories": ["ألعاب", "إلكترونيات"],
                "color": ["red"],
                "description": "تصميم مريح ومتين مع أزرار استجابة سريعة لتجربة ألعاب مريحة ودقيقة. توصيل وتشغيل مباشر مع أداء سلكي موثوق. مثالية لألعاب الكمبيوتر والمحاكاة."
            },
            {
                "id": 2,
                "name": "لوحة مفاتيح AK-900 سلكية",
                "discount": 35,
                "price": 1160,
                "image": "AK-900 Wired Keyboard.webp",
                "otherImages": [
                    "AK-900 Wired Keyboard.webp",
                    "AK-900 Wired Keyboard-1.webp",
                    "AK-900 Wired Keyboard-2.webp",
                    "AK-900 Wired Keyboard-3.webp",
                    "AK-900 Wired Keyboard-4.webp"
                ],
                "rate": 4,
                "ratesCount": 75,
                "stock": 4,
                "mainCategory": "ألعاب",
                "categories": ["ألعاب", "إلكترونيات"],
                "size": ["standard"],
                "color": ["black"],
                "description": "تصميم مريح ومتين مع مفاتيح سريعة الاستجابة لتجربة كتابة مريحة ودقيقة. توصيل وتشغيل مباشر مع أداء سلكي موثوق. مثالية للعمل والألعاب."
            },
            {
                "id": 3,
                "name": "شاشة ألعاب IPS LCD",
                "discount": 30,
                "price": 400,
                "image": "IPS LCD Gaming Monitor.webp",
                "otherImages": [
                    "IPS LCD Gaming Monitor.webp",
                    "IPS LCD Gaming Monitor-1.webp",
                    "IPS LCD Gaming Monitor-2.webp",
                    "IPS LCD Gaming Monitor-3.webp",
                    "IPS LCD Gaming Monitor-4.webp"
                ],
                "rate": 5,
                "ratesCount": 99,
                "stock": 5,
                "mainCategory": "ألعاب",
                "categories": ["ألعاب", "إلكترونيات"],
                "size": ["standard"],
                "color": ["black"],
                "description": "شاشة عالية الجودة بألوان نابضة بالحياة وزوايا رؤية واسعة لتجربة ألعاب غامرة. وقت استجابة سريع وأداء سلس للعب التنافسي."
            },
            {
                "id": 4,
                "name": "يد تحكم GP11 Shooter USB",
                "discount": null,
                "price": 660,
                "image": "GP11 Shooter USB Gamepad.webp",
                "otherImages": [
                    "GP11 Shooter USB Gamepad.webp",
                    "GP11 Shooter USB Gamepad-1.webp",
                    "GP11 Shooter USB Gamepad-2.webp",
                    "GP11 Shooter USB Gamepad-3.webp",
                    "GP11 Shooter USB Gamepad-4.webp"
                ],
                "rate": 4.5,
                "ratesCount": 55,
                "stock": 5,
                "mainCategory": "ألعاب",
                "categories": ["ألعاب", "إلكترونيات"],
                "size": ["standard"],
                "color": ["red", "green", "blue"],
                "description": "تصميم مريح لإمساك مريح أثناء جلسات اللعب الطويلة. أزرار وأزناد عالية الدقة لأداء سريع الاستجابة. توصيل وتشغيل مباشر عبر USB لاتصال سهل. مثالية للألعاب المليئة بالحركة."
            },
            {
                "id": 5,
                "name": "مبرد معالج RGB سائل",
                "discount": 10,
                "price": 170,
                "image": "RGB liquid CPU Cooler.webp",
                "otherImages": [
                    "RGB liquid CPU Cooler.webp",
                    "RGB liquid CPU Cooler-1.webp",
                    "RGB liquid CPU Cooler-2.webp",
                    "RGB liquid CPU Cooler-3.webp"
                ],
                "rate": 4.5,
                "ratesCount": 65,
                "stock": 5,
                "mainCategory": "إلكترونيات",
                "categories": ["إلكترونيات"],
                "size": ["standard"],
                "color": ["black"],
                "description": "تصميم أنيق عالي الأداء مع إضاءة RGB نابضة بالحياة لمظهر قابل للتخصيص. تقنية تبريد سائل فعالة تضمن إدارة مثالية لدرجة حرارة المعالج."
            },
            {
                "id": 6,
                "name": "كاميرا كانون DSLR",
                "discount": null,
                "price": 360,
                "image": "CANON EOS DSLR Camera.webp",
                "otherImages": [
                    "CANON EOS DSLR Camera.webp",
                    "CANON EOS DSLR Camera-1.webp",
                    "CANON EOS DSLR Camera-2.webp",
                    "CANON EOS DSLR Camera-3.webp"
                ],
                "rate": 4,
                "ratesCount": 95,
                "mainCategory": "كاميرات",
                "categories": ["إلكترونيات", "كاميرات"],
                "size": ["standard"],
                "color": ["black"],
                "description": "كاميرا DSLR عالية الأداء مع تقنية تصوير متقدمة للصور ومقاطع الفيديو المذهلة. تتميز بالتركيز التلقائي السريع وأوضاع التصوير المتنوعة وتصميم سهل الاستخدام. مثالية للمحترفين والهواة."
            },
            {
                "id": 7,
                "name": "لينوفو IdeaPad 3 نوت بوك",
                "discount": null,
                "price": 700,
                "image": "Lenovo IdeaPad 3 Full HD Notebook.webp",
                "otherImages": [
                    "Lenovo IdeaPad 3 Full HD Notebook.webp",
                    "Lenovo IdeaPad 3 Full HD Notebook-1.webp",
                    "Lenovo IdeaPad 3 Full HD Notebook-2.webp",
                    "Lenovo IdeaPad 3 Full HD Notebook-3.webp",
                    "Lenovo IdeaPad 3 Full HD Notebook-4.webp"
                ],
                "rate": 5,
                "ratesCount": 325,
                "stock": 5,
                "mainCategory": "لابتوب",
                "categories": ["إلكترونيات", "لابتوب"],
                "size": ["standard"],
                "color": ["gray"],
                "description": "لابتوب أنيق وقوي مع شاشة عالية الدقة للصور الواضحة. يتميز بمعالجة سريعة وتخزين وافر وعمر بطارية طويل للعمل والترفيه. تصميم خفيف الوزن لسهولة التنقل."
            },
            {
                "id": 8,
                "name": "كرسي S-Series المريح",
                "discount": 30,
                "price": 400,
                "image": "S-Series Comfort Chair.webp",
                "otherImages": [
                    "S-Series Comfort Chair.webp",
                    "S-Series Comfort Chair-1.webp",
                    "S-Series Comfort Chair-2.webp",
                    "S-Series Comfort Chair-3.webp"
                ],
                "rate": 4.5,
                "ratesCount": 99,
                "stock": 5,
                "mainCategory": "أثاث",
                "categories": ["منزل", "أثاث"],
                "size": ["standard"],
                "color": ["brown", "gray", "black"],
                "description": "تصميم مريح وأنيق للراحة والدعم المتفوق. ميزات قابلة للتعديل تضمن تجربة جلوس مخصصة. بناء متين مع مواد فاخرة للاستخدام طويل الأمد. مثالي للعمل المكتبي أو الألعاب أو الإعدادات المنزلية."
            },
            {
                "id": 9,
                "name": "رف كتب صغير",
                "discount": null,
                "price": 360,
                "image": "Small BookSelf.webp",
                "otherImages": [
                    "Small BookSelf.webp",
                    "Small BookSelf-1.webp",
                    "Small BookSelf-2.webp",
                    "Small BookSelf-3.webp"
                ],
                "rate": 5,
                "ratesCount": 65,
                "stock": 5,
                "mainCategory": "أثاث",
                "categories": ["منزل", "أثاث"],
                "size": ["standard"],
                "color": ["brown"],
                "description": "تصميم مدمج ومتين، مثالي لتنظيم الكتب والديكور والضروريات. موفر للمساحة وأنيق، يندمج بسلاسة في أي غرفة. بناء متين مع تجميع سهل لحل تخزين عملي وعصري. مثالي للمساحات الصغيرة والمكاتب وغرف النوم."
            },
            {
                "id": 10,
                "name": "معطف الشمال",
                "discount": 30,
                "price": 360,
                "image": "The north coat.webp",
                "otherImages": [
                    "The north coat.webp",
                    "The north coat-1.webp",
                    "The north coat-2.webp",
                    "The north coat-3.webp"
                ],
                "rate": 4.2,
                "ratesCount": 65,
                "stock": 5,
                "mainCategory": "ملابس",
                "categories": ["رجال", "ملابس"],
                "size": ["xs", "sm", "md", "lg", "xl"],
                "color": ["red", "yellow"],
                "description": "تصميم متين ومقاوم للطقس مصمم للدفء والراحة المطلقة. معزول بمواد متقدمة للحفاظ على الدفء في الظروف الباردة. خفيف الوزن لكنه متين، مثالي للمغامرات في الهواء الطلق أو الارتداء اليومي. أنيق وعملي لجميع المواسم."
            },
            {
                "id": 11,
                "name": "جاكيت ساتان مبطن",
                "discount": null,
                "price": 660,
                "image": "Quilted Satin Jacket.webp",
                "otherImages": [
                    "Quilted Satin Jacket.webp",
                    "Quilted Satin Jacket-1.webp"
                ],
                "rate": 4.5,
                "ratesCount": 55,
                "stock": 5,
                "mainCategory": "ملابس",
                "categories": ["رجال", "ملابس"],
                "size": ["xs", "sm", "md", "lg", "xl"],
                "color": ["green", "red", "blue"],
                "description": "قماش ساتان فاخر مع تصميم مبطن للدفء والأناقة الإضافية. ملمس ناعم وسلس للراحة. قصة أنيقة وعصرية، مثالية للمناسبات العادية وشبه الرسمية. خفيف الوزن وسهل التنسيق، يوفر الأناقة والعملية معًا."
            },
            {
                "id": 12,
                "name": "حقيبة غوتشي",
                "discount": 25,
                "price": 1160,
                "image": "Gucci duffle bag.webp",
                "otherImages": [
                    "Gucci duffle bag.webp",
                    "Gucci duffle bag-1.webp",
                    "Gucci duffle bag-2.webp",
                    "Gucci duffle bag-3.webp",
                    "Gucci duffle bag-4.webp"
                ],
                "rate": 4.5,
                "ratesCount": 65,
                "stock": 5,
                "mainCategory": "نساء",
                "categories": ["نساء"],
                "size": ["standard"],
                "color": ["brown"],
                "description": "تصميم فاخر وأنيق مصنوع من مواد فاخرة للمتانة والأناقة. مساحة داخلية واسعة مع أقسام منظمة للتعبئة السهلة. خيارات حمل متنوعة مع مقابض متينة وحزام كتف قابل للتعديل."
            },
            {
                "id": 13,
                "name": "سيارة أطفال كهربائية",
                "discount": null,
                "price": 960,
                "image": "Kids Electric Car.webp",
                "otherImages": [
                    "Kids Electric Car.webp",
                    "Kids Electric Car-1.webp",
                    "Kids Electric Car-2.webp",
                    "Kids Electric Car-3.webp",
                    "Kids Electric Car-4.webp"
                ],
                "rate": 5,
                "ratesCount": 65,
                "stock": 5,
                "mainCategory": "ألعاب",
                "categories": ["أطفال", "ألعاب"],
                "size": ["standard"],
                "color": ["blue", "red", "green"],
                "description": "سيارة كهربائية تعمل بالبطارية مصممة للأطفال، توفر تجربة قيادة مثيرة وآمنة. تتميز بتصميم واقعي مع أضواء وأصوات عاملة ومقعد مريح."
            },
            {
                "id": 14,
                "name": "أحذية كرة قدم Jr. Zoom",
                "discount": null,
                "price": 1160,
                "image": "Jr. Zoom Soccer Cleats.webp",
                "otherImages": [
                    "Jr. Zoom Soccer Cleats.webp",
                    "Jr. Zoom Soccer Cleats-1.webp",
                    "Jr. Zoom Soccer Cleats-2.webp",
                    "Jr. Zoom Soccer Cleats-3.webp",
                    "Jr. Zoom Soccer Cleats-4.webp"
                ],
                "rate": 5,
                "ratesCount": 35,
                "stock": 5,
                "mainCategory": "رياضة",
                "categories": ["رياضة", "أحذية", "رجال"],
                "size": ["39", "40", "41", "42", "43", "44"],
                "color": ["yellow"],
                "description": "تصميم خفيف ومتين لتعزيز الأداء والراحة. يتميز بتخميد مستجيب للدعم الأمثل والتشبث على الملعب. تناسب آمن للرشاقة والسرعة."
            },
            {
                "id": 15,
                "name": "يد تحكم Havic HV G-92",
                "discount": null,
                "price": 192,
                "image": "Havic HV G-92 Gamepad.webp",
                "otherImages": [
                    "Havic HV G-92 Gamepad.webp",
                    "Havic HV G-92 Gamepad-1.webp",
                    "Havic HV G-92 Gamepad-2.webp",
                    "Havic HV G-92 Gamepad-3.webp",
                    "Havic HV G-92 Gamepad-4.webp"
                ],
                "rate": 4,
                "ratesCount": 150,
                "stock": 5,
                "mainCategory": "ألعاب",
                "categories": ["ألعاب", "إلكترونيات"],
                "size": ["standard"],
                "color": ["white", "red"],
                "description": "غطاء تحكم بلايستيشن 5 من الفينيل عالي الجودة مع لاصق قنوات هوائية للتركيب السهل بدون فقاعات وإزالة نظيفة. حساس للضغط."
            }
        ]
        :        
        [
        {
            id: 1,
            name: "HAVIT HV-G92 Gamepad",
            discount: 40,
            price: 160,
            image: "HAVIT HV-G92 Gamepad.webp",
            otherImages: [
                "HAVIT HV-G92 Gamepad.webp",
                "HAVIT HV-G92 Gamepad-1.webp",
                "HAVIT HV-G92 Gamepad-2.webp",
                "HAVIT HV-G92 Gamepad-3.webp"
            ],
            rate: 5,
            ratesCount: 88,
            stock: 4,
            mainCategory: "gaming",
            categories: ["gaming", "electronics"],
            color: ["red"],
            description: "Ergonomic, durable design with responsive buttons for a comfortable and precise gaming experience. Plug-and-play connectivity with reliable wired performance. Ideal for PC gaming and emulation."
        },
        {
            id: 2,
            name: "AK-900 Wired Keyboard",
            discount: 35,
            price: 1160,
            image: "AK-900 Wired Keyboard.webp",
            otherImages: [
                "AK-900 Wired Keyboard.webp",
                "AK-900 Wired Keyboard-1.webp",
                "AK-900 Wired Keyboard-2.webp",
                "AK-900 Wired Keyboard-3.webp",
                "AK-900 Wired Keyboard-4.webp"
            ],
            rate: 4,
            ratesCount: 75,
            stock: 4,
            mainCategory: "gaming",
            categories: ["gaming", "electronics"],
            size: ["standard"],
            color: ["black"],
            description: "Ergonomic, durable design with responsive keys for a comfortable and precise typing experience. Plug-and-play connectivity with reliable wired performance. Ideal for work and gaming."
        },
        {
            id: 3,
            name: "IPS LCD Gaming Monitor",
            discount: 30,
            price: 400,
            image: "IPS LCD Gaming Monitor.webp",
            otherImages: [
                "IPS LCD Gaming Monitor.webp",
                "IPS LCD Gaming Monitor-1.webp",
                "IPS LCD Gaming Monitor-2.webp",
                "IPS LCD Gaming Monitor-3.webp",
                "IPS LCD Gaming Monitor-4.webp"
            ],
            rate: 5,
            ratesCount: 99,
            stock: 5,
            mainCategory: "gaming",
            categories: ["gaming", "electronics"],
            size: ["standard"],
            color: ["black"],
            description: "High-quality display with vibrant colors and wide viewing angles for an immersive gaming experience. Fast response time and smooth performance for competitive play."
        },
        {
            id: 4,
            name: "GP11 Shooter USB Gamepad",
            discount: null,
            price: 660,
            image: "GP11 Shooter USB Gamepad.webp",
            otherImages: [
                "GP11 Shooter USB Gamepad.webp",
                "GP11 Shooter USB Gamepad-1.webp",
                "GP11 Shooter USB Gamepad-2.webp",
                "GP11 Shooter USB Gamepad-3.webp",
                "GP11 Shooter USB Gamepad-4.webp"
            ],
            rate: 4.5,
            ratesCount: 55,
            stock: 5,
            mainCategory: "gaming",
            categories: ["gaming", "electronics"],
            size: ["standard"],
            color: ["red", "green","blue"],
            description: "Ergonomic design for comfortable grip during extended gaming sessions. High-precision buttons and triggers for responsive gameplay. Plug and play with USB compatibility for easy connection. Ideal for action-packed games."
        },
        {
            id: 5,
            name: "RGB liquid CPU Cooler",
            discount: 10,
            price: 170,
            image: "RGB liquid CPU Cooler.webp",
            otherImages: [
                "RGB liquid CPU Cooler.webp",
                "RGB liquid CPU Cooler-1.webp",
                "RGB liquid CPU Cooler-2.webp",
                "RGB liquid CPU Cooler-3.webp"
            ],
            rate: 4.5,
            ratesCount: 65,
            tock: 5,
            mainCategory: "electronics",
            categories: ["electronics"],
            size: ["standard"],
            color: ["black"],
            description: "Sleek, high-performance design with vibrant RGB lighting for a customizable aesthetic. Efficient liquid cooling technology ensures optimal temperature management for your CPU."
        },
        {
            id: 6,
            name: "CANON EOS DSLR Camera",
            discount: null,
            price: 360,
            image: "CANON EOS DSLR Camera.webp",
            otherImages: [
                "CANON EOS DSLR Camera.webp",
                "CANON EOS DSLR Camera-1.webp",
                "CANON EOS DSLR Camera-2.webp",
                "CANON EOS DSLR Camera-3.webp",
            ],
            rate: 4,
            ratesCount: 95,
            mainCategory: "camera",
            categories: ["electronics", "camera"],
            size: ["standard"],
            color: ["black"],
            description: "High-performance DSLR with advanced imaging technology for stunning photos and videos. Features fast autofocus, versatile shooting modes, and a user-friendly design. Perfect for professionals and enthusiasts."
        },
        {
            id: 7,
            name: "Lenovo IdeaPad 3 Full HD Notebook",
            discount: null,
            price: 700,
            image: "Lenovo IdeaPad 3 Full HD Notebook.webp",
            otherImages: [
                "Lenovo IdeaPad 3 Full HD Notebook.webp",
                "Lenovo IdeaPad 3 Full HD Notebook-1.webp",
                "Lenovo IdeaPad 3 Full HD Notebook-2.webp",
                "Lenovo IdeaPad 3 Full HD Notebook-3.webp",
                "Lenovo IdeaPad 3 Full HD Notebook-4.webp"
            ],
            rate: 5,
            ratesCount: 325,
            stock: 5,
            mainCategory: "laptop",
            categories: ["electronics", "laptop"],
            size: ["standard"],
            color: ["gray"],
            description: "Sleek and powerful laptop with a Full HD display for crisp visuals. Features fast processing, ample storage, and long battery life for work and entertainment. Lightweight design for portability."
        },
    {
        id: 8,
        name: "S-Series Comfort Chair",
        discount: 30,
        price: 400,
        image: "S-Series Comfort Chair.webp",
        otherImages: [
            "S-Series Comfort Chair.webp",
            "S-Series Comfort Chair-1.webp",
            "S-Series Comfort Chair-2.webp",
            "S-Series Comfort Chair-3.webp"
        ],
        rate: 4.5,
        ratesCount: 99,
        stock: 5,
        mainCategory: "furniture",
        categories: ["home", "furniture"],
        size: ["standard"],
        color: ["brown", "gray", "black"],
        description: "Ergonomic and stylish design for superior comfort and support. Adjustable features ensure a personalized seating experience. Durable construction with premium materials for long-lasting use. Perfect for office work, gaming, or home setups."
    },
    {
        id: 9,
        name: "Small BookSelf",
        discount: null,
        price: 360,
        image: "Small BookSelf.webp",
        otherImages: [
            "Small BookSelf.webp",
            "Small BookSelf-1.webp",
            "Small BookSelf-2.webp",
            "Small BookSelf-3.webp"
        ],
        rate: 5,
        ratesCount: 65,
        stock: 5,
        mainCategory: "furniture",
        categories: ["home", "furniture"],
        size: ["standard"],
        color: ["brown"],
        description: "Compact and sturdy design, perfect for organizing books, décor, and essentials. Space-saving yet stylish, fitting seamlessly into any room. Durable construction with easy assembly for a practical and modern storage solution. Ideal for small spaces, offices, or bedrooms."
    },
    {
        id: 10,
        name: "The north coat",
        discount: 30,
        price: 360,
        image: "The north coat.webp",
        otherImages: [
            "The north coat.webp",
            "The north coat-1.webp",
            "The north coat-2.webp",
            "The north coat-3.webp"
        ],
        rate: 4.2,
        ratesCount: 65,
        stock: 5,
        mainCategory: "clothes",
        categories: ["men", "clothes"],
        size: ["xs", "sm", "md", "lg", "xl"],
        color: ["red", "yellow"],
        description: "Durable, weather-resistant design built for ultimate warmth and comfort. Insulated with advanced materials to keep you cozy in cold conditions. Lightweight yet rugged, perfect for outdoor adventures or everyday wear. Stylish and functional for all seasons."
    },
    {
        id: 11,
        name: "Quilted Satin Jacket",
        discount: null,
        price: 660,
        image: "Quilted Satin Jacket.webp",
        otherImages: [
            "Quilted Satin Jacket.webp",
            "Quilted Satin Jacket-1.webp"
        ],
        rate: 4.5,
        ratesCount: 55,
        stock: 5,
        mainCategory: "clothes",
        categories: ["men", "clothes"],
        size: ["xs", "sm", "md", "lg", "xl"],
        color: ["green", "red","blue"],
        description: "Luxurious satin fabric with a quilted design for added warmth and style. Soft and smooth texture for comfort. Sleek and modern fit, perfect for both casual and semi-formal occasions. Lightweight and easy to layer, providing both elegance and functionality."
    },
    {
        id: 12,
        name: "Gucci duffle bag",
        discount: 25,
        price: 1160,
        image: "Gucci duffle bag.webp",
        otherImages: [
            "Gucci duffle bag.webp",
            "Gucci duffle bag-1.webp",
            "Gucci duffle bag-2.webp",
            "Gucci duffle bag-3.webp",
            "Gucci duffle bag-4.webp"
        ],
        rate: 4.5,
        ratesCount: 65,
        stock: 5,
        mainCategory: "women",
        categories: ["women"],
        size: ["standard"],
        color: ["brown"],
        description: "Luxurious and stylish design crafted from premium materials for durability and elegance. Spacious interior with well-organized compartments for effortless packing. Versatile carry options with sturdy handles and an adjustable shoulder strap. "
    },
    {
        id: 13,
        name: "Kids Electric Car",
        discount: null,
        price: 960,
        image: "Kids Electric Car.webp",
        otherImages: [
            "Kids Electric Car.webp",
            "Kids Electric Car-1.webp",
            "Kids Electric Car-2.webp",
            "Kids Electric Car-3.webp",
            "Kids Electric Car-4.webp"
        ],
        rate: 5,
        ratesCount: 65,
        stock: 5,
        mainCategory: "toys",
        categories: ["kids", "toys"],
        size: ["standard"],
        color: ["blue", "red", "green"],
        description: "Battery-powered electric car designed for kids, offering an exciting and safe driving experience. Features realistic design with working lights, sounds, and a comfortable seat."
    },
    {
        id: 14,
        name: "Jr. Zoom Soccer Cleats",
        discount: null,
        price: 1160,
        image: "Jr. Zoom Soccer Cleats.webp",
        otherImages: [
            "Jr. Zoom Soccer Cleats.webp",
            "Jr. Zoom Soccer Cleats-1.webp",
            "Jr. Zoom Soccer Cleats-2.webp",
            "Jr. Zoom Soccer Cleats-3.webp",
            "Jr. Zoom Soccer Cleats-4.webp"
        ],
        rate: 5,
        ratesCount: 35,
        stock: 5,
        mainCategory: "sports",
        categories: ["sports", "shoes", "men"],
        size: ["39", "40", "41", "42", "43", "44"],
        color: ["yellow"],
        description: "Lightweight, durable design for enhanced performance and comfort. Features responsive cushioning for optimal support and traction on the field. Secure fit for agility and speed."
    }, 
    {
        id: 15,
        name: "Havic HV G-92 Gamepad",
        discount: null,
        price: 192,
        image: "Havic HV G-92 Gamepad.webp",
        otherImages: [
            "Havic HV G-92 Gamepad.webp",
            "Havic HV G-92 Gamepad-1.webp",
            "Havic HV G-92 Gamepad-2.webp",
            "Havic HV G-92 Gamepad-3.webp",
            "Havic HV G-92 Gamepad-4.webp"
        ],
        rate: 4,
        ratesCount: 150,
        stock: 5,
        mainCategory: "gaming",
        categories: ["gaming", "electronics"],
        size: ["standard"],
        color: ["white", "red"],
        description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
    }

    ]), [i18n.language]);

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}

export default function useProducts() {
    const context = useContext(ProductsContext);
    if (context === undefined) {
        throw new Error('useProducts must be used within a ProductsProvider');
    }
    return context;
}