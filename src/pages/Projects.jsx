import React, { useState } from "react";
import { ExternalLink, Github, FolderGit2, Code, Layers, Sparkles } from "lucide-react";
import CyberBackground from "../components/CyberBackground";
import Header from "../components/Header";

// Données démo pour les projets (modifiables facilement)
const initialProjects = [
  {
    id: 1,
    title: "E-Commerce CyberStore",
    category: "Full Stack",
    description:
      "Plateforme de commerce électronique moderne avec panier en temps réel, paiement sécurisé et interface utilisateur cyberpunk.",
    tags: ["React", "Node.js", "TailwindCSS", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Application Gestion de Tâches",
    category: "Frontend",
    description:
      "Dashboard interactif pour la gestion de projets et suivi de productivité avec animations fluides.",
    tags: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
  {
    id: 3,
    title: "API Rest & Authentification",
    category: "Backend",
    description:
      "Architecture API robuste avec authentification JWT, gestion des rôles et documentation Swagger.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
];

const categories = ["Tous", "Full Stack", "Frontend", "Backend"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects =
    selectedCategory === "Tous"
      ? initialProjects
      : initialProjects.filter((project) => project.category === selectedCategory);

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <CyberBackground />
      <Header />

      <section className="relative z-10 px-6 pb-20 pt-32 sm:px-10 lg:px-20" id="projects">
        <div className="mx-auto max-w-6xl">
          {/* En-tête de la section */}
          <div className="mb-16 text-center">
            <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300 flex items-center justify-center gap-2">
              <FolderGit2 size={18} /> Mes Réalisations
            </p>
            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              Mes <span className="text-cyan-300">Projets</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              Découvrez une sélection de mes travaux récents, combinant design moderne, performance et génie logiciel.
            </p>
          </div>

          {/* Filtres de catégories */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 scale-105"
                    : "border border-cyan-500/30 bg-cyan-950/20 text-gray-300 hover:border-cyan-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grille de Projets */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-transparent p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                {project.featured && (
                  <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-400/40">
                    <Sparkles size={12} /> À la une
                  </span>
                )}

                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <Code className="text-cyan-400" size={24} />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300/80">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-gray-300">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Badges de Technologies */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-cyan-500/20 bg-cyan-950/40 px-2.5 py-1 text-xs font-mono text-cyan-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Liens du Projet */}
                  <div className="flex items-center gap-4 pt-4 border-t border-cyan-500/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-gray-300 hover:text-cyan-300 transition-colors"
                    >
                      <Github size={16} /> Code Source
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
                    >
                      <ExternalLink size={16} /> Démo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
