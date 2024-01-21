import React from 'react';
import { Image } from '@sitecore-jss/sitecore-jss-react';
import defaultImage from '../../assets/default-image.png';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    heroBanner: {
        backgroundImage: props => "url("+props.imgSrc+")",
        backgroundPosition: "center",
        width: "100vw",
        height: 450
    }
});
/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic  
 * JSS component that's useful.
 */
const HeroBanner = ({ fields }) => {
    const imgSrc = fields?.Image?.value?.src ?? defaultImage;
    const classes = useStyles({imgSrc});

    return (
        <div className={classes.heroBanner}>

        </div>
    )
}

export default HeroBanner;