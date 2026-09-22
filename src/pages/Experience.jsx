import { Github, GraduationCap, ShieldCheck, ShoppingCart, Hotel } from "lucide-react";
import CyberBackground from "../components/CyberBackground";
import Header from "../components/Header";
import Seo from "../components/Seo";
import { projects } from "../data/projects";

const icons = [ShieldCheck, ShoppingCart, Hotel, GraduationCap];
const experiences = projects.map((project, index) => ({ ...project, icon: icons[index] }));

const Experience = () => {
    return (
        <main className="relative min-h-screen overflow-hidden text-white" id="main-content" tabIndex={-1}>
            <Seo title="Parcours" description="Parcours académique et projets personnels de Cédrick Ratovonanahary." />
            <CyberBackground />
            <Header />

            <section
                className="relative z-10 px-6 pb-20 pt-32 sm:px-10 lg:px-20"
                id="experience"
            >
                <div className="mx-auto max-w-5xl">
                    <div className="mb-16 text-center">
                        <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                            Réalisations sélectionnées
                        </p>
                        <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                            Parcours <span className="text-cyan-300">académique & personnel</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                            Des réalisations concrètes qui montrent mon approche du développement,
                            de la conception d&apos;une application à sa mise en production.
                        </p>
                    </div>

                    <div className="relative space-y-10 border-l border-cyan-500/20 pl-8 sm:pl-10">
                        {experiences.map((exp) => {
                            const Icon = exp.icon;
                            return (
                                <div key={exp.id} className="relative">
                                    <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/50 bg-[#09111f] sm:-left-[49px]">
                                        <Icon className="text-cyan-300" size={13} />
                                    </span>

                                    <div className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-transparent p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20">
                                        <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300/80">
                                            {exp.period}
                                        </p>
                                        <h3 className="mb-3 text-xl font-bold text-white">
                                            {exp.title}
                                        </h3>
                                        <p className="mb-5 text-sm leading-relaxed text-gray-300">
                                            {exp.description}
                                        </p>
                                        <div className="mb-5 border-l-2 border-cyan-400/60 pl-4">
                                            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">
                                                Résultat clé
                                            </p>
                                            <p className="mt-1 text-sm leading-relaxed text-slate-200">
                                                {exp.outcome}
                                            </p>
                                        </div>

                                        <div className="mb-5 flex flex-wrap gap-2">
                                            {exp.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-md border border-cyan-500/20 bg-cyan-950/40 px-2.5 py-1 text-xs font-mono text-cyan-200"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {exp.github && (
                                            <a
                                                href={exp.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-300 hover:text-cyan-300 transition-colors"
                                            >
                                                <Github size={16} /> Voir le dépôt
                                            </a>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Experience;
