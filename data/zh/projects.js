export const projects = [
    {
        id: 'forest',
        title: "FOURest 季の森",
        type: "3D AR 解謎遊戲 (畢業專題)",
        tech: "Unity, C#, ARFoundation",
        description: "以「拯救四季」作為主要目標，每個季節都有不同象徵元素的關卡組成，讓玩家在故事裡利用觀察、解謎來完成關卡要求。在拯救季節時，部分線索會利用AR功能進行解謎，讓玩家有多元的遊戲體驗。",
        contribution: "負責所有遊戲邏輯、AR 互動與系統程式設計。",
        link: "作品集內有介紹",
        github: "https://github.com/Benson0409/FOURest",
        images: [
            "/img/projects/Fourest.png",
            "/img/projects/1.png",
            "/img/projects/2.png",
            "/img/projects/3.png",
        ],
        details: [
            { heading: "專案背景", content: "畢業專題，旨在結合藝術與科技，開發一款具有教育意義且富有互動性的 AR 遊戲。" },
            { heading: "技術挑戰", content: "ARFoundation 跨平台部署、3D 場景優化、手指觸摸操控、虛實物件對齊。" },
        ],
        category: 'technical'
    },
    {
        id: 'ga_ads',
        title: "GA 自適應難度系統 (論文研究實驗)",
        type: "AI 研究專案",
        tech: "Python, DEAP, Flask, MySQL, Unity",
        description: "實作基於遺傳演算法 (Genetic Algorithm) 的自適應難度調整模型。並透過與Unity進行連結，即時分析玩家數據動態調整遊戲難度。",
        contribution: "設計 GA 模型，建立 Flask API ，並與Unity遊戲進行連結。",
        link: "GitHub 專案 (開發中)",
        github: "https://github.com/Benson0409/GA_ModelSever",
        images: [
            "/img/projects/ga1.png",
            "/img/projects/ga2.png",
            "/img/projects/ga3.png",
            "/img/projects/ga4.png",
            "/img/projects/ga5.png",
            "/img/projects/ga6.png",
            "/img/projects/ga7.png",
        ],
        details: [
            { heading: "研究目的", content: "探索遺傳演算法在遊戲自適應難度調整中的應用，並調查不同玩家再不同難度下的遊戲表現與沈浸度感受。" },
            { heading: "演算法設計", content: "設計染色體編碼、適應度函數、交叉與變異操作。" },
        ],
        category: 'technical'
    },
    {
        id: 'history_web',
        title: "校史資料網站",
        type: "學校合作專案",
        tech: "HTML, CSS, JavaScript",
        description: "專為呈現這幾年間校史資料所設計的現代化網頁，提供訪客清晰、互動式的歷史瀏覽體驗。專案以 HTML + CSS + JavaScript 建構，支援 RWD 響應式設計，並以 橘色系現代風格 為主軸，讓校園歷史以溫暖且具設計感的方式呈現。",
        contribution: "主要負責 APP 的程式架構與功能實現。",
        link: "作品集內有介紹",
        github: "https://github.com/Benson0409/History-Website",
        images: [
            "/img/projects/web2.png",
            "/img/projects/web3.png",
            "/img/projects/web4.png",

        ],
        details: [
            { heading: "專案動機", content: "為了維護校史資料的完整性與準確性，並提供訪客清晰、互動式的歷史瀏覽體驗。" },
            { heading: "技術棧", content: "HTML, CSS, JavaScript，支援 RWD 響應式設計。" },
        ],
        category: 'technical'
    },
    {
        id: 'earth_guardian',
        title: "地球守護隊",
        type: "環保教育 AR APP",
        tech: "Unity,ARFoundation,C#",
        description: "針對國小中高年級自然科學實驗單元設計一套桌上遊戲教具「地球守護隊」,共有 3個單元「水汙染」、「空氣汙染」、「土壤汙染」，單元間可互相搭配，增加遊戲難度,搭配平板電腦使用擴增實境的數位桌遊教學方式,提供學生一個環保教育的多元化遊戲體驗。",
        contribution: "主要負責 APP 的程式架構與功能實現。",
        link: "作品集內有介紹",
        github: "https://github.com/Benson0409/EarthGuardians-AR-BoardGame",
        images: [
            "/img/projects/earth1.png",
            "/img/projects/earth2.png",
            "/img/projects/earth3.png",
            "/img/projects/earth4.png",
            "/img/projects/earth5.png",

        ],
        details: [
            { heading: "專案動機", content: "結合十二年國教課綱與 SDGs ，並以國小六年級「生物與環境」為核心，融入空氣、水、土壤三大污染議題。" },
            { heading: "技術棧", content: "ARFoundation 跨平台部署、點數操控、圖片辨識成功率" },
        ],
        category: 'technical'
    },
    {
        id: 'iOS_Club',
        title: "iOS 社團",
        type: "學校程式社團",
        tech: "教學程式、提升程式程式能力",
        description: "創立第一個以 iOS 開發為主題的校內程式社團，目標是提供學生一個學習 Swift 與 iOS 開發的交流平台，並鼓勵學生參加各類行動應用程式競賽以提升實務能力。",
        contribution: "擔任社長，負責課程規劃、講師邀請與活動組織。",
        link: "社團經歷介紹",
        github: null,
        images: [
            "/img/projects/ios1.png",
            "/img/projects/ios2.png",
        ],
        details: [
            { heading: "幹部課程", content: "邀請學長學姊，在社課時間之外教導社員後端以及UI設計的技巧，讓社員進入iOS開發的世界。" },
            { heading: "移動應用創新賽", content: "邀請獲獎的學長姐回來進行經驗分享，讓社員可以更了解比賽的規則與技巧，也鼓勵社員可以一起組隊參加比賽。" },
        ],
        category: 'marketing'
    },
    {
        id: 'ntue_app',
        title: "國北生活圈 APP",
        type: "美食導覽 APP",
        tech: "React Native,  JavaScript",
        description: "一款為國立臺北教育大學學生設計、用於查看學校附近美食店家的 APP。功能包含地圖導航、店家種類篩選、收藏與評論系統。",
        contribution: "主要負責 APP 的程式架構與功能實現。",
        link: "作品集內有介紹",
        github: "https://github.com/Benson0409/NTUE-Food-App",
        images: [
            "/img/projects/app1.png",
            "/img/projects/app2.png",
            "/img/projects/app3.png",

        ],
        details: [
            { heading: "專案動機", content: "解決大學生尋找校園周邊美食資訊不便的問題，也讓大學生可以更了解校園旁的美食" },
            { heading: "技術棧", content: "React Native 跨平台開發。" },
        ],
        category: 'technical'
    },
    {
        id: 'social_media',
        title: "社群媒體經營 - 國北生活圈",
        type: "行銷 / 社群管理",
        tech: "Instagram, 文案撰寫, 攝影",
        description: "在大學期間與朋友共同經營的美食帳號 'ntue_life'。專門介紹學校附近的美食，目的是解決大學生「不知道吃什麼」的日常痛點，並透過真實的評論與照片幫助大家快速了解餐廳特色。",
        contribution: "負責內容策略規劃、美食攝影、文案撰寫以及粉絲互動管理。",
        link: "IG: ntue_life",
        github: null,
        images: [
            "/img/projects/food1.png",
            "/img/projects/food2.png",
        ],
        details: [
            { heading: "經營動機", content: "發現身邊同學常為用餐選擇煩惱，希望能建立一個在地的美食指南，凝聚校園生活圈的共同話題。" },
            { heading: "執行策略", content: "定期發布學校附近店家的介紹貼文與真實評論，並利用 Hashtag 與地標增加觸及率。設計限時動態問答與粉絲互動，提升黏著度。" },
            { heading: "成果", content: "成功累積了一群忠實的校園粉絲，成為國北學生尋找周邊美食的重要參考指標。" },
        ],
        category: 'marketing'
    },
    {
        id: 'digital_camp',
        title: "2022 數位營 - 時幻",
        type: "活動 / 營隊籌辦",
        tech: "活動企劃, 領導力, 招生宣傳",
        description: "針對高中職學生舉辦的三天兩夜營隊「時幻」。活動目標包括：吸引興趣相投的學生就讀、宣傳數位科技設計學系，以及提供高中生了解本系課程的管道。",
        contribution: "擔任核心籌備幹部，參與課程設計、活動流程規劃、招生宣傳策略制定，以及營期間的團隊領導。",
        link: "系上活動紀錄",
        github: null,
        images: [
            "/img/projects/ntue1.jpg",
            "/img/projects/ntue2.jpeg",
            "/img/projects/ntue3.jpeg",
        ],
        details: [
            { heading: "活動目標", content: "1. 吸引潛在學生就讀。 2. 推廣數位科技設計學系品牌。 3. 培養籌備團隊的領導與合作能力。" },
            { heading: "執行細節", content: "設計了結合程式設計、平面設計與遊戲開發的體驗課程，讓高中生在三天內產出自己的小作品。同時安排了團康活動以增進學員情誼。" },
            { heading: "反思與收穫", content: "學習到如何將艱澀的技術課程轉化為高中生易懂的內容，以及如何在壓力下進行危機處理與團隊溝通。" },
        ],
        category: 'marketing'
    },
    {
        id: 'campus_events',
        title: "校園大型活動統籌與領導",
        type: "領導 / 大型活動",
        tech: "專案管理, 跨部門溝通, 危機處理",
        description: "在擔任系學會活動長及學生會活動部部員期間，籌辦多場大型活動，包括系內競賽、跨系聯誼以及全校性活動。這些經驗培養了我強大的組織能力與抗壓性。",
        contribution: "擔任總召或核心幹部，負責活動發想、流程控管、預算編列、場地協調及跨部門人力調度。",
        link: "校園活動經歷",
        github: null,
        images: [
            "/img/projects/active1.png",
            "/img/projects/active2.png",
        ],
        details: [
            { heading: "新生宿營 (三系合辦)", content: "與教育系、社發系共同籌辦。目標是幫助新生快速認識同學與外系朋友。雖然最終因疫情取消，但在長達數月的籌備期中，學習了跨系溝通與大型活動架構的建立。" },
            { heading: "系學會活動系列", content: "舉辦「窮嘶盃」才藝競賽讓學生展現自我、「數位電競大亂鬥」凝聚系上向心力、「那年我們一起辦的系卡」增進感情。擔任活動長，負責統籌所有活動細節。" },
        ],
        category: 'marketing'
    },
];