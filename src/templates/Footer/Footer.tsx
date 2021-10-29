import Feedback from "components/Feedback/Feedback";
import Logo from "components/Logo/Logo";
import MainNavbar from "components/MainNavbar/MainNavbar";
import footerClasses from "./Footer.module.scss";
import Container from "hoc/Container/Container";
import { Link } from "react-router-dom";
import SocialMediaMenu from "components/SocialMediaMenu/SocialMediaMenu";

const Footer = () => {
  return (
    <footer className={footerClasses.footer}>
      <Container>
        <div className={footerClasses.content}>
          <div className={footerClasses.socialMedias}>
            <SocialMediaMenu />
          </div>
          <div className={footerClasses.basis}>
            <Link className="" to="/">
              <Logo />
            </Link>
          </div>
          <div className={footerClasses.basis}>
            <MainNavbar />
          </div>
          <div className={`${footerClasses.basis} ${footerClasses.feedback}`}>
            <Feedback />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
