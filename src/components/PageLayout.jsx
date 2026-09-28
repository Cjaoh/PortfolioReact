import CyberBackground from "./CyberBackground";
import Header from "./Header";
import Seo from "./Seo";

/**
 * Enveloppe commune à toutes les pages : balise <main> accessible,
 * fond animé, header, et gestion du <title>/meta via Seo.
 */
const PageLayout = ({ title, description, children }) => (
  <main
    className="relative min-h-screen overflow-hidden text-white"
    id="main-content"
    tabIndex={-1}
  >
    <Seo title={title} description={description} />
    <CyberBackground />
    <Header />
    {children}
  </main>
);

export default PageLayout;