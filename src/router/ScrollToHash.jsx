import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Gère le scroll lors des changements de route :
 * - s'il y a un hash dans l'URL (ex: /#about), scrolle jusqu'à l'élément correspondant
 * - sinon, remonte en haut de la nouvelle page (comportement attendu en SPA)
 */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        // requestAnimationFrame : on attend que le DOM de la page soit bien monté
        requestAnimationFrame(() => {
          element.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start",
          });
        });
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;