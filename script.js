// ===== 多語詞典 =====
const translations = {
  "zh-Hant": {
    // Menu
    "menu-home": "首頁",
    "menu-about": "關於我",
    "menu-edu": "學歷",
    "menu-exp": "經歷",
    "menu-cert": "證照",
    "menu-portfolio": "作品",
    "menu-future": "展望",
    "menu-contact": "聯絡",

    // Hero
    "hero-title": "勇於挑戰，成就卓越",
    "hero-subtitle": "您好~我是陳冠宇，歡迎來到我的個人形象網站",
    "hero-role": "我是",
    "hero-desc": "專注於網頁前端開發、AI技術、數據分析與ESG永續經營理念",
    "hero-scroll": "下滑了解更多",

    // About
    "about-title": "關於我",
    "about-subtitle": "我是陳冠宇，目前就讀於中國文化大學資訊管理學系",
    "about-skill": "Skill & Experience",
    "about-fe": "前端開發：具有 2~3 年的開發與專案經驗，熟悉 ASP.NET MVC、C#、JavaScript、MS SQL 等技術。",
    "about-ai": "AI 技術：目前為 Berry AI 團隊的 AI 標註師，負責圖像處理與機器學習統計等相關專案。",
    "about-esg": "ESG 技術：修習 ESG 導論並獨立完成 ESG 報告書。",
    "about-personality": "個性：樂觀冷靜，具換位思考與解決問題能力，熱愛挑戰與學習，能自主學習與團隊合作。",

    // Education
    "edu-title": "學歷",
    "edu1-title": "淡江高中",
    "edu1-desc": "第一屆人文社會班，落實多元學習及校外參訪活動。",
    "edu2-title": "中國文化大學 資訊管理學系",
    "edu2-desc": "主修系統分析、前端開發、AI 技術應用、企業管理等。",
    "edu3-title": "中國文化大學 資管所（預定）",
    "edu3-desc": "計畫進修研究所，深入研究人工智慧與資安技術。",
   
    // Experience
   "exp-title": "工作經驗",
    "exp1-company": "公司名稱: 馬紹爾群島商彩虹科技股份有限公司",
    "exp1-role": "測試工程師-實習生",
    "exp1-desc": "負責遊戲功能測試、測試用例撰寫與回歸測試。",
    "exp2-company": "公司名稱: Berry-AI",
    "exp2-role": "AI 標註師",
    "exp2-desc": "影像標註與機器學習資料處理。",
    "exp3-company": "公司名稱: Gogoro 睿能創意",
    "exp3-role": "門市助理",
    "exp3-desc": "門市接待、交車與產品銷售協助。",

    "cert-title": "證照",
    "cert1": "ERP軟體應用師",
    "cert2": "ITS資通安全核心能力",
    "cert3": "CISCO CCST",

        // Portfolio
    "portfolio-title": "作品展示",
    "proj1-title": "📌 專題作品：搜sogood存好股",
    "proj1-desc": "專案中負責前端結構、MVC 架構與文案設計。",
    "proj1-link": "🔗 網站連結",
    "proj1-video": "▶️ 觀看影片",
    "proj2-title": "📌 ESG 簡易報告書",
    "proj2-desc": "簡易企業永續報告書範例。",
    "proj3-title": "📌 新作品：敬請期待",
    "proj3-desc": "正在開發全新專案，敬請期待！",

    // Future
    "future-title": "未來展望",
    "future1-title": "資安發展",
    "future1-desc": "學習滲透測試、網路安全管理，熟悉資安工具 (如 Wireshark、Kali Linux)。",
    "future2-title": "AI 自動化",
    "future2-desc": "探索 AI 在測試與數據分析中的應用，學習 RPA 技術。",
    "future3-title": "軟體測試",
    "future3-desc": "學習測試自動化框架與壓力測試、功能測試等技巧。",
    "future4-title": "Python 語言",
    "future4-desc": "深入掌握 Python 與後端框架（Flask/Django）、數據分析與模型開發。",
    "future5-title": "ESG 永續經營",
    "future5-desc": "學習 ESG 概念與企業應用，支持永續轉型。",
    "future6-title": "商業經營",
    "future6-desc": "學習商業策略與數據驅動決策，結合科技與創新。",

    // Contact
    "contact-title": "聯絡方式",
    "contact-desc": "連結創新，共創未來，任何合作機會，歡迎聯絡！",
    
  },

  "en": {
    "menu-home": "Home",
    "menu-about": "About",
    "menu-edu": "Education",
    "menu-exp": "Experience",
    "menu-cert": "Certificates",
    "menu-portfolio": "Portfolio",
    "menu-future": "Future",
    "menu-contact": "Contact",

    "hero-title": "Dare to Challenge, Strive for Excellence",
    "hero-subtitle": "Hello, I'm Guanyu Chen. Welcome to my personal branding site.",
    "hero-role": "I am",
    "hero-desc": "Focused on frontend development, AI technologies, data analysis, and ESG sustainability.",
    "hero-scroll": "Scroll down to learn more",

    "about-title": "About Me",
    "about-subtitle": "I'm Guanyu Chen, currently studying Information Management at CCU.",
    "about-skill": "Skill & Experience",
    "about-fe": "Frontend: 2–3 years of experience in ASP.NET MVC, C#, JavaScript, MS SQL, etc.",
    "about-ai": "AI: Working at Berry AI as an annotation engineer in image processing and ML.",
    "about-esg": "ESG: Completed ESG intro course and wrote a basic report independently.",
    "about-personality": "Personality: Optimistic, calm, analytical, self-driven, and a great team player.",

    "edu-title": "Education",
    "edu1-title": "Tamkang Senior High School",
    "edu1-desc": "1st Humanities Class; engaged in diverse learning and off-campus visits.",
    "edu2-title": "Chinese Culture University – Info Management",
    "edu2-desc": "Majored in system analysis, frontend development, AI applications, and business management.",
    "edu3-title": "CCU Graduate Institute (Expected)",
    "edu3-desc": "Plan to pursue a master's degree in AI and cybersecurity research.",

    "exp-title": "Experience",
    "exp1-company": "Company: Rainbow Tech (Marshall Islands)",
    "exp1-role": "Test Engineer Intern",
    "exp1-desc": "Conducted frontend/backend test cases, regression tests, and documentation.",
    "exp2-company": "Company: Berry-AI",
    "exp2-role": "AI Annotator",
    "exp2-desc": "Responsible for image labeling and machine learning datasets.",
    "exp3-company": "Company: Gogoro",
    "exp3-role": "Store Assistant",
    "exp3-desc": "Customer service, vehicle hand-off, and in-store support.",

    "cert-title": "Certificates",
    "cert1": "ERP Application Specialist",
    "cert2": "ITS Core Security Skills",
    "cert3": "CISCO CCST",
    
      "portfolio-title": "Portfolio",
    "proj1-title": "📌 Project: SoGood Stock Saving Platform",
    "proj1-desc": "Handled frontend structure, MVC architecture, and content writing.",
    "proj1-link": "🔗 Website Link",
    "proj1-video": "▶️ Watch Video",
    "proj2-title": "📌 ESG Report",
    "proj2-desc": "A simplified ESG report for sustainability strategy reference.",
    "proj3-title": "📌 New Project: Coming Soon",
    "proj3-desc": "A brand-new project is under development. Stay tuned!",

    "future-title": "Future Outlook",
    "future1-title": "Cybersecurity",
    "future1-desc": "Learn penetration testing, security tools (Wireshark, Kali Linux), and risk defense.",
    "future2-title": "AI Automation",
    "future2-desc": "Apply AI in testing/data analysis, learn RPA automation.",
    "future3-title": "Software Testing",
    "future3-desc": "Learn test automation frameworks and load/function/security testing.",
    "future4-title": "Python Programming",
    "future4-desc": "Master Python with Flask/Django, data analysis and modeling.",
    "future5-title": "ESG Sustainability",
    "future5-desc": "Learn ESG frameworks and strategies for corporate transformation.",
    "future6-title": "Business Management",
    "future6-desc": "Study business decision-making driven by data and innovation.",

    "contact-title": "Contact",
    "contact-desc": "Innovate together, shape the future. Feel free to connect!"
  },

  "ja": {
    "menu-home": "ホーム",
    "menu-about": "私について",
    "menu-edu": "学歴",
    "menu-exp": "経験",
    "menu-cert": "資格",
    "menu-portfolio": "作品集",
    "menu-future": "展望",
    "menu-contact": "連絡先",

    "hero-title": "挑戦を恐れず、卓越を目指す",
    "hero-subtitle": "こんにちは、私はチェン・グァンユーです。私の個人ウェブサイトへようこそ。",
    "hero-role": "私は",
    "hero-desc": "フロントエンド開発、AI 技術、データ分析、ESG 持続可能性に注力しています。",
    "hero-scroll": "スクロールして詳細を見る",

    "about-title": "私について",
    "about-subtitle": "私はチェン・グァンユーで、中国文化大学の情報管理学科に在学中です。",
    "about-skill": "スキルと経験",
    "about-fe": "フロントエンド開発：2～3年の経験があり、ASP.NET MVC、C#、JavaScript、MS SQLに精通。",
    "about-ai": "AI技術：Berry AIチームで画像処理や機械学習統計を担当。",
    "about-esg": "ESG：ESG入門を学び、ESGレポートを独力で完成。",
    "about-personality": "性格：楽観的で冷静、問題解決能力があり、自主学習とチームワークが得意。",

    "edu-title": "学歴",
    "edu1-title": "淡江高校",
    "edu1-desc": "第1期人文社会クラス。多様な学習と校外活動を実施。",
    "edu2-title": "中国文化大学 情報管理学科",
    "edu2-desc": "システム分析、フロントエンド開発、AI応用、経営管理を専攻。",
    "edu3-title": "中国文化大学 大学院（予定）",
    "edu3-desc": "AIとサイバーセキュリティの研究を目指し、進学予定。",

    "exp-title": "職務経歴",
    "exp1-company": "会社名: レインボーテック（マーシャル諸島）",
    "exp1-role": "テストエンジニアインターン",
    "exp1-desc": "ゲーム機能のテスト、ケース作成、回帰テスト。",
    "exp2-company": "会社名: Berry-AI",
    "exp2-role": "AIアノテーター",
    "exp2-desc": "画像ラベリングとMLデータセット作成。",
    "exp3-company": "会社名: Gogoro",
    "exp3-role": "店舗アシスタント",
    "exp3-desc": "顧客対応、納車、店舗業務支援。",

    "cert-title": "資格",
    "cert1": "ERP応用技術者",
    "cert2": "ITSセキュリティ基本能力",
    "cert3": "CISCO CCST",

     "portfolio-title": "作品集",
    "proj1-title": "📌 プロジェクト：SoGood貯株プラットフォーム",
    "proj1-desc": "フロントエンド設計、MVC構造、コピーライティングを担当。",
    "proj1-link": "🔗 ウェブサイト",
    "proj1-video": "▶️ 動画を見る",
    "proj2-title": "📌 ESG簡易報告書",
    "proj2-desc": "企業の持続可能性に役立つ簡易ESGレポート。",
    "proj3-title": "📌 新作：まもなく公開",
    "proj3-desc": "新しいプロジェクトを開発中です。お楽しみに！",

    "future-title": "今後の展望",
    "future1-title": "サイバーセキュリティ",
    "future1-desc": "ペネトレーションテストとWireshark/Kaliなどのツール習得。",
    "future2-title": "AI自動化",
    "future2-desc": "AIを活用した自動化・分析・RPA技術を学習。",
    "future3-title": "ソフトウェアテスト",
    "future3-desc": "自動テスト、負荷テスト、機能・安全性テストを習得。",
    "future4-title": "Python言語",
    "future4-desc": "Python、Flask/Django、AI・分析モデルを習得。",
    "future5-title": "ESGと持続可能性",
    "future5-desc": "ESGの概念を学び、企業への応用を探る。",
    "future6-title": "ビジネス経営",
    "future6-desc": "データと技術革新を基に経営戦略を学ぶ。",

    "contact-title": "連絡先",
    "contact-desc": "共に革新し、未来を創る。気軽にご連絡ください！"
  }
};

// ===== 語言切換功能 =====
function switchLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// ===== 學歷區塊滾動顯示動畫 =====
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  items.forEach(item => observer.observe(item));
});

/*===漢堡選單=== */
// 🔹 頁面載入後執行
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar ul");

  // 點擊漢堡按鈕時切換選單
  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation(); // 阻止事件冒泡
    navbar.classList.toggle("show");
  });

  // 點擊任何導覽連結時自動收起選單
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function () {
      navbar.classList.remove("show");
    });
  });

  // 點擊視窗其他地方時關閉選單
  document.addEventListener("click", function (e) {
    if (!navbar.contains(e.target) && e.target !== menuToggle) {
      navbar.classList.remove("show");
    }
  });
});


/*========== 所有頁面淡入淡出效果 ========== */
document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  faders.forEach(section => observer.observe(section));
});
