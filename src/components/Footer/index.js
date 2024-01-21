import React from 'react';
import {createUseStyles} from 'react-jss';
import { useResponsive, DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH } from '../../utils/hooks/useResponsive';
import { useTranslation } from 'react-i18next';

const useStyles = createUseStyles((theme) => ({
  footerContainer: {
    display: "flex",
    width: props => props.isMobile ? "100%" : (props.isTablet ? TABLET_MIN_WIDTH : DESKTOP_MIN_WIDTH),
    height: 70,
    fontWeight: "bold",
    color: theme.primaryColor,
    alignItems: 'center',
    justifyContent: "space-between"
  }
}))

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic  
 * JSS component that's useful.
 */
const Footer = ({ fields }) => {
  const {isMobile, isTablet, isDesktop} = useResponsive();
  const classes = useStyles({isDesktop, isTablet, isMobile});
  const { t } = useTranslation();

  return (
    <div className={classes.footerContainer}>
      <span>{t("copyright left")}</span>
      <span>{t("copyright right")}</span>
    </div>
  )
}

export default Footer;