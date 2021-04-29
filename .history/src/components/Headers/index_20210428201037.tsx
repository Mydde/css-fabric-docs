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
      <header className={"grid-h just-center items-center"}>
        <h1 className={"pad-all"}>{props.title}</h1>
        <h4 className={"pad-all self-start"}>{props.title_tag}</h4>
      </header>
      <p className={"pad-all"}>{props.description}</p>
    </div>
  );
};

export const Header = (props: HeaderProps) => {
  return (
    <div className={"pad-all pad-b-16"}>
      <div className={"grid-h items-center pad-l-16"}>
        <h2 className={"pad-all brd-b "}>{props.title}</h2>
        <h4 className={"pad-all txt-gray-500  txt-h4"}>
          {props.tag}
        </h4>
      </div>
      <p className={"pad-l-16  marg-t-8 marg-b-16"}>{props.description}</p>
    </div>
  );
};

export const SubHeader = (props: Props) => {
  return (
    <article className={"pad-all grid-main"}>
      <div className={"grid-h items-center"}>
        <div className={"w-4 brd-r txt-center"}></div>
        <div className={""}>
          <h3 className={"pad-tb-8 pad-l-8 brd-l-4"}>{props.title}</h3>
          <p className={"pad-l-16 txt-gray-900"}>description : {props.description}</p>
        </div>
      </div>
      <div className={"grid-h pad-tb-16"}>
        <div className={"w-4 txt-center"}></div>
        <article className={"marg-l-8 grid-main"}>{props.children}</article>
      </div>
    </article>
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
        </div>
        <div>
          <h4 className={"pad-all"}>{props.tag}</h4>
          <p className={"pad-all"}>{props.description}</p>
        </div>
      </div>
      <div className={"grid-h"}>
        <div className={"w-4 txt-center brd-4"}  > 
        </div>
        <article className={"marg-l-8"}>{props.children}</article>
      </div>
    </div>
  );
};
