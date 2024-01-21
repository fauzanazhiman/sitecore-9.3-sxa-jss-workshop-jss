import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import {
  useResponsive,
  DESKTOP_MIN_WIDTH,
  TABLET_MIN_WIDTH,
} from "../../utils/hooks/useResponsive";
import {
  Placeholder,
  Text,
  isExperienceEditorActive,
} from "@sitecore-jss/sitecore-jss-react";

const useStyles = createUseStyles((theme) => ({
  sectionContainer: {
    display: "flex",
    backgroundColor: props => props.backgroundColor === "primaryColor" ? theme.primaryColor : (props.backgroundColor === "secondaryColor" ? theme.secondaryColor : null),
    color:  props => props.backgroundColor === "primaryColor" ? "white": (props.backgroundColor === "secondaryColor" ? "white" : theme.bodyTextColor),
    flexDirection: "column",
    width: "100vw",
    minHeight: 50,
    alignItems: "center",
    "&> h1": {
      color:  props => props.backgroundColor === "primaryColor" ? "white": (props.backgroundColor === "secondaryColor" ? "white" : theme.bodyTextColor),
    }
  },

  columnContainer: {
    display: "flex",
    flex: "auto",
    flexDirection: "row",
    width: (props) => props.isMobile ? "100%" : props.isTablet ? TABLET_MIN_WIDTH : DESKTOP_MIN_WIDTH,
  },

  sectionColumn: {
    display: "flex",
    flexDirection: "column",
    padding: 5,
    flex: "auto",
    width: props => props.numberOfColumn === 2 ? "50%" : props.numberOfColumn === 3 ? "33%" : null,
    "&> div.scEmptyPlaceholder":{
      width: "100%"
    }
  },
}));

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Section = ({ fields, params, rendering }) => {
  const backgroundColor = params["Background Color"] ?? "default";
  const numberOfColumn = parseInt(params["Number of Columns"] ?? "1");
  const hideTitle = params["Hide Title"] == "1";
  
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const classes = useStyles({ isDesktop, isTablet, isMobile, backgroundColor, numberOfColumn, isExperienceEditorActive: isExperienceEditorActive() });

  const columns = [];
  for (let index = 1; index <= numberOfColumn; index++) {
    columns.push(
      <div className={classes.sectionColumn} key={index}>
        <Placeholder name={"section-" + index} rendering={rendering} />
      </div>
    )
  }

  return (
    <section className={classes.sectionContainer}>
      {!hideTitle ? <h1><Text field={fields?.Title} /></h1> : null}
      <div className={classes.columnContainer}>
        {columns}
      </div>
    </section>
  );
};

export default Section;
