
import { useCallback, useState } from "react";
import { Code2, Lightbulb, Users, BookOpen } from "lucide-react";
import AnimatedName from "../components/AnimatedName";
import CyberBackground from "../components/CyberBackground";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import IntroLoader from "../components/IntroLoader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoaderFinish = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <IntroLoader duration={5000} onFinish={handleLoaderFinish} />;
  }

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <CyberBackground />
      <Header />

      <section
        className="relative z-10 grid min-h-screen items-center gap-12 px-6 pb-20 pt-32 sm:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:px-20"
        id="home"
      >
        <div className="max-w-4xl">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Portfolio
          </p>
          <AnimatedName />
          <p className="hero-description-shine mt-6 max-w-2xl text-base leading-8 sm:text-lg">
            Developpeur web passionne par le genie logiciel, les interfaces
            modernes et les experiences digitales rapides.
          </p>
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
                <h3 className="mb-4 text-2xl font-bold text-white">Rabearison Fy Tahina Kevonn</h3>
                <p className="mb-4 text-lg leading-8 text-gray-300">
                  Je suis un développeur web passionné en <span className="text-cyan-300 font-semibold">L3 Génie Logiciel</span>,
                  spécialisé en <span className="text-cyan-300 font-semibold">Full Stack JavaScript</span>.
                </p>
                <p className="text-lg leading-8 text-gray-300">
                  Autodidacte par nature, j'aime apprendre continuellement et maîtriser de nouvelles technologies.
                  Je crois fermement en la collaboration et l'échange d'idées pour créer des solutions innovantes et robustes.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-6 transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:via-cyan-500/10 transition-all" />
                  <Code2 className="mb-3 text-cyan-400" size={24} />
                  <h4 className="mb-2 text-lg font-semibold text-white">Full Stack JS</h4>
                  <p className="text-sm text-gray-400">React, Node.js, TypeScript et autres frameworks modernes</p>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-6 transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:via-cyan-500/10 transition-all" />
                  <Lightbulb className="mb-3 text-cyan-400" size={24} />
                  <h4 className="mb-2 text-lg font-semibold text-white">Autodidacte</h4>
                  <p className="text-sm text-gray-400">Apprentissage continu et passion pour l'innovation</p>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-6 transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:via-cyan-500/10 transition-all" />
                  <Users className="mb-3 text-cyan-400" size={24} />
                  <h4 className="mb-2 text-lg font-semibold text-white">Travail d'équipe</h4>
                  <p className="text-sm text-gray-400">Collaboration et communication efficace</p>
                </div>

                <div className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-6 transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:via-cyan-500/10 transition-all" />
                  <BookOpen className="mb-3 text-cyan-400" size={24} />
                  <h4 className="mb-2 text-lg font-semibold text-white">Génie Logiciel</h4>
                  <p className="text-sm text-gray-400">Études approfondies en architecture et design</p>
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
                    <p className="text-sm text-gray-400">Full Stack Development</p>
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
};

export default Home;
