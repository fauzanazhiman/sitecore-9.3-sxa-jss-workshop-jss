import React from 'react';
import { Placeholder, VisitorIdentification, isExperienceEditorActive  } from '@sitecore-jss/sitecore-jss-react';
import Helmet from 'react-helmet';
import {generateGlobalStyles} from "./styles/global";

import {createUseStyles, ThemeProvider} from 'react-jss';
import GoogleFontLoader from './utils/components/GoogleFontLoader';
import { DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH, useResponsive } from './utils/hooks/useResponsive';

const useStyles = createUseStyles((theme) => ({
  ...generateGlobalStyles(theme),

  header: {
    display: "flex",
    flexDirection: "column",
    width: props => props.isMobile ? "100%" : (props.isTablet ? TABLET_MIN_WIDTH : DESKTOP_MIN_WIDTH),
  },

  main: {
    display: "flex",
    flexDirection: "column",
    flex: "auto",
    width: "100%",
  },
  
  footer: {
    display: "flex",
    flexDirection: "column",
    width: props => props.isMobile ? "100%" : (props.isTablet ? TABLET_MIN_WIDTH : DESKTOP_MIN_WIDTH),
  },
}))  

function loadThemeFromPageDesign(route){
  return {
    fontFamily: route?.fields?.["Page Design"]?.fields?.["Body Font"]?.value,
    headingFontFamily: route?.fields?.["Page Design"]?.fields?.["Heading Font"]?.value,
    primaryColor: route?.fields?.["Page Design"]?.fields?.["Primary Color"]?.value,
    secondaryColor: route?.fields?.["Page Design"]?.fields?.["Secondary Color"]?.value,
    backgroundColor: route?.fields?.["Page Design"]?.fields?.["Background Color"]?.value,
    headingFontColor: route?.fields?.["Page Design"]?.fields?.["Headings Text Color"]?.value,
    bodyTextColor: route?.fields?.["Page Design"]?.fields?.["Body Text Color"]?.value,
  }
}

const Layout = ({ route }) => {
  const theme = loadThemeFromPageDesign(route);
  const {isMobile} = useResponsive();
  const classes = useStyles({theme, isExperienceEditorActive: isExperienceEditorActive(), isMobile});

  return (  
    <React.Fragment>
    {/* react-helmet enables setting <head> contents, like title and OG meta tags */}
    <Helmet>
      <title>{route?.fields?.Title?.value}</title>
      <meta name="description" content={route?.fields?.Description?.value} />
    </Helmet>

    {/*
      VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
      If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
      For XM (CMS-only) apps, this should be removed.

      VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
    */}
    <VisitorIdentification />

    {theme?.fontFamily ? (
      <GoogleFontLoader fonts={[{ font: theme.fontFamily, weights: [300, 400, 500, 600, 700] }]} />
    ) : null}    
    {theme?.headingFontFamily && theme?.fontFamily !== theme?.headingFontFamily ? (
      <GoogleFontLoader fonts={[{ font: theme.headingFontFamily, weights: [300, 400, 500, 600, 700] }]} />
    ) : null}

    <ThemeProvider theme={theme}>
      <header className={classes.header}>
        <Placeholder name="corporate-top" rendering={route} />
      </header>
      <main className={classes.main}>
        <Placeholder name="corporate-content" rendering={route} />
      </main>
      <footer className={classes.footer}>
        <Placeholder name="corporate-bottom" rendering={route} />
      </footer>
    </ThemeProvider>
  </React.Fragment>
  );
};

export default Layout;
