import React from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ imageField, maxWidth, maxHeight}) => {
    let imgSrc = imageField?.value?.src.split('?')[0] + "?";
    imgSrc = imgSrc.replace("media", "jssmedia");

    if(maxWidth > 0){
        imgSrc = imgSrc + "mw=" + maxWidth + "&";
    }

    if(maxHeight > 0){
        imgSrc = imgSrc + "mh=" + maxHeight + "&";
    }

    imgSrc = imgSrc.slice(0, -1); 

    return <img src={imgSrc} alt={imageField?.value?.alt} loading="lazy"></img>
};

OptimizedImage.propTypes = {
    imageField: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
    }),
    maxWidth: PropTypes.number,
    maxHeight: PropTypes.number
};

export default OptimizedImage;