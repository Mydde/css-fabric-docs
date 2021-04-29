import React from "react";

interface Props {
  tag?: string;
  title?: string;
  title_tag?: string;
  description: string;
  orientation?: string;
  children?: any;
}
interface HeaderProps {
  title: string;
  tag?: string;
  description?: string;
  children?: any;
}

export const HeaderSiteTitle = (props: Props) => {
  return (
    <div className={"grid-v items-center pad-all-16 brd-b pos-sticky"}>
      <div className={"grid-h just-center items-center"}>
        <div className={"txt-h1 pad-all "}>{props.tag}</div>
        <div className={"txt-h4 pad-all"}>{props.tag}</div>
      </div>
      <div className={"pad-all"}>{props.description}</div>
    </div>
  );
};

export const Header = (props: HeaderProps) => {
  return (
    <div className={"pad-all pad-b-16"}>
      <div className={"grid-h items-center pad-l-16"}>
        <div className={"txt-h2 pad-all brd-b "}>{props.title}</div>
        <div className={"txt-h4 pad-all txt-gray-500  txt-h4"}>
          {props.tag}
        </div>
      </div>
      <article className={"pad-l-16  marg-t-8 marg-b-16"}>{props.description}</article>
    </div>
  );
};

export const SubHeader = (props: Props) => {
  return (
    <div className={"pad-all grid-main"}>
      <div className={"grid-h items-center"}>
        <div className={"w-4 brd-r txt-center"}></div>
        <div className={""}>
          <div className={"txt-h3 pad-tb-8 pad-l-8 brd-l-4"}>{props.title}</div>
          <div className={"pad-l-16 txt-gray-900"}>description : {props.description}</div>
        </div>
      </div>
      <div className={"grid-h pad-tb-16"}>
        <div className={"w-4 txt-center"}></div>
        <article className={"marg-l-8 grid-main"}>{props.children}</article>
      </div>
    </div>
  );
};

export const SubHeaderH = (props: Props) => {
  return <div className={"grid-h grid-wrap"}>{props.children}</div>;
};

export const SubSubHeader = (props: Props) => {
  const orientation = props.orientation || "h";
  const clk = orientation === "v" ? "" : "";

  return (
    <div className={"pad-all grid-main"}>
      <div className={"grid-h items-center"}>
        <div className={"w-4 txt-center brd-4"} >
          [ssub]
        </div>
        <div className={""}>
          <span className={"txt-h4 pad-all "}>{props.tag}</span>
          <div className={"pad-all"}>{props.description}</div>
        </div>
      </div>
      <div className={"grid-h"}>
        <div className={"w-4 txt-center brd-4"}  >
          [ssub]
        </div>
        <article className={"marg-l-8"}>{props.children}</article>
      </div>
    </div>
  );
};
