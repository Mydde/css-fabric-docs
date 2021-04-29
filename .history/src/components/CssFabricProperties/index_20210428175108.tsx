import React from "react";

interface Props {
  property: string;
}

export const CssFabricProperties = (props: Props) => {
  const { property } = props;

  return (
    <div className={"grid-h grid-wrap"}  >
      {Object.keys(property).map((key) => {
        const font_weight = property[key];
        const cssProperty = "txt-" + key;

        return (
          <div key={key} className={"grid-h items-center w-tiers pad-all-4"}>
            <div className={"pad-ii"}>
              <div className={"pad-ii-8 brd-all"}>{font_weight}</div> 
            </div>
			<div>"</div>
            <div className={cssProperty + " brd-all grid-main"}>{font_weight}</div>
			<div>"</div>
          </div>
        );
      })}
    </div>
  );
};

export default CssFabricProperties;
