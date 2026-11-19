import { photos } from "./photos.js?v=me2";
import { fr } from "./fr.js";

// All site content lives here. The engine reads only `ro` (the tree) and `lo` (the pages).
const gh = (repo) => "https://github.com/ayasadoq/" + repo;
const savedLanguage = () => { try { return localStorage.getItem("aya-language"); } catch { return null; } };
const prefersFrench = navigator.languages?.some((item) => item.toLowerCase().startsWith("fr")) || navigator.language?.toLowerCase().startsWith("fr");
export const language = savedLanguage() || (prefersFrench ? "fr" : "en");
export const tr = (s) => language === "fr" ? (fr[s] || s) : s;
const T = (s) => ({ s: tr(s) });                       // plain text
const L = (s, href) => ({ s: tr(s), href });           // link (opens in a new tab)
const mark = (s) => ({ s: tr(s), mark: true });        // marker highlight
const P = (...runs) => ({ t: "p", runs });      // paragraph
const LI = (...runs) => ({ t: "li", runs });
const IMG = (name) => ({ t: "img", src: "posts/img/" + name + ".jpg?v=" + photos[name].v, w: photos[name].w, h: photos[name].h, color: "posts/img/color/" + name + ".jpg?v=" + photos[name].v });
const page = (title, ...blocks) => ({ title: tr(title), date: "", blocks }); // date only used by /blog/ pages

// ---------- me ----------
export const To = [
  [T("i'm aya sadoq, a "), mark("5th-year engineering student"), T(" at ensaj, studying information systems and communications in morocco. i like turning tangled problems into tools people can actually use.")],
  [T("i build "), mark("ai and information systems"), T(" with a human-sized purpose: clearer decisions, less busywork, and technology that feels useful beyond the demo. my work ranges from erp insights to assistive tools.")],
  [T("i'm looking for a "), mark("pfe internship starting january 2027"), T(" in morocco or remotely. have a thoughtful problem for me to dig into? "), L("let's talk", "mailto:aya.sadoq.2003.lm@gmail.com"), T(".")],
  { gap: 2, runs: [T("more work and notes on "), L("github", "https://github.com/ayasadoq"), T("; the professional side of my story is on "), L("linkedin", "https://www.linkedin.com/in/aya-sadoq-7a7568265"), T(".")] },
];
export const ko = To.map((p) => (Array.isArray(p) ? p : p.runs).map((r) => r.s).join("")).join(" ");
export const Eo = {
  style: "pegada",
  beside: 300,
  items: [{ src: "posts/img/me-1.jpg?v=" + photos["me-1"].v, w: photos["me-1"].w, h: photos["me-1"].h, note: "" }],
};

// ---------- projects: [group, slug, leaf label, description, github url or null] ----------
const groups = ["ai & data", "agents", "mobile", "web & erp", "security & iot"];
const projects = [
  ["ai & data", "ensaj-chatbot", "ensaj chatbot", "University questions can be surprisingly hard to answer when the information is scattered. I built a conversational RAG assistant that searches ENSAJ documents indexed in ChromaDB, then responds through a Streamlit interface with voice input, spoken answers, and a 3D avatar. The goal: make campus information feel easier to reach.", gh("Ensaj-chatbot")],
  ["ai & data", "voicescope", "voicescope", "A classroom is full of signals beyond words. VoiceScope brings together speaker recognition, transcription, voice activity detection, and environmental sound classification to make those signals easier to understand. I connected Resemblyzer, PyTorch, Whisper, and YAMNet to a React dashboard and FastAPI backend.", gh("VoiceScope")],
  ["ai & data", "plant-doctor", "PlantDoctorAI", "A leaf can tell a complicated story. This CNN-based classifier identifies plant diseases from leaf images, reaching over 90% accuracy in evaluation. I paired confidence-scored predictions with a FastAPI backend and a Streamlit interface, making the result easier to explore than a raw model output.", gh("PlantDoctorAI")],
  ["ai & data", "bank-fraud", "CCFD-", "Fraud is rare by design, which makes it easy for a model to overlook. I built a machine-learning pipeline for imbalanced transaction data, using SMOTE and tuning around precision, recall, and F1. The work put special focus on reducing false negatives, where a missed case matters most.", gh("CCFD-")],
  ["agents", "assistive-vision", "assistive vision", "Finding an object should not depend on seeing it. This multi-agent computer-vision assistant combines voice commands, speech-to-text, YOLO detection, distance estimation, and spoken feedback to help visually impaired users locate objects. I shaped the flow around a simple loop: ask, detect, describe, and guide.", null],
  ["agents", "self-fixing-agent", "self-fixing agent", "What if a code review could also help prepare the fix? I built a multi-agent workflow with Google ADK and Gemini that inspects Python codebases, runs Pylint and Flake8, coordinates pull requests, and updates documentation. Each tool has a defined part in moving from a reported issue toward a reviewable change.", gh("Self-Fixing-Software-Project")],
  ["mobile", "studyflow-ai", "studyflow ai", "StudyFlow is a study companion designed for the days when a to-do list feels like another task. It turns natural-language requests into study tasks, offers personalized assistance, and brings together Pomodoro sessions, offline-first storage, and gamification. Built natively with Kotlin, MVVM, Room/SQLite, and Groq's Llama 3.3 API.", null],
  ["mobile", "floussi", "floussi", "Money has its own everyday language. Co-developed with a team, Floussi brings Moroccan habits into a personal-finance app: expense tracking, Daret management, Sando9ti savings goals, and clear financial statistics. React Native and Expo power the app, with Firebase Authentication and offline-first storage supporting its day-to-day use.", gh("floussi-app")],
  ["web & erp", "mediflow-ai", "mediflow ai", "Clinic work depends on many small details lining up. MediFlow combines Odoo clinic management with a separate FastAPI service for AI capabilities, bringing those pieces into one solution. I helped validate the integration through a test campaign with 70 passing tests.", null],
  ["web & erp", "odoo-maintenance", "odoo maintenance", "Maintenance work is easier to coordinate when people, equipment, and interventions live in one place. I built a custom Odoo module with ORM models, access controls, kanban and calendar views, and dashboards for technicians, clients, equipment, and service activity.", null],
  ["web & erp", "it-hub-ma", "it hub marocain", "Morocco's tech events deserve a home that is as connected as the community itself. IT Hub Marocain brings discovery, category filtering, registration, and ticket management together, with authentication and an admin dashboard for live analytics and CSV exports. I built the full-stack platform to make both finding and running events more manageable.", gh("IT-HUB-MA")],
  ["web & erp", "music-school", "music school", "A music school runs on more than lessons: it needs people, instruments, schedules, and a clear view of how everything is going. This web app supports role-based access and management of courses, instruments, teachers, and school statistics. I built its REST APIs and server-rendered interface with Spring Boot, Spring Security, Thymeleaf, Spring Data JPA, and H2.", gh("Music-App")],
  ["security & iot", "private-lte", "private lte", "Could a private 4G network ask for more than a SIM to verify who is connecting? This virtualized experiment explores SIM-based authentication paired with facial biometrics as a second factor. I brought together Open5GS, srsRAN, NS-3, Python, and OpenCV to study how the network and identity checks could work together.", null],
  ["security & iot", "esp32-climate", "esp32 climate", "A room's climate changes quietly, so this small IoT system keeps a record. An ESP32 and DHT22 collect temperature and humidity, send readings over Wi-Fi, and store their history in Supabase for remote visualization. A compact build that turns sensor measurements into something you can revisit.", null],
  ["security & iot", "card-fraud-ui", "card fraud ui", "A first look at the interface for a card-fraud detection product: this React/Vite scaffold includes preliminary authentication and dashboard routes. The repository is an early frontend foundation, not a completed fraud-detection system, and leaves room for the detection workflow to take shape.", gh("CCFD-")],
];

// ---------- experience: [slug, leaf label, role line, description] ----------
const experience = [
  ["sarabo", "sarabo", "AI Developer Intern at SARABO, Jun 2026 – Sep 2026", ["At SARABO, I worked on a practical question for Sage X3 users: how can business data answer back? I designed and developed a conversational BI copilot that pairs deterministic business intelligence with LLM-powered Text-to-SQL. Its seven features include dead-stock detection, stock forecasting, replenishment recommendations, and automated reporting—turning ERP questions into a more direct conversation."], gh("sage-x3-copilot")],
  ["ah-digital", "ah digital", "Mobile Developer & AI Automation Intern at AH Digital, Jan 2026 – Feb 2026", ["I helped bring a Swiss renewable-energy platform from a legacy web application to Android with React Native, batching API requests to reduce network round trips. I also developed an n8n AI chatbot and automated security workflows that flag suspicious API requests and IP addresses, block malicious sources, and reinforce protection through Cloudflare WAF and DDoS mitigation."]],
  ["gold-installations", "gold installations", "Full-Stack Developer Intern at Gold Installations, Jun 2025 – Aug 2025", ["At Gold Installations, I built an e-commerce experience from product discovery through order management, with a role-based dashboard for the people running the shop. The platform brought catalogs, carts, and administration together using PHP, MySQL, JavaScript, and Bootstrap."]],
];

// ---------- community: [slug, leaf label, role line, description] ----------
const community = [
  ["app-in-sciences", "app in sciences", "Secretary General (former Media Manager), App in Sciences – ENSAJ IT Club, 2022 – 2025", ["App in Sciences gave me a place to turn curiosity into shared experiences. I helped lead the club's operations and organized hackathons, CTF competitions, conferences, and technical workshops.", "@google-devfest", "I grew from Media Manager into Secretary General, coordinating a 10-member board and helping the club find its voice and momentum on campus.", "@ais-board", "@ais-secretary"]],
  ["om-nets", "om nets", "Event Manager, OM Nets, 2025 – present", ["@om-nets", "At OM Nets, good events begin with people talking across campuses. I coordinate with ENSA representatives around Morocco to organize events and initiatives that support engineering students and bring the network closer together."]],
  ["takafan", "takafan", "Reading Cell Manager, Takafan, 2022 – 2023", ["I organized and facilitated reading sessions and literary activities, making room for members to share ideas, discover new books, and enjoy learning together."]],
];

// ---------- build the page map (lo) ----------
const bodyBlocks = (body) => body.map((x) => x.startsWith("@") ? IMG(x.slice(1)) : P(T(x)));
export const lo = {};
for (const [, slug, label, text, repo] of projects) {
  const blocks = [P(T(text))];
  if (repo) blocks.push(P(T("code: "), L("github", repo)));
  lo["/projects/" + slug + "/"] = page(label, ...blocks);
}
for (const [slug, label, role, body, repo] of experience) {
  const blocks = [P(T(role)), ...bodyBlocks(body)];
  if (repo) blocks.push(P(T("code: "), L("github", repo)));
  lo["/experience/" + slug + "/"] = page(label, ...blocks);
}
for (const [slug, label, role, body] of community) lo["/community/" + slug + "/"] = page(label, P(T(role)), ...bodyBlocks(body));
lo["/achievements/ctf/"] = page("ctf",
  P(T("i enjoy the puzzle of finding a way through a system. across capture-the-flag competitions, i ranked "), mark("26th out of 1,070 participants (top 3%)"), T(".")),
  IMG("ctf-1337"),
  LI(T("cyber odyssey (akasec / 1337)")),
  LI(T("mundiapolis ctf")),
  LI(T("ehtp ctf")),
  LI(T("ensais ctf")),
  P(T("my favorite challenges make me look twice: web exploitation, forensics, cryptography, steganography, and osint.")),
);
lo["/achievements/certifications/"] = page("certifications",
  LI(T("aws academy cloud foundations")),
  LI(T("aws academy cloud architecting (in progress)")),
  LI(T("aws academy cloud developing")),
  LI(T("aws academy machine learning foundations")),
  LI(T("aws academy machine learning for nlp")),
  LI(T("aws academy generative ai foundations")),
  LI(T("aws engineering operations technician")),
  LI(T("iso/iec 27001 security associate")),
);
lo["/now/"] = page("now",
  P(T("lately, i've been making time for "), mark("devops"), T("—getting more comfortable with docker and kubernetes, one practical step at a time.")),
  P(T("alongside that: "), mark("aws academy cloud architecting"), T(" (in progress). building a stronger foundation for the systems i want to ship.")),
  P(T("updated november 2026.")),
);

// ---------- build the tree (ro) ----------
export const ro = {
  name: tr("aya sadoq"),
  kids: [
    { name: tr("me"), text: ko, rich: To, photos: Eo },
    {
      name: "projects",
      kids: [
        ...groups.map((g) => ({
          name: tr(g),
          kids: projects.filter((p) => p[0] === g).map((p) => ({ name: tr(p[2]), href: "/projects/" + p[1] + "/" })),
        })),
      ],
    },
    {
      name: tr("skills"),
      kids: [
        { name: tr("ai & data"), kids: ["rag", "cnn", "yolo", "pytorch", "tensorflow", "langgraph", "chromadb", "duckdb", "polars"].map((name) => ({ name })) },
        { name: tr("web & mobile"), kids: ["laravel", "next.js", "fastapi", "spring boot", "php", "react", "kotlin", "jetpack compose", "react native"].map((name) => ({ name })) },
        { name: tr("security & devops"), kids: ["ctf", "cloudflare waf", "iso 27001", "docker", tr("kubernetes (learning)")].map((name) => ({ name })) },
      ],
    },
    { name: tr("experience"), kids: experience.map((e) => ({ name: tr(e[1]), href: "/experience/" + e[0] + "/" })) },
    { name: tr("community"), kids: community.map((c) => ({ name: tr(c[1]), href: "/community/" + c[0] + "/" })) },
    { name: tr("achievements"), kids: [
      { name: tr("ctf"), href: "/achievements/ctf/" },
      { name: tr("certifications"), href: "/achievements/certifications/" },
    ] },
    { name: tr("now"), href: "/now/" },
    {
      name: tr("contact"),
      kids: [
        { name: "aya.sadoq.2003.lm@gmail.com", href: "mailto:aya.sadoq.2003.lm@gmail.com", sprig: true },
        { name: "github", href: "https://github.com/ayasadoq" },
        { name: "linkedin", href: "https://www.linkedin.com/in/aya-sadoq-7a7568265" },
        { name: tr("download cv"), href: "/cv/aya-sadoq-cv.pdf" }, // TODO: add the CV PDF at cv/aya-sadoq-cv.pdf
      ],
    },
  ],
};
