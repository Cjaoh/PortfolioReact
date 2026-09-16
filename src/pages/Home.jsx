import { ArrowRight, BookOpen, Code2, Database, Mail, Server } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedName from "../components/AnimatedName";
import CyberBackground from "../components/CyberBackground";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";

const Home = () => (
    <main className="relative min-h-screen overflow-hidden text-white" id="main-content" tabIndex={-1}>
      <CyberBackground />
      <Header />

      <section
        className="relative z-10 grid min-h-screen items-center gap-12 px-6 pb-20 pt-32 sm:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:px-20"
        id="home"
      >
        <div className="max-w-4xl">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Développeur Full Stack & DevOps junior
          </p>
          <AnimatedName />
          <p className="hero-description-shine mt-6 max-w-2xl text-base leading-8 sm:text-lg">
            Je conçois des applications web fiables, de l&apos;interface utilisateur
            au déploiement automatisé sur le cloud.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Je recherche une opportunité junior, de stage ou d&apos;alternance pour
            contribuer à des produits concrets avec React, Angular, Node.js,
            Docker, Kubernetes et Google Cloud.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#0f051a]"
            >
              Voir mes projets <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a
              href="mailto:cedratovonanahary@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:bg-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#0f051a]"
            >
              Me contacter <Mail size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <HeroImage />
      </section>

      <section
        className="relative z-10 px-6 pb-20 pt-32 sm:px-10 lg:px-20"
        id="about"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Qui Suis-Je
            </p>
            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              À propos de <span className="text-cyan-300">moi</span>
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent p-8 backdrop-blur-sm">
                <h3 className="mb-4 text-2xl font-bold text-white">RATOVONANAHARY Cédrick Fernando</h3>
                <p className="mb-4 text-lg leading-8 text-gray-300">
                  Étudiant en <span className="text-cyan-300 font-semibold">L3 Génie Logiciel</span>, je conçois des applications
                  <span className="text-cyan-300 font-semibold"> full stack</span> complètes : du frontend React/Angular
                  jusqu'au déploiement sur Kubernetes et Google Cloud.
                </p>
                <p className="text-lg leading-8 text-gray-300">
                  J'apprends vite, je code proprement, et j'aime résoudre des problèmes techniques concrets.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-6 transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:via-cyan-500/10 transition-all" />
                  <Code2 className="mb-3 text-cyan-400" size={24} />
                  <h4 className="mb-2 text-lg font-semibold text-white">Développement frontend</h4>
                  <p className="text-sm text-gray-400">React, Angular, Next.js — interfaces réactives et performantes, du prototype à la production</p>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-6 transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:via-cyan-500/10 transition-all" />
                  <Server className="mb-3 text-cyan-400" size={24} />
                  <h4 className="mb-2 text-lg font-semibold text-white">Développement backend & API</h4>
                  <p className="text-sm text-gray-400">Node.js, NestJS, PHP — API REST sécurisées, authentification JWT et logique métier robuste</p>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-6 transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:via-cyan-500/10 transition-all" />
                  <Database className="mb-3 text-cyan-400" size={24} />
                  <h4 className="mb-2 text-lg font-semibold text-white">Bases de Données & Outils</h4>
                  <p className="text-sm text-gray-400">MongoDB, MySQL, PostgreSQL, Docker, Git — de la modélisation des données au déploiement</p>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-6 transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:via-cyan-500/10 transition-all" />
                  <BookOpen className="mb-3 text-cyan-400" size={24} />
                  <h4 className="mb-2 text-lg font-semibold text-white">Architecture & Qualité</h4>
                  <p className="text-sm text-gray-400">Formation en génie logiciel — conception d'architectures claires et code maintenable</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="h-full rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-cyan-500/5 p-8 backdrop-blur-sm">
                <div className="space-y-8">
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-cyan-300">Niveau</p>
                    <p className="text-2xl font-bold text-white">L3</p>
                    <p className="text-sm text-gray-400">Génie Logiciel</p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />

                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-cyan-300">Spécialité</p>
                    <p className="text-2xl font-bold text-white">JavaScript</p>
                    <p className="text-sm text-gray-400">Développement full stack</p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />

                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-cyan-300">Qualités</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        Autodidacte
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        Travail d'équipe
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        Passionné
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        Innovant
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
);

export default Home;
