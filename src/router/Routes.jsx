import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

const Projects = lazy(() => import("../pages/Projects"));
const Skills = lazy(() => import("../pages/Skills"));
const Experience = lazy(() => import("../pages/Experience"));
const Contact = lazy(() => import("../pages/Contact"));

const PageLoader = () => (
  <div className="page-loader" role="status" aria-live="polite">
    Chargement de la page…
  </div>
);

const AppRoutes = () => {
  return (
    <Router>
      <a className="skip-link" href="#main-content">Aller au contenu principal</a>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
