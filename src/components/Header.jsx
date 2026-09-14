import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, Code2, Home, Mail, Rocket, User } from "lucide-react";
import "../styles/header.css";

const navItems = [
  { id: "home", label: "Accueil", icon: Home },
  { id: "about", label: "À propos", icon: User },
  { id: "skills", label: "Compétences", icon: Code2 },
  { id: "experience", label: "Expérience", icon: Briefcase },
  { id: "projects", label: "Projets", icon: Rocket },
  { id: "contact", label: "Contact", icon: Mail },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`main-header ${isScrolled ? "scrolled" : ""}`} id="header">
      <nav className="nav-container" aria-label="Navigation principale">
        <Link className="nav-brand" to="/#home" onClick={closeMenu}>
          <span className="brand-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">CedJaoh (سيدجاه)</span>
            <span className="logo-bracket">/&gt;</span>
          </span>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`} id="navMenu">
          {navItems.map((item) => {
            const Icon = item.icon;
            const routedIds = ["skills", "experience", "projects", "contact"];
            const href = routedIds.includes(item.id)
              ? `/${item.id}`
              : `/#${item.id}`;

            return (
              <Link
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                data-section={item.id}
                to={href}
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  closeMenu();
                }}
              >
                <Icon aria-hidden="true" size={17} strokeWidth={2.2} />
                <span className="nav-text">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="nav-controls">
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