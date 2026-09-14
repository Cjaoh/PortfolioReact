import { Github, GraduationCap, ShieldCheck, ShoppingCart, Hotel } from "lucide-react";
import CyberBackground from "../components/CyberBackground";
import Header from "../components/Header";

const experiences = [
    {
        id: 1,
        icon: ShieldCheck,
        title: "Examen DevSecOps",
        period: "Projet d'examen",
        description:
            "Plateforme e-commerce PHP conteneurisée, déployée selon un pipeline GitOps complet : Kubernetes (ReplicaSet, Ingress, NodePort), ArgoCD pour la livraison continue, Tekton pour le pipeline CI, et sécurisation via certificat SSL.",
        tags: ["Kubernetes", "ArgoCD", "Tekton", "GitOps", "Docker"],
        github: "https://github.com/Cjaoh/EXAMDEVSECOPS",
    },
    {
        id: 2,
        icon: ShoppingCart,
        title: "TechShop",
        period: "Projet personnel",
        description:
            "Plateforme e-commerce moderne construite avec Angular 16 et les Signals, connectée à FakeStoreAPI. Déployée en production sur Kubernetes avec ArgoCD, Ingress sécurisé par certificat SSL et 4 replicas Docker.",
        tags: ["Angular 16", "Signals", "TailwindCSS", "Kubernetes"],
        github: "https://github.com/Cjaoh/Techshop",
    },
    {
        id: 3,
        icon: Hotel,
        title: "Gestion Hôtelière",
        period: "Projet universitaire — L3 Génie Logiciel",
        description:
            "Application full stack de gestion hôtelière en MEVN : réservations avec vérification de disponibilité multi-niveaux, facturation automatique, authentification JWT avec rôles (admin / accueil), et gestion de 80 chambres réparties par catégorie.",
        tags: ["MongoDB", "Express", "Vue.js", "Node.js", "JWT"],
        github: "https://github.com/Cjaoh/getstion-hotel-",
    },
    {
        id: 4,
        icon: GraduationCap,
        title: "E-sitrana",
        period: "Travaux pratiques — Cloud",
        description:
            "Application web de clinique médicale en PHP/MySQL, déployée sur Google Cloud Run avec Cloud SQL, Artifact Registry et Cloud Build pour l'intégration continue.",
        tags: ["PHP", "MySQL", "Google Cloud Run", "CI/CD"],
        github: null,
    },
];

const Experience = () => {
    return (
        <main className="relative min-h-screen overflow-hidden text-white">
            <CyberBackground />
            <Header />

            <section
                className="relative z-10 px-6 pb-20 pt-32 sm:px-10 lg:px-20"
                id="experience"
            >
                <div className="mx-auto max-w-5xl">
                    <div className="mb-16 text-center">
                        <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                            Mon Parcours
                        </p>
                        <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                            Mon <span className="text-cyan-300">Expérience</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                            Une sélection de projets concrets, du développement full stack
                            au déploiement en production.
                        </p>
                    </div>

                    <div className="relative space-y-10 border-l border-cyan-500/20 pl-8 sm:pl-10">
                        {experiences.map((exp) => {
                            const Icon = exp.icon;
                            return (
                                <div key={exp.id} className="relative">
                                    <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/50 bg-[#0f051a] sm:-left-[49px]">
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