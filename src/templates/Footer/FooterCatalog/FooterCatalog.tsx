import NavItem from "components/NavItem/NavItem";
import ArmchairIcon from "icons/categoryIcons/ArmchairIcon";
import LightIcon from "icons/categoryIcons/LightIcon";
import OfficeChairIcon from "icons/categoryIcons/OfficeChairIcon";
import SofaIcon from "icons/categoryIcons/SofaIcon";
import TableIcon from "icons/categoryIcons/TableIcon";
import React from "react";

const FooterCatalog = () => {
  return (
    <ul className="">
      <NavItem exact link={"divany"} type={"navLink"}>
        диваны
      </NavItem>
      <NavItem exact link={"kresla"} type={"navLink"}>
        кресла
      </NavItem>
      <NavItem exact link={"divany"} type={"navLink"}>
        светильники
      </NavItem>
      <NavItem exact link={"divany"} type={"navLink"}>
        столы
      </NavItem>
      <NavItem exact link={"divany"} type={"navLink"}>
        офисные кресла
      </NavItem>
    </ul>
  );
};

export default FooterCatalog;
