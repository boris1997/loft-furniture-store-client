import Container from "hoc/Container/Container";
import TopHeaderClasses from "./TopHeader.module.scss";
import Feedback from "components/Feedback/Feedback";
import MainNavbar from "components/MainNavbar/MainNavbar";
const TopHeader = () => {
  return (
    <div className={TopHeaderClasses.topHeader}>
      <Container>
        <div className={TopHeaderClasses.content}>
          <MainNavbar />
          <Feedback />
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
