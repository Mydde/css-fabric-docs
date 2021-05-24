import React from "react";

import { Header, SubHeader } from "../../Headers";

interface Props {}

const Grid = (props: Props) => {
  return (
    <div>
      <div className={``}>
        {[8, 24].map((value, idx) => {
          let grid_sizes = [...Array(value)];

          return (
            <SubHeader title={`${value}ths-grid based`} title_tag={`${value}`} description={"this is grid system"}>
              <div className={`pad-all  `}>
                {grid_sizes.map((name, nidx) => {
                  let grid_size = nidx + 1;
                  return (
                    <div className={`border-b bg-100`}>
                      <div
                        className={`w-${grid_size}-${value} border-u h-2 pad-all bg-200`}>
                        <span className={``}>
                          text-{`${grid_size}-${value} `}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SubHeader>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
module.exports = Grid;
