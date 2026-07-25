import { useEffect, useState } from "react";
import {
  Briefcase,
  Code2,
  Home,
  Languages,
  Mail,
  Rocket,
  User,
} from "lucide-react";
import "../styles/header.css";

const navItems = [
  { id: "home", en: "Home", fr: "Accueil", icon: Home },
  { id: "about", en: "About", fr: "A propos", icon: User },
  { id: "skills", en: "Skills", fr: "Competences", icon: Code2 },
  { id: "experience", en: "Experience", fr: "Experience", icon: Briefcase },
  { id: "projects", en: "Projects", fr: "Projets", icon: Rocket },
  { id: "contact", en: "Contact", fr: "Contact", icon: Mail },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("dark");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      const currentSection = navItems.findLast((item) => {
        const section = document.getElementById(item.id);
        return section ? section.offsetTop - 120 <= window.scrollY : false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "fr" : "en"));
  };

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`main-header ${isScrolled ? "scrolled" : ""}`} id="header">
      <nav className="nav-container" aria-label="Navigation principale">
        <a className="nav-brand" href="#home" onClick={closeMenu}>
          <span className="brand-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">Khe Vin</span>
            <span className="logo-bracket">/&gt;</span>
          </span>
        </a>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`} id="navMenu">
          {navItems.map((item) => {
            const Icon = item.icon;
            const label = language === "en" ? item.en : item.fr;

            return (
              <a
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                data-section={item.id}
                href={`#${item.id}`}
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  closeMenu();
                }}
              >
                <Icon aria-hidden="true" size={17} strokeWidth={2.2} />
                <span
                  className="nav-text"
                  data-text-en={item.en}
                  data-text-fr={item.fr}
                >
                  {label}
                </span>
              </a>
            );
          })}
        </div>

        <div className="nav-controls">
          <button
            className="lang-toggle"
            onClick={toggleLanguage}
            title="Changer la langue"
            type="button"
          >
            <Languages aria-hidden="true" size={17} />
            <span className="lang-text">{language === "en" ? "FR" : "EN"}</span>
          </button>

          <button
            aria-label="Changer le theme"
            aria-pressed={theme === "light"}
            className={`theme-toggle lamp-toggle ${theme === "light" ? "is-on" : ""}`}
            onClick={toggleTheme}
            title="Changer le theme"
            type="button"
          >
            <span className="lamp-toggle__halo" />
            <span className="lamp-toggle__glass">
              <span className="lamp-toggle__filament" />
            </span>
            <span className="lamp-toggle__cap" />
            <span className="lamp-toggle__cord" />
            <span className="lamp-toggle__knob" />
          </button>

          <button
            aria-expanded={isMenuOpen}
            aria-label="Ouvrir le menu"
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen((current) => !current)}
            title="Toggle Menu"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
