import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Terminal,
  Calendar,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function AIPortfolio() {
  type Lang = "en" | "fr";
  // English and French translations for all static text
  const t: Record<Lang, Record<string, string>> = {
    en: {
      status: "status:",
      seeking_internship: "seeking_internship pfe [Feb 2026 • 4-6 months]",
      education: "education:",
      master: "Master in AI & Data Science @ UMP Oujda (2024-2026)",
      licence: "Licence in Computer Science @ UMP Oujda (2022-2024)",
      location: "location:",
      contact: "contact",
      github: "github",
      linkedin: "linkedin",
      quick_stats: "// QUICK STATS",
      projects_completed: "projects_completed",
      technologies_mastered: "technologies_mastered",
      languages_spoken: "languages_spoken",
      filter_by_category: "// FILTER BY CATEGORY",
      all: "all",
      computer_vision: "computer_vision",
      deep_learning: "deep_learning",
      nlp: "NLP",
      machine_learning: "machine_learning",
      mobile: "mobile",
      projects: "PROJECTS",
      skills: "SKILLS",
      about: "ABOUT",
      core_qualities: "// CORE QUALITIES",
      autonomous: "autonomous",
      autonomous_desc: "self-driven problem solver",
      rigorous: "rigorous",
      rigorous_desc: "detail-oriented & precise",
      creative: "creative",
      creative_desc: "innovative approach to challenges",
      analytical: "analytical",
      analytical_desc: "data-driven decision making",
      languages: "// LANGUAGES",
      arabic: "arabic",
      french: "french",
      english: "english",
      native: "native",
      advanced: "advanced",
      interests: "// INTERESTS",
      travel: "travel",
      gaming: "gaming",
      design: "design",
      problem_solving: "problem_solving",
      tech_innovation: "tech_innovation",
      copyright: "© 2026 zaineb_rahmani",
      built_with: "built with react • deployed with ❤",
      core: "core",
      Machine_Learning: "machine learning",
      data: "data",
      web: "web & mobile",
      Databases: "databases",
    },
    fr: {
      status: "statut :",
      seeking_internship: "recherche de stage pfe [Fév 2026 • 4-6 mois]",
      education: "éducation:",
      master: "Master en IA & Science des Données @ UMP Oujda (2024-2026)",
      licence: "Licence en Informatique @ UMP Oujda (2022-2024)",
      location: "localisation:",
      contact: "contact",
      github: "github",
      linkedin: "linkedin",
      quick_stats: "// CHIFFRES CLÉS",
      projects_completed: "projets_réalisés",
      technologies_mastered: "technologies_maîtrisées",
      languages_spoken: "langues_parlées",
      filter_by_category: "// FILTRER PAR CATÉGORIE",
      all: "tout",
      computer_vision: "vision_par_ordinateur",
      deep_learning: "Deep learning",
      nlp: "NLP",
      machine_learning: "Machine learning",
      mobile: "mobile",
      projects: "PROJETS",
      skills: "COMPÉTENCES",
      about: "À PROPOS",
      core_qualities: "// QUALITÉS PRINCIPALES",
      autonomous: "autonome",
      autonomous_desc: "résolution de problèmes en autonomie",
      rigorous: "rigoureux",
      rigorous_desc: "précis & attentif aux détails",
      creative: "créatif",
      creative_desc: "approche innovante des défis",
      analytical: "analytique",
      analytical_desc: "prise de décision basée sur les données",
      languages: "// LANGUES",
      arabic: "arabe",
      french: "français",
      english: "anglais",
      native: "natif",
      advanced: "avancé",
      interests: "// CENTRES D'INTÉRÊT",
      travel: "voyage",
      gaming: "jeux vidéo",
      design: "design",
      problem_solving: "résolution_problèmes",
      tech_innovation: "innovation_technologique",
      copyright: "© 2026 zaineb_rahmani",
      built_with: "développé avec react • déployé avec ❤",
      core: "base",
      Machine_Learning: "apprentissage automatique",
      data: "données",
      web: "web & mobile",
      Databases: "bases de données",
    },
  };
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeSection, setActiveSection] = useState("projects");
  const [language, setLanguage] = useState<Lang>("en");

  const projects = [
    {
      id: 1,
      title: {
        en: "posture_detection_system",
        fr: "système_de_détection_de_posture",
      },
      date: "2026.01",
      category: "computer-vision",
      tags: ["opencv", "openCV", "DL", "python"],
      description: {
        en: "Real-time posture analysis for workplace ergonomics",
        fr: "Analyse de la posture en temps réel pour l'ergonomie au travail",
      },
      status: "active",
    },
    {
      id: 2,
      title: {
        en: "spice_classification_cnn",
        fr: "classification_d'épices_cnn",
      },
      date: "2026.01",
      category: "deep-learning",
      tags: ["tensorflow", "cnn", "img-proc"],
      description: {
        en: "Deep learning models for automated spice classification",
        fr: "Modèles d'apprentissage profond pour la classification automatisée des épices",
      },
      status: "active",
    },
    {
      id: 3,
      title: {
        en: "mobile_document_quality_check",
        fr: "vérification_qualité_doc_mobile",
      },
      date: "2025.12",
      category: "mobile",
      tags: ["kotlin", "c++", "jni", "opencv"],
      description: {
        en: "Android app for document image quality validation",
        fr: "Application Android pour la validation de la qualité des images de documents",
      },
      status: "deployed",
    },
    {
      id: 4,
      title: {
        en: "intelligent_rag_chatbot",
        fr: "chatbot_rag_intelligent",
      },
      date: "2025.11",
      category: "NLP",
      tags: [
        "python",
        "flask",
        "react",
        "vite",
        "openai",
        "vector search",
        "REST",
        "HTML/CSS",
      ],
      description: {
        en: "Full-stack RAG chatbot with semantic search for 14 academic programs",
        fr: "Chatbot RAG full-stack avec recherche sémantique pour 14 programmes académiques",
      },
      status: "deployed",
    },
    {
      id: 5,
      title: {
        en: "mario_kart_ml_tutor",
        fr: "tuteur_ml_mario_kart",
      },
      date: "2025.06",
      category: "machine-learning",
      tags: ["sklearn", "streamlit", "xgboost", "pandas"],
      description: {
        en: "Educational ML pipeline with interactive Streamlit interface",
        fr: "Pipeline ML éducatif avec interface interactive Streamlit",
      },
      status: "completed",
    },
    {
      id: 6,
      title: {
        en: "sms_spam_detection",
        fr: "détection_spam_sms",
      },
      date: "2025.05",
      category: "NLP",
      tags: [
        "python",
        "deep learning",
        "lstm",
        "cnn",
        "ann",
        "xgboost",
        "random forest",
      ],
      description: {
        en: `Spam  detection pipeline combining traditional Machine Learning (XGBoost, Random Forest) and Deep Learning (LSTM, CNN, ANN) models. Conducted a comparative evaluation of six models, achieving 95.7% accuracy and an F1-score of 0.94.`,
        fr: `Pipeline de détection de spam combinant l'apprentissage automatique traditionnel (XGBoost, Random Forest) et l'apprentissage profond (LSTM, CNN, ANN). Évaluation comparative de six modèles, atteignant 95,7% de précision et un score F1 de 0,94.`,
      },
      status: "completed",
    },
  ];

  const skills = {
    core: ["python", "java", "C++", "C", "kotlin", "matlab", "R"],
    Machine_Learning: [
      "tensorflow",
      "pytorch",
      "sklearn",
      "CNN",
      "lstm",
      "transformers",
    ],
    computer_vision: ["opencv", "img-classification", "OCR"],
    data: ["pandas", "numpy", "matplotlib", "seaborn"],
    web: ["react", "flask", "streamlit", "android"],
    Databases: ["mysql", "mongodb", "redis", "vector-db"],
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Language Selector */}
      <div className="flex justify-end px-6 py-2 border-b border-black bg-gray-50">
        <button
          className={`px-3 py-1 mx-1 border-2 border-black font-bold text-sm ${
            language === "en" ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => setLanguage("en")}
        >
          English
        </button>
        <button
          className={`px-3 py-1 mx-1 border-2 border-black font-bold text-sm ${
            language === "fr" ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => setLanguage("fr")}
        >
          Français
        </button>
      </div>
      {/* Terminal Header */}
      <header className="border-b-2 border-black px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Terminal className="w-5 h-5" />
            <span className="text-sm">zaineb@portfolio:~$</span>
            <span className="animate-pulse">_</span>
          </div>
          <div className="text-xs text-gray-600">
            {language === "en" ? "last login:" : "dernière connexion :"}{" "}
            {new Date().toLocaleDateString(
              language === "en" ? "en-US" : "fr-FR",
              {
                weekday: "short",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 max-w-6xl mx-auto border-b-2 border-black">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <h1 className="text-5xl font-bold mb-2">ZAINEB RAHMANI</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ChevronRight className="w-4 h-4" />
                <span>
                  {language === "en"
                    ? "Master 2 student in AI & Data Science"
                    : "Étudiante en Master 2 IA & Science des Données"}
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-8 text-sm">
              <div className="flex gap-4">
                <span className="w-24 text-gray-600">{t[language].status}</span>
                <span className="font-bold">
                  {t[language].seeking_internship}
                </span>
              </div>
              <div className="flex gap-4">
                <span className="w-24 text-gray-600">
                  {t[language].education}
                </span>
                <span>{t[language].master}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-24 text-gray-600"></span>
                <span>{t[language].licence}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-24 text-gray-600">
                  {t[language].location}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Oujda, Morocco
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="mailto:zaineb.rah20@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{t[language].contact}</span>
              </a>
              <a
                href="https://github.com/Zaineb08"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">{t[language].github}</span>
              </a>
              <a
                href="https://linkedin.com/in/zaineb-rahmani-07117315b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">{t[language].linkedin}</span>
              </a>
            </div>
          </div>

          <div className="border-2 border-black p-6">
            <div className="text-xs text-gray-600 mb-4">
              {t[language].quick_stats}
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs">{t[language].projects_completed}</div>
              </div>
              <div className="border-t-2 border-black pt-4">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs">
                  {t[language].technologies_mastered}
                </div>
              </div>
              <div className="border-t-2 border-black pt-4">
                <div className="text-2xl font-bold">03</div>
                <div className="text-xs">{t[language].languages_spoken}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-6 max-w-6xl mx-auto">
        <div className="flex gap-1 border-b-2 border-black">
          {["projects", "skills", "about"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              className={`px-6 py-3 text-sm font-bold transition-colors ${
                activeSection === tab
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {t[language][tab]}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      {activeSection === "projects" && (
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="text-xs text-gray-600 mb-4">
              {t[language].filter_by_category}
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "all",
                "computer-vision",
                "deep-learning",
                "NLP",
                "machine-learning",
                "mobile",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-sm font-bold border-2 border-black transition-colors ${
                    selectedCategory === cat
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {cat === "all"
                    ? t[language].all
                    : t[language][cat.replace("-", "_")] ||
                      cat.replace("-", "_")}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="border-2 border-black p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-gray-600">
                        [{String(idx + 1).padStart(2, "0")}]
                      </span>
                      <h3 className="text-xl font-bold">
                        {project.title[language]}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 border border-black ${
                          project.status === "active"
                            ? "bg-green-200"
                            : project.status === "deployed"
                            ? "bg-blue-200"
                            : "bg-gray-200"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </div>
                    <p className="text-sm mb-4">
                      {project.description[language]}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-gray-100 border border-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === "skills" && (
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="border-2 border-black p-6">
                <div className="text-xs text-gray-600 mb-4">
                  //{" "}
                  {t[language][category]?.toUpperCase() ||
                    category.toUpperCase().replace("_", " & ")}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm border border-black hover:bg-black hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-black p-6">
              <div className="text-xs text-gray-600 mb-4">
                {t[language].core_qualities}
              </div>
              <div className="space-y-3">
                {[
                  {
                    quality: t[language].autonomous,
                    desc: t[language].autonomous_desc,
                  },
                  {
                    quality: t[language].rigorous,
                    desc: t[language].rigorous_desc,
                  },
                  {
                    quality: t[language].creative,
                    desc: t[language].creative_desc,
                  },
                  {
                    quality: t[language].analytical,
                    desc: t[language].analytical_desc,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold">{item.quality}</div>
                      <div className="text-xs text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-black p-6">
              <div className="text-xs text-gray-600 mb-4">
                {t[language].languages}
              </div>
              <div className="space-y-4">
                {[
                  {
                    lang: t[language].arabic,
                    level:
                      language === "en"
                        ? "████████████ native"
                        : "████████████ natif",
                    percent: "100%",
                  },
                  {
                    lang: t[language].french,
                    level:
                      language === "en"
                        ? "██████████░░ advanced"
                        : "██████████░░ avancé",
                    percent: "85%",
                  },
                  {
                    lang: t[language].english,
                    level:
                      language === "en"
                        ? "██████████░░ advanced"
                        : "██████████░░ avancé",
                    percent: "85%",
                  },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-bold">{item.lang}</span>
                      <span className="text-xs text-gray-600">
                        {item.percent}
                      </span>
                    </div>
                    <div className="font-mono text-xs">{item.level}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-black p-6 md:col-span-2">
              <div className="text-xs text-gray-600 mb-4">
                {t[language].interests}
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  t[language].travel,
                  t[language].gaming,
                  t[language].design,
                  t[language].problem_solving,
                  t[language].tech_innovation,
                ].map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 border-2 border-black text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t-2 border-black px-6 py-8 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm">
              <div className="font-bold">{t[language].copyright}</div>
              <div className="text-xs text-gray-600">
                {t[language].built_with}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:zaineb.rah20@gmail.com"
                className="hover:scale-110 transition-transform"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Zaineb08"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/zaineb-rahmani-07117315b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
