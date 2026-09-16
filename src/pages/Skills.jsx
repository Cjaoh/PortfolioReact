import {
    Blocks,
    Cloud,
    Code2,
    Database,
    Smartphone,
    Wrench,
} from "lucide-react";
import CyberBackground from "../components/CyberBackground";
import Header from "../components/Header";

const skillGroups = [
    {
        title: "Frontend",
        icon: Code2,
        items: ["React", "Next.js", "Angular", "Vue.js", "TailwindCSS"],
    },
    {
        title: "Backend",
        icon: Blocks,
        items: ["Node.js", "NestJS", "Express", "PHP"],
    },
    {
        title: "Mobile",
        icon: Smartphone,
        items: ["Flutter"],
    },
    {
        title: "DevOps & Cloud",
        icon: Cloud,
        items: [
            "Docker",
            "Kubernetes",
            "ArgoCD (GitOps)",
            "Tekton",
            "Google Cloud Run",
            "CI/CD",
        ],
    },
    {
        title: "Bases de données",
        icon: Database,
        items: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
        title: "Outils",
        icon: Wrench,
        items: ["Git / GitHub", "Linux", "Postman", "VS Code", "Figma"],
    },
];

const Skills = () => {
    return (
        <main className="relative min-h-screen overflow-hidden text-white" id="main-content" tabIndex={-1}>
            <CyberBackground />
            <Header />

            <section
                className="relative z-10 px-6 pb-20 pt-32 sm:px-10 lg:px-20"
                id="skills"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="mb-16 text-center">
                        <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                            Mon Arsenal
                        </p>
                        <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                            Mes <span className="text-cyan-300">Compétences</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                            Technologies que je maîtrise et utilise au quotidien dans mes
                            projets full stack, du développement à la mise en production.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {skillGroups.map((group) => {
                            const Icon = group.icon;
                            return (
                                <div
                                    key={group.title}
                                    className="group relative overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-transparent p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20"
                                >
                                    <div className="mb-4 flex items-center gap-3">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10">
                                            <Icon className="text-cyan-300" size={20} />
                                        </span>
                                        <h3 className="text-lg font-bold text-white">
                                            {group.title}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-md border border-cyan-500/20 bg-cyan-950/40 px-2.5 py-1 text-xs font-mono text-cyan-200"
                                            >
                                                {item}
                                            </span>
                                        ))}
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

export default Skills;
