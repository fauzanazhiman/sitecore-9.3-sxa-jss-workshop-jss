import { Text } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';
import OptimizedImage from '../../utils/components/OptimizedImage';
import { useTranslation } from 'react-i18next';

const useStyles = createUseStyles({
  card: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },

  cardItem: {
    flex: "0 1 450px",
    display: "flex",
    flexDirection: "column",
    margin: 10,
    padding: 5,
    backgroundColor: "lightgrey"
  },

  cardImageContainer: {
    display: "flex",
    height: 280,
    alignItems: "center"
  }
})

const CardListing = ({ fields, route }) => {
  const classes = useStyles();
  const articleItems = fields?.items;
  const {t} = useTranslation();

  if(articleItems && Array.isArray(articleItems)){
    return (
      <div className={classes.card}>
        {articleItems.map((item, index) => (
          <div className={classes.cardItem} key={index}>
            <div className={classes.cardImageContainer}>
              <OptimizedImage imageField={item?.Image} maxWidth={450} maxHeight={300} />
            </div>
            <strong><Text field={item?.Title}></Text></strong>
            <span><Text field={item?.Description}></Text></span>
            <NavLink to={item?.url} >{t("read more")}</NavLink>
          </div>
        ))}
      </div>
    )
  }

  return "No articles found."
}

export default CardListing;