import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    products: {
        display: "flex",
        flexWrap: "wrap",
    },

    productItem: {
        display: "flex",
        flexDirection: "column",
        width: 210,
        margin: 10,
        padding: 5,
        justifyContent: "center",
        "&:hover": {
            backgroundColor: "lightblue"
        } 
    },

    productImageContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 220,
        height: 300
    },

    title: {
        fontWeight: "bold",
    },

    description: {
        fontSize: 12
    },

    price: {
        fontSize: 24
    }
})
/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ImageWithCaption = ({ fields }) => {
    const classes = useStyles();
    var productItems = fields?.products;

    if(productItems && Array.isArray(productItems)){
        return (
          <div className={classes.products}>
            {productItems.map((item, index) => (
              <div className={classes.productItem} key={index}>
                <div className={classes.productImageContainer}>
                  <img src={item.Image} alt={item.Title} width={150} />
                </div>
                <div className={classes.title}>{item.Title}</div>
                <div className={classes.description}>{item.Description}</div>
                <div className={classes.price}>SGD ${item.Price}</div>
              </div>
            ))}
          </div>
        )
      }
    
      return "No articles found."
};

export default ImageWithCaption;
