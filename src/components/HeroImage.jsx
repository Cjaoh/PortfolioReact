import { useState } from "react";
import "../styles/heroImage.css";

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
      </div>
    </div>
  );
};

export default HeroImage;
