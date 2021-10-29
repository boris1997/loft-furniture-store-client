import { INavItemsType } from 'components/NavItem/NavItemType'
import ArmchairIcon from 'icons/categoryIcons/ArmchairIcon'
import LightIcon from 'icons/categoryIcons/LightIcon'
import OfficeChairIcon from 'icons/categoryIcons/OfficeChairIcon'
import SofaIcon from 'icons/categoryIcons/SofaIcon'
import TableIcon from 'icons/categoryIcons/TableIcon'
import React from 'react'
import { withRouter } from 'react-router-dom'
import NavItem from '../NavItem/NavItem'
import catalogNavbarClasses from './CatalogNavbar.module.scss'

const CatalogNavbar = () => {

    return (
        <ul className={catalogNavbarClasses.catalogNavbar}>
            <NavItem exact link={'/divany'} type={INavItemsType.navLink} >
                <SofaIcon IconClasses={catalogNavbarClasses.catalogNavbarSvg} />
                диваны
            </NavItem>
            <NavItem exact link={'/kresla'} type={INavItemsType.navLink} >
                <ArmchairIcon IconClasses={catalogNavbarClasses.catalogNavbarSvg} />
                кресла
            </NavItem>
            <NavItem exact link={'/svetilniki'} type={INavItemsType.navLink} >
                <LightIcon IconClasses={catalogNavbarClasses.catalogNavbarSvg} />
                светильники
            </NavItem>
            <NavItem exact link={'/stoly'} type={INavItemsType.navLink}  >
                <TableIcon IconClasses={catalogNavbarClasses.catalogNavbarSvg} />
                столы
            </NavItem>
            <NavItem exact link={'/ofisnieKresla'} type={INavItemsType.navLink} >
                <OfficeChairIcon IconClasses={catalogNavbarClasses.catalogNavbarSvg} />
                офисные кресла
            </NavItem>
        </ul>
    )
}

export default withRouter(CatalogNavbar)

