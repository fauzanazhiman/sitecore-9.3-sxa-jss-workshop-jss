export function generateGlobalStyles(theme){
  return {
    "@global": {
      html: {
        height: "100%",
      },
      body: {
        backgroundColor: theme.backgroundColor,
        color: theme.bodyFontColor,
        margin: "0",
        padding: "0",
        height: "100%",
        overflowX: "hidden",
        fontFamily: theme.fontFamily ? theme.fontFamily : "Segoe UI, Open Sans, sans-serif"
      },
      "#root": {
        display: "flex",
        flexDirection: "column",
        height: "100%",
      },
      a: {
        color: theme.bodyFontColor,
      },
      h1: {
        fontFamily: theme.headingFontFamily ? theme.headingFontFamily : "Segoe UI, Open Sans, sans-serif",
        color: theme.headingFontColor,
      },
      h2: {
        fontFamily: theme.headingFontFamily ? theme.headingFontFamily : "Segoe UI, Open Sans, sans-serif",
        color: theme.headingFontColor,
      },
      h3: {
        fontFamily: theme.headingFontFamily ? theme.headingFontFamily : "Segoe UI, Open Sans, sans-serif",
        color: theme.headingFontColor,
      },
      h4: {
        fontFamily: theme.headingFontFamily ? theme.headingFontFamily : "Segoe UI, Open Sans, sans-serif",
        color: theme.headingFontColor,
      },
      h5: {
        fontFamily: theme.headingFontFamily ? theme.headingFontFamily : "Segoe UI, Open Sans, sans-serif",
        color: theme.headingFontColor,
      },
      h6: {
        fontFamily: theme.headingFontFamily ? theme.headingFontFamily : "Segoe UI, Open Sans, sans-serif",
        color: theme.headingFontColor,
      },
    },
  };
}
