import MenuButtonSvg from "../../assets/Menu Button.svg";
import LogoSvg from "../../assets/Logo.svg";
import InstagramSvg from "../../assets/Instagram-Icon.svg";
import LinkedInSvg from "../../assets/LinkedIn-Icon.svg";
import YouTubeSvg from "../../assets/YouTube-Icon.svg";
import TwitterSvg from "../../assets/Twitter-Icon.svg";
import MouseSvg from "../../assets/Mouse.svg";

const NavbarText = ({ children }) => {
  return <div className="navbar-text">{children}</div>;
};

const NavbarSvg = ({ children }) => {
  return <div className="navbar-svg center">{children}</div>;
};

const SocialSvg = ({ children }) => {
  return <div className="social-svg center">{children}</div>;
};

const Navbar = () => (
  <div className="navbar">
    {[
      <>
        <NavbarSvg>
          <img src={MenuButtonSvg} alt="menu button" />
        </NavbarSvg>
        <NavbarText>Team</NavbarText>
        <NavbarText>Events</NavbarText>
      </>,
      <>
        {" "}
        <NavbarSvg>
          <img src={LogoSvg} alt="VTC Logo button" />
        </NavbarSvg>
      </>,
      <>
        {" "}
        <SocialSvg>
          <img src={InstagramSvg} alt="instagram" />
        </SocialSvg>
        <SocialSvg>
          <img src={TwitterSvg} alt="twitter" />
        </SocialSvg>
        <SocialSvg>
          <img src={LinkedInSvg} alt="linkedin" />
        </SocialSvg>
        <SocialSvg>
          <img src={YouTubeSvg} alt="youtube" />
        </SocialSvg>
      </>,
    ].map((child, index) => (
      <div className={`navbar-item navbar-item-${index + 1}`} key={index}>
        {child}
      </div>
    ))}
  </div>
);

function TextLayer() {
  return (
    <div className="text-layer layer center">
      <Navbar />
      <div className="center main-text">
        <div className="main-text-heading">THE VIT TREKKING CLUB</div>
        <p className="main-text-subtext">
          BE PREPARED FOR THE MOUNTAINS AND BEYOND...
        </p>
      </div>
      <div className="center scroll-text">
        <div className="scroll-text-1">SCROLL</div>
        <div className="scroll-text-2">
          <img src={MouseSvg} alt="mouse" />
        </div>
      </div>
    </div>
  );
}

export default TextLayer;
