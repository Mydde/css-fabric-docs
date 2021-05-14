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
    <div className={"grid-v items-center pad-all-8 border-b pos-sticky"}>
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
    <div className={"pad-t-4 grid-h grid-align-middle"}>
      <div className={"grid-h items-center pad-l-8 h-4"}>
        <h2 className={"pad-all border-b "}>{props.title}</h2>
        <h4 className={"pad-all txt-gray-500  txt-h4"}>
          {props.tag}
        </h4>
      </div>
      <p className={"pad-all text-center marg-l-8 grid-main border-l-4 color-gray-400"}>{props.description}</p>
    </div>
  );
};

export const SubHeader = (props: Props) => {
  return (
    <article className={"pad grid-main"}>
      <div className={"grid-h items-center"}>
          <h3 className={"pad-tb-4"}>{props.title}</h3>
      </div>
      <div className={"grid-h pad-tb-16"}>
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
        <div className={"w-4 txt-center border-4"} > 
        </div>
        <div>
          <h4 className={"pad-all"}>{props.tag}</h4>
          <p className={"pad-all"}>{props.description}</p>
        </div>
      </div>
      <div className={"grid-h"}>
        <div className={"w-4 txt-center border-4"}  > 
        </div>
        <article className={"marg-l-8"}>{props.children}</article>
      </div>
    </div>
  );
};
