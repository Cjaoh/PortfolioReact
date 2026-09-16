import { useState } from "react";
import { Github, FolderGit2, Code, Sparkles, UserRound } from "lucide-react";
import CyberBackground from "../components/CyberBackground";
import Header from "../components/Header";

const projects = [
  {
    id: 1,
    title: "TechShop",
    category: "Full Stack",
    description:
      "Une plateforme e-commerce conçue pour proposer une expérience d'achat fluide tout en validant un déploiement applicatif moderne sur Kubernetes.",
    role: "Développement et déploiement de l'application de bout en bout.",
    features: [
      "Interface Angular 16 réactive basée sur les Signals",
      "Catalogue connecté à FakeStoreAPI",
      "Déploiement Kubernetes avec ArgoCD, Ingress SSL et 4 replicas Docker",
    ],
    tags: ["Angular 16", "Signals", "TailwindCSS", "Kubernetes", "ArgoCD"],
    github: "https://github.com/Cjaoh/Techshop",
    featured: true,
  },
  {
    id: 2,
    title: "Plateforme e-commerce DevSecOps",
    category: "DevOps",
    description:
      "Projet d'examen démontrant la mise en place d'une chaîne de livraison GitOps complète pour une application e-commerce PHP.",
    role: "Conception de l'infrastructure, du pipeline CI/CD et du déploiement sécurisé.",
    features: [
      "Conteneurisation de l'application PHP avec Docker",
      "Pipeline CI avec Tekton et livraison continue avec ArgoCD",
      "Déploiement Kubernetes avec ReplicaSet, Ingress, NodePort et SSL",
    ],
    tags: ["PHP", "Docker", "Kubernetes", "Tekton", "ArgoCD", "GitOps"],
    github: "https://github.com/Cjaoh/EXAMDEVSECOPS",
    featured: false,
  },
  {
    id: 3,
    title: "Gestion hôtelière",
    category: "Full Stack",
    description:
      "Application universitaire de gestion hôtelière, créée pour centraliser les réservations, la disponibilité des chambres et la facturation.",
    role: "Développement full stack de l'application et de la logique métier.",
    features: [
      "Réservations avec contrôle de disponibilité à plusieurs niveaux",
      "Facturation automatique et gestion de 80 chambres par catégorie",
      "Authentification JWT et accès différenciés admin / accueil",
    ],
    tags: ["MongoDB", "Express", "Vue.js", "Node.js", "JWT"],
    github: "https://github.com/Cjaoh/getstion-hotel-",
    featured: false,
  },
  {
    id: 4,
    title: "E-sitrana",
    category: "Cloud",
    description:
      "Application de clinique médicale réalisée pour mettre en pratique la conception d'une application web et son déploiement sur Google Cloud.",
    role: "Développement de l'application et mise en place de la chaîne de déploiement cloud.",
    features: [
      "Application PHP connectée à une base de données MySQL",
      "Déploiement sur Google Cloud Run avec Cloud SQL",
      "Intégration continue avec Cloud Build et Artifact Registry",
    ],
    tags: ["PHP", "MySQL", "Google Cloud Run", "Cloud SQL", "Cloud Build"],
    github: null,
    featured: false,
  },
];

const categories = ["Tous", "Full Stack", "DevOps", "Cloud"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="relative min-h-screen overflow-hidden text-white" id="main-content" tabIndex={-1}>
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
              Des projets concrets qui illustrent mon approche : résoudre un besoin,
              développer une solution maintenable et la rendre déployable.
            </p>
          </div>

          {/* Filtres de catégories */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
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

                  <div className="mb-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                      Étude de cas — le besoin
                    </p>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {project.description}
                    </p>
                  </div>
                  <div className="mb-5 rounded-lg border border-cyan-500/15 bg-slate-950/30 p-3">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                      <UserRound size={14} aria-hidden="true" /> Mon rôle
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{project.role}</p>
                  </div>
                  <ul className="mb-6 space-y-2 text-sm leading-relaxed text-gray-300">
                    {project.features.map((feature) => (
                      <li className="flex gap-2" key={feature}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-semibold text-gray-300 hover:text-cyan-300 transition-colors"
                      >
                        <Github size={16} /> Voir le code source
                      </a>
                    ) : (
                      <p className="text-sm text-gray-400">Dépôt non public</p>
                    )}
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
