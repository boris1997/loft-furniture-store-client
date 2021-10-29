import CatalogNavbar from "components/CatalogNavbar/CatalogNavbar";
import CloseBtn from "components/CloseBtn/CloseBtn";
import Searcher from "components/Searcher/Searcher";
import Container from "hoc/Container/Container";
import { FC, MouseEventHandler } from "react";
import sidebarClasses from "./Sidebar.module.scss";

interface ISidebar {
  isActive: boolean;
  closeSidebar: MouseEventHandler<HTMLButtonElement>;
}

const Sidebar: FC<ISidebar> = ({ isActive, closeSidebar }) => {
  return (
    <>
      {isActive && (
        <div className={sidebarClasses.sidebar}>
          <Container>
            <div className={sidebarClasses.body}>
              <div className={sidebarClasses.header}>
                <CloseBtn background clicked={closeSidebar} />
                <Searcher placeholder="Поиск по сайту" />
              </div>
              <div className={sidebarClasses.title}>
                <span>Каталог</span>
              </div>
              <div className={sidebarClasses.menu}>
                <div className={sidebarClasses.menuContent}>
                  <CatalogNavbar />
                </div>
              </div>
              <div className="overlay"></div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Sidebar;
