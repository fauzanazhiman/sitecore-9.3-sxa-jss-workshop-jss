import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const resolveLinkHref = (fonts, subsets, display) => {
    const families = fonts.reduce((acc, font) => {
        const family = font.font.replace(/ +/g, '+');
        const weights = (font.weights || []).join(',');

        return [
            ...acc,
            family + (weights && `:${weights}`),
        ];
    }, []).join('|');

    let linkHref = `https://fonts.googleapis.com/css?family=${families}`;

    if (subsets && Array.isArray(subsets) && subsets.length > 0) {
        linkHref += `&subset=${subsets.join(',')}`;
    }

    if (display) {
        linkHref += `&display=${display}`;
    }

    return linkHref;
};

const GoogleFontLoader = ({ fonts, subsets, display = null }) => {
    return <Helmet>
        <link rel="stylesheet" href={resolveLinkHref(fonts, subsets, display)}></link>
    </Helmet>
};

GoogleFontLoader.propTypes = {
    fonts: PropTypes.arrayOf(
        PropTypes.shape({
            font: PropTypes.string.isRequired,
            weights: PropTypes.arrayOf(PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ])),
        }),
    ).isRequired,
    subsets: PropTypes.arrayOf(PropTypes.string),
    display: PropTypes.string,
};

export default GoogleFontLoader;