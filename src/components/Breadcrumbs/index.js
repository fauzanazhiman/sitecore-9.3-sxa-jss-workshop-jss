import { Text } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH } from '../../utils/hooks/useResponsive';

const useStyles = createUseStyles(theme => ({
  breadcrumbs: {
    display: "flex",
    padding: 5,
    width: props => props.isMobile ? "100%" : (props.isTablet ? TABLET_MIN_WIDTH : DESKTOP_MIN_WIDTH),
  },

  breadcrumbItem: {
    marginLeft: 10,
    display: "flex",
    "& > a": {
      color: theme.bodyTextColor,
    },
    "& > a:visited": {
      color: theme.bodyTextColor,
    },  
    "& > div": {
      marginLeft: 10,
      color: theme.bodyTextColor,
    }
  }
}))

const Breadcrumbs = ({ fields }) => {
  const theme = useTheme();
  const classes = useStyles({theme});
  const { t } = useTranslation();

  const breadcrumbItems = fields?.items;

  if(breadcrumbItems && Array.isArray(breadcrumbItems) && breadcrumbItems.length > 1){
    return (
      <div className={classes.breadcrumbs}>
        {breadcrumbItems.map((item, index) => {
          return <div key={index} className={classes.breadcrumbItem}>
            <Link to={item?.url} >{index == 0 ? t("home") : item?.Title?.value}</Link>
            {index < breadcrumbItems.length - 1 ? (<div>&gt;</div>) : null}
          </div>
        })}
      </div>
    )
  }else if(breadcrumbItems.length === 1){
    return null;
  }

  return "No breadcrumbs item found."
}

export default Breadcrumbs;