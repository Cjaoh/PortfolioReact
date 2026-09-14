import { Copy, Github, Mail } from "lucide-react";
import { useState } from "react";
import CyberBackground from "../components/CyberBackground";
import Header from "../components/Header";

const EMAIL = "cedratovonanahary@gmail.com";
const GITHUB_URL = "https://github.com/Cjaoh";

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            // Le presse-papiers peut être indisponible (permissions navigateur) ;
            // l'utilisateur peut toujours cliquer sur le lien mailto ci-dessous.
        }
    };

    return (
        <main className="relative min-h-screen overflow-hidden text-white">
            <CyberBackground />
            <Header />

            <section
                className="relative z-10 flex min-h-screen items-center px-6 pb-20 pt-32 sm:px-10 lg:px-20"
                id="contact"
            >
                <div className="mx-auto w-full max-w-3xl">
                    <div className="mb-16 text-center">
                        <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                            Parlons-en
                        </p>
                        <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                            Me <span className="text-cyan-300">Contacter</span>
                        </h2>
                        <p className="mx-auto max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
                            Une question, une opportunité, un projet à discuter ? N'hésitez
                            pas à me contacter directement.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="group relative overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-transparent p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20">
                            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10">
                                <Mail className="text-cyan-300" size={22} />
                            </span>
                            <h3 className="mb-2 text-lg font-bold text-white">Email</h3>
                            <p className="mb-6 break-all text-sm text-gray-300">{EMAIL}</p>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-cyan-400"
                                >
                                    Envoyer un email
                                </a>
                                <button
                                    type="button"
                                    onClick={handleCopyEmail}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 px-5 py-2 text-sm font-semibold text-gray-300 transition-all hover:border-cyan-400 hover:text-white"
                                >
                                    <Copy size={14} /> {copied ? "Copié !" : "Copier"}
                                </button>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-transparent p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20">
                            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10">
                                <Github className="text-cyan-300" size={22} />
                            </span>
                            <h3 className="mb-2 text-lg font-bold text-white">GitHub</h3>
                            <p className="mb-6 text-sm text-gray-300">github.com/Cjaoh</p>

                            <a
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 px-5 py-2 text-sm font-semibold text-gray-300 transition-all hover:border-cyan-400 hover:text-white"
                            >
                                <Github size={16} /> Voir le profil
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;