import React from "react";
import { Header } from "../../Headers";

interface Props {}

const Table = (props: Props) => {
  const tblNames = [
    "tbl-border tbl-head",
    "tbl-h-line tbl-sticky",
    "tbl-v-line",
    "tbl-h-line tbl-v-line",
    "tbl-sticky",
    "tbl-bg-strip-2",
    "tbl-bg-strip-5",
    "tbl-bg-strip-5 tbl-h-line",
    "tbl-shad",
  ];

  return (
    <div className={"grid-h grid-wrap relative"}>
      {tblNames.map((nameClass) => (
        <div className={"h-32 w-md-full w-lg-mid w-mid  pad-all-16"}>
          <div className={"h-full grid-v overflow-j relative"}>
            <h4 className={"border-b-1 pad-all-16"}>- table : {nameClass}</h4>
            <div className={"grid-main border-all-1 overflow-auto"}>
              <table className={"table tbl-layout  w-full " + nameClass}>
                <thead>
                  <tr>
                    {[...Array(6)].map((name, val) => (
                      <React.Fragment>
                        <th>Title</th>
                      </React.Fragment>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[...Array(30)].map((name, val) => (
                    <tr key={val}>
                      {[...Array(6)].map((name, val) => (
                        <React.Fragment>
                          <td>{val + 1}</td>
                        </React.Fragment>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
module.exports = Table;
