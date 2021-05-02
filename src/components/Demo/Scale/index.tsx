import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";

import conf_cssfabric from "cssfabric";

interface Props {}

const Scale = (props: Props) => {
  const tagProperties = conf_cssfabric.getModuleData("scale");

  const {
    scale_defined_step_size,
    scale_defined_step_unit,
    scale_shorthands,
    scale_props,
    scale_defined_steps,
    sc,
  } = tagProperties;

  return (
    <div>
      <label>il était temps de faire un label</label>
      <div className={"grid-h grid-wrap"}>
        {[...scale_defined_steps].map((value, key) => {
          return (
            <div className={"pad-all w-" + value} key={value}>
              <div className={"border-all-1 bg-100 h-2"}>w-{value}</div>
            </div>
          );
        })}
      </div>
      <div className={"grid-h grid-wrap"}>
        {[...scale_defined_steps].map((value, key) => {
          return (
            <div className={"pad-all w-4 bg-100  h-" + value} key={value}>
              <div className={"border-all-1 h-2"}>w-{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Scale;
