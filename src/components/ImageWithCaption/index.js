import { Image, RichText, Text } from "@sitecore-jss/sitecore-jss-react";
import React from "react";

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ImageWithCaption = ({ fields }) => {
  return (
    <div className="">
      <Image field={fields?.Image} editable={true} imageParams={{ mh: 300 }} width={300} height="auto" />
      <p>
        <strong>
          <Text field={fields?.Title} />
        </strong>
      </p>
      <p>
        <RichText field={fields?.Description} />
      </p>
    </div>
  );
};

export default ImageWithCaption;
