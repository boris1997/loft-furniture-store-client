import { ProductParams } from "globalTypes/product";
import { translit } from "helpers/translit";
import Container from "hoc/Container/Container";
import React from "react";
import { useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";
import breadCrumbsStyles from "./Breadcrumbs.module.scss";

const Breadcrumbs = () => {
  const params = useParams<ProductParams>();
  console.log(params);
  let link = "";
  const breadcrumbsUi = Object.entries(params).map(
    (params: [string, any], i) => {
      console.log(params);
      link += "/" + params[1];
      return (
        <li key={i}>
          <span>/</span>
          <NavLink exact to={{ pathname: `${link}` }}>
            {translit(params[1])}
          </NavLink>
        </li>
      );
    }
  );
  return (
    <div className={breadCrumbsStyles.breadcrumbs}>
      <Container>
        <ul className={breadCrumbsStyles.list}>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          {breadcrumbsUi}
        </ul>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
