import React from "react";

interface Props {
  property: string;
}

export const CssFabricProperties = (props: Props) => {
  const { property } = props;

  return (
    <div className={"grid-h grid-wrap"}>
      {Object.keys(property).map((key) => {
        const font_weight = property[key];
        const cssProperty = "txt-" + key;

        return (
          <div key={key} className={"grid-h items-center"}>
            <div className={"pad-l w-8"}>{font_weight}</div> 
            <div className={cssProperty+ " brd-all"}>this text is {font_weight}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CssFabricProperties;
