import React from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import { useResponsive, DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH } from '../../utils/hooks/useResponsive';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useTranslation } from 'react-i18next';

const useStyles = createUseStyles((theme) => ({
  headerContainer: {
    display: "flex",
    width: props => props.isMobile ? "100%" : (props.isTablet ? TABLET_MIN_WIDTH : DESKTOP_MIN_WIDTH),
    height: 65,
    alignItems: "center",
    justifyContent: "space-between"
  },

  nav: {
    display: "flex",
    alignItems: "center",
    "& a": {
      display: "flex",
      alignItems: "center",
      padding: 10,
      textDecoration: "none",
      color: theme.primaryColor,
      height: 65,
      "&:hover": {
        backgroundColor: theme.primaryColor,
        color: "white"
      }
    }
  }
}))

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic  
 * JSS component that's useful.
 */
const Header = ({ fields }) => {
  const theme = useTheme();
  const {isMobile, isTablet, isDesktop} = useResponsive();
  const classes = useStyles({isDesktop, isTablet, isMobile, theme});
  const { t } = useTranslation();

  const navItems = fields?.items;

  return (
    <div className={classes.headerContainer}>
      <NavLink to="/">
        <img src={logo} alt="Contoso Corp Logo" aria-label="ContosoCorp logo" height={50}/>
      </NavLink>
      <nav className={classes.nav}> 
        {navItems.map((item, index) => {
          return <NavLink to={item?.url} >{index == 0 ? t("home") : item?.Title?.value}</NavLink>
        })}
      </nav>
    </div>
  )
}

export default Header;