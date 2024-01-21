import { Text } from '@sitecore-jss/sitecore-jss-react';
import React from 'react';

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic  
 * JSS component that's useful.
 */
const Title = ({ fields }) => {
  return (
    <React.Fragment>
        <h1><Text field={fields?.Title}/></h1>
    </React.Fragment>
  )
}

export default Title;