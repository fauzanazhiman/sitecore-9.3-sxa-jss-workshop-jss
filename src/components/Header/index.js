import React, { useState } from 'react';
import {createUseStyles, useTheme} from 'react-jss';
import { useResponsive, DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH } from '../../utils/hooks/useResponsive';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useTranslation } from 'react-i18next';

const useStyles = createUseStyles((theme) => ({
  headerContainer: {
    display: "flex",
    height: 70,
    alignItems: "center",
    justifyContent: "space-between"
  },

  logo: {
    fontSize: 24,
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: theme.primaryColor,
    marginLeft: 20,
    marginRight: 20,
    "&> img": {
      marginRight: 10
    }
  },

  nav: {
    display: "flex",
    alignItems: "center"
  },

  menuItem: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    textDecoration: "none",
    color: theme.primaryColor,
    height: 70,
    "&:hover": {
      backgroundColor: theme.primaryColor,
      color: "white"
    }
  },

  mobileMenu: {
    width: "100%",
    position: "absolute",
    top: 70,
    backgroundColor: theme.backgroundColor
  }
}))

function renderMenuItems(classes, history, t, setShowMobileMenu, navItems = []){
  return navItems.map((item, index) => {
    let menuLabel = index == 0 ? t("home") : item?.Title?.value;

    return <a className={classes.menuItem} href={item?.url} onClick={e => {
      e.preventDefault();
      history.push(item?.url);
      setShowMobileMenu(false);
    }}>{menuLabel}</a>
  })
}

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic  
 * JSS component that's useful.
 */
const Header = ({ fields }) => {
  const theme = useTheme();
  let history = useHistory();
  const {isMobile, isTablet, isDesktop} = useResponsive();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const classes = useStyles({isDesktop, isTablet, isMobile, theme});
  const { t } = useTranslation();

  const navItems = fields?.items;

  return (
    <div className={classes.headerContainer}>
      <NavLink className={classes.logo} to="/">
        <img src={logo} alt="Contoso Corp Logo" aria-label="ContosoCorp logo" height={50}/>
        <span>ContosoCorp</span>
      </NavLink>
      <nav className={classes.nav}> 
        {!isMobile ? renderMenuItems(classes, history, t, setShowMobileMenu, navItems) : (
          <a className={classes.menuItem} href="/" onClick={(e) => {
            e.preventDefault();
            setShowMobileMenu(!showMobileMenu);
          }}>☰</a>
        )}
      </nav>
      {showMobileMenu && isMobile ? (
        <div className={classes.mobileMenu}>
          {renderMenuItems(classes, history, t, setShowMobileMenu, navItems)}
        </div>
      ) : null}
    </div>
  )
}

export default Header;