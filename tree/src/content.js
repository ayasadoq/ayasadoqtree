// All site content lives here. The engine reads only `ro` (the tree) and `lo` (the pages).
const gh = (repo) => "https://github.com/ayasadoq/" + repo;
const T = (s) => ({ s });                       // plain text
const L = (s, href) => ({ s, href });           // link (opens in a new tab)
const mark = (s) => ({ s, mark: true });        // marker highlight
const P = (...runs) => ({ t: "p", runs });      // paragraph
const LI = (...runs) => ({ t: "li", runs });
const page = (title, ...blocks) => ({ title, date: "", blocks }); // date only used by /blog/ pages

// ---------- me ----------
export const To = [
  [T("i'm aya sadoq, a "), mark("5th-year engineering student"), T(" in information systems and communications at ensaj, based in morocco.")],
  [T("i design "), mark("ai and information systems"), T(" that help people make smarter, calmer decisions, from erp insights to assistive technology.")],
  [T("i'm looking for a "), mark("pfe internship"), T(".")],
  { gap: 2, runs: [T("find me on "), L("github", "https://github.com/ayasadoq"), T(" and "), L("linkedin", "https://www.linkedin.com/in/aya-sadoq-7a7568265"), T(".")] },
];
export const ko = "i'm aya sadoq, a 5th-year engineering student in information systems and communications at ensaj, based in morocco. i design ai and information systems that help people make smarter, calmer decisions, from erp insights to assistive technology. i'm looking for a pfe internship. find me on github and linkedin.";

// ---------- projects: [group, slug, leaf label, description, github url or null] ----------
const groups = ["ai & data", "agents", "mobile", "web & erp", "security & iot"];
const projects = [
  ["ai & data", "ensaj-chatbot", "ensaj chatbot", "Built a conversational RAG assistant that answers university-related questions using ENSAJ documents indexed in ChromaDB. Includes voice input/output and a 3D avatar through a Streamlit interface.", gh("Ensaj-chatbot")],
  ["ai & data", "voicescope", "voicescope", "Built an AI-powered classroom sound-monitoring system combining speaker recognition, speech transcription, voice activity detection, and environmental sound classification. Uses Resemblyzer, PyTorch, Whisper, and YAMNet with a React dashboard and FastAPI backend.", gh("VoiceScope")],
  ["ai & data", "plant-doctor", "plant doctor", "Developed a CNN-based plant disease classification system with over 90% accuracy. Built a FastAPI backend and Streamlit interface to provide confidence-scored diagnoses from leaf images.", null],
  ["ai & data", "bank-fraud", "bank fraud", "Developed an ML pipeline for detecting fraudulent transactions in highly imbalanced datasets. Focused on minimizing false negatives through SMOTE and precision, recall, and F1-score optimization.", null],
  ["agents", "assistive-vision", "assistive vision", "Developed a multi-agent computer vision assistant for visually impaired users. Combines voice commands, speech-to-text, YOLO object detection, distance estimation, and spoken feedback to help users locate objects.", null],
  ["agents", "self-fixing-agent", "self-fixing agent", "Developed a multi-agent workflow using Google ADK and Gemini to inspect Python codebases, detect issues with Pylint and Flake8, coordinate automated pull requests, and update project documentation.", gh("Self-Fixing-Software-Project")],
  ["mobile", "studyflow-ai", "studyflow ai", "Developed a native Android study companion featuring conversational AI task parsing, personalized study assistance, Pomodoro sessions, offline-first persistence, and gamification. Built with Kotlin, MVVM, Room/SQLite, and Groq's Llama 3.3 API.", null],
  ["mobile", "floussi", "floussi", "Co-developed a Moroccan personal finance application featuring expense tracking, Daret management, Sando9ti savings goals, financial statistics, and offline-first storage. Built with React Native, Expo, and Firebase Authentication.", gh("floussi-app")],
  ["web & erp", "mediflow-ai", "mediflow ai", "Developed an Odoo-based clinic management solution integrated with a separate FastAPI service for AI capabilities. Validated through a test campaign with 70 passing tests.", null],
  ["web & erp", "odoo-maintenance", "odoo maintenance", "Developed a custom Odoo module for managing maintenance interventions, technicians, clients, and equipment. Includes ORM models, access controls, kanban/calendar views, and dashboards.", null],
  ["security & iot", "private-lte", "private lte", "Designed a virtualized private 4G network experiment integrating SIM-based authentication with facial biometrics as a second authentication factor. Used Open5GS, srsRAN, NS-3, Python, and OpenCV.", null],
  ["security & iot", "esp32-climate", "esp32 climate", "Developed an IoT monitoring solution using ESP32 and DHT22 to collect temperature and humidity measurements, transmit data over Wi-Fi, and store historical readings in Supabase for remote visualization.", null],
  ["security & iot", "card-fraud-ui", "card fraud ui", "Created a React/Vite frontend scaffold for a credit-card fraud detection application. The repository currently contains preliminary authentication and dashboard routes rather than a completed detection system.", gh("CCFD-")],
];

// ---------- experience: [slug, leaf label, role line, description] ----------
const experience = [
  ["sarabo", "sarabo", "AI Developer Intern at SARABO, Jun 2026 – Sep 2026", "Designed and developed a conversational BI copilot for Sage X3 ERP, combining deterministic business intelligence with LLM-powered Text-to-SQL. Implemented seven BI features, including dead-stock detection, stock forecasting, replenishment recommendations, and automated reporting.", gh("sage-x3-copilot")],
  ["ah-digital", "ah digital", "Mobile Developer & AI Automation Intern at AH Digital, Jan 2026 – Feb 2026", "Migrated a Swiss renewable-energy platform from a legacy web application to a React Native Android application, optimizing API request batching to reduce network round trips. Developed an AI chatbot using n8n and integrated automated security workflows to detect suspicious API requests/IP addresses, block malicious sources, and strengthen application protection through Cloudflare WAF and DDoS mitigation."],
  ["gold-installations", "gold installations", "Full-Stack Developer Intern at Gold Installations, Jun 2025 – Aug 2025", "Developed an end-to-end e-commerce platform featuring product catalogs, shopping cart, order management, and a role-based administration dashboard using PHP, MySQL, JavaScript, and Bootstrap.", gh("Electro-store")],
];

// ---------- community: [slug, leaf label, role line, description] ----------
const community = [
  ["app-in-sciences", "app in sciences", "Secretary General (former Media Manager), App in Sciences – ENSAJ IT Club, 2022 – 2025", "Led organizational operations for a university IT club organizing hackathons, CTF competitions, conferences, and technical workshops. Coordinated a 10-member board and progressed from Media Manager to Secretary General, contributing to the club's visibility and growth."],
  ["om-nets", "om nets", "Event Manager, OM Nets, 2025 – present", "Coordinate with a nationwide network of ENSA representatives to organize events and initiatives supporting engineering students across Morocco."],
  ["takafan", "takafan", "Reading Cell Manager, Takafan, 2022 – 2023", "Organized and facilitated reading sessions and literary activities, encouraging participation and knowledge-sharing among club members."],
];

// ---------- build the page map (lo) ----------
export const lo = {};
for (const [, slug, label, text, repo] of projects) {
  const blocks = [P(T(text))];
  if (repo) blocks.push(P(T("code: "), L("github", repo)));
  lo["/projects/" + slug + "/"] = page(label, ...blocks);
}
for (const [slug, label, role, text, repo] of experience) {
  const blocks = [P(T(role)), P(T(text))];
  if (repo) blocks.push(P(T("code: "), L("github", repo)));
  lo["/experience/" + slug + "/"] = page(label, ...blocks);
}
for (const [slug, label, role, text] of community) lo["/community/" + slug + "/"] = page(label, P(T(role)), P(T(text)));
lo["/achievements/ctf/"] = page("ctf",
  P(T("ranked "), mark("26th out of 1,070 participants (top 3%)"), T(" across capture-the-flag competitions.")),
  LI(T("cyber odyssey (akasec / 1337)")),
  LI(T("mundiapolis ctf")),
  LI(T("ehtp ctf")),
  LI(T("ensais ctf")),
  P(T("strongest in web exploitation, forensics, cryptography, steganography and osint.")),
);
lo["/achievements/certifications/"] = page("certifications",
  LI(T("aws academy cloud foundations")),
  LI(T("aws academy cloud architecting")),
  LI(T("aws academy cloud developing")),
  LI(T("aws academy machine learning foundations")),
  LI(T("aws academy machine learning for nlp")),
  LI(T("aws academy generative ai foundations")),
  LI(T("aws engineering operations technician")),
  LI(T("iso/iec 27001 (in progress)")), // TODO: I'll change this if I have earned it
);

// ---------- build the tree (ro) ----------
export const ro = {
  name: "aya sadoq",
  kids: [
    { name: "me", text: ko, rich: To },
    {
      name: "projects",
      kids: [
        ...groups.map((g) => ({
          name: g,
          kids: projects.filter((p) => p[0] === g).map((p) => ({ name: p[2], href: "/projects/" + p[1] + "/" })),
        })),
        { name: "more on github", href: "https://github.com/ayasadoq", sprig: true },
      ],
    },
    { name: "experience", kids: experience.map((e) => ({ name: e[1], href: "/experience/" + e[0] + "/" })) },
    { name: "community", kids: community.map((c) => ({ name: c[1], href: "/community/" + c[0] + "/" })) },
    { name: "achievements", kids: [
      { name: "ctf", href: "/achievements/ctf/" },
      { name: "certifications", href: "/achievements/certifications/" },
    ] },
    {
      name: "contact",
      kids: [
        { name: "aya.sadoq.2003.lm@gmail.com", href: "mailto:aya.sadoq.2003.lm@gmail.com", sprig: true },
        { name: "github", href: "https://github.com/ayasadoq" },
        { name: "linkedin", href: "https://www.linkedin.com/in/aya-sadoq-7a7568265" },
        { name: "download cv", href: "/cv/aya-sadoq-cv.pdf" }, // TODO: put your CV file at tree/../cv/aya-sadoq-cv.pdf
      ],
    },
  ],
};