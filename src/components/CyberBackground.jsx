import "../styles/cyberBackground.css";

const CyberBackground = () => (
  <div className="cyber-background" aria-hidden="true">
    <div className="cyber-background__glow cyber-background__glow--top" />
    <div className="cyber-background__glow cyber-background__glow--bottom" />
    <div className="cyber-background__grid" />
  </div>
);

export default CyberBackground;
