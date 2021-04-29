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
          <div
            key={key}
            className={"grid-h grid-wrap items-center w-tiers pad-all-4"}>
            <div className={"pad-ii"}>
              <div className={"pad-ii-8 brd-all"}>txt-{key}</div>
            </div>
            <div className={cssProperty + " grid-main grid-h"}>
              <div className={"pad-ii-4"}>"</div>
              <div className={"grid-main"}>some content here {font_weight}</div>
			  <div className={"pad-ii-4"}>"</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CssFabricProperties;
