// ===== Job-oriented multilingual dictionary =====
const translations = {
  "zh-Hant": {
    "menu-home": "首頁",
    "menu-about": "關於我",
    "menu-edu": "學歷",
    "menu-exp": "經歷",
    "menu-cert": "證照",
    "menu-portfolio": "作品",
    "menu-future": "展望",
    "menu-contact": "聯絡",

    "hero-title": "Software Testing × AI-assisted Builder",
    "hero-subtitle": "您好~我是陳冠宇，歡迎來到我的個人形象網站",
    "hero-desc": "以軟體測試為主軸，結合資訊管理背景、AI 輔助開發與網站實作經驗，持續朝 QA、自動化測試與產品開發方向成長。",
    "hero-scroll": "下滑了解更多",

    "career-title": "職涯目標",
    "career-desc": "目前就讀中國文化大學資訊管理研究所，具備軟體測試、前端網站調整、AI 標註與資訊系統專案經驗。希望未來持續朝 Software QA、Automation Testing 與 Product Development 方向發展，善用 AI 工具提升工作效率，同時培養更紮實的技術理解與問題解決能力。",
    "career-tag1": "Software QA",
    "career-tag2": "Automation Testing",
    "career-tag3": "AI-assisted Development",
    "career-tag4": "Product Development",

    "skills-title": "Skills Tech Stack",
    "skills-subtitle": "以求職角度整理目前具備與正在強化的能力，主軸放在軟體測試、AI 輔助開發與資訊系統應用。",
    "skill-frontend-title": "Development Exposure",
    "skill-frontend-list": "HTML5、CSS3、JavaScript、ASP.NET MVC、Responsive Design",
    "skill-backend-title": "Backend & Database",
    "skill-backend-list": "C#、MS SQL、Database Design、MVC Architecture",
    "skill-testing-title": "Software Testing",
    "skill-testing-list": "Manual Testing、Postman、Sikuli、Test Case Writing、Bug Tracking",
    "skill-tools-title": "Tools & Workflow",
    "skill-tools-list": "Git、GitHub、VS Code、Visual Studio、AI-assisted Workflow",
    "skill-ai-title": "AI & Data",
    "skill-ai-list": "Image Annotation、Dataset Processing、Machine Learning Data、AI Tool Application",

    "resume-title": "Resume Download",
    "resume-desc": "若想更快速了解我的學歷、經歷、專題與技能，可以下載履歷 PDF。",
    "resume-button": "下載履歷 PDF",

    "about-title": "關於我",
    "about-subtitle": "我是陳冠宇，目前就讀於中國文化大學資訊管理學系",
    "about-skill": "Skill & Experience",
    "about-fe": "網站實作：具備 HTML、CSS、JavaScript 與 ASP.NET MVC 專案接觸經驗，並能善用 AI 工具協助網站架構、版面調整與功能整合。",
    "about-qa": "軟體測試：目前為馬紹爾群島商彩虹科技公司測試實習生，學習手動測試、自動化測試、Postman 與 Sikuli 工具應用。",
    "about-ai": "AI 技術：曾任職 Berry AI 團隊的 AI 標註師，負責圖像處理、資料標註與機器學習相關資料整理。",
    "about-esg": "ESG 技術：修習 ESG 導論並獨立完成 ESG 報告書。",
    "about-personality": "個性：樂觀冷靜，具換位思考與解決問題能力，熱愛挑戰與學習，能自主學習與團隊合作。",

    "edu-title": "學歷",
    "edu1-title": "淡江高中",
    "edu1-desc": "第一屆人文社會班，落實多元學習及校外參訪活動。",
    "edu2-title": "中國文化大學 資訊管理學系",
    "edu2-desc": "主修系統分析、前端開發、AI 技術應用、企業管理等。",
    "edu3-title": "中國文化大學 資管所（就讀中）",
    "edu3-desc": "計畫進修研究所，深入研究資訊科技研究方法與自媒體行銷結合資訊科技轉型。",

    "exp-title": "工作經驗",
    "exp1-company": "公司名稱: 馬紹爾群島商彩虹科技股份有限公司",
    "exp1-role": "測試工程師-實習生",
    "exp1-desc": "實習內容主要處理公司遊戲產品前後台新功能測試、回歸測試、自動化測試、撰寫測試用例、更改DB資料庫數據測試及自動化測試。",
    "exp2-company": "公司名稱: Berry-AI",
    "exp2-role": "AI 標註師",
    "exp2-desc": "負責影像處理、資料標註與機器學習資料整理，協助 AI 模型訓練專案執行。",
    "exp3-company": "公司名稱: Gogoro 睿能創意",
    "exp3-role": "Gogoro門市助理",
    "exp3-desc": "顧客服務與門市管理，協助產品銷售及交車。",

    "cert-title": "證照",
    "cert1": "ERP軟體應用師",
    "cert2": "ITS資通安全核心能力",
    "cert3": "CISCO CCST",

    "portfolio-title": "作品展示",
    "proj1-title": "📌 專題作品：搜sogood存好股 (2023/9 ~ 2024/11)",
    "proj1-desc": "我擔任專題「文案撰寫」與「前端網頁程式架構設計」，完成 MVC 撰寫與網站功能開發。",
    "proj1-link": "🔗 網站連結",
    "proj1-video": "▶️ 觀看影片",
    "proj2-title": "📌 ESG 簡易報告書 - ( 自製版本 )",
    "proj2-desc": "一份簡易版 ESG 報告書，適用於企業永續發展規劃。",
    "proj3-title": "📌 新作品：敬請期待",
    "proj3-desc": "正在開發全新專案，敬請期待！",

    "future-title": "未來展望",
    "future1-title": "軟體測試與品質保證",
    "future1-desc": "持續強化測試案例設計、缺陷追蹤、回歸測試與產品品質思維。",
    "future2-title": "自動化測試",
    "future2-desc": "學習將 AI 與自動化工具導入測試流程，提高測試效率與穩定性。",
    "future3-title": "產品開發理解",
    "future3-desc": "從測試角度理解產品需求、使用者流程與功能驗證。",
    "future4-title": "AI 工具應用",
    "future4-desc": "善用 AI 協助資料整理、程式理解、網站調整與工作流程優化。",
    "future5-title": "資料與系統思維",
    "future5-desc": "結合資訊管理背景，強化資料庫、系統分析與流程改善能力。",
    "future6-title": "長期職涯發展",
    "future6-desc": "以 QA 為起點，逐步發展至自動化測試、產品開發與技術管理。",

    "contact-title": "聯絡方式",
    "contact-desc": "連結創新，共創未來，任何合作機會，歡迎聯絡！"
  },

  "en": {
    "menu-home": "Home", "menu-about": "About", "menu-edu": "Education", "menu-exp": "Experience", "menu-cert": "Certificates", "menu-portfolio": "Portfolio", "menu-future": "Future", "menu-contact": "Contact",
    "hero-title": "Software Testing × AI-assisted Builder",
    "hero-subtitle": "Hello, I'm Guanyu Chen. Welcome to my personal branding site.",
    "hero-desc": "Focused on software testing, information management, AI-assisted development, and practical web implementation, with a career direction toward QA, automation testing, and product development.",
    "hero-scroll": "Scroll down to learn more",
    "career-title": "Career Objective",
    "career-desc": "I am currently studying in the Graduate Institute of Information Management at Chinese Culture University. I have experience in software testing, frontend website adjustment, AI annotation, and information system projects. My goal is to grow toward Software QA, Automation Testing, and Product Development while using AI tools to improve efficiency and strengthen technical understanding.",
    "career-tag1": "Software QA", "career-tag2": "Automation Testing", "career-tag3": "AI-assisted Development", "career-tag4": "Product Development",
    "skills-title": "Skills Tech Stack",
    "skills-subtitle": "A job-oriented summary of my current and developing skills, focusing on software testing, AI-assisted development, and information system applications.",
    "skill-frontend-title": "Development Exposure", "skill-frontend-list": "HTML5, CSS3, JavaScript, ASP.NET MVC, Responsive Design",
    "skill-backend-title": "Backend & Database", "skill-backend-list": "C#, MS SQL, Database Design, MVC Architecture",
    "skill-testing-title": "Software Testing", "skill-testing-list": "Manual Testing, Postman, Sikuli, Test Case Writing, Bug Tracking",
    "skill-tools-title": "Tools & Workflow", "skill-tools-list": "Git, GitHub, VS Code, Visual Studio, AI-assisted Workflow",
    "skill-ai-title": "AI & Data", "skill-ai-list": "Image Annotation, Dataset Processing, Machine Learning Data, AI Tool Application",
    "resume-title": "Resume Download", "resume-desc": "Download my resume PDF to quickly review my education, experience, projects, and skills.", "resume-button": "Download PDF Resume",
    "about-title": "About Me", "about-subtitle": "I'm Guanyu Chen, currently studying Information Management at Chinese Culture University.", "about-skill": "Skill & Experience",
    "about-fe": "Web Implementation: Experience with HTML, CSS, JavaScript, and ASP.NET MVC projects, using AI tools to support website structure, layout adjustment, and feature integration.",
    "about-qa": "Software Testing: Test Engineer Intern at Rainbow Tech, learning manual testing, automation testing, Postman, and Sikuli.",
    "about-ai": "AI Tech: Former AI Annotator at Berry AI, handling image processing, data annotation, and machine learning data preparation.",
    "about-esg": "ESG: Completed ESG intro course and wrote a basic report independently.",
    "about-personality": "Personality: Optimistic, calm, analytical, self-driven, and a strong team player.",
    "edu-title": "Education", "edu1-title": "Tamkang Senior High School", "edu1-desc": "1st Humanities Class; engaged in diverse learning and off-campus visits.", "edu2-title": "Chinese Culture University – Information Management", "edu2-desc": "Majored in system analysis, frontend development, AI applications, and business management.", "edu3-title": "Chinese Culture University – Graduate Institute of Information Management", "edu3-desc": "Continuing graduate studies in information technology research methods and digital transformation.",
    "exp-title": "Experience", "exp1-company": "Company: Rainbow Tech (Marshall Islands)", "exp1-role": "Test Engineer Intern", "exp1-desc": "Focused on feature testing, regression testing, automated testing, test case writing, database data modification testing, and QA support for gaming products.", "exp2-company": "Company: Berry-AI", "exp2-role": "AI Annotator", "exp2-desc": "Responsible for image processing, data annotation, and machine learning data preparation to support AI model training projects.", "exp3-company": "Company: Gogoro", "exp3-role": "Store Assistant", "exp3-desc": "Customer service, vehicle hand-off, and in-store support.",
    "cert-title": "Certificates", "cert1": "ERP Application Specialist", "cert2": "ITS Core Security Skills", "cert3": "CISCO CCST",
    "portfolio-title": "Portfolio", "proj1-title": "📌 Project: SoGood Stock Saving Platform (2023/9 ~ 2024/11)", "proj1-desc": "Responsible for content writing and frontend/MVC structure design in the graduation project.", "proj1-link": "🔗 Website Link", "proj1-video": "▶️ Watch Video", "proj2-title": "📌 ESG Report", "proj2-desc": "A simplified ESG report for sustainability strategy reference.", "proj3-title": "📌 New Project: Coming Soon", "proj3-desc": "A brand-new project is under development. Stay tuned!",
    "future-title": "Future Outlook", "future1-title": "Software QA", "future1-desc": "Continue improving test case design, bug tracking, regression testing, and quality mindset.", "future2-title": "Automation Testing", "future2-desc": "Learn to integrate AI and automation tools into testing workflows.", "future3-title": "Product Development Understanding", "future3-desc": "Understand product requirements, user flows, and feature validation from a QA perspective.", "future4-title": "AI Tool Application", "future4-desc": "Use AI to assist data organization, code understanding, website adjustment, and workflow optimization.", "future5-title": "Data & System Thinking", "future5-desc": "Strengthen database, system analysis, and process improvement abilities.", "future6-title": "Long-term Career Growth", "future6-desc": "Start from QA and grow toward automation testing, product development, and technical management.",
    "contact-title": "Contact", "contact-desc": "Innovate together, shape the future. Feel free to connect!"
  },

  "ja": {
    "menu-home": "ホーム", "menu-about": "私について", "menu-edu": "学歴", "menu-exp": "経験", "menu-cert": "資格", "menu-portfolio": "作品集", "menu-future": "展望", "menu-contact": "連絡先",
    "hero-title": "Software Testing × AI-assisted Builder",
    "hero-subtitle": "こんにちは、私はチェン・グァンユーです。私の個人ウェブサイトへようこそ。",
    "hero-desc": "ソフトウェアテストを中心に、情報管理、AI支援開発、Web実装経験を活かし、QA・自動化テスト・プロダクト開発を目指しています。",
    "hero-scroll": "スクロールして詳細を見る",
    "career-title": "キャリア目標", "career-desc": "現在、中国文化大学大学院 情報管理研究科に在学中です。ソフトウェアテスト、Web調整、AIアノテーション、情報システムプロジェクトの経験を活かし、Software QA、自動化テスト、プロダクト開発の方向で成長したいと考えています。", "career-tag1": "Software QA", "career-tag2": "Automation Testing", "career-tag3": "AI-assisted Development", "career-tag4": "Product Development",
    "skills-title": "Skills Tech Stack", "skills-subtitle": "求職向けに、現在持つ能力と強化中のスキルを整理しました。", "skill-frontend-title": "Development Exposure", "skill-frontend-list": "HTML5、CSS3、JavaScript、ASP.NET MVC、Responsive Design", "skill-backend-title": "Backend & Database", "skill-backend-list": "C#、MS SQL、Database Design、MVC Architecture", "skill-testing-title": "Software Testing", "skill-testing-list": "Manual Testing、Postman、Sikuli、Test Case Writing、Bug Tracking", "skill-tools-title": "Tools & Workflow", "skill-tools-list": "Git、GitHub、VS Code、Visual Studio、AI-assisted Workflow", "skill-ai-title": "AI & Data", "skill-ai-list": "Image Annotation、Dataset Processing、Machine Learning Data、AI Tool Application",
    "resume-title": "Resume Download", "resume-desc": "学歴、経験、プロジェクト、スキルをPDF履歴書で確認できます。", "resume-button": "PDF履歴書をダウンロード",
    "about-title": "私について", "about-subtitle": "私はチェン・グァンユーで、中国文化大学の情報管理学科に在学中です。", "about-skill": "スキルと経験", "about-fe": "Web実装：HTML、CSS、JavaScript、ASP.NET MVCのプロジェクト経験があり、AIツールを活用してWeb構成、レイアウト調整、機能統合を行っています。", "about-qa": "ソフトウェアテスト：現在、レインボーテック社のテストエンジニアインターンとして、手動テスト、自動化テスト、Postman、Sikuliを学習中。", "about-ai": "AI技術：以前、Berry AIでAIアノテーターとして、画像処理、データアノテーション、機械学習データ整理を担当しました。", "about-esg": "ESG：ESG入門を学び、ESGレポートを独力で完成。", "about-personality": "性格：楽観的で冷静、問題解決能力があり、自主学習とチームワークが得意。",
    "edu-title": "学歴", "edu1-title": "淡江高校", "edu1-desc": "第1期人文社会クラス。多様な学習と校外活動を実施。", "edu2-title": "中国文化大学 情報管理学科", "edu2-desc": "システム分析、フロントエンド開発、AI応用、経営管理を専攻。", "edu3-title": "中国文化大学 大学院 情報管理研究科（在学中）", "edu3-desc": "情報技術の研究方法とデジタル変革を学習中。",
    "exp-title": "職務経歴", "exp1-company": "会社名: レインボーテック（マーシャル諸島）", "exp1-role": "テストエンジニアインターン", "exp1-desc": "ゲーム製品の新機能テスト、回帰テスト、自動化テスト、テストケース作成、DBデータ変更テストを担当。", "exp2-company": "会社名: Berry-AI", "exp2-role": "AIアノテーター", "exp2-desc": "画像処理、データアノテーション、機械学習データ整理を担当し、AIモデル訓練プロジェクトを支援。", "exp3-company": "会社名: Gogoro", "exp3-role": "店舗アシスタント", "exp3-desc": "顧客対応、納車、店舗業務支援。",
    "cert-title": "資格", "cert1": "ERP応用技術者", "cert2": "ITSセキュリティ基本能力", "cert3": "CISCO CCST",
    "portfolio-title": "作品集", "proj1-title": "📌 プロジェクト：SoGood貯株プラットフォーム (2023/9 ~ 2024/11)", "proj1-desc": "卒業プロジェクトでコピーライティングとフロントエンド/MVC構成設計を担当。", "proj1-link": "🔗 ウェブサイト", "proj1-video": "▶️ 動画を見る", "proj2-title": "📌 ESG簡易報告書", "proj2-desc": "企業の持続可能性に役立つ簡易ESGレポート。", "proj3-title": "📌 新作：まもなく公開", "proj3-desc": "新しいプロジェクトを開発中です。お楽しみに！",
    "future-title": "今後の展望", "future1-title": "Software QA", "future1-desc": "テストケース設計、バグ追跡、回帰テスト、品質思考を強化します。", "future2-title": "自動化テスト", "future2-desc": "AIと自動化ツールをテストワークフローに活用する方法を学びます。", "future3-title": "プロダクト理解", "future3-desc": "QA視点から要件、ユーザーフロー、機能検証を理解します。", "future4-title": "AIツール活用", "future4-desc": "AIを活用し、資料整理、コード理解、Web調整、業務効率化を進めます。", "future5-title": "データとシステム思考", "future5-desc": "データベース、システム分析、プロセス改善能力を強化します。", "future6-title": "長期キャリア成長", "future6-desc": "QAを起点に、自動化テスト、プロダクト開発、技術管理へ成長します。",
    "contact-title": "連絡先", "contact-desc": "共に革新し、未来を創る。気軽にご連絡ください！"
  }
};

function switchLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("preferredLanguage", lang);
}

const roles = ["Software QA", "Automation Testing Learner", "AI-assisted Builder", "Product-minded Tester"];

function initTypewriter() {
  const target = document.querySelector(".typewriter-text");
  if (!target) return;
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const type = () => {
    const current = roles[roleIndex];
    target.textContent = current.slice(0, charIndex);

    if (!deleting && charIndex < current.length) {
      charIndex++;
      setTimeout(type, 72);
    } else if (!deleting && charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1300);
    } else if (deleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 36);
    } else {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 260);
    }
  };
  type();
}

function initCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const animate = (counter) => {
    const target = Number(counter.dataset.count || 0);
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = target > 3 && progress === 1 ? `${target}+` : `${value}${target <= 3 && progress === 1 ? "" : ""}`;
      if (progress < 1) requestAnimationFrame(tick);
      else counter.textContent = target === 10 ? "1" : String(target);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = "true";
        animate(entry.target);
      }
    });
  }, { threshold: 0.7 });

  counters.forEach(counter => observer.observe(counter));
}

function initScrollProgress() {
  const bar = document.querySelector(".scroll-progress");
  if (!bar) return;
  const update = () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${height > 0 ? (scrollTop / height) * 100 : 0}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initActiveNav() {
  const links = [...document.querySelectorAll(".navbar a[href^='#']")];
  const sections = links.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 });
  sections.forEach(section => observer.observe(section));
}

function initRevealAnimations() {
  const targets = document.querySelectorAll(".fade-in, .timeline-item, .fade-in-up, .fade-left, .zoom-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible", "show");
      }
    });
  }, { threshold: 0.16 });
  targets.forEach(target => observer.observe(target));
}

function initMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");
  if (!menuToggle || !navbar) return;

  const closeMenu = () => {
    navbar.classList.remove("show");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", e => {
    e.stopPropagation();
    const isOpen = navbar.classList.toggle("show");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".navbar a, .site-map a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("click", e => {
    if (!navbar.contains(e.target) && e.target !== menuToggle) closeMenu();
  });
}

function initMouseGlow() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);
  window.addEventListener("mousemove", e => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }, { passive: true });
}

function initTiltCards() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  const cards = document.querySelectorAll(".project, .image-item, .timeline-content");
  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      const rotateX = ((0.5 - y / rect.height)) * 8;
      card.classList.add("is-tilting");
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("is-tilting");
      card.style.transform = "";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLanguage") || "zh-Hant";
  const select = document.getElementById("language-select");
  if (select) select.value = savedLang;
  switchLanguage(savedLang);
  initTypewriter();
  initCounters();
  initScrollProgress();
  initActiveNav();
  initRevealAnimations();
  initMenu();
  initMouseGlow();
  initTiltCards();
});
