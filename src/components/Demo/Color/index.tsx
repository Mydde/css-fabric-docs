import React from "react";
import { useRouter } from "next/router";
import {
  Header,
  SubHeader,
  SubSubHeader,
  SubHeaderH,
} from "src/components/Headers";

import conf_fabric from "cssfabric";

interface Props {}

const Color = (props: Props) => {
  const fabricConfig = conf_fabric.getModuleData("base");
  const fabricColorConfig = conf_fabric.getModuleData("color");
  /// lib/css-fabric/_generated/css.fabric.config.json
  const base = fabricColorConfig;

  console.log(base);
  // const a = conf_fabric["css-config"].modules.base._data.grid_class_name;
  const a = "";
  return (
    <div className={"grid-h grid-wrap"}>
      <div className={"grid-main"}>
        <SubHeader title="text colors" description="naafa">
          <div className={"grid-h"}>
            {Object.keys(base.color_schemes_props).map((key, index) => {
              let prop = base.color_schemes_props[key];
              return (
                <div className={"grid-h pad-b w-8"}>
                  <div
                    className={"brd-all pad-all-2 txt-center bg-" + key}></div>
                  <div
                    className={"grid-main pad-all-4 txt-bold color-" + { key }}>
                    {key}
                  </div>
                </div>
              );
            })}
          </div>
        </SubHeader>
        <SubHeader title="grays" description="naafa">
          <div className={"grid-h grid-wrap"}>
            {[...Array(base.color_grays.gray_steps)].map((key, val) => {
              val++;
              return (
                <div className={"w-8"}>
                  <div
                    className={"h-2 pad-all-2 txt-center color-" + val * 100}>
                    color-{val * 100}
                  </div>
                </div>
              );
            })}
          </div>
        </SubHeader>
        <SubHeader title="background themed grays" description="naafa">
          <div className={"grid-h"}>
            {[...Array(base.color_grays.gray_steps)].map((key, val) => {
              val++;
              return (
                <div className={"grid-main pad-all-2"}>
                  <div
                    className={
                      "h-4 pad-all-2 txt-center bg-theme-" + val * 100
                    }>
                    {val}
                  </div>
                </div>
              );
            })}
          </div>
        </SubHeader>
        <SubHeader title="background-colors" description="naafa"></SubHeader>
        <SubHeader
          title="background-themed-colors"
          description="naafa"></SubHeader>
        <SubHeader title="gradients" description="gradients"></SubHeader>
        <SubHeader title="palette colors" description="naafa">
          <div className={"grid-h grid-wrap w-full"}>
          {Object.keys(base.color_palette_props).map((key, index) => {
            let prop = base.color_palette_props[key];
            return (
              <div className={"grid-h pad-b grid-main border-all  "}>
                <div className="grid-main pad-all-4"> {key}</div>
                <div
                  className={"grid-main pad-all-2 txt-center  h-6 w-6 bg-theme-" + key}>
                  *-{key}
                </div>
              </div>
            );
          })}

          </div>
        </SubHeader>
      </div>
      <div className={"w-quarter"}>
        <SubHeader title="schemed colors" description="naafa">
          {Object.keys(base.color_schemes_props).map((key, index) => {
            let prop = base.color_schemes_props[key];
            return (
              <div className={"grid-h pad-b"}>
                <div className="grid-main pad-all-4"> {key}</div>
                <div
                  className={
                    "grid-main brd-all pad-all-2 txt-center h-4 w-4 bg-theme-" + key
                  }></div>
              </div>
            );
          })}
        </SubHeader>
      </div>
    </div>
  );
};

export default Color;
