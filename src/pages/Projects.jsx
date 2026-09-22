import { useState } from "react";
import { Code, ExternalLink, FolderGit2, Github, Image as ImageIcon, Sparkles, UserRound } from "lucide-react";
import CyberBackground from "../components/CyberBackground";
import Header from "../components/Header";
import Seo from "../components/Seo";
import { projectCategories, projects } from "../data/projects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const filteredProjects = selectedCategory === "Tous" ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="relative min-h-screen overflow-hidden text-white" id="main-content" tabIndex={-1}>
      <Seo title="Projets" description="Projets full stack, DevOps et cloud réalisés par Cédrick Ratovonanahary." />
      <CyberBackground />
      <Header />
      <section className="relative z-10 px-6 pb-20 pt-32 sm:px-10 lg:px-20" id="projects">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 flex items-center justify-center gap-2 font-mono text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300"><FolderGit2 size={18} aria-hidden="true" /> Réalisations sélectionnées</p>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Mes <span className="text-cyan-300">projets</span></h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">Des projets concrets qui illustrent mon approche : résoudre un besoin, développer une solution maintenable et la rendre déployable.</p>
          </div>
          <div className="mb-12 flex flex-wrap justify-center gap-4" aria-label="Filtrer les projets">
            {projectCategories.map((category) => <button key={category} type="button" onClick={() => setSelectedCategory(category)} aria-pressed={selectedCategory === category} className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${selectedCategory === category ? "scale-105 bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30" : "border border-cyan-500/30 bg-cyan-950/20 text-gray-300 hover:border-cyan-400 hover:text-white"}`}>{category}</button>)}
          </div>
          <p className="sr-only" aria-live="polite">{filteredProjects.length} projet{filteredProjects.length > 1 ? "s" : ""} affiché{filteredProjects.length > 1 ? "s" : ""}.</p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article key={project.id} className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-transparent p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20">
                {project.featured && <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-cyan-400/40 bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300"><Sparkles size={12} aria-hidden="true" /> À la une</span>}
                <div>
                  <div className="mb-4 flex items-center gap-3"><Code className="text-cyan-400" size={24} aria-hidden="true" /><span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300/80">{project.category}</span></div>
                  <h2 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-cyan-300">{project.title}</h2>
                  <div className="mb-4"><p className="mb-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">Le besoin</p><p className="text-sm leading-relaxed text-gray-300">{project.description}</p></div>
                  <div className="mb-5 rounded-lg border border-cyan-500/15 bg-slate-950/30 p-3"><p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-200"><UserRound size={14} aria-hidden="true" /> Mon rôle</p><p className="mt-1 text-sm leading-relaxed text-slate-300">{project.role}</p></div>
                  <ul className="mb-6 space-y-2 text-sm leading-relaxed text-gray-300">{project.features.map((feature) => <li className="flex gap-2" key={feature}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{feature}</li>)}</ul>
                </div>
                <div>
                  <div className="mb-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-md border border-cyan-500/20 bg-cyan-950/40 px-2.5 py-1 font-mono text-xs text-cyan-200">{tag}</span>)}</div>
                  {project.image ? (
                    <img className="mb-5 aspect-video w-full rounded-lg border border-cyan-500/20 object-cover" src={project.image} alt={`Aperçu du projet ${project.title}`} loading="lazy" />
                  ) : (
                    <div className="mb-5 flex min-h-20 items-center justify-center rounded-lg border border-dashed border-cyan-500/30 bg-slate-950/25 px-4 text-center text-xs leading-relaxed text-slate-400"><ImageIcon className="mr-2 shrink-0 text-cyan-300" size={18} aria-hidden="true" /> Aperçu visuel et démonstration à ajouter</div>
                  )}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-cyan-500/10 pt-4">
                    {project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-gray-300 transition-colors hover:text-cyan-300"><Github size={16} aria-hidden="true" /> Voir le code source</a> : <span className="text-sm text-gray-400">Dépôt non public</span>}
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-gray-300 transition-colors hover:text-cyan-300"><ExternalLink size={16} aria-hidden="true" /> Voir la démo</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
