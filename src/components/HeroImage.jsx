import { FaFigma, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import "../styles/heroImage.css";

const badges = [
  {
    className: "badge-1",
    icon: FaLaptopCode,
    title: "Dev Web",
    libs: "React, Node.js",
  },
  {
    className: "badge-2",
    icon: FaMobileAlt,
    title: "Dev Mobile",
    libs: "React Native",
  },
  {
    className: "badge-3",
    icon: FaFigma,
    title: "Designer UI",
    libs: "Figma, Tailwind",
  },
];

const HeroImage = () => {
  return (
    <div className="hero-image-wrapper">
      <div className="hero-image-container">
        <div className="profile-image-glow" />

        <div className="profile-image-frame">
          <div className="profile-image" id="profileImage">
            <img
              alt="Ratovonanahary Cérick Fernando"
              className="profile-photo"
              src="/images/pdp2.png"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
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
