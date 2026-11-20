const copy = {
  en: {
    back: "back to the tree", cv: "download CV ↗", chooseLanguage: "Choose language",
    eyebrow: "ENGINEERING · AI · SOFTWARE", role: "AI & Full-Stack Developer · Final-year Engineering Student",
    intro: "I build practical AI and software, from data and APIs to products people can use. Seeking a final-year internship (PFE) starting January 2027.",
    nav: ["Projects", "Experience", "Skills", "Education", "Recognition", "Community"],
    kickers: ["SELECTED WORK", "WHERE I HAVE CONTRIBUTED", "TOOLS I WORK WITH", "FOUNDATION", "CHALLENGES & LEARNING", "WORKING WITH PEOPLE"],
    headings: ["Projects", "Experience", "Skills", "Education", "Recognition", "Community"],
    projectNote: "A quick tour across AI, mobile, web, security, and connected devices.",
    code: "view project ↗", ctfTitle: "Capture the Flag", ctfRank: "MACC 2026 (DGSSI) · 26th of 1,070 participants · National top 3%",
    certTitle: "Certifications", currently: "CURRENTLY", currentTitle: "Building stronger foundations",
    currentCopy: "Developing my DevOps practice with Docker and Kubernetes, and continuing AWS Cloud Architecting coursework.",
    footer: "A concise map of the work behind the leaves.", footerBack: "Return to the tree ↑",
    projectGroups: ["AI & data", "Agents & accessibility", "Mobile", "Web & ERP", "Security & IoT"],
    projects: [
      ["ENSAJ Chatbot", "Finds answers across university documents with RAG, voice input, spoken responses, and a 3D avatar.", "Assistant RAG sur les documents de l’ENSAJ, avec commande vocale, réponses parlées et avatar 3D."],
      ["VoiceScope", "Brings speaker recognition, transcription, voice activity, and sound classification into one dashboard.", "Réunit reconnaissance des locuteurs, transcription et classification sonore dans un tableau de bord."],
      ["PlantDoctorAI", "Classifies plant diseases from leaf images, with more than 90% evaluation accuracy.", "Identifie les maladies des plantes à partir de feuilles, avec plus de 90 % de précision en évaluation."],
      ["Credit Card Fraud Detection", "A machine-learning fraud pipeline for imbalanced transactions, tuned to reduce missed fraud cases.", "Pipeline de détection de fraude sur données déséquilibrées, optimisé pour réduire les faux négatifs."],
      ["Assistive Vision", "A voice-guided vision assistant that detects objects, estimates distance, and speaks directions.", "Assistant visuel guidé par la voix : détection d’objets, estimation de distance et indications vocales."],
      ["Self-Fixing Agent", "A multi-agent workflow that inspects Python code, runs linters, prepares pull requests, and updates docs.", "Workflow multi-agent qui analyse du code Python, lance des linters, prépare des pull requests et met à jour la documentation."],
      ["StudyFlow AI", "Turns natural-language requests into study tasks, with Pomodoro sessions, offline storage, and gamification.", "Transforme des demandes en langage naturel en tâches d’étude, avec Pomodoro, mode hors ligne et gamification."],
      ["Floussi", "A Moroccan personal-finance app for expenses, Daret, savings goals, and clear financial statistics.", "Application marocaine de finances personnelles : dépenses, Daret, objectifs d’épargne et statistiques."],
      ["MediFlow AI", "Combines Odoo clinic management with a separate FastAPI service for AI capabilities.", "Associe la gestion d’une clinique dans Odoo à un service FastAPI dédié aux fonctions d’IA."],
      ["Odoo Maintenance", "A custom maintenance module with access controls, kanban and calendar views, and service dashboards.", "Module de maintenance avec droits d’accès, vues kanban et calendrier et tableaux de bord de service."],
      ["IT Hub Marocain", "A tech-events platform for discovery, registration, ticketing, and live event analytics.", "Plateforme d’événements tech pour découvrir, s’inscrire, gérer les billets et suivre les statistiques."],
      ["Music School", "A role-based web app for managing courses, instruments, teachers, and school statistics.", "Application web à rôles pour gérer les cours, instruments, enseignants et statistiques de l’école."],
      ["Private LTE", "A virtualized 4G experiment combining SIM authentication and facial biometrics as a second factor.", "Expérimentation 4G virtualisée associant authentification SIM et biométrie faciale comme second facteur."],
      ["ESP32 Climate", "An ESP32 and DHT22 log temperature and humidity to Supabase for remote visualization.", "Un ESP32 et un DHT22 enregistrent température et humidité dans Supabase pour un suivi à distance."],
      ["Card Fraud UI", "An early React/Vite interface scaffold with authentication and dashboard routes for a fraud product.", "Base d’interface React/Vite avec authentification et routes de tableau de bord pour un produit anti-fraude."],
    ],
    experience: [
      ["Jun – Sep 2026", "AI Developer Intern", "SARABO · Casablanca, Morocco", "Designed SARABO Copilot, a conversational BI assistant for Sage X3 using deterministic inventory analysis, Text-to-SQL, and automated reporting. Delivered seven BI features and deployed with GitHub CI/CD."],
      ["Jan – Feb 2026", "Mobile Developer & AI Automation Intern", "AH Digital", "Helped migrate a Swiss renewable-energy platform to Android with React Native, then built an n8n AI chatbot and automated security workflows with Cloudflare WAF and DDoS protection."],
      ["Jun – Aug 2025", "Full-Stack Developer Intern", "Gold Installations", "Built an e-commerce platform covering product catalogues, carts, order management, and a role-based administration dashboard with PHP, MySQL, JavaScript, and Bootstrap."],
    ],
    experienceFr: [
      ["juin – sept. 2026", "Stagiaire développeuse IA", "SARABO · Casablanca, Maroc", "Conception de SARABO Copilot, assistant BI conversationnel pour Sage X3 combinant analyse de stock déterministe, Text-to-SQL et rapports automatisés. Sept fonctionnalités BI livrées et déploiement via GitHub CI/CD."],
      ["janv. – févr. 2026", "Stagiaire développement mobile & automatisation IA", "AH Digital", "Contribution à la migration d’une plateforme d’énergies renouvelables vers Android avec React Native, puis création d’un chatbot n8n et de workflows de sécurité avec Cloudflare WAF et protection DDoS."],
      ["juin – août 2025", "Stagiaire développeuse full-stack", "Gold Installations", "Développement d’une plateforme e-commerce : catalogue, panier, commandes et tableau de bord par rôles avec PHP, MySQL, JavaScript et Bootstrap."],
    ],
    skills: [
      ["AI & machine learning", "Machine Learning, Deep Learning (CNN), RAG, LLMs, LangGraph, LiteLLM, Text-to-SQL, prompt engineering"],
      ["Data", "DuckDB, Polars, ChromaDB"],
      ["Languages", "Python, Java, C/C++, JavaScript, TypeScript, Kotlin"],
      ["Web & APIs", "Next.js, FastAPI, Flask, Spring Boot, Hibernate/JPA, Thymeleaf, Laravel, Streamlit, REST"],
      ["Mobile", "React Native, Kotlin/Jetpack Compose, Firebase"],
      ["Databases", "MySQL, SQLite"],
      ["DevOps & security", "Linux, Docker, AWS, Git/GitHub, CI/CD, Cloudflare WAF, web and network security, cryptography"],
    ],
    skillsFr: [
      ["IA & machine learning", "Machine Learning, Deep Learning (CNN), RAG, LLM, LangGraph, LiteLLM, Text-to-SQL, ingénierie de prompts"],
      ["Données", "DuckDB, Polars, ChromaDB"],
      ["Langages", "Python, Java, C/C++, JavaScript, TypeScript, Kotlin"],
      ["Web & API", "Next.js, FastAPI, Flask, Spring Boot, Hibernate/JPA, Thymeleaf, Laravel, Streamlit, REST"],
      ["Mobile", "React Native, Kotlin/Jetpack Compose, Firebase"],
      ["Bases de données", "MySQL, SQLite"],
      ["DevOps & sécurité", "Linux, Docker, AWS, Git/GitHub, CI/CD, Cloudflare WAF, sécurité web et réseau, cryptographie"],
    ],
    education: [
      ["2021 – present", "Engineering degree · Information Systems & Communication", "ENSA El Jadida", "Final-year engineering student; PFE internship search begins January 2027."],
      ["2021", "Baccalaureate · Physics & Chemistry", "Honors: Très Bien", ""],
    ],
    educationFr: [
      ["2021 – aujourd’hui", "Cycle ingénieur · Systèmes d’information & communication", "ENSA El Jadida", "Étudiante en dernière année ; recherche de stage PFE à partir de janvier 2027."],
      ["2021", "Baccalauréat · Physique-Chimie", "Mention Très Bien", ""],
    ],
    ctf: ["MACC 2026 (Morocco Academia Cyber Competition)", "Cyber Odyssey (Akasec / 1337) ×2", "ENSIAS CTF ×2", "EHTP CTF", "Mundiapolis CTF"],
    ctfFr: ["MACC 2026 (Morocco Academia Cyber Competition)", "Cyber Odyssey (Akasec / 1337) ×2", "CTF ENSIAS ×2", "CTF EHTP", "CTF Mundiapolis"],
    certs: ["ISO/IEC 27001 Security Associate", "AWS Academy Cloud Foundations", "AWS Academy Machine Learning Foundations", "AWS Academy Machine Learning for NLP", "AWS Academy Generative AI Foundations", "AWS Engineering Operations Technician", "AWS Academy Cloud Developing", "AWS Academy Cloud Architecting (in progress)"],
    community: [
      ["App in Sciences · ENSAJ IT Club", "Secretary General · former Media Manager · 2022–2025", "Helped lead a 10-member board and organized hackathons, CTFs, conferences, and technical workshops."],
      ["OM Nets", "Event Manager · 2025–present", "Coordinate with ENSA representatives across Morocco on events and initiatives for engineering students."],
      ["Takafan", "Reading Cell Manager · 2022–2023", "Organized reading sessions and literary activities for members."],
    ],
    communityFr: [
      ["App in Sciences · Club informatique ENSAJ", "Secrétaire générale · ancienne responsable média · 2022–2025", "Contribution à la direction d’un bureau de 10 membres et organisation de hackathons, CTF, conférences et ateliers techniques."],
      ["OM Nets", "Responsable événementiel · 2025–aujourd’hui", "Coordination avec les représentants des ENSA au Maroc pour des événements destinés aux élèves ingénieurs."],
      ["Takafan", "Responsable du cercle de lecture · 2022–2023", "Organisation de séances de lecture et d’activités littéraires pour les membres."],
    ],
  },
  fr: {
    back: "retour à l’arbre", cv: "télécharger mon CV ↗", chooseLanguage: "Choisir la langue",
    eyebrow: "INGÉNIERIE · IA · LOGICIEL", role: "Développeuse IA & Full-Stack · Élève ingénieure en dernière année",
    intro: "Je conçois des solutions d’IA et des logiciels utiles, des données et API aux produits concrets. Je recherche un stage de fin d’études (PFE) à partir de janvier 2027.",
    nav: ["Projets", "Expérience", "Compétences", "Formation", "Distinctions", "Engagement"],
    kickers: ["PROJETS CHOISIS", "MES EXPÉRIENCES", "MES OUTILS", "FORMATION", "DÉFIS & APPRENTISSAGE", "ENGAGEMENT COLLECTIF"],
    headings: ["Projets", "Expérience", "Compétences", "Formation", "Distinctions", "Engagement"],
    projectNote: "Un aperçu de mes projets en IA, mobile, web, sécurité et objets connectés.",
    code: "voir le projet ↗", ctfTitle: "Compétitions CTF", ctfRank: "MACC 2026 (DGSSI) · 26e sur 1 070 participants · Top 3 % national",
    certTitle: "Certifications", currently: "EN CE MOMENT", currentTitle: "Renforcer mes bases techniques",
    currentCopy: "Je développe ma pratique DevOps avec Docker et Kubernetes et poursuis le parcours AWS Cloud Architecting.",
    footer: "Un aperçu du travail derrière les feuilles.", footerBack: "Retour à l’arbre ↑",
    projectGroups: ["IA & données", "Agents & accessibilité", "Mobile", "Web & ERP", "Sécurité & IoT"],
  },
};

const projects = [
  [0, 0, "Ensaj-chatbot"], [0, 1, "VoiceScope"], [0, 2, "PlantDoctorAI"], [0, 3, "CCFD-"],
  [1, 4, "Computer-Assistive-Vision"], [1, 5, "Self-Fixing-Software-Project"],
  [2, 6, null], [2, 7, "floussi-app"],
  [3, 8, null], [3, 9, null], [3, 10, "IT-HUB-MA"], [3, 11, "Music-App"],
  [4, 12, null], [4, 13, null], [4, 14, "CCFD-"],
];

const fixedText = {
  "projects-kicker": 0, "projects-title": 0, "experience-kicker": 1, "experience-title": 1,
  "skills-kicker": 2, "skills-title": 2, "education-kicker": 3, "education-title": 3,
  "recognition-kicker": 4, "recognition-title": 4, "community-kicker": 5, "community-title": 5,
};
const node = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined && text !== "") element.textContent = text;
  return element;
};
const addList = (target, values) => {
  target.replaceChildren(...values.map((value) => node("li", "", value)));
};
const initialLanguage = () => {
  try {
    const saved = localStorage.getItem("aya-language");
    if (saved === "en" || saved === "fr") return saved;
  } catch {}
  return navigator.languages?.some((value) => value.toLowerCase().startsWith("fr"))
    || navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
};

function render(language) {
  const t = copy[language];
  const dataLanguage = copy.en;
  const isFrench = language === "fr";
  document.documentElement.lang = language;
  document.title = isFrench ? "Vue d’ensemble — Aya Sadoq" : "Quick overview — Aya Sadoq";
  document.querySelector('meta[name="description"]').content = isFrench
    ? "Aperçu des projets, expériences, compétences et formation d’Aya Sadoq."
    : "A concise overview of Aya Sadoq's projects, experience, skills, and education.";
  document.querySelector("#back-label").textContent = t.back;
  document.querySelector(".language-switch").setAttribute("aria-label", t.chooseLanguage);
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
    button.onclick = () => {
      try { localStorage.setItem("aya-language", button.dataset.language); } catch {}
      render(button.dataset.language);
    };
  });
  for (let index = 0; index < 6; index++) {
    document.querySelector(`#nav-${["projects", "experience", "skills", "education", "recognition", "community"][index]}`).textContent = t.nav[index];
    const id = Object.keys(fixedText).find((key) => fixedText[key] === index && key.endsWith("-kicker"));
    if (id) document.getElementById(id).textContent = t.kickers[index];
    const headingId = `${["projects", "experience", "skills", "education", "recognition", "community"][index]}-title`;
    document.getElementById(headingId).textContent = t.headings[index];
  }
  document.querySelector("#hero-eyebrow").textContent = t.eyebrow;
  document.querySelector("#hero-role").textContent = t.role;
  document.querySelector("#hero-intro").textContent = t.intro;
  document.querySelector("#projects-note").textContent = t.projectNote;
  document.querySelector("#ctf-title").textContent = t.ctfTitle;
  document.querySelector("#ctf-rank").textContent = t.ctfRank;
  document.querySelector("#cert-title").textContent = t.certTitle;
  document.querySelector("#closing-kicker").textContent = t.currently;
  document.querySelector("#closing-title").textContent = t.currentTitle;
  document.querySelector("#closing-copy").textContent = t.currentCopy;
  document.querySelector("#footer-copy").textContent = t.footer;
  document.querySelector("#footer-back").textContent = t.footerBack;
  for (const link of [document.querySelector("#cv-link"), document.querySelector("#closing-cv")]) {
    link.textContent = t.cv;
    link.href = isFrench ? "cv/cv_aya_sadoq_fr.pdf" : "cv/cv_aya_sadoq_en.pdf";
  }

  const contacts = [
    ["aya.sadoq.2003.lm@gmail.com", "mailto:aya.sadoq.2003.lm@gmail.com"],
    ["GitHub", "https://github.com/ayasadoq"],
    ["LinkedIn", "https://www.linkedin.com/in/aya-sadoq-7a7568265"],
  ];
  const contactRow = document.querySelector("#contact-row");
  contactRow.replaceChildren(...contacts.map(([label, href]) => {
    const link = node("a", "", label);
    link.href = href;
    if (href.startsWith("https:")) { link.target = "_blank"; link.rel = "noopener noreferrer"; }
    return link;
  }));

  const projectGroups = document.querySelector("#project-groups");
  projectGroups.replaceChildren(...t.projectGroups.map((groupName, groupIndex) => {
    const group = node("div", "project-group");
    group.append(node("h3", "", groupName));
    const grid = node("div", "project-grid");
    for (const [category, itemIndex, repo] of projects.filter((item) => item[0] === groupIndex)) {
      const card = node("article", "project-card");
      card.append(node("h4", "", dataLanguage.projects[itemIndex][0]));
      card.append(node("p", "", dataLanguage.projects[itemIndex][isFrench ? 2 : 1]));
      if (repo) {
        const link = node("a", "", t.code);
        link.href = `https://github.com/ayasadoq/${repo}`;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        card.append(link);
      }
      grid.append(card);
    }
    group.append(grid);
    return group;
  }));

  const experienceData = isFrench ? dataLanguage.experienceFr : dataLanguage.experience;
  const experienceList = document.querySelector("#experience-list");
  experienceList.replaceChildren(...experienceData.map(([date, title, org, description]) => {
    const item = node("article", "timeline-item");
    item.append(node("div", "timeline-date", date));
    const body = node("div", "");
    body.append(node("h3", "", title), node("p", "timeline-org", org));
    if (description) body.append(node("p", "timeline-copy", description));
    item.append(body);
    return item;
  }));

  const skillsData = isFrench ? dataLanguage.skillsFr : dataLanguage.skills;
  document.querySelector("#skills-list").replaceChildren(...skillsData.map(([label, value]) => {
    const card = node("article", "skill-card");
    card.append(node("h3", "", label), node("p", "", value));
    return card;
  }));

  const educationData = isFrench ? dataLanguage.educationFr : dataLanguage.education;
  document.querySelector("#education-list").replaceChildren(...educationData.map(([date, title, org, detail]) => {
    const item = node("article", "timeline-item");
    item.append(node("div", "timeline-date", date));
    const body = node("div", "");
    body.append(node("h3", "", title), node("p", "timeline-org", org));
    if (detail) body.append(node("p", "timeline-copy", detail));
    item.append(body);
    return item;
  }));

  addList(document.querySelector("#ctf-list"), isFrench ? dataLanguage.ctfFr : dataLanguage.ctf);
  addList(document.querySelector("#cert-list"), dataLanguage.certs);
  const communityData = isFrench ? dataLanguage.communityFr : dataLanguage.community;
  document.querySelector("#community-list").replaceChildren(...communityData.map(([org, role, description]) => {
    const card = node("article", "community-card");
    card.append(node("h3", "", org), node("p", "community-role", role), node("p", "", description));
    return card;
  }));
}

function enableScrollLeaves() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const layer = node("div", "leaf-overlay");
  layer.setAttribute("aria-hidden", "true");
  document.body.append(layer);

  const svgNS = "http://www.w3.org/2000/svg";
  let previousY = window.scrollY;
  let distanceSinceLeaf = 0;
  let activeLeaves = 0;

  const spawnLeaf = (direction) => {
    if (activeLeaves >= 7 || document.hidden) return;

    const leaf = document.createElementNS(svgNS, "svg");
    leaf.setAttribute("viewBox", "0 0 32 20");
    leaf.setAttribute("aria-hidden", "true");
    leaf.classList.add("scroll-leaf");

    const silhouette = document.createElementNS(svgNS, "path");
    silhouette.setAttribute("d", "M1 10C7 0 20 0 31 8C24 19 10 20 1 10Z");
    silhouette.setAttribute("fill", Math.random() > 0.74 ? "#bd7048" : "#71866c");
    const vein = document.createElementNS(svgNS, "path");
    vein.setAttribute("d", "M3 10C11 10 20 9 29 8");
    vein.setAttribute("fill", "none");
    vein.setAttribute("stroke", "#f5f3ee");
    vein.setAttribute("stroke-opacity", ".7");
    vein.setAttribute("stroke-width", "1");
    leaf.append(silhouette, vein);

    const fromLeft = Math.random() > 0.5;
    const edge = fromLeft ? 3 + Math.random() * 5 : 92 + Math.random() * 5;
    const startAngle = Math.round(Math.random() * 70 - 35);
    leaf.style.left = `${edge}vw`;
    leaf.style.top = `${18 + Math.random() * 64}vh`;
    leaf.style.setProperty("--leaf-drift-x", `${(fromLeft ? 1 : -1) * (16 + Math.random() * 42)}px`);
    const driftY = (direction > 0 ? -1 : 1) * (68 + Math.random() * 64);
    leaf.style.setProperty("--leaf-drift-y", `${driftY}px`);
    leaf.style.setProperty("--leaf-start-angle", `${startAngle}deg`);
    leaf.style.setProperty("--leaf-end-angle", `${startAngle + (Math.random() > 0.5 ? 130 : -130)}deg`);
    leaf.style.setProperty("--leaf-size", `${12 + Math.random() * 10}px`);

    activeLeaves++;
    layer.append(leaf);
    leaf.addEventListener("animationend", () => {
      leaf.remove();
      activeLeaves--;
    }, { once: true });
  };

  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    const delta = currentY - previousY;
    previousY = currentY;
    distanceSinceLeaf += Math.abs(delta);

    while (distanceSinceLeaf >= 190) {
      distanceSinceLeaf -= 190;
      spawnLeaf(delta);
    }
  }, { passive: true });
}

render(initialLanguage());
enableScrollLeaves();
