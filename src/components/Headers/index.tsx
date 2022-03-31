import React from "react";

interface HeaderProps {
    title?: string;
    title_tag?: string;
    tag?: string;
    description?: string;
    orientation?: string;
    children?: any;
}

export const HeaderSiteTitle = (props: HeaderProps) => {
    return (
        <div className={"flex-v items-center pad-lg-4 pad-all-8 border-b pos-sticky"}>
            <header className={"flex-h just-center items-center"}>
                <h1 className={"pad-all text-shad-info"}><a href={"/"}>{props.title}</a></h1>
                <h6 className={"pad-all self-start dsp-sm-none"}>{props.title_tag}</h6>
            </header>
            <p className={"pad-all  dsp-sm-none"}>{props.description}</p>
        </div>
    );
};

export const Header = (props: HeaderProps) => {
    return (
        <div className={"pad-2 flex-h flex-wrap flex-align-middle"}>
            <div className={"flex-h items-center pad-l-8 h-4 flex-main"}>
                <h2 className={"pad-all border-b "}>{props.title}</h2>
                <h5 className={"pad-all text-gray-500  text-h4"}>
                    {props.tag}
                </h5>
            </div>
            <p className={"pad-all text-center marg-l-16 border-l-4 color-gray-400"}>{props.description}</p>
        </div>
    );
};

export const SubHeader = (props: HeaderProps) => {
    return (
        <article className={"pad flex-main"}>
            <div className={"flex-h items-center"}>
                <h3 className={"pad-tb-4"}>{props.title}</h3>
            </div>
            <div className={"flex-h pad-tb-16"}>
                <article className={"marg-l-8 flex-main"}>{props.children}</article>
            </div>
        </article>
    );
};

export const SubHeaderH = (props: HeaderProps) => {
    return <div className={"flex-h flex-wrap"}>{props.children}</div>;
};

export const SubSubHeader = (props: HeaderProps) => {
    const orientation = props.orientation || "h";
    const clk         = orientation === "v" ? "" : "";
    
    return (
        <div className={"pad-all flex-main"}>
            <div className={"flex-h items-center"}>
                <div className={"w-4 text-center border-4"}>
                </div>
                <div>
                    <h4 className={"pad-all"}>{props.tag}</h4>
                    <p className={"pad-all"}>{props.description}</p>
                </div>
            </div>
            <div className={"flex-h"}>
                <div className={"w-4 text-center border-4"}>
                </div>
                <article className={"marg-l-8"}>{props.children}</article>
            </div>
        </div>
    );
};
