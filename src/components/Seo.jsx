import { useEffect } from "react";

const SITE_NAME = "Cédrick Ratovonanahary";
const DEFAULT_DESCRIPTION =
  "Portfolio de Cédrick Ratovonanahary, étudiant en L3 Génie logiciel et développeur full stack junior.";

const setMetaContent = (selector, content) => {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute("content", content);
};

const Seo = ({ title, description = DEFAULT_DESCRIPTION }) => {
  useEffect(() => {
    const pageTitle = `${title} | ${SITE_NAME}`;
    const pageUrl = window.location.href;
    const imageUrl = new URL("/images/pdp2.png", window.location.origin).href;

    document.title = pageTitle;
    setMetaContent('meta[property="og:title"]', pageTitle);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', pageUrl);
    setMetaContent('meta[property="og:image"]', imageUrl);
    setMetaContent('meta[name="twitter:title"]', pageTitle);
    setMetaContent('meta[name="twitter:description"]', description);
    setMetaContent('meta[name="twitter:image"]', imageUrl);
    document.head.querySelector('link[rel="canonical"]')?.setAttribute("href", pageUrl);
  }, [description, title]);

  return null;
};

export default Seo;
