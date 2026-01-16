import React, { useState } from "react";
import {
  FiChevronRight as ChevronRight,
  FiExternalLink as ExternalLink,
  FiGithub as Github,
  FiLinkedin as Linkedin,
  FiMail as Mail,
} from "react-icons/fi";

type Project = {
  id: number;
  title: string;
  year: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
};

const AIPortfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: "Posture Detection",
      year: "2026",
      category: "Computer Vision",
      description: "Real-time posture analysis for workplace ergonomics",
      tech: ["OpenCV", "Deep Learning", "Python"],
      link: "#",
    },
    {
      id: 2,
      title: "Spice Classification CNN",
      year: "2026",
      category: "Deep Learning",
      description: "CNN model for identifying spice varieties from images",
      tech: ["TensorFlow", "CNN", "Image Processing"],
      link: "#",
    },
    {
      id: 3,
      title: "University RAG Chatbot",
      year: "2025",
      category: "NLP",
      description: "RAG-based assistant for university program guidance",
      tech: ["LangChain", "RAG", "LLM", "React", "Flask"],
      link: "#",
    },
    {
      id: 4,
      title: "Spam Detection System",
      year: "2025",
      category: "Machine Learning",
      description: "Comparative analysis of ML/DL models for email security",
      tech: ["Scikit-learn", "TensorFlow", "NLP", "Python"],
      link: "#",
    },
    {
      id: 5,
      title: "Mario Kart RL Agent",
      year: "2025",
      category: "Reinforcement Learning",
      description: "First ML project - training an agent to play Mario Kart",
      tech: ["Random Forest", "XGBoost", "Python", "Streamlit", "Gamification"],
      link: "#",
    },
    {
      id: 6,
      title: "OCR Invoice Scanner",
      year: "2025",
      category: "Mobile Development",
      description: "Android app for extracting invoice data via OCR",
      tech: ["Android Studio", "OCR", "Mobile", "Java", "Kotlin"],
      link: "#",
    },
    {
      id: 7,
      title: "Invoice Management",
      year: "2024",
      category: "Web Development",
      description: "PHP-based system for creating and printing invoices",
      tech: ["PHP", "MySQL", "HTML/CSS"],
      link: "#",
    },
    {
      id: 8,
      title: "E-Commerce Platform for IT devices",
      year: "2023",
      category: "Web Development",
      description: "Full-stack online store built from scratch",
      tech: ["JavaScript", "HTML/CSS", "Frontend"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Résumé/Profile Section */}
      <section className="bg-zinc-950 border-b border-zinc-800 px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Zaineb Rahmani</h1>
            <h2 className="text-xl text-zinc-400 mb-4">
              Master 2 Intelligence Artificielle & Data Science
            </h2>
            <p className="text-zinc-400 max-w-xl mb-4">
              Actuellement en Master 2 à l'Université Mohammed Premier, Oujda.
              <br />
              <strong>Objectif :</strong> Stage PFE (4-6 mois) à partir de
              mi-février 2026 en Data Science, IA ou Computer Vision.
            </p>
            <div className="flex flex-col gap-1 text-zinc-500 text-sm mb-4">
              <span>
                <strong>Email:</strong> zaineb.rah20@gmail.com
              </span>
              <span>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://linkedin.com/in/zaineb-rahmani-07117315b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/zaineb-rahmani-07117315b
                </a>
              </span>
              <span>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/Zaineb08"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Zaineb08
                </a>
              </span>
              <span>
                <strong>Localisation:</strong> Oujda, Maroc
              </span>
              <span>
                <strong>Langues:</strong> Arabe (natif), Français (avancé),
                Anglais (avancé)
              </span>
            </div>
            <div className="flex flex-col gap-1 text-zinc-400 text-sm">
              <span>
                <strong>Formation:</strong>
              </span>
              <span>Master 2 IA & Data Science, UMP Oujda (2024-2026)</span>
              <span>Licence Informatique, UMP Oujda (2021-2024)</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-sm text-zinc-400">
            <div>
              <h3 className="font-semibold text-zinc-300 mb-1">Qualités</h3>
              <div>
                Autonome, Rigoureuse, Créative (problem solving), Analytique
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-300 mb-1">
                Centres d'intérêt
              </h3>
              <div>Voyages, Gaming, Design</div>
            </div>
          </div>
        </div>
      </section>
      {/* Header */}
      <header className="border-b border-zinc-800 px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-light mb-2">
            AI & Data Science Engineer
          </h1>
          <p className="text-zinc-500">Specializing in Computer Vision</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* About */}
        <section className="mb-20">
          <p className="text-zinc-400 leading-relaxed max-w-2xl">
            Building intelligent systems from web applications to computer
            vision models. Currently focused on deep learning and real-world CV
            applications.
          </p>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-sm uppercase tracking-wider text-zinc-600 mb-8">
            Selected Work
          </h2>
          <div className="space-y-1">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group border-b border-zinc-900 py-6 hover:border-zinc-700 transition-colors cursor-pointer"
                onClick={() =>
                  setSelectedProject(
                    selectedProject?.id === project.id ? null : project
                  )
                }
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-normal group-hover:text-zinc-300 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-zinc-600">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500 mb-3">
                      {project.description}
                    </p>

                    {selectedProject?.id === project.id && (
                      <div className="mt-4 pt-4 border-t border-zinc-900">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-1 bg-zinc-900 text-zinc-400 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.link, "_blank");
                          }}
                          className="text-sm text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-2"
                        >
                          View Project <ExternalLink size={14} />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="text-xs text-zinc-600 whitespace-nowrap">
                    {project.category}
                  </div>

                  <ChevronRight
                    size={16}
                    className={`text-zinc-700 group-hover:text-zinc-500 transition-all ${
                      selectedProject?.id === project.id ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-20 pt-12 border-t border-zinc-900">
          <h2 className="text-sm uppercase tracking-wider text-zinc-600 mb-8">
            Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm mb-3 text-zinc-400">Computer Vision</h3>
              <ul className="text-sm text-zinc-600 space-y-1">
                <li>OpenCV</li>
                <li>CNN Architectures</li>
                <li>Image Classification</li>
                <li>Pose Estimation</li>
                <li>OCR</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm mb-3 text-zinc-400">Machine Learning</h3>
              <ul className="text-sm text-zinc-600 space-y-1">
                <li>TensorFlow / PyTorch</li>
                <li>NLP & RAG</li>
                <li>Reinforcement Learning</li>
                <li>Model Comparison</li>
                <li>Deep Learning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm mb-3 text-zinc-400">Development</h3>
              <ul className="text-sm text-zinc-600 space-y-1">
                <li>Python</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Android Development</li>
                <li>Web Development</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 mt-20 px-6 py-8">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <p className="text-sm text-zinc-600">Available for opportunities</p>
          <div className="flex gap-6">
            <a
              href="mailto:your@email.com"
              className="text-zinc-600 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIPortfolio;
