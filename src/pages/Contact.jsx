import { Copy, Github, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import CyberBackground from "../components/CyberBackground";
import Header from "../components/Header";

const EMAIL = "cedratovonanahary@gmail.com";
const GITHUB_URL = "https://github.com/Cjaoh";
const FACEBOOK_URL = "https://www.facebook.com/ced.jaoh";
const PHONE_DISPLAY = "034 32 755 45";
const PHONE_URL = "tel:+261343275545";
const LOCATION = "Antananarivo, Madagascar";

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
        <main className="relative min-h-screen overflow-hidden text-white" id="main-content" tabIndex={-1}>
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
                            Basé à Antananarivo, Madagascar. Pour une opportunité ou un
                            projet à discuter, contactez-moi directement.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="group relative overflow-hidden rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 via-slate-900/60 to-transparent p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20">
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
                                className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-300"
                            >
                                <Github size={16} /> Consulter mes dépôts
                            </a>
                        </div>

                        <div className="relative overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-transparent p-8 backdrop-blur-md sm:col-span-2">
                            <div className="grid gap-8 sm:grid-cols-2">
                                <div>
                                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10">
                                        <Phone className="text-cyan-300" size={22} />
                                    </span>
                                    <h3 className="mb-2 text-lg font-bold text-white">Téléphone</h3>
                                    <a
                                        href={PHONE_URL}
                                        className="text-sm text-gray-300 transition-colors hover:text-cyan-300"
                                    >
                                        {PHONE_DISPLAY}
                                    </a>
                                </div>

                                <div>
                                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10">
                                        <MapPin className="text-cyan-300" size={22} />
                                    </span>
                                    <h3 className="mb-2 text-lg font-bold text-white">Localisation</h3>
                                    <p className="text-sm text-gray-300">{LOCATION}</p>
                                </div>

                                <div>
                                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10">
                                        <FaFacebookF className="text-cyan-300" size={20} aria-hidden="true" />
                                    </span>
                                    <h3 className="mb-2 text-lg font-bold text-white">Facebook</h3>
                                    <a
                                        href={FACEBOOK_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-300 transition-colors hover:text-cyan-300"
                                    >
                                        Ced Jaoh
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
