const translations = {
    en: {
        title: "Smartphone Selector",
        description: "Click on one of the options to select features for your smartphone.",
        labels: {
            budget: "Budget",
            memory: "Memory",
            screen: "Screen",
            camera: "Camera",
            processor: "Processor",
            weight: "Weight",
            battery: "Battery",
            Gsupport: "5G support",
            RAM: "RAM"
        },
        button: "Show Result",
        noResults: "No smartphones found with these specifications.",
        resultTitle: "Your Smartphone",
        resultBuyTitle: "You can buy:"
    },
    ru: {
        title: "Выбор смартфона",
        description: "Нажмите на параметры, чтобы выбрать характеристики смартфона.",
        labels: {
            budget: "Бюджет",
            memory: "Память",
            screen: "Экран",
            camera: "Камера",
            processor: "Процессор",
            weight: "Вес",
            battery: "Аккумулятор",
            Gsupport: "Поддержка 5G",
            RAM: "Оперативная память"
        },
        button: "Показать результат",
        noResults: "По данным характеристикам смартфон не найден.",
        resultTitle: "Ваш смартфон",
        resultBuyTitle: "Вы можете купить:"
    }
};

let currentLanguage = "en";

function setLanguage(lang) {
    currentLanguage = lang;

    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("description").textContent = translations[lang].description;
    document.getElementById("label-budget").textContent = translations[lang].labels.budget;
    document.getElementById("label-processor").textContent = translations[lang].labels.processor;
    document.getElementById("label-battery").textContent = translations[lang].labels.battery;
    document.getElementById("label-screen").textContent = translations[lang].labels.screen;
    document.getElementById("label-camera").textContent = translations[lang].labels.camera;
    document.getElementById("label-Gsupport").textContent = translations[lang].labels.Gsupport;
    document.getElementById("label-memory").textContent = translations[lang].labels.memory;
    document.getElementById("label-RAM").textContent = translations[lang].labels.RAM;
    document.getElementById("showResult").textContent = translations[lang].button;
}

document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
document.getElementById("lang-ru").addEventListener("click", () => setLanguage("ru"));

setLanguage("en");

document.getElementById("showResult").addEventListener("click", function () {
    const budget = document.getElementById("budget").value;
    const processor = document.getElementById("processor").value;
    const battery = document.getElementById("battery").value;
    const screen = document.getElementById("screen").value;
    const camera = document.getElementById("camera").value;
    const Gsupport = document.getElementById("Gsupport").value;
    const memory = document.getElementById("memory").value;
    const RAM = document.getElementById("RAM").value;

    const models = {
        "15-25_1/5_3/5_3/5_2/5_-_128GB_8GB": {
            name: "Xiaomi Redmi Note 13",
            image: "/images/note13.jpg",
            details: {
                en: "The Xiaomi Redmi Note 13 smartphone features a 6.67-inch display with Wet Touch technology, thanks to which it will not accidentally operate under the influence of water. The model is protected from splashes and dust according to the IP54 standard. The design includes Dolby Atmos stereo speakers for smooth and rich sound with the effect of complete immersion in the content being viewed. The 5000 mAh battery is capable of retaining up to 80% of its original resource with 1000 full charge cycles thanks to the intelligent charging system. The battery charge is enough for 12 hours of continuous use of the device in navigation mode.",
                ru: "Смартфон Xiaomi Redmi Note 13 оснащен 6,67-дюймовым дисплеем с технологией Wet Touch, благодаря которой он не будет случайно срабатывать под воздействием воды. Модель защищена от брызг и пыли по стандарту IP54. В конструкции предусмотрены стереодинамики Dolby Atmos для плавного и насыщенного звучания с эффектом полного погружения в просматриваемый контент. Аккумулятор емкостью 5000 мАч способен сохранять до 80% своего первоначального ресурса при 1000 полных циклах зарядки благодаря интеллектуальной системе зарядки. Заряда аккумулятора хватает на 12 часов непрерывного использования устройства в режиме навигации."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-8-256gb-midnight-black-400259093", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/2999a9248dcced20/667-smartfon-xiaomi-redmi-note-13-128-gb-cernyj/", class: "orange" }
            ]
        },
        "15-25_1/5_3/5_3/5_2/5_-_256GB_8GB": {
            name: "Xiaomi Redmi Note 13",
            image: "/images/note13.jpg",
            details: {
                en: "The Xiaomi Redmi Note 13 smartphone features a 6.67-inch display with Wet Touch technology, thanks to which it will not accidentally operate under the influence of water. The model is protected from splashes and dust according to the IP54 standard. The design includes Dolby Atmos stereo speakers for smooth and rich sound with the effect of complete immersion in the content being viewed. The 5000 mAh battery is capable of retaining up to 80% of its original resource with 1000 full charge cycles thanks to the intelligent charging system. The battery charge is enough for 12 hours of continuous use of the device in navigation mode.",
                ru: "Смартфон Xiaomi Redmi Note 13 оснащен 6,67-дюймовым дисплеем с технологией Wet Touch, благодаря которой он не будет случайно срабатывать под воздействием воды. Модель защищена от брызг и пыли по стандарту IP54. В конструкции предусмотрены стереодинамики Dolby Atmos для плавного и насыщенного звучания с эффектом полного погружения в просматриваемый контент. Аккумулятор емкостью 5000 мАч способен сохранять до 80% своего первоначального ресурса при 1000 полных циклах зарядки благодаря интеллектуальной системе зарядки. Заряда аккумулятора хватает на 12 часов непрерывного использования устройства в режиме навигации."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-8-256gb-midnight-black-400259093", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/2999a9248dcced20/667-smartfon-xiaomi-redmi-note-13-128-gb-cernyj/", class: "orange" }
            ]
        },
        "15-25_1/5_3/5_3/5_2/5_-_512GB_8GB": {
            name: "Xiaomi Redmi Note 13",
            image: "/images/note13.jpg",
            details: {
                en: "The Xiaomi Redmi Note 13 smartphone features a 6.67-inch display with Wet Touch technology, thanks to which it will not accidentally operate under the influence of water. The model is protected from splashes and dust according to the IP54 standard. The design includes Dolby Atmos stereo speakers for smooth and rich sound with the effect of complete immersion in the content being viewed. The 5000 mAh battery is capable of retaining up to 80% of its original resource with 1000 full charge cycles thanks to the intelligent charging system. The battery charge is enough for 12 hours of continuous use of the device in navigation mode.",
                ru: "Смартфон Xiaomi Redmi Note 13 оснащен 6,67-дюймовым дисплеем с технологией Wet Touch, благодаря которой он не будет случайно срабатывать под воздействием воды. Модель защищена от брызг и пыли по стандарту IP54. В конструкции предусмотрены стереодинамики Dolby Atmos для плавного и насыщенного звучания с эффектом полного погружения в просматриваемый контент. Аккумулятор емкостью 5000 мАч способен сохранять до 80% своего первоначального ресурса при 1000 полных циклах зарядки благодаря интеллектуальной системе зарядки. Заряда аккумулятора хватает на 12 часов непрерывного использования устройства в режиме навигации."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-8-256gb-midnight-black-400259093", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/2999a9248dcced20/667-smartfon-xiaomi-redmi-note-13-128-gb-cernyj/", class: "orange" }
            ]
        },
        "15-25_2/5_2/5_2/5_2/5_-_128GB_4GB": {
            name: "Samsung A15",
            image: "/images/a15.jpg",
            details: {
                en: "The Samsung Galaxy A15 smartphone has a classic case design. The 6.5-inch screen with a Super AMOLED matrix reproduces a clear, detailed image. The Eye Comfort function reduces the strain on your eyesight. Three main cameras are represented by a 5-megapixel ultra-wide-angle, 50-megapixel wide-angle and 2-megapixel for macro photography. Thanks to them, you can create bright and realistic photos and shoot videos in Full HD format.",
                ru: "Смартфон Samsung Galaxy A15 имеет классический дизайн корпуса. 6,5-дюймовый экран с матрицей Super AMOLED воспроизводит четкое, детализированное изображение. Функция «Eye Comfort» снижает нагрузку на зрение. Три основные камеры представлены 5-мегапиксельной сверхширокоугольной, 50-мегапиксельной широкоугольной и 2-мегапиксельной для макросъемки. Благодаря им можно создавать яркие и реалистичные фотографии и снимать видео в формате Full HD."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a15-lte-4-128gb-light-blue-30069977", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/bfacd245af386452/65-smartfon-samsung-galaxy-a15-4g-128-gb-goluboj/", class: "orange" }
            ]
        },
        "15-25_2/5_3/5_4/5_2/5_-_128GB_8GB": {
            name: "Xiaomi Redmi Note 13 pro",
            image: "/images/note13pro.webp",
            details: {
                en: "The Xiaomi Redmi Note 13 Pro smartphone is equipped with a 200-megapixel camera with image stabilization and anti-shake protection. This will allow you to take realistic and detailed photos and shoot Full HD videos. The 6.67-inch AMOLED display with a refresh rate of 120 Hz produces a clear and bright image. Eye protection from blue light and screen flickering is supported. Dual stereo speakers and Dolby Atmos technology provide surround sound.",
                ru: "Смартфон Xiaomi Redmi Note 13 оснащен 6,67-дюймовым дисплеем с технологией Wet Touch, благодаря которой он не будет случайно срабатывать под воздействием воды. Модель защищена от брызг и пыли по стандарту IP54. В конструкции предусмотрены стереодинамики Dolby Atmos для плавного и насыщенного звучания с эффектом полного погружения в просматриваемый контент. Аккумулятор емкостью 5000 мАч способен сохранять до 80% своего первоначального ресурса при 1000 полных циклах зарядки благодаря интеллектуальной системе зарядки. Заряда аккумулятора хватает на 12 часов непрерывного использования устройства в режиме навигации."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-pro-8-256gb-midnight-black-400257981", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/807d7b389028ed20/667-smartfon-xiaomi-redmi-note-13-pro-4g-128-gb-zelenyj/", class: "orange" }
            ]
        },
        "15-25_2/5_3/5_4/5_2/5_-_256GB_8GB": {
            name: "Xiaomi Redmi Note 13 pro",
            image: "/images/note13pro.webp",
            details: {
                en: "The Xiaomi Redmi Note 13 Pro smartphone is equipped with a 200-megapixel camera with image stabilization and anti-shake protection. This will allow you to take realistic and detailed photos and shoot Full HD videos. The 6.67-inch AMOLED display with a refresh rate of 120 Hz produces a clear and bright image. Eye protection from blue light and screen flickering is supported. Dual stereo speakers and Dolby Atmos technology provide surround sound.",
                ru: "Смартфон Xiaomi Redmi Note 13 оснащен 6,67-дюймовым дисплеем с технологией Wet Touch, благодаря которой он не будет случайно срабатывать под воздействием воды. Модель защищена от брызг и пыли по стандарту IP54. В конструкции предусмотрены стереодинамики Dolby Atmos для плавного и насыщенного звучания с эффектом полного погружения в просматриваемый контент. Аккумулятор емкостью 5000 мАч способен сохранять до 80% своего первоначального ресурса при 1000 полных циклах зарядки благодаря интеллектуальной системе зарядки. Заряда аккумулятора хватает на 12 часов непрерывного использования устройства в режиме навигации."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-pro-8-256gb-midnight-black-400257981", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/807d7b389028ed20/667-smartfon-xiaomi-redmi-note-13-pro-4g-128-gb-zelenyj/", class: "orange" }
            ]
        },
        "15-25_2/5_2/5_2/5_2/5_-_256GB_4GB": {
            name: "Samsung A15",
            image: "/images/a15.jpg",
            details: {
                en: "The Samsung Galaxy A15 smartphone has a classic case design. The 6.5-inch screen with a Super AMOLED matrix reproduces a clear, detailed image. The Eye Comfort function reduces the strain on your eyesight. Three main cameras are represented by a 5-megapixel ultra-wide-angle, 50-megapixel wide-angle and 2-megapixel for macro photography. Thanks to them, you can create bright and realistic photos and shoot videos in Full HD format.",
                ru: "Смартфон Samsung Galaxy A15 имеет классический дизайн корпуса. 6,5-дюймовый экран с матрицей Super AMOLED воспроизводит четкое, детализированное изображение. Функция «Eye Comfort» снижает нагрузку на зрение. Три основные камеры представлены 5-мегапиксельной сверхширокоугольной, 50-мегапиксельной широкоугольной и 2-мегапиксельной для макросъемки. Благодаря им можно создавать яркие и реалистичные фотографии и снимать видео в формате Full HD."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a15-lte-4-128gb-light-blue-30069977", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/bfacd245af386452/65-smartfon-samsung-galaxy-a15-4g-128-gb-goluboj/", class: "orange" }
            ]
        },
        "15-25_2/5_3/5_4/5_2/5_-_512GB_12GB": {
            name: "Xiaomi Redmi Note 13 pro",
            image: "/images/note13pro.webp",
            details: {
                en: "The Xiaomi Redmi Note 13 Pro smartphone is equipped with a 200-megapixel camera with image stabilization and anti-shake protection. This will allow you to take realistic and detailed photos and shoot Full HD videos. The 6.67-inch AMOLED display with a refresh rate of 120 Hz produces a clear and bright image. Eye protection from blue light and screen flickering is supported. Dual stereo speakers and Dolby Atmos technology provide surround sound.",
                ru: "Смартфон Xiaomi Redmi Note 13 оснащен 6,67-дюймовым дисплеем с технологией Wet Touch, благодаря которой он не будет случайно срабатывать под воздействием воды. Модель защищена от брызг и пыли по стандарту IP54. В конструкции предусмотрены стереодинамики Dolby Atmos для плавного и насыщенного звучания с эффектом полного погружения в просматриваемый контент. Аккумулятор емкостью 5000 мАч способен сохранять до 80% своего первоначального ресурса при 1000 полных циклах зарядки благодаря интеллектуальной системе зарядки. Заряда аккумулятора хватает на 12 часов непрерывного использования устройства в режиме навигации."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-pro-8-256gb-midnight-black-400257981", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/807d7b389028ed20/667-smartfon-xiaomi-redmi-note-13-pro-4g-128-gb-zelenyj/", class: "orange" }
            ]
        },
        "15-25_2/5_3/5_3/5_4/5_+_128GB_8GB": {
            name: "Samsung A25",
            image: "/images/a25jpg.jpg",
            details: {
                en: "The Samsung Galaxy A25 5G smartphone in a plastic case is equipped with a 3-module camera with support for artificial intelligence. It identifies scenes and automatically selects settings. The 120° viewing angle guarantees the presence of distant elements and objects in the frame. The 5000 mAh battery requires recharging after 124 hours of listening to tracks.",
                ru: "Смартфон Samsung Galaxy A25 5G в пластиковом корпусе оснащен 3-модульной камерой с поддержкой режима искусственного интеллекта. Она определяет сцены и автоматически подбирает настройки. Угол обзора 120° гарантирует присутствие в кадре удаленных элементов и объектов. Аккумулятор емкостью 5000 мАч требует подзарядки через 124 часа прослушивания треков."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a25-5g-6-128gb-blue-black-30070151", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/fa99bfb6700952cb/65-smartfon-samsung-galaxy-a25-128-gb-goluboj/", class: "orange" }
            ]
        },
        "15-25_2/5_3/5_3/5_4/5_+_256GB_8GB": {
            name: "Samsung A25",
            image: "/images/a25jpg.jpg",
            details: {
                en: "The Samsung Galaxy A25 5G smartphone in a plastic case is equipped with a 3-module camera with support for artificial intelligence. It identifies scenes and automatically selects settings. The 120° viewing angle guarantees the presence of distant elements and objects in the frame. The 5000 mAh battery requires recharging after 124 hours of listening to tracks.",
                ru: "Смартфон Samsung Galaxy A25 5G в пластиковом корпусе оснащен 3-модульной камерой с поддержкой режима искусственного интеллекта. Она определяет сцены и автоматически подбирает настройки. Угол обзора 120° гарантирует присутствие в кадре удаленных элементов и объектов. Аккумулятор емкостью 5000 мАч требует подзарядки через 124 часа прослушивания треков."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a25-5g-6-128gb-blue-black-30070151", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/fa99bfb6700952cb/65-smartfon-samsung-galaxy-a25-128-gb-goluboj/", class: "orange" }
            ]
        },
        "25-50_2/5_3/5_4/5_2/5_+_128GB_8GB": {
            name: "Xiaomi Redmi Note 13 pro",
            image: "/images/note13pro.webp",
            details: {
                en: "The Xiaomi Redmi Note 13 Pro smartphone is equipped with a 200-megapixel camera with image stabilization and anti-shake protection. This will allow you to take realistic and detailed photos and shoot Full HD videos. The 6.67-inch AMOLED display with a refresh rate of 120 Hz produces a clear and bright image. Eye protection from blue light and screen flickering is supported. Dual stereo speakers and Dolby Atmos technology provide surround sound.",
                ru: "Смартфон Xiaomi Redmi Note 13 оснащен 6,67-дюймовым дисплеем с технологией Wet Touch, благодаря которой он не будет случайно срабатывать под воздействием воды. Модель защищена от брызг и пыли по стандарту IP54. В конструкции предусмотрены стереодинамики Dolby Atmos для плавного и насыщенного звучания с эффектом полного погружения в просматриваемый контент. Аккумулятор емкостью 5000 мАч способен сохранять до 80% своего первоначального ресурса при 1000 полных циклах зарядки благодаря интеллектуальной системе зарядки. Заряда аккумулятора хватает на 12 часов непрерывного использования устройства в режиме навигации."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-pro-8-256gb-midnight-black-400257981", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/807d7b389028ed20/667-smartfon-xiaomi-redmi-note-13-pro-4g-128-gb-zelenyj/", class: "orange" }
            ]
        },
        "25-50_2/5_3/5_4/5_2/5_+_256GB_8GB": {
            name: "Xiaomi Redmi Note 13 pro",
            image: "/images/note13pro.webp",
            details: {
                en: "The Xiaomi Redmi Note 13 Pro smartphone is equipped with a 200-megapixel camera with image stabilization and anti-shake protection. This will allow you to take realistic and detailed photos and shoot Full HD videos. The 6.67-inch AMOLED display with a refresh rate of 120 Hz produces a clear and bright image. Eye protection from blue light and screen flickering is supported. Dual stereo speakers and Dolby Atmos technology provide surround sound.",
                ru: "Смартфон Xiaomi Redmi Note 13 оснащен 6,67-дюймовым дисплеем с технологией Wet Touch, благодаря которой он не будет случайно срабатывать под воздействием воды. Модель защищена от брызг и пыли по стандарту IP54. В конструкции предусмотрены стереодинамики Dolby Atmos для плавного и насыщенного звучания с эффектом полного погружения в просматриваемый контент. Аккумулятор емкостью 5000 мАч способен сохранять до 80% своего первоначального ресурса при 1000 полных циклах зарядки благодаря интеллектуальной системе зарядки. Заряда аккумулятора хватает на 12 часов непрерывного использования устройства в режиме навигации."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-pro-8-256gb-midnight-black-400257981", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/807d7b389028ed20/667-smartfon-xiaomi-redmi-note-13-pro-4g-128-gb-zelenyj/", class: "orange" }
            ]
        },
        "25-50_2/5_3/5_4/5_2/5_+_512GB_12GB": {
            name: "Xiaomi Redmi Note 13 pro",
            image: "/images/note13pro.webp",
            details: {
                en: "The Xiaomi Redmi Note 13 Pro smartphone is equipped with a 200-megapixel camera with image stabilization and anti-shake protection. This will allow you to take realistic and detailed photos and shoot Full HD videos. The 6.67-inch AMOLED display with a refresh rate of 120 Hz produces a clear and bright image. Eye protection from blue light and screen flickering is supported. Dual stereo speakers and Dolby Atmos technology provide surround sound.",
                ru: "Смартфон Xiaomi Redmi Note 13 оснащен 6,67-дюймовым дисплеем с технологией Wet Touch, благодаря которой он не будет случайно срабатывать под воздействием воды. Модель защищена от брызг и пыли по стандарту IP54. В конструкции предусмотрены стереодинамики Dolby Atmos для плавного и насыщенного звучания с эффектом полного погружения в просматриваемый контент. Аккумулятор емкостью 5000 мАч способен сохранять до 80% своего первоначального ресурса при 1000 полных циклах зарядки благодаря интеллектуальной системе зарядки. Заряда аккумулятора хватает на 12 часов непрерывного использования устройства в режиме навигации."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-pro-8-256gb-midnight-black-400257981", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/807d7b389028ed20/667-smartfon-xiaomi-redmi-note-13-pro-4g-128-gb-zelenyj/", class: "orange" }
            ]
        },
        "25-50_3/5_3/5_3/5_4/5_+_256GB_8GB": {
            name: "Samsung A35",
            image: "/images/a35.jpg",
            details: {
                en: "The Samsung Galaxy A35 5G 128GB smartphone with a glass back panel features a 6.6-inch display with a built-in fingerprint scanner and scratch protection. The AMOLED display shows a clear and bright picture in a resolution of 2340x1080 dpi without graininess and visible pixels. You can work with 2 SIM cards in standby mode and use 5G mobile communications.",
                ru: "Смартфон Samsung Galaxy A35 5G 128GB со стеклянной задней панелью оснащен 6,6-дюймовым дисплеем со встроенным сканером отпечатков пальцев и защитой от царапин. AMOLED-дисплей демонстрирует четкую и яркую картинку в разрешении 2340x1080 точек на дюйм без зернистости и видимых пикселей. Вы можете работать с 2 SIM-картами в режиме ожидания и использовать мобильную связь 5G."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a35-5g-8-128gb-blue-black-30070624", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/efcf0dcb1903ae4b/66-smartfon-samsung-galaxy-a35-128-gb-zeltyj/", class: "orange" }
            ]
        },
        "25-50_3/5_3/5_3/5_4/5_+_512GB_12GB": {
            name: "Samsung A35",
            image: "/images/a35.jpg",
            details: {
                en: "The Samsung Galaxy A35 5G 128GB smartphone with a glass back panel features a 6.6-inch display with a built-in fingerprint scanner and scratch protection. The AMOLED display shows a clear and bright picture in a resolution of 2340x1080 dpi without graininess and visible pixels. You can work with 2 SIM cards in standby mode and use 5G mobile communications.",
                ru: "Смартфон Samsung Galaxy A35 5G 128GB со стеклянной задней панелью оснащен 6,6-дюймовым дисплеем со встроенным сканером отпечатков пальцев и защитой от царапин. AMOLED-дисплей демонстрирует четкую и яркую картинку в разрешении 2340x1080 точек на дюйм без зернистости и видимых пикселей. Вы можете работать с 2 SIM-картами в режиме ожидания и использовать мобильную связь 5G."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a35-5g-8-128gb-blue-black-30070624", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/efcf0dcb1903ae4b/66-smartfon-samsung-galaxy-a35-128-gb-zeltyj/", class: "orange" }
            ]
        },
        "25-50_3/5_3/5_3/5_4/5_+_128GB_8GB": {
            name: "Samsung A55",
            image: "/images/a55.png",
            details: {
                en: "The Samsung Galaxy A55 5G smartphone operates on a single charge for 79 hours in track listening mode. The computing power consists of an 8-core processor and 8 GB of RAM. Files are stored in the built-in memory of 128 GB with the ability to expand using microSD, microSDHC, microSDXC cards. The Samsung Galaxy A55 5G smartphone is equipped with a 3-module connector with 10x digital zoom, visually highlighting objects without losing sharpness. The LED flash provides frame brightness in low light. Fill the video with multidimensional sound, providing stereo dynamics. Content is broadcast on a 6.6-inch display based on the Super AMOLED matrix. It provides rich black color and timely frame change when dynamic episodes appear.",
                ru: "Смартфон Samsung Galaxy A55 5G работает от одного заряда 79 часов в режиме прослушивания треков. Вычислительная мощность состоит из 8-ядерного процессора и 8 ГБ оперативной памяти. Хранение файлов предусмотрено во встроенной памяти объемом 128 ГБ с возможностью расширения с помощью карт microSD, microSDHC, microSDXC. Смартфон Samsung Galaxy A55 5G оснащен 3-модульным разъемом с 10-кратным цифровым зумом, визуально выделяющим объекты без потери резкости. Светодиодная вспышка обеспечивает яркость кадра при слабом освещении. Наполните видео многомерным звуком, обеспечив стереодинамику. Трансляция контента осуществляется на 6,6-дюймовый дисплей на базе матрицы Super AMOLED. Она обеспечивает насыщенный черный цвет и своевременную смену кадров при появлении динамичных эпизодов."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a55-5g-8-128gb-blue-black-30070642", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/02d8e584daec4713/66-smartfon-samsung-galaxy-a55-128-gb-goluboj/", class: "orange" }
            ]
        },
        "25-50_3/5_3/5_3/5_4/5_+_256GB_8GB": {
            name: "Samsung A55",
            image: "/images/a55.png",
            details: {
                en: "The Samsung Galaxy A55 5G smartphone operates on a single charge for 79 hours in track listening mode. The computing power consists of an 8-core processor and 8 GB of RAM. Files are stored in the built-in memory of 128 GB with the ability to expand using microSD, microSDHC, microSDXC cards. The Samsung Galaxy A55 5G smartphone is equipped with a 3-module connector with 10x digital zoom, visually highlighting objects without losing sharpness. The LED flash provides frame brightness in low light. Fill the video with multidimensional sound, providing stereo dynamics. Content is broadcast on a 6.6-inch display based on the Super AMOLED matrix. It provides rich black color and timely frame change when dynamic episodes appear.",
                ru: "Смартфон Samsung Galaxy A55 5G работает от одного заряда 79 часов в режиме прослушивания треков. Вычислительная мощность состоит из 8-ядерного процессора и 8 ГБ оперативной памяти. Хранение файлов предусмотрено во встроенной памяти объемом 128 ГБ с возможностью расширения с помощью карт microSD, microSDHC, microSDXC. Смартфон Samsung Galaxy A55 5G оснащен 3-модульным разъемом с 10-кратным цифровым зумом, визуально выделяющим объекты без потери резкости. Светодиодная вспышка обеспечивает яркость кадра при слабом освещении. Наполните видео многомерным звуком, обеспечив стереодинамику. Трансляция контента осуществляется на 6,6-дюймовый дисплей на базе матрицы Super AMOLED. Она обеспечивает насыщенный черный цвет и своевременную смену кадров при появлении динамичных эпизодов."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a55-5g-8-128gb-blue-black-30070642", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/02d8e584daec4713/66-smartfon-samsung-galaxy-a55-128-gb-goluboj/", class: "orange" }
            ]
        },
        "25-50_3/5_3/5_3/5_4/5_+_256GB_12GB": {
            name: "Samsung A55",
            image: "/images/a55.png",
            details: {
                en: "The Samsung Galaxy A55 5G smartphone operates on a single charge for 79 hours in track listening mode. The computing power consists of an 8-core processor and 8 GB of RAM. Files are stored in the built-in memory of 128 GB with the ability to expand using microSD, microSDHC, microSDXC cards. The Samsung Galaxy A55 5G smartphone is equipped with a 3-module connector with 10x digital zoom, visually highlighting objects without losing sharpness. The LED flash provides frame brightness in low light. Fill the video with multidimensional sound, providing stereo dynamics. Content is broadcast on a 6.6-inch display based on the Super AMOLED matrix. It provides rich black color and timely frame change when dynamic episodes appear.",
                ru: "Смартфон Samsung Galaxy A55 5G работает от одного заряда 79 часов в режиме прослушивания треков. Вычислительная мощность состоит из 8-ядерного процессора и 8 ГБ оперативной памяти. Хранение файлов предусмотрено во встроенной памяти объемом 128 ГБ с возможностью расширения с помощью карт microSD, microSDHC, microSDXC. Смартфон Samsung Galaxy A55 5G оснащен 3-модульным разъемом с 10-кратным цифровым зумом, визуально выделяющим объекты без потери резкости. Светодиодная вспышка обеспечивает яркость кадра при слабом освещении. Наполните видео многомерным звуком, обеспечив стереодинамику. Трансляция контента осуществляется на 6,6-дюймовый дисплей на базе матрицы Super AMOLED. Она обеспечивает насыщенный черный цвет и своевременную смену кадров при появлении динамичных эпизодов."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a55-5g-8-128gb-blue-black-30070642", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/02d8e584daec4713/66-smartfon-samsung-galaxy-a55-128-gb-goluboj/", class: "orange" }
            ]
        },
        "25-50_4/5_4/5_4/5_5/5_+_128GB_12GB": {
            name: "Samsung galaxy S21 FE",
            image: "/images/s21fe.jpg",
            details: {
                en: "The Samsung Galaxy S21 FE smartphone has a thin body with a classic color scheme and offers wide flagship-level functionality. It has a frameless 6.4-inch display based on the Dynamic AMOLED 2X panel (2340x1080 pixels), which displays a detailed and colorful picture. The hardware platform led by the Exynos 2100 processor guarantees system performance. The 12 + 12 + 8 MP camera with flash, autofocus and optical stabilization allows you to create realistic photos with natural background blur and video. On the front side there is a 32 MP camera. Stereo speakers reproduce clear sound. The phone has two slots for installing SIM cards and popular interfaces. The 4500 mAh battery guarantees long battery life of the Samsung Galaxy S21 FE and supports wireless charging.",
                ru: "Смартфон Samsung Galaxy S21 FE имеет тонкий корпус с классической цветовой гаммой и предлагает широкий функционал флагманского уровня. Он имеет безрамочный 6,4-дюймовый дисплей на базе панели Dynamic AMOLED 2X (2340x1080 пикселей), который отображает детализированную и красочную картинку. Аппаратная платформа во главе с процессором Exynos 2100 гарантирует производительность системы. Камера 12+12+8 МП со вспышкой, автофокусом и оптической стабилизацией позволяет создавать реалистичные фотографии с естественным размытием фона и видео. На лицевой стороне расположена камера на 32 МП. Стереодинамики воспроизводят чистый звук. Телефон имеет два слота для установки SIM-карт и популярные интерфейсы. Аккумулятор емкостью 4500 мАч гарантирует длительное время автономной работы Samsung Galaxy S21 FE и поддерживает беспроводную зарядку."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-s21fe-128gb-gray-sm-g990b-30061119", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/eaa2674ac73c20b9/64-smartfon-samsung-galaxy-s21-fe-256-gb-seryj/", class: "orange" }
            ]
        },
        "25-50_5/5_4/5_4/5_4/5_+_256GB_8GB": {
            name: "Xiaomi POCO X6 Pro",
            image: "/images/poco6pro.jpg",
            details: {
                en: "The POCO X6 Pro smartphone is made in a plastic case. The IP54 protection class guarantees the device's resistance to dust, moisture and splashes of water. On the front side, there is Corning Gorilla Glass 5 against scratches. The 6.67-inch screen with an AMOLED matrix provides a bright, clear and colorful image. For detailed shots, the smartphone offers a main triple camera of 64 + 8 + 2 MP and a front camera of 16 MP. A dual LED flash illuminates the space in low light conditions. The POCO X6 Pro smartphone is equipped with an 8-core MediaTek Dimensity 8300 Ultra processor and 8 GB of RAM. This ensures fast performance and smooth operation of the interface. The sound system is represented by stereo speakers with Hi-Res Audio certification. The 5000 mAh battery guarantees up to 19 hours of battery life for your smartphone when watching videos and supports the Turbo Charge 67W fast charging function.",
                ru: "Смартфон POCO X6 Pro выполнен в пластиковом корпусе. Класс защиты IP54 гарантирует устойчивость устройства к пыли, влаге и брызгам воды. На лицевой стороне установлено стекло Corning Gorilla Glass 5 от царапин. 6,67-дюймовый экран с матрицей AMOLED обеспечивает яркое, четкое и красочное изображение. Для детализированных снимков смартфон предлагает основную тройную камеру на 64+8+2 МП и фронтальную камеру на 16 МП. Двойная светодиодная вспышка освещает пространство в условиях недостаточной освещенности. Смартфон POCO X6 Pro оснащен 8-ядерным процессором MediaTek Dimensity 8300 Ultra и 8 ГБ оперативной памяти. Это обеспечивает быструю производительность и плавную работу интерфейса. Звуковая система представлена ​​стереодинамиками с сертификацией Hi-Res Audio. Аккумулятор емкостью 5000 мАч гарантирует до 19 часов автономной работы смартфона при просмотре видео и поддерживает функцию быстрой зарядки Turbo Charge 67W."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-poco-x6-pro-5g-12-512gb-black-400285733", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/d54b3faa997fed20/667-smartfon-poco-x6-pro-256-gb-cernyj/", class: "orange" }
            ]
        },
        "25-50_5/5_4/5_4/5_4/5_+_512GB_12GB": {
            name: "Xiaomi POCO X6 Pro",
            image: "/images/poco6pro.jpg",
            details: {
                en: "The POCO X6 Pro smartphone is made in a plastic case. The IP54 protection class guarantees the device's resistance to dust, moisture and splashes of water. On the front side, there is Corning Gorilla Glass 5 against scratches. The 6.67-inch screen with an AMOLED matrix provides a bright, clear and colorful image. For detailed shots, the smartphone offers a main triple camera of 64 + 8 + 2 MP and a front camera of 16 MP. A dual LED flash illuminates the space in low light conditions. The POCO X6 Pro smartphone is equipped with an 8-core MediaTek Dimensity 8300 Ultra processor and 8 GB of RAM. This ensures fast performance and smooth operation of the interface. The sound system is represented by stereo speakers with Hi-Res Audio certification. The 5000 mAh battery guarantees up to 19 hours of battery life for your smartphone when watching videos and supports the Turbo Charge 67W fast charging function.",
                ru: "Смартфон POCO X6 Pro выполнен в пластиковом корпусе. Класс защиты IP54 гарантирует устойчивость устройства к пыли, влаге и брызгам воды. На лицевой стороне установлено стекло Corning Gorilla Glass 5 от царапин. 6,67-дюймовый экран с матрицей AMOLED обеспечивает яркое, четкое и красочное изображение. Для детализированных снимков смартфон предлагает основную тройную камеру на 64+8+2 МП и фронтальную камеру на 16 МП. Двойная светодиодная вспышка освещает пространство в условиях недостаточной освещенности. Смартфон POCO X6 Pro оснащен 8-ядерным процессором MediaTek Dimensity 8300 Ultra и 8 ГБ оперативной памяти. Это обеспечивает быструю производительность и плавную работу интерфейса. Звуковая система представлена ​​стереодинамиками с сертификацией Hi-Res Audio. Аккумулятор емкостью 5000 мАч гарантирует до 19 часов автономной работы смартфона при просмотре видео и поддерживает функцию быстрой зарядки Turbo Charge 67W."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-poco-x6-pro-5g-12-512gb-black-400285733", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/d54b3faa997fed20/667-smartfon-poco-x6-pro-256-gb-cernyj/", class: "orange" }
            ]
        },
        "100-125_5/5_5/5_4/5_5/5_+_512GB_16GB": {
            name: "Xiaomi 14 Ultra",
            image: "/images/xiaomi14ultra.jpg",
            details: {
                en: "The Xiaomi 14 Ultra smartphone in a metal and leather case is equipped with a 4-module camera with a matrix resolution of 50 MP. Night mode and dual LED flash fill the frames with brightness in low light conditions. The content is broadcast on a 6.73-inch frameless display with a resolution of 3200x1440 pixels. The refresh rate of 120 Hz does not allow delays when changing dynamic scenes. The computing power of the Xiaomi 14 Ultra consists of an 8-core Qualcomm Snapdragon 8 Gen 3 processor and 16 GB of RAM. The 5000 mAh battery supports wireless reverse charging to replenish the energy of various devices. Hi-Res Audio and Dolby Atmos guarantee surround sound playback. Data is stored in the built-in memory of 512 GB.",
                ru: "Смартфон Xiaomi 14 Ultra в корпусе из металла и кожи оснащен 4-модульной камерой с разрешением матрицы 50 Мп. Ночной режим и двойная светодиодная вспышка наполняют кадры яркостью в условиях недостаточного освещения. Контент транслируется на 6.73-дюймовый безрамочный дисплей в разрешении 3200x1440 пикселей. Частота обновления 120 Гц не допускает задержек при смене динамичных сцен. Вычислительная мощность Xiaomi 14 Ultra состоит из 8-ядерного процессора Qualcomm Snapdragon 8 Gen 3 и 16 ГБ оперативной памяти. Аккумулятор емкостью 5000 мАч поддерживает беспроводную реверсивную зарядку для восполнения энергии различных устройств. Hi-Res Audio и Dolby Atmos гарантируют воспроизведение объемного звука. Хранение данных производится во встроенной памяти объемом 512 ГБ."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-14-ultra-16-512gb-black-400283602?utm_source=google&utm_medium=organic&utm_campaign=google&utm_referrer=google", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/5c83fb95d123ed20/673-smartfon-xiaomi-14-ultra-512-gb-cernyj/", class: "orange" }
            ]
        },
        "75-100_5/5_5/5_4/5_5/5_+_512GB_12GB": {
            name: "Xiaomi 14 Ultra",
            image: "/images/xiaomi14ultra.jpg",
            details: {
                en: "The Xiaomi 14 Ultra smartphone in a metal and leather case is equipped with a 4-module camera with a matrix resolution of 50 MP. Night mode and dual LED flash fill the frames with brightness in low light conditions. The content is broadcast on a 6.73-inch frameless display with a resolution of 3200x1440 pixels. The refresh rate of 120 Hz does not allow delays when changing dynamic scenes. The computing power of the Xiaomi 14 Ultra consists of an 8-core Qualcomm Snapdragon 8 Gen 3 processor and 16 GB of RAM. The 5000 mAh battery supports wireless reverse charging to replenish the energy of various devices. Hi-Res Audio and Dolby Atmos guarantee surround sound playback. Data is stored in the built-in memory of 512 GB.",
                ru: "Смартфон Xiaomi 14 Ultra в металлическом и кожаном корпусе оснащен 4-модульной камерой с разрешением матрицы 50 МП. Ночной режим и двойная светодиодная вспышка наполняют кадры яркостью в условиях недостаточной освещенности. Контент транслируется на 6,73-дюймовый безрамочный дисплей с разрешением 3200x1440 пикселей. Частота обновления 120 Гц не допускает задержек при смене динамичных сцен. Вычислительная мощность Xiaomi 14 Ultra состоит из 8-ядерного процессора Qualcomm Snapdragon 8 Gen 3 и 16 ГБ оперативной памяти. Аккумулятор емкостью 5000 мАч поддерживает беспроводную обратную зарядку для восполнения энергии различных устройств. Hi-Res Audio и Dolby Atmos гарантируют воспроизведение объемного звука. Данные хранятся во встроенной памяти объемом 512 ГБ."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-14-ultra-16-512gb-black-400283602?utm_source=google&utm_medium=organic&utm_campaign=google&utm_referrer=google", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/5c83fb95d123ed20/673-smartfon-xiaomi-14-ultra-512-gb-cernyj/", class: "orange" }
            ]
        },
        "50-75_4/5_4/5_4/5_4/5_+_128GB_8GB": {
            name: "Samsung Galaxy S24 FE",
            image: "/images/s24fe.jpg",
            details: {
                en: "Galaxy S24 FE with enhanced performance for smooth multitasking. Enjoy immersive, realistic gaming with the Samsung Exynos 2400e processor. Immerse yourself in engaging content that’s brighter and more colorful than ever with the improved Dynamic AMOLED 2X display. Enjoy a larger, more immersive viewing experience with narrow bezels.",
                ru: "Galaxy S24 FE с повышенной производительностью, обеспечивающей плавную работу в режиме многозадачности. Наслаждайтесь увлекательной и реалистичной игрой благодаря процессору Samsung Exynos 2400e. Погрузитесь в увлекательный контент, который теперь ярче и красочнее, чем когда-либо, благодаря улучшенному дисплею Dynamic AMOLED 2X. Оцените удобство просмотра контента на экране большего размера с тонкими рамками."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-s24-fe-8-128gb-grafitovyi-30075194", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/74eb0fa77981d582/67-smartfon-samsung-galaxy-s24-fe-256-gb-seryj/", class: "orange" }
            ]
        },
        "50-75_4/5_4/5_4/5_4/5_+_256GB_8GB": {
            name: "Samsung Galaxy S24 FE",
            image: "/images/s24fe.jpg",
            details: {
                en: "Galaxy S24 FE with enhanced performance for smooth multitasking. Enjoy immersive, realistic gaming with the Samsung Exynos 2400e processor. Immerse yourself in engaging content that’s brighter and more colorful than ever with the improved Dynamic AMOLED 2X display. Enjoy a larger, more immersive viewing experience with narrow bezels.",
                ru: "Galaxy S24 FE с повышенной производительностью, обеспечивающей плавную работу в режиме многозадачности. Наслаждайтесь увлекательной и реалистичной игрой благодаря процессору Samsung Exynos 2400e. Погрузитесь в увлекательный контент, который теперь ярче и красочнее, чем когда-либо, благодаря улучшенному дисплею Dynamic AMOLED 2X. Оцените удобство просмотра контента на экране большего размера с тонкими рамками."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-s24-fe-8-128gb-grafitovyi-30075194", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/74eb0fa77981d582/67-smartfon-samsung-galaxy-s24-fe-256-gb-seryj/", class: "orange" }
            ]
        },
        "50-75_4/5_4/5_4/5_4/5_+_512GB_8GB": {
            name: "Samsung Galaxy S24 FE",
            image: "/images/s24fe.jpg",
            details: {
                en: "Galaxy S24 FE with enhanced performance for smooth multitasking. Enjoy immersive, realistic gaming with the Samsung Exynos 2400e processor. Immerse yourself in engaging content that’s brighter and more colorful than ever with the improved Dynamic AMOLED 2X display. Enjoy a larger, more immersive viewing experience with narrow bezels.",
                ru: "Galaxy S24 FE с повышенной производительностью, обеспечивающей плавную работу в режиме многозадачности. Наслаждайтесь увлекательной и реалистичной игрой благодаря процессору Samsung Exynos 2400e. Погрузитесь в увлекательный контент, который теперь ярче и красочнее, чем когда-либо, благодаря улучшенному дисплею Dynamic AMOLED 2X. Оцените удобство просмотра контента на экране большего размера с тонкими рамками."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-s24-fe-8-128gb-grafitovyi-30075194", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/74eb0fa77981d582/67-smartfon-samsung-galaxy-s24-fe-256-gb-seryj/", class: "orange" }
            ]
        },
        "25-50_2/5_3/5_3/5_3/5_+_128GB_8GB": {
            name: "Google Pixel 7a",
            image: "/images/pixel7a.jpg",
            details: {
                en: "The Google Pixel 7a smartphone with the 8-core flagship Google Tensor G2 processor pleasantly surprises even sophisticated users with its performance. Its 6.1-inch screen is protected by Gorilla Glass 3 from scratches. The OLED display resolution is 2400x1080 pixels. The plastic charcoal-gray case is protected from moisture and dust according to the IP67 standard. For contactless payment, the Google Pixel 7a was equipped with an NFC module, and for clear voice sound during calls and video calls - a dual microphone with noise reduction. To store applications and many files, the smartphone received 128 GB of internal memory.",
                ru: "Смартфон Google Pixel 7a с 8-ядерным флагманским процессором Google Tensor G2 приятно удивляет своей производительностью даже искушенных пользователей. Его 6.1-дюймовый экран защищен покрытием Gorilla Glass 3 от царапин. Разрешение OLED-дисплея составляет 2400x1080 пикс. Пластиковый угольно-серый корпус защищен от влаги и пыли по стандарту IP67. Для бесконтактной оплаты Google Pixel 7a был оснащен модулем NFC, а для чистого звучания голоса во время звонков и видеосвязи – двойной микрофон с шумоподавлением. Для хранения приложений и множества файлов смартфон получил 128 ГБ встроенной памяти."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-google-pixel-7a-8-128gb-charcoal-400180228", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/38ad56c70e8ced20/61-smartfon-google-pixel-7a-128-gb-seryj/", class: "orange" }
            ]
        },
        "25-50_3/5_4/5_4/5_4/5_+_128GB_8GB": {
            name: "Google Pixel 8a",
            image: "/images/pixel8a.webp",
            details: {
                en: "The Google Pixel 8 smartphone is equipped with a 6.2-inch display with a Corning Gorilla Glass Victus coating, which prevents the risk of scratches. The OLED matrix helps display bright colors and timely frame changes in saturated scenes. Capture of distant elements is guaranteed by a dual-module camera with a viewing angle of 125.8. The Astrophotography option allows you to capture the starry sky. The Bokeh effect blurs the background, focusing on the main object. The computing power of the Google Pixel 8 smartphone consists of a 9-core processor and 8 GB of RAM. Users can quickly launch applications and surf between windows. Stereo speakers are responsible for the multidimensionality of the sound. The battery capacity of 4575 mAh is designed for 72 hours of standby time. Data is stored in the built-in memory of 128 GB.",
                ru: "Смартфон Google Pixel 8 оборудован 6.2-дюймовым дисплеем с покрытием Corning Gorilla Glass Victus, которое предупреждает риск появления царапин. Отображению ярких цветов и своевременной смене кадров при насыщенных сценах способствует OLED-матрица. Захват удаленных элементов гарантирует двухмодульная камера с углом обзора 125.8. Опция «Астрофотография» позволяет запечатлеть звездное небо. Эффект Боке размывает задний фон, фокусируя внимание на главном объекте. Вычислительная мощность смартфона Google Pixel 8 состоит из 9-ядерного процессора и 8 ГБ оперативной памяти. Пользователи могут быстро запускать приложения и серфить между окнами. За многомерность звучания несут ответственность стереодинамики. Энергия аккумулятора емкостью 4575 мАч рассчитана на 72 ч работы в режиме ожидания. Хранение данных производится во встроенной памяти объемом 128 ГБ."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-google-pixel-8a-8-128gb-obsidian-400365931", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/b9d5402272f25565/62-smartfon-google-pixel-8-128-gb-cernyj/", class: "orange" }
            ]
        },
        "50-75_3/5_4/5_4/5_4/5_+_256GB_8GB": {
            name: "Google Pixel 8a",
            image: "/images/pixel8a.webp",
            details: {
                en: "The Google Pixel 8 smartphone is equipped with a 6.2-inch display with a Corning Gorilla Glass Victus coating, which prevents the risk of scratches. The OLED matrix helps display bright colors and timely frame changes in saturated scenes. Capture of distant elements is guaranteed by a dual-module camera with a viewing angle of 125.8. The Astrophotography option allows you to capture the starry sky. The Bokeh effect blurs the background, focusing on the main object. The computing power of the Google Pixel 8 smartphone consists of a 9-core processor and 8 GB of RAM. Users can quickly launch applications and surf between windows. Stereo speakers are responsible for the multidimensionality of the sound. The battery capacity of 4575 mAh is designed for 72 hours of standby time. Data is stored in the built-in memory of 128 GB.",
                ru: "Смартфон Google Pixel 8 оборудован 6.2-дюймовым дисплеем с покрытием Corning Gorilla Glass Victus, которое предупреждает риск появления царапин. Отображению ярких цветов и своевременной смене кадров при насыщенных сценах способствует OLED-матрица. Захват удаленных элементов гарантирует двухмодульная камера с углом обзора 125.8. Опция «Астрофотография» позволяет запечатлеть звездное небо. Эффект Боке размывает задний фон, фокусируя внимание на главном объекте. Вычислительная мощность смартфона Google Pixel 8 состоит из 9-ядерного процессора и 8 ГБ оперативной памяти. Пользователи могут быстро запускать приложения и серфить между окнами. За многомерность звучания несут ответственность стереодинамики. Энергия аккумулятора емкостью 4575 мАч рассчитана на 72 ч работы в режиме ожидания. Хранение данных производится во встроенной памяти объемом 128 ГБ."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-google-pixel-8a-8-128gb-obsidian-400365931", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/b9d5402272f25565/62-smartfon-google-pixel-8-128-gb-cernyj/", class: "orange" }
            ]
        },
        "50-75_5/5_4/5_4/5_5/5_+_128GB_12GB": {
            name: "Google Pixel 9",
            image: "/images/pixel9.jpg",
            details: {
                en: "Google Pixel 9. Take clear, bright photos in low light with Night Sight and the 50MP wide-angle camera. The 6.3-inch display is brighter than ever. It runs at up to 120Hz for smooth gaming, scrolling, and app switching. Google’s Tensor G4 is the most powerful chip ever in a Pixel, designed to power Google’s advanced AI. And with 12GB of RAM, the Pixel 9 feels fast and fluid. The Pixel 9’s battery lasts more than 24 hours, and up to 100 hours in Extreme Battery Saver mode. And it can charge up to 55% in about 30 minutes.",
                ru: "Google Pixel 9.Получайте четкие и яркие фотографии при слабом освещении с помощью функции Night Sight и широкоугольной камеры с разрешением 50 МП.6,3-дюймовый дисплей стал ярче, чем когда-либо. Он работает на частоте до 120 Гц для плавной игры, прокрутки и переключения приложений.Google Tensor G4 — самый мощный чип Pixel, разработанный для работы с передовым ИИ Google. А благодаря 12 ГБ оперативной памяти Pixel 9 работает быстро и плавно. Аккумулятор Pixel 9 может работать более 24 часов и до 100 часов в режиме энергосбережения Extreme Battery Saver. И он может заряжаться до 55% примерно за 30 минут."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-google-pixel-9-12-256gb-g-400391988", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/f06665ed7009d9cb/63-smartfon-google-pixel-9-128-gb-cernyj/", class: "orange" }
            ]
        },
        "50-75_5/5_4/5_4/5_5/5_+_256GB_12GB": {
            name: "Google Pixel 9",
            image: "/images/pixel9.jpg",
            details: {
                en: "Google Pixel 9. Take clear, bright photos in low light with Night Sight and the 50MP wide-angle camera. The 6.3-inch display is brighter than ever. It runs at up to 120Hz for smooth gaming, scrolling, and app switching. Google’s Tensor G4 is the most powerful chip ever in a Pixel, designed to power Google’s advanced AI. And with 12GB of RAM, the Pixel 9 feels fast and fluid. The Pixel 9’s battery lasts more than 24 hours, and up to 100 hours in Extreme Battery Saver mode. And it can charge up to 55% in about 30 minutes.",
                ru: "Google Pixel 9.Получайте четкие и яркие фотографии при слабом освещении с помощью функции Night Sight и широкоугольной камеры с разрешением 50 МП.6,3-дюймовый дисплей стал ярче, чем когда-либо. Он работает на частоте до 120 Гц для плавной игры, прокрутки и переключения приложений.Google Tensor G4 — самый мощный чип Pixel, разработанный для работы с передовым ИИ Google. А благодаря 12 ГБ оперативной памяти Pixel 9 работает быстро и плавно. Аккумулятор Pixel 9 может работать более 24 часов и до 100 часов в режиме энергосбережения Extreme Battery Saver. И он может заряжаться до 55% примерно за 30 минут."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-google-pixel-9-12-256gb-g-400391988", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/f06665ed7009d9cb/63-smartfon-google-pixel-9-128-gb-cernyj/", class: "orange" }
            ]
        },
        "75-100_5/5_4/5_4/5_5/5_+_256GB_16GB": {
            name: "Google Pixel 9 pro",
            image: "/images/pixel9pro.webp",
            details: {
                en: "Google Pixel 9 pro. Get clear, bright photos in low light with Night Sight and the 50MP wide-angle camera. The 6.3-inch display is brighter than ever, and runs at up to 120Hz for smooth gaming, scrolling, and app switching. Google Tensor G4 is the most powerful chip ever in a Pixel, designed to power Google’s advanced AI. And with 12GB of RAM, Pixel 9 runs fast and smoothly. The Pixel 9’s battery lasts more than 24 hours, and up to 100 hours in Extreme Battery Saver mode. And it can charge up to 55% in about 30 minutes.",
                ru: "Google Pixel 9 pro. Получайте четкие и яркие фотографии при слабом освещении с помощью функции Night Sight и широкоугольной камеры с разрешением 50 МП.6,3-дюймовый дисплей стал ярче, чем когда-либо. Он работает на частоте до 120 Гц для плавной игры, прокрутки и переключения приложений.Google Tensor G4 — самый мощный чип Pixel, разработанный для работы с передовым ИИ Google. А благодаря 12 ГБ оперативной памяти Pixel 9 работает быстро и плавно. Аккумулятор Pixel 9 может работать более 24 часов и до 100 часов в режиме энергосбережения Extreme Battery Saver. И он может заряжаться до 55% примерно за 30 минут."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-google-pixel-9-pro-16-256gb-obsidian-400408044/overview", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/b23c1a2baad0d582/68-smartfon-google-pixel-9-pro-xl-256-gb-cernyj/", class: "orange" }
            ]
        },
        "100-125_5/5_4/5_4/5_5/5_+_256GB_16GB": {
            name: "Google Pixel 9 pro",
            image: "/images/pixel9pro.webp",
            details: {
                en: "Google Pixel 9 pro. Get clear, bright photos in low light with Night Sight and the 50MP wide-angle camera. The 6.3-inch display is brighter than ever, and runs at up to 120Hz for smooth gaming, scrolling, and app switching. Google Tensor G4 is the most powerful chip ever in a Pixel, designed to power Google’s advanced AI. And with 12GB of RAM, Pixel 9 runs fast and smoothly. The Pixel 9’s battery lasts more than 24 hours, and up to 100 hours in Extreme Battery Saver mode. And it can charge up to 55% in about 30 minutes.",
                ru: "Google Pixel 9 pro. Получайте четкие и яркие фотографии при слабом освещении с помощью функции Night Sight и широкоугольной камеры с разрешением 50 МП.6,3-дюймовый дисплей стал ярче, чем когда-либо. Он работает на частоте до 120 Гц для плавной игры, прокрутки и переключения приложений.Google Tensor G4 — самый мощный чип Pixel, разработанный для работы с передовым ИИ Google. А благодаря 12 ГБ оперативной памяти Pixel 9 работает быстро и плавно. Аккумулятор Pixel 9 может работать более 24 часов и до 100 часов в режиме энергосбережения Extreme Battery Saver. И он может заряжаться до 55% примерно за 30 минут."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-google-pixel-9-pro-16-256gb-obsidian-400408044/overview", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/b23c1a2baad0d582/68-smartfon-google-pixel-9-pro-xl-256-gb-cernyj/", class: "orange" }
            ]
        },
        "75-100_5/5_5/5_5/5_4/5_+_512GB_12GB": {
            name: "Oneplus 13",
            image: "/images/oneplus13.jpg",
            details: {
                en: "The OnePlus 13 flagship smartphone is billed as one of the best devices on the market, combining impressive specifications with cutting-edge technology. With this model, OnePlus continues its tradition of creating powerful and stylish smartphones that are ideal for demanding users.",
                ru: "Флагманский смартфон OnePlus 13 объявлен как одно из лучших устройств на рынке, объединяющее в себе впечатляющие характеристики и передовые технологии. В этой модели компания OnePlus продолжает традицию создания мощных и стильных смартфонов, которые идеально подходят для требовательных пользователей."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-poco-x6-pro-5g-12-512gb-black-400285733", class: "blue" },
                { name: "Quke", url: "https://www.dns-shop.ru/product/d54b3faa997fed20/667-smartfon-poco-x6-pro-256-gb-cernyj/", class: "orange" }
            ]
        },
        "75-100_5/5_5/5_5/5_4/5_+_512GB_16GB": {
            name: "Oneplus 13",
            image: "/images/oneplus13.jpg",
            details: {
                en: "The OnePlus 13 flagship smartphone is billed as one of the best devices on the market, combining impressive specifications with cutting-edge technology. With this model, OnePlus continues its tradition of creating powerful and stylish smartphones that are ideal for demanding users.",
                ru: "Флагманский смартфон OnePlus 13 объявлен как одно из лучших устройств на рынке, объединяющее в себе впечатляющие характеристики и передовые технологии. В этой модели компания OnePlus продолжает традицию создания мощных и стильных смартфонов, которые идеально подходят для требовательных пользователей."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-poco-x6-pro-5g-12-512gb-black-400285733", class: "blue" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/d54b3faa997fed20/667-smartfon-poco-x6-pro-256-gb-cernyj/", class: "orange" }
            ]
        },
        "75-100_5/5_5/5_5/5_4/5_+_1024GB_24GB": {
            name: "Oneplus 13",
            image: "/images/oneplus13.jpg",
            details: {
                en: "The OnePlus 13 flagship smartphone is billed as one of the best devices on the market, combining impressive specifications with cutting-edge technology. With this model, OnePlus continues its tradition of creating powerful and stylish smartphones that are ideal for demanding users.",
                ru: "Флагманский смартфон OnePlus 13 объявлен как одно из лучших устройств на рынке, объединяющее в себе впечатляющие характеристики и передовые технологии. В этой модели компания OnePlus продолжает традицию создания мощных и стильных смартфонов, которые идеально подходят для требовательных пользователей."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-poco-x6-pro-5g-12-512gb-black-400285733", class: "blue" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/d54b3faa997fed20/667-smartfon-poco-x6-pro-256-gb-cernyj/", class: "orange" }
            ]
        },
        "50-75_5/5_5/5_4/5_4/5_+_256GB_8GB": {
            name: "Oneplus 12R Ace 3",
            image: "/images/oneplus12r.jpg",
            details: {
                en: "The OnePlus Ace 3 smartphone is equipped with a 6.78-inch 10-bit AMOLED BOE X1 display with a resolution of 2780 × 1264 pixels (450 ppi). The dynamic refresh rate is from 1 to 120 Hz. The typical display brightness is 1600 nits, the peak is 4500 nits. There is also support for HDR10+ and Dolby Vision. Corning Gorilla Glass Victus 2 protects the screen from mechanical damage.",
                ru: "Смартфон OnePlus Ace 3 оснастили 6,78-дюймовым десятибитным AMOLED-экраном BOE X1 с разрешением 2780 × 1264 пикселя (450 ppi). Динамическая частота обновления составляет от 1 до 120 Гц. Типичная яркость дисплея равняется 1600 нит, пиковая — 4500 нит. Также есть поддержка HDR10+ и Dolby Vision. От механических повреждений экран защищает стекло Corning Gorilla Glass Victus 2."
            },
            links: [
                { name: "Quke", url: "https://quke.ru/shop/UID_135487_oneplus_12r_ace_3_16512gb_blue.html?srsltid=AfmBOooIzABW7nfN4gLdZPH3YMTKOwh68S4Q_HS3XYKUfpto6L1gp_U-", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/9473c651df84ed20/smartfon-oneplus-ace-3-12256gb-black/", class: "orange" }
            ]
        },
        "50-75_5/5_5/5_4/5_4/5_+_256GB_12GB": {
            name: "Oneplus 12R Ace 3",
            image: "/images/oneplus12r.jpg",
            details: {
                en: "The OnePlus Ace 3 smartphone is equipped with a 6.78-inch 10-bit AMOLED BOE X1 display with a resolution of 2780 × 1264 pixels (450 ppi). The dynamic refresh rate is from 1 to 120 Hz. The typical display brightness is 1600 nits, the peak is 4500 nits. There is also support for HDR10+ and Dolby Vision. Corning Gorilla Glass Victus 2 protects the screen from mechanical damage.",
                ru: "Смартфон OnePlus Ace 3 оснастили 6,78-дюймовым десятибитным AMOLED-экраном BOE X1 с разрешением 2780 × 1264 пикселя (450 ppi). Динамическая частота обновления составляет от 1 до 120 Гц. Типичная яркость дисплея равняется 1600 нит, пиковая — 4500 нит. Также есть поддержка HDR10+ и Dolby Vision. От механических повреждений экран защищает стекло Corning Gorilla Glass Victus 2."
            },
            links: [
                { name: "Quke", url: "https://quke.ru/shop/UID_135487_oneplus_12r_ace_3_16512gb_blue.html?srsltid=AfmBOooIzABW7nfN4gLdZPH3YMTKOwh68S4Q_HS3XYKUfpto6L1gp_U-", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/9473c651df84ed20/smartfon-oneplus-ace-3-12256gb-black/", class: "orange" }
            ]
        },
        "50-75_5/5_5/5_4/5_4/5_+_512GB_16GB": {
            name: "Oneplus 12R Ace 3",
            image: "/images/oneplus12r.jpg",
            details: {
                en: "The OnePlus Ace 3 smartphone is equipped with a 6.78-inch 10-bit AMOLED BOE X1 display with a resolution of 2780 × 1264 pixels (450 ppi). The dynamic refresh rate is from 1 to 120 Hz. The typical display brightness is 1600 nits, the peak is 4500 nits. There is also support for HDR10+ and Dolby Vision. Corning Gorilla Glass Victus 2 protects the screen from mechanical damage.",
                ru: "Смартфон OnePlus Ace 3 оснастили 6,78-дюймовым десятибитным AMOLED-экраном BOE X1 с разрешением 2780 × 1264 пикселя (450 ppi). Динамическая частота обновления составляет от 1 до 120 Гц. Типичная яркость дисплея равняется 1600 нит, пиковая — 4500 нит. Также есть поддержка HDR10+ и Dolby Vision. От механических повреждений экран защищает стекло Corning Gorilla Glass Victus 2."
            },
            links: [
                { name: "Quke", url: "https://quke.ru/shop/UID_135487_oneplus_12r_ace_3_16512gb_blue.html?srsltid=AfmBOooIzABW7nfN4gLdZPH3YMTKOwh68S4Q_HS3XYKUfpto6L1gp_U-", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/9473c651df84ed20/smartfon-oneplus-ace-3-12256gb-black/", class: "orange" }
            ]
        },
        "50-75_5/5_5/5_4/5_4/5_+_1024GB_16GB": {
            name: "Oneplus 12R Ace 3",
            image: "/images/oneplus12r.jpg",
            details: {
                en: "The OnePlus Ace 3 smartphone is equipped with a 6.78-inch 10-bit AMOLED BOE X1 display with a resolution of 2780 × 1264 pixels (450 ppi). The dynamic refresh rate is from 1 to 120 Hz. The typical display brightness is 1600 nits, the peak is 4500 nits. There is also support for HDR10+ and Dolby Vision. Corning Gorilla Glass Victus 2 protects the screen from mechanical damage.",
                ru: "Смартфон OnePlus Ace 3 оснастили 6,78-дюймовым десятибитным AMOLED-экраном BOE X1 с разрешением 2780 × 1264 пикселя (450 ppi). Динамическая частота обновления составляет от 1 до 120 Гц. Типичная яркость дисплея равняется 1600 нит, пиковая — 4500 нит. Также есть поддержка HDR10+ и Dolby Vision. От механических повреждений экран защищает стекло Corning Gorilla Glass Victus 2."
            },
            links: [
                { name: "Quke", url: "https://quke.ru/shop/UID_135487_oneplus_12r_ace_3_16512gb_blue.html?srsltid=AfmBOooIzABW7nfN4gLdZPH3YMTKOwh68S4Q_HS3XYKUfpto6L1gp_U-", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/9473c651df84ed20/smartfon-oneplus-ace-3-12256gb-black/", class: "orange" }
            ]
        },
        "25-50_2/5_4/5_3/5_3/5_+_256GB_8GB": {
            name: "realme 13+",
            image: "/images/realme13+.jpg",
            details: {
                en: "With realme 13+ 5G, you don't have to worry about lack of performance or battery life. The smartphone is powered by a high-performance and energy-efficient MediaTek Dimensity 7300 processor based on a 4 nm process technology, it scores more than 750,000 points in the AnTuTu performance test. A capacious 5000 mAh battery allows you to use the maximum functionality of the smartphone throughout the day. The duration of 1 gaming session can be up to 9 hours without recharging. If the smartphone unexpectedly runs out of battery, then a fast SuperDart 80 W charge for 5 minutes will be enough for another hour of play. The battery charges to 50% in just 19 minutes, and fully in 47 minutes.",
                ru: "С realme 13+ 5G вам не страшна нехватка производительности или автономности. В основе смартфона используется высокопроизводительный и энергоэффективный процессор MediaTek Dimensity 7300, основанный на техпроцессе 4 нм, он набирает больше 750000 баллов в тесте производительности AnTuTu. Емкий аккумулятор 5000 мАч позволяет вам использовать максимальный функционал смартфона в течение всего дня. Длительность 1 игровой сессии может составлять до 9 часов без подзарядки. Если смартфон неожиданно разрядится, то быстрой зарядки SuperDart 80 Вт в течение 5 минут хватит еще на час игры. На 50% аккумулятор заряжается всего за 19 минут, а полностью за 47 минут."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-realme-13--5g-12-256gb-purple-400377191", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/5d7de0797fc8d582/667-smartfon-realme-13-5g-256-gb-fioletovyj/", class: "orange" }
            ]
        },
        "125+_5/5_5/5_5/5_5/5_+_128GB_8GB": {
            name: "Apple iPhone 16 Pro",
            image: "/images/iphone-16-pro-black-titanium-2-1000x1000.jpg",
            details: {
                en: "The Apple iPhone 16 Pro 128 GB smartphone in black has a 6.3-inch screen with a resolution of 2622x1206 pixels and an AMOLED matrix, the display maintains comfortable color rendering in bright sunlight and maintains ultra-low brightness so as not to blind at night. The screen has an oleophobic coating that is resistant to scratches and abrasions. The model has a Li-Ion battery, it provides up to 85 hours of battery life in talk mode. The device supports fast charging technology, which allows you to charge the phone from 0 to 50% in half an hour.",
                ru: "Смартфон Apple iPhone 16 Pro 128 ГБ в черном цвете оснащен экраном 6.3 дюйма с разрешением 2622x1206 точек и AMOLED-матрицей, дисплей сохраняет комфортную цветопередачу под ярким солнцем и поддерживает сверхнизкую яркость, чтобы не слепить ночью. Экран имеет олеофобное покрытие, которое устойчиво к царапинам и потертостям. В модели установлен Li-Ion-аккумулятор, он обеспечивает до 85 часов автономной работы в режиме разговора. Устройство поддерживает технологию быстрой зарядки, которая позволяет подзарядить телефон с 0 до 50% за полчаса."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-realme-13--5g-12-256gb-purple-400377191", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/5d7de0797fc8d582/667-smartfon-realme-13-5g-256-gb-fioletovyj/", class: "orange" }
            ]
        },
        "125+_5/5_5/5_5/5_5/5_+_256GB_8GB": {
            name: "Apple iPhone 16 Pro",
            image: "/images/iphone-16-pro-black-titanium-2-1000x1000.jpg",
            details: {
                en: "The Apple iPhone 16 Pro 128 GB smartphone in black has a 6.3-inch screen with a resolution of 2622x1206 pixels and an AMOLED matrix, the display maintains comfortable color rendering in bright sunlight and maintains ultra-low brightness so as not to blind at night. The screen has an oleophobic coating that is resistant to scratches and abrasions. The model has a Li-Ion battery, it provides up to 85 hours of battery life in talk mode. The device supports fast charging technology, which allows you to charge the phone from 0 to 50% in half an hour.",
                ru: "Смартфон Apple iPhone 16 Pro 128 ГБ в черном цвете оснащен экраном 6.3 дюйма с разрешением 2622x1206 точек и AMOLED-матрицей, дисплей сохраняет комфортную цветопередачу под ярким солнцем и поддерживает сверхнизкую яркость, чтобы не слепить ночью. Экран имеет олеофобное покрытие, которое устойчиво к царапинам и потертостям. В модели установлен Li-Ion-аккумулятор, он обеспечивает до 85 часов автономной работы в режиме разговора. Устройство поддерживает технологию быстрой зарядки, которая позволяет подзарядить телефон с 0 до 50% за полчаса."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-realme-13--5g-12-256gb-purple-400377191", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/5d7de0797fc8d582/667-smartfon-realme-13-5g-256-gb-fioletovyj/", class: "orange" }
            ]
        },
        "125+_5/5_5/5_5/5_5/5_+_512GB_8GB": {
            name: "Apple iPhone 16 Pro",
            image: "/images/iphone-16-pro-black-titanium-2-1000x1000.jpg",
            details: {
                en: "The Apple iPhone 16 Pro 128 GB smartphone in black has a 6.3-inch screen with a resolution of 2622x1206 pixels and an AMOLED matrix, the display maintains comfortable color rendering in bright sunlight and maintains ultra-low brightness so as not to blind at night. The screen has an oleophobic coating that is resistant to scratches and abrasions. The model has a Li-Ion battery, it provides up to 85 hours of battery life in talk mode. The device supports fast charging technology, which allows you to charge the phone from 0 to 50% in half an hour.",
                ru: "Смартфон Apple iPhone 16 Pro 128 ГБ в черном цвете оснащен экраном 6.3 дюйма с разрешением 2622x1206 точек и AMOLED-матрицей, дисплей сохраняет комфортную цветопередачу под ярким солнцем и поддерживает сверхнизкую яркость, чтобы не слепить ночью. Экран имеет олеофобное покрытие, которое устойчиво к царапинам и потертостям. В модели установлен Li-Ion-аккумулятор, он обеспечивает до 85 часов автономной работы в режиме разговора. Устройство поддерживает технологию быстрой зарядки, которая позволяет подзарядить телефон с 0 до 50% за полчаса."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-realme-13--5g-12-256gb-purple-400377191", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/5d7de0797fc8d582/667-smartfon-realme-13-5g-256-gb-fioletovyj/", class: "orange" }
            ]
        },
        "125+_5/5_5/5_5/5_5/5_+_1024GB_8GB": {
            name: "Apple iPhone 16 Pro",
            image: "/images/iphone-16-pro-black-titanium-2-1000x1000.jpg",
            details: {
                en: "The Apple iPhone 16 Pro 128 GB smartphone in black has a 6.3-inch screen with a resolution of 2622x1206 pixels and an AMOLED matrix, the display maintains comfortable color rendering in bright sunlight and maintains ultra-low brightness so as not to blind at night. The screen has an oleophobic coating that is resistant to scratches and abrasions. The model has a Li-Ion battery, it provides up to 85 hours of battery life in talk mode. The device supports fast charging technology, which allows you to charge the phone from 0 to 50% in half an hour.",
                ru: "Смартфон Apple iPhone 16 Pro 128 ГБ в черном цвете оснащен экраном 6.3 дюйма с разрешением 2622x1206 точек и AMOLED-матрицей, дисплей сохраняет комфортную цветопередачу под ярким солнцем и поддерживает сверхнизкую яркость, чтобы не слепить ночью. Экран имеет олеофобное покрытие, которое устойчиво к царапинам и потертостям. В модели установлен Li-Ion-аккумулятор, он обеспечивает до 85 часов автономной работы в режиме разговора. Устройство поддерживает технологию быстрой зарядки, которая позволяет подзарядить телефон с 0 до 50% за полчаса."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-realme-13--5g-12-256gb-purple-400377191", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/5d7de0797fc8d582/667-smartfon-realme-13-5g-256-gb-fioletovyj/", class: "orange" }
            ]
        },
        "100-125_5/5_5/5_4/5_4/5_+_512GB_16GB": {
            name: "Asus ROG Phone 9 Pro",
            image: "/images/asus9pro.jpg",
            details: {
                en: "The Asus Rog Phone 9 pro smartphone is equipped with a Qualcomm Snapdragon 8 Elite processor with a clock frequency of 4.320 GHz. The total number of CPUs is 8 pcs. The graphics on the device are based on the Adreno 830 video processor. It has 512 GB of internal memory and 16 GB of RAM. The smartphone runs on the Android 15 operating system. There are 3 main cameras on the device, with a resolution of 50 MP, 13 MP, 32 MP, Front cameras - 1 pc., with a resolution of 32 MP. The battery is 5800 mAh, non-removable. A USB Type-C connector is used for charging. Fast charging function - yes, wireless charging - yes.",
                ru: "Смартфон Asus Rog Phone 9 pro оснащен процессором Qualcomm Snapdragon 8 Elite с тактовой частотой 4.320 ГГц. При этом общее количество CPU – 8 шт. Графика на устройстве работает на базе видеопроцессора Adreno 830. Имеет 512 ГБ встроенной памяти и 16 ГБ оперативной. Смартфон работает на базе операционной системы Android 15. Основных камер на устройстве 3 шт., разрешением 50 Мп, 13 Мп, 32 Мп, Фронтальных камер – 1 шт., разрешением 32 Мп. Аккумулятор объемом 5800 мАч, несъемный. Для зарядки используется разъем USB Type-C. Функция быстрой зарядки – есть, беспроводная зарядка – есть."
            },
            links: [
                { name: "Cifrus", url: "https://www.cifrus.ru/description/1/asus_rog_phone_9_pro_16_512gb_5g_black_global", class: "red" },
                { name: "Quke", url: "https://quke.ru/shop/UID_141109_asus_rog_phone_9_pro_16512gb_black.html", class: "orange" }
            ]
        },
        "125+_5/5_5/5_4/5_4/5_+_1024GB_16GB": {
            name: "Asus ROG Phone 9 Pro",
            image: "/images/asus9pro.jpg",
            details: {
                en: "The Asus Rog Phone 9 pro smartphone is equipped with a Qualcomm Snapdragon 8 Elite processor with a clock frequency of 4.320 GHz. The total number of CPUs is 8 pcs. The graphics on the device are based on the Adreno 830 video processor. It has 512 GB of internal memory and 16 GB of RAM. The smartphone runs on the Android 15 operating system. There are 3 main cameras on the device, with a resolution of 50 MP, 13 MP, 32 MP, Front cameras - 1 pc., with a resolution of 32 MP. The battery is 5800 mAh, non-removable. A USB Type-C connector is used for charging. Fast charging function - yes, wireless charging - yes.",
                ru: "Смартфон Asus Rog Phone 9 pro оснащен процессором Qualcomm Snapdragon 8 Elite с тактовой частотой 4.320 ГГц. При этом общее количество CPU – 8 шт. Графика на устройстве работает на базе видеопроцессора Adreno 830. Имеет 512 ГБ встроенной памяти и 16 ГБ оперативной. Смартфон работает на базе операционной системы Android 15. Основных камер на устройстве 3 шт., разрешением 50 Мп, 13 Мп, 32 Мп, Фронтальных камер – 1 шт., разрешением 32 Мп. Аккумулятор объемом 5800 мАч, несъемный. Для зарядки используется разъем USB Type-C. Функция быстрой зарядки – есть, беспроводная зарядка – есть."
            },
            links: [
                { name: "Cifrus", url: "https://www.cifrus.ru/description/1/asus_rog_phone_9_pro_16_512gb_5g_black_global", class: "red" },
                { name: "Quke", url: "https://quke.ru/shop/UID_141109_asus_rog_phone_9_pro_16512gb_black.html", class: "orange" }
            ]
        },
        "25-50_4/5_4/5_3/5_3/5_+_256GB_8GB": {
            name: "Xiaomi Poco F5 5G",
            image: "/images/pocof5.jpg",
            details: {
                en: "The POCO F5 smartphone comes in a white case with an exquisite pattern. Inside the device, there is a powerful computing potential provided by the Snapdragon 7+ Gen 2 processor platform. In addition to 12 GB of RAM, it provides flagship levels of responsiveness and performance. The vapor chamber system effectively cools the components.",
                ru: "Смартфон POCO F5 поставляется в белом корпусе с изысканным узором. Внутри устройства скрывается мощный вычислительный потенциал, который обеспечивает платформа с процессором Snapdragon 7+ Gen 2. Помимо 12 ГБ оперативной памяти, он обеспечивает флагманский уровень отзывчивости и производительности. Система испарительной камеры эффективно охлаждает компоненты."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-poco-f5-12-256gb-black-400132493", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/d6e01b17d41ded20/667-smartfon-poco-f5-256-gb-belyj/", class: "orange" }
            ]
        },
        "25-50_4/5_4/5_3/5_3/5_+_256GB_12GB": {
            name: "Xiaomi Poco F5 5G",
            image: "/images/pocof5.jpg",
            details: {
                en: "The POCO F5 smartphone comes in a white case with an exquisite pattern. Inside the device, there is a powerful computing potential provided by the Snapdragon 7+ Gen 2 processor platform. In addition to 12 GB of RAM, it provides flagship levels of responsiveness and performance. The vapor chamber system effectively cools the components.",
                ru: "Смартфон POCO F5 поставляется в белом корпусе с изысканным узором. Внутри устройства скрывается мощный вычислительный потенциал, который обеспечивает платформа с процессором Snapdragon 7+ Gen 2. Помимо 12 ГБ оперативной памяти, он обеспечивает флагманский уровень отзывчивости и производительности. Система испарительной камеры эффективно охлаждает компоненты."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-poco-f5-12-256gb-black-400132493", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/d6e01b17d41ded20/667-smartfon-poco-f5-256-gb-belyj/", class: "orange" }
            ]
        },
        "25-50_2/5_4/5_2/5_2/5_-_256GB_8GB": {
            name: "Xiaomi Redmi Note 13 Pro 4G",
            image: "/images/note13pro.webp",
            details: {
                en: "TThe Xiaomi Redmi Note 13 Pro smartphone is equipped with a 200-megapixel camera with image stabilization and anti-shake protection. This will allow you to take realistic and detailed photos and shoot Full HD videos. The 6.67-inch AMOLED display with a refresh rate of 120 Hz produces a clear and bright image. Eye protection from blue light and screen flickering is supported. Dual stereo speakers and Dolby Atmos technology provide surround sound.",
                ru: "Смартфон Xiaomi Redmi Note 13 Pro оснащен 200-мегапиксельной камерой со стабилизацией изображения и защитой от сотрясений. Это позволит делать реалистичные и детализированные фотографии и снимать видео в формате Full HD. 6,67-дюймовый AMOLED-дисплей с частотой обновления 120 Гц выдает четкое и яркое изображение. Поддерживается защита глаз от синего света и мерцания экрана. Двойные стереодинамики и технология Dolby Atmos обеспечивают объемный звук."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-pro-8-256gb-midnight-black-400257981", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/807d7b389028ed20/667-smartfon-xiaomi-redmi-note-13-pro-4g-128-gb-zelenyj/", class: "orange" }
            ]
        },
        "25-50_2/5_4/5_2/5_2/5_-_256GB_12GB": {
            name: "Xiaomi Redmi Note 13 Pro 4G",
            image: "/images/note13pro.webp",
            details: {
                en: "The Xiaomi Redmi Note 13 Pro smartphone is equipped with a 200-megapixel camera with image stabilization and anti-shake protection. This will allow you to take realistic and detailed photos and shoot Full HD videos. The 6.67-inch AMOLED display with a refresh rate of 120 Hz produces a clear and bright image. Eye protection from blue light and screen flickering is supported. Dual stereo speakers and Dolby Atmos technology provide surround sound.",
                ru: "Смартфон Xiaomi Redmi Note 13 Pro оснащен 200-мегапиксельной камерой со стабилизацией изображения и защитой от сотрясений. Это позволит делать реалистичные и детализированные фотографии и снимать видео в формате Full HD. 6,67-дюймовый AMOLED-дисплей с частотой обновления 120 Гц выдает четкое и яркое изображение. Поддерживается защита глаз от синего света и мерцания экрана. Двойные стереодинамики и технология Dolby Atmos обеспечивают объемный звук."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-pro-8-256gb-midnight-black-400257981", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/807d7b389028ed20/667-smartfon-xiaomi-redmi-note-13-pro-4g-128-gb-zelenyj/", class: "orange" }
            ]
        },
        "25-50_3/5_4/5_2/5_2/5_-_256GB_8GB": {
            name: "Xiaomi Redmi Note 13 4G",
            image: "/images/note13.jpg",
            details: {
                en: "The Xiaomi Redmi Note 13 smartphone features a 6.67-inch display with Wet Touch technology, thanks to which it will not accidentally operate under the influence of water. The model is protected from splashes and dust according to the IP54 standard. The design includes Dolby Atmos stereo speakers for smooth and rich sound with the effect of complete immersion in the content being viewed. The 5000 mAh battery is capable of retaining up to 80% of its original resource with 1000 full charge cycles thanks to the intelligent charging system. The battery charge is enough for 12 hours of continuous use of the device in navigation mode.",
                ru: "Смартфон Xiaomi Redmi Note 13 оснащен 6,67-дюймовым дисплеем с технологией Wet Touch, благодаря которой он не будет случайно срабатывать под воздействием воды. Модель защищена от брызг и пыли по стандарту IP54. В конструкции предусмотрены стереодинамики Dolby Atmos для плавного и насыщенного звучания с эффектом полного погружения в просматриваемый контент. Аккумулятор емкостью 5000 мАч способен сохранять до 80% своего первоначального ресурса при 1000 полных циклах зарядки благодаря интеллектуальной системе зарядки. Заряда аккумулятора хватает на 12 часов непрерывного использования устройства в режиме навигации."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-8-128gb-midnight-black-400259081", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/282391f78dcced20/667-smartfon-xiaomi-redmi-note-13-128-gb-sinij/", class: "orange" }
            ]
        },
        "25-50_3/5_4/5_2/5_2/5_-_512GB_8GB": {
            name: "Xiaomi Redmi Note 13 4G",
            image: "/images/note13.jpg",
            details: {
                en: "The Xiaomi Redmi Note 13 smartphone features a 6.67-inch display with Wet Touch technology, thanks to which it will not accidentally operate under the influence of water. The model is protected from splashes and dust according to the IP54 standard. The design includes Dolby Atmos stereo speakers for smooth and rich sound with the effect of complete immersion in the content being viewed. The 5000 mAh battery is capable of retaining up to 80% of its original resource with 1000 full charge cycles thanks to the intelligent charging system. The battery charge is enough for 12 hours of continuous use of the device in navigation mode.",
                ru: "Смартфон Xiaomi Redmi Note 13 оснащен 6,67-дюймовым дисплеем с технологией Wet Touch, благодаря которой он не будет случайно срабатывать под воздействием воды. Модель защищена от брызг и пыли по стандарту IP54. В конструкции предусмотрены стереодинамики Dolby Atmos для плавного и насыщенного звучания с эффектом полного погружения в просматриваемый контент. Аккумулятор емкостью 5000 мАч способен сохранять до 80% своего первоначального ресурса при 1000 полных циклах зарядки благодаря интеллектуальной системе зарядки. Заряда аккумулятора хватает на 12 часов непрерывного использования устройства в режиме навигации."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-8-128gb-midnight-black-400259081", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/282391f78dcced20/667-smartfon-xiaomi-redmi-note-13-128-gb-sinij/", class: "orange" }
            ]
        },
        "15-25_2/5_4/5_1/5_2/5_-_256GB__8GB": {
            name: "Xiaomi Redmi Note 13 4G",
            image: "/images/note13.jpg",
            details: {
                en: "The Xiaomi Redmi 14C smartphone with a glass back panel is equipped with a bright IPS screen with an optimal resolution of 1640x720 dpi for a 6.88 diagonal. The 120 Hz refresh rate ensures smooth operation of applications, without jerks and slowdowns. The power of the 8-core MediaTek Helio G81 Ultra processor with 4 GB of RAM is enough to solve everyday tasks and entertainment.",
                ru: "Смартфон Xiaomi Redmi 14C со стеклянной задней панелью оснащен ярким IPS-экраном с оптимальным разрешением 1640x720 точек на дюйм для диагонали 6,88. Частота обновления 120 Гц обеспечивает плавную работу приложений, без рывков и подтормаживаний. Мощности 8-ядерного процессора MediaTek Helio G81 Ultra с 4 ГБ оперативной памяти достаточно для решения повседневных задач и развлечений."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-8-128gb-midnight-black-400259081", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/282391f78dcced20/667-smartfon-xiaomi-redmi-note-13-128-gb-sinij/", class: "orange" }
            ]
        },
        "25-50_2/5_4/5_2/5_2/5_-_256GB_12GB": {
            name: "Oppo A3 Pro",
            image: "/images/oppoa3pro.jpg",
            details: {
                en: "The OPPO A3 256GB smartphone is presented in a black case with IPX4 protection. The device has a 6.67-inch IPS screen with a resolution of 1604x720 pixels. It provides accurate recognition of each touch and realistic images. The 8-core Qualcomm Snapdragon 6s processor and 6 GB of RAM are responsible for the system performance.",
                ru: "Смартфон OPPO A3 256GB представлен в черном корпусе с защитой IPX4. Устройство имеет 6,67-дюймовый IPS-экран с разрешением 1604x720 пикселей. Он обеспечивает точное распознавание каждого касания и реалистичность изображения. За производительность системы отвечает 8-ядерный процессор Qualcomm Snapdragon 6s и 6 ГБ оперативной памяти."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-oppo-a3-6-256gb-kosmicheskii-lilovyi-400361867", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/9944778e5ec1d582/667-smartfon-oppo-a3-256-gb-cernyj/", class: "orange" }
            ]
        },
        "25-50_2/5_4/5_2/5_2/5_-_512GB_12GB": {
            name: "Oppo A3 Pro",
            image: "/images/oppoa3pro.jpg",
            details: {
                en: "The OPPO A3 256GB smartphone is presented in a black case with IPX4 protection. The device has a 6.67-inch IPS screen with a resolution of 1604x720 pixels. It provides accurate recognition of each touch and realistic images. The 8-core Qualcomm Snapdragon 6s processor and 6 GB of RAM are responsible for the system performance.",
                ru: "Смартфон OPPO A3 256GB представлен в черном корпусе с защитой IPX4. Устройство имеет 6,67-дюймовый IPS-экран с разрешением 1604x720 пикселей. Он обеспечивает точное распознавание каждого касания и реалистичность изображения. За производительность системы отвечает 8-ядерный процессор Qualcomm Snapdragon 6s и 6 ГБ оперативной памяти."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-oppo-a3-6-256gb-kosmicheskii-lilovyi-400361867", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/9944778e5ec1d582/667-smartfon-oppo-a3-256-gb-cernyj/", class: "orange" }
            ]
        },
        "25-50_2/5_4/5_3/5_2/5_-_256GB_8GB": {
            name: "OnePlus Nord CE 3 Lite",
            image: "/images/nord3.jpg",
            details: {
                en: "The OnePlus Nord CE3 Lite 5G smartphone has a plastic case in a chromatic gray shade and a built-in memory of 128 GB. Connoisseurs of beautiful photos will appreciate the main camera of 3 modules. Their resolution reaches 108 + 2 + 2 MP. Its design has a 6-element lens. AI improves the scene and applies auto-retouching if necessary. The 6.72-inch screen is made using IPS technology. Its resolution is 2400 x 1080 pixels with a refresh rate of 120 Hz. Playing games or editing games on it is easy and simple. What happens on the OnePlus Nord CE3 Lite 5G display is accompanied by sound from 2 stereo speakers. Thanks to fast charging 67 W SUPERVOOC, the smartphone is provided with a 5000 mAh battery charge for 1 day of work in just half an hour.",
                ru: "Смартфон OnePlus Nord CE3 Lite 5G имеет пластиковый корпус в хроматическом сером оттенке и встроенную память объемом 128 ГБ. Ценителям красивых фотографий придется по вкусу основная камера из 3 модулей. Их разрешение достигает 108 + 2 + 2 МП. В ее конструкции установлен 6-элементный объектив. ИИ улучшает сцену и применяет авторетушь при необходимости. 6,72-дюймовый экран выполнен по технологии IPS. Его разрешение составляет 2400 x 1080 пикселей при частоте обновления 120 Гц. Играть в игры или редактировать игры на нем легко и просто. Происходящее на дисплее OnePlus Nord CE3 Lite 5G сопровождается звуком из 2 стереодинамиков. Благодаря быстрой зарядке 67 Вт SUPERVOOC смартфон обеспечивается зарядом аккумулятора емкостью 5000 мАч на 1 день работы всего за полчаса."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-oneplus-nord-ce-3-lite-5g-8-128gb-black-400144355", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/fc76941405ceed20/672-smartfon-oneplus-nord-ce-3-lite-128-gb-seryj/", class: "orange" }
            ]
        },
        "25-50_2/5_5/5_2/5_3/5_-_256GB_8GB": {
            name: "OnePlus Nord CE 4 Lite",
            image: "/images/nord4.jpg",
            details: {
                en: "The Nord CE4 Lite uses a 6.67-inch AMOLED panel with a Full HD+ resolution and a refresh rate of 120 Hz. The peak brightness is 2100 nits. There is a 16-megapixel front camera on the front. On the back is the main camera with a 50-megapixel Sony LYT-600 main sensor and a 2-megapixel additional sensor. The hardware basis of the smartphone is the Snapdragon 695 chipset, which works in tandem with 8 GB of LPDDR4X RAM. The UFS 2.2 permanent memory is 128 or 256 GB. Power is provided by a 5500 mAh battery with support for fast wired charging with a power of 80 W. The smartphone runs OxygenOS 14 based on Android 14.",
                ru: "В Nord CE4 Lite используется 6,67-дюймовая AMOLED-панель с разрешением Full HD+ и частотой обновления 120 Гц. Пиковая яркость составляет 2100 нит. Спереди расположена 16-мегапиксельная фронтальная камера. Сзади — основная камера с 50-мегапиксельным основным сенсором Sony LYT-600 и 2-мегапиксельным дополнительным сенсором. Аппаратной основой смартфона является чипсет Snapdragon 695, который работает в тандеме с 8 ГБ оперативной памяти LPDDR4X. Постоянная память UFS 2.2 составляет 128 или 256 ГБ. За питание отвечает аккумулятор емкостью 5500 мАч с поддержкой быстрой проводной зарядки мощностью 80 Вт. Смартфон работает под управлением OxygenOS 14 на базе Android 14."
            },
            links: [
                { name: "Quke", url: "https://quke.ru/shop/UID_138886_oneplus_nord_ce4_lite_8256gb_eu_super_silver.html", class: "red" },
                { name: "Cifrus", url: "https://www.cifrus.ru/description/1/oneplus_nord_ce_4_lite_256gb_8gb_dual_5g_blue_global", class: "orange" }
            ]
        },

    };

    const key = `${budget}_${processor}_${battery}_${screen}_${camera}_${Gsupport}_${memory}_${RAM}`;
    const model = models[key];

    if (model) {
        document.getElementById("smartphone-title").textContent = translations[currentLanguage].resultTitle;
        document.getElementById("smartphone-image").src = model.image;
        document.getElementById("smartphone-specs").textContent = model.details[currentLanguage];

        const linksContainer = document.getElementById("store-links");
        linksContainer.innerHTML = "";
        document.getElementById("result-container").querySelector("h3").textContent = translations[currentLanguage].resultBuyTitle;

        model.links.forEach(link => {
            const button = document.createElement("a");
            button.textContent = link.name;
            button.href = link.url;
            button.target = "_blank";
            button.className = `store-button ${link.class}`;
            linksContainer.appendChild(button);
        });
    } else {
        alert(translations[currentLanguage].noResults);
    }
});

//Phone Selector
