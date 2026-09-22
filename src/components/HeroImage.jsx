import { FaFigma, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { useState } from "react";
import "../styles/heroImage.css";

const badges = [
  {
    className: "badge-1",
    icon: FaLaptopCode,
    title: "Développement web",
    libs: "React, Angular, Node.js",
  },
  {
    className: "badge-2",
    icon: FaMobileAlt,
    title: "Développement mobile",
    libs: "Flutter",
  },
  {
    className: "badge-3",
    icon: FaFigma,
    title: "Conception d'interface",
    libs: "Figma, Tailwind",
  },
];

const HeroImage = () => {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <div className="hero-image-wrapper">
      <div className="hero-image-container">
        <div className="profile-image-glow" />

        <div className="profile-image-frame">
          <div className="profile-image" id="profileImage">
            {imageUnavailable ? (
              <span className="profile-fallback" aria-label="Cédrick Ratovonanahary">CR</span>
            ) : <img
              alt="RATOVONANAHARY Cédrick Fernando"
              className="profile-photo"
              src="/images/pdp2.png"
              width="435"
              height="493"
              fetchPriority="high"
              onError={() => setImageUnavailable(true)}
            />
            }
          </div>
        </div>

        {badges.map((badge) => {
          const Icon = badge.icon;

          return (
            <div className={`floating-badge ${badge.className}`} key={badge.title}>
              <Icon aria-hidden="true" className="badge-icon" />
              <div className="badge-content">
                <span className="badge-title">{badge.title}</span>
                <span className="badge-libs">{badge.libs}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroImage;
