import Container from "hoc/Container/Container";
import React, { FC } from "react";
import sectionClasses from "./WithSection.module.scss";

const WithSection: FC = ({ children }) => {
  return (
    <section className={sectionClasses.section}>
      <Container>{children}</Container>
    </section>
  );
};

export default WithSection;
