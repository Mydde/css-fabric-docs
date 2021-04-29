import React from "react";

interface Props {
  property: string;
}

export const CssFabricProperties = (props: Props) => {
  const { property } = props;

  return (
    <div className={"grid-h grid-wrap border-all"}>
      {Object.keys(property).map((key) => {
        const font_weight = property[key];
        const cssProperty = "txt-" + key;

        return (
          <div key={key} className={"grid-h items-center w-tiers"}>
            <div className={"pad-ii"}>
              <span className={"pad-ii-8 brd-all"}>{font_weight}</span>
            </div>
            <div className={cssProperty + ""}>this text is {font_weight}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CssFabricProperties;
