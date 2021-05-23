import cssfabric               from "cssfabric";
import React                   from "react";
import {JSXElementConstructor} from "react";

interface IDemoElement {
    module?: string;
    cssFabricClassName?: any;
    moduleAttribute?: any;
    moduleRule?: any;
    children?: any;
}

interface IDemoElementGridProps {
    module?: string;
    cssFabricClassName?: any;
    moduleAttribute?: any;
    moduleRule?: any;
    children?: any;
}


export default function DemoElement(props: IDemoElement) {
    
    const {moduleAttribute, moduleRule, cssFabricClassName} = props;
    
    let out;
    
    function DrawIt(props?: any): any {
        
        const childrens = props?.children;
        
        switch ('mod') {
            default:
                out = <div className={'w-sm-full w-8-min'}>
                    <div style={{display:'none'}} className={"pad dsp-none"}>.{moduleAttribute} .{moduleRule} .{cssFabricClassName}</div>
                    {DrawType()}
                </div>
        }
        return out;
    }
    
    function DrawType() {
        let content;
        
        switch (moduleAttribute) {
            case "color":
                content = <DemoElementColor {...props} />
                break;
            case "border-color":
                content = <DemoElementBorderColor {...props} />
                break;
            case "background-color":
            case "background-themed":
            case "theme":
                content = <DemoElementBackgroundColor {...props} />
                break;
            case "margin":
                content = <DemoElementMargin {...props} />
                break;
            case "padding":
                content = <DemoElementPadding {...props} />
                break;
            case "border":
                content = <DemoElementBorder {...props} />
                break;
            case "grid":
                content = <DemoElementGrid {...props} />
                break;
            case "scale":
                content = <DemoElementScale {...props} />
                break;
            case "table":
                content = <DemoElementTable {...props} />
                break;
            case "text":
            case "text-align":
            case "text-shadow":
            case "text-transform":
            case "font-weight":
                content = <DemoElementText {...props} />
                break;
            default:
                content = <div className={cssFabricClassName + ' h-full'}>
                    {moduleAttribute} {cssFabricClassName}
                </div>
                
                break;
        }
        
        return <React.Fragment>
            {/*{moduleAttribute}*/}      {content}
        </React.Fragment>
    }
    
    return DrawIt(props);
}

const DemoElementText = (props: IDemoElementGridProps) => {
    const {moduleAttribute, moduleRule, cssFabricClassName} = props;
    
    return <div className={ ' pad-2 overflow-none scale-w-16'}>
        <h6 className={'border-l-4 pad-l theme-border-primary-dark dsp-inline'}>.{cssFabricClassName}</h6>
        <p className={cssFabricClassName +" text-ellipsis"}>Here is some {cssFabricClassName} text</p>
        <p className={cssFabricClassName +" text-ellipsis"}>This {cssFabricClassName} text is from cssfabric a css sass framework</p>
    </div>
}

const DemoElementBackgroundColor = (props: IDemoElementGridProps) => {
    const {moduleAttribute, moduleRule, cssFabricClassName} = props;
    
    return <div className={cssFabricClassName + ' w-sm-auto w-8 h-sm-2 h-8 pad-1 overflow-none'}>
         <div className={"text-ellipsis"}>{cssFabricClassName}</div>
    </div>
}

const DemoElementBorderColor = (props: IDemoElementGridProps) => {
    const {moduleAttribute, moduleRule, cssFabricClassName} = props;
    
    return <div className={'border-4 '+ cssFabricClassName + ' h-full w-16 pad'}>
       .{cssFabricClassName}
    </div>
}
const DemoElementColor = (props: IDemoElementGridProps) => {
    const {moduleAttribute, moduleRule, cssFabricClassName} = props;
    
    return <div className={cssFabricClassName + ' h-full pad'}>
       this is so {cssFabricClassName}
    </div>
}
const DemoElementMargin = (props: IDemoElementGridProps) => {
    const {moduleAttribute, moduleRule, cssFabricClassName} = props;
    
    return <div className={'w-16 h-2-min'}>
        <div className={cssFabricClassName + ' border'}>&nbsp;margin&nbsp;</div>
    </div>
}
const DemoElementPadding = (props: IDemoElementGridProps) => {
    const {moduleAttribute, moduleRule, cssFabricClassName} = props;
    
    return <div className={'w-16 h-4-min pad-1 grid-h grid-align-middle grid-align-center'}>
        <div className={cssFabricClassName + ' border'}>&nbsp;padding&nbsp;</div>
    </div>
}

const DemoElementBorder = (props: IDemoElementGridProps) => {
    const {moduleAttribute, moduleRule, cssFabricClassName} = props;
    
    return <div className={'w-16 h-4 pad-1 grid-h grid-align-middle grid-align-center'}>
        <div className={cssFabricClassName + ''}>&nbsp;border&nbsp;</div>
    </div>
}
const DemoElementScale  = (props: IDemoElementGridProps) => {
    const {moduleAttribute, moduleRule, cssFabricClassName} = props;
    
    return <div className={'w-64 pad-1'}>
        <div className={cssFabricClassName + ' border marg pad'}>
            <div className={''}>&nbsp;&nbsp;</div>
        </div>
    </div>
}
const DemoElementGrid   = (props: IDemoElementGridProps) => {
    
    const {moduleAttribute, moduleRule, cssFabricClassName} = props;
    
    const multiply = (factor: number) => {
        return [...Array(factor)].map((x, i) => <div className={'border marg pad w-4 h-2'}>&nbsp;{++i}&nbsp;</div>)
    }
    
    const def = <div className={'w-64 pad-1'}>
        <div className={'grid-h ' + cssFabricClassName + " h-8"}>
            {multiply(3)}
        </div>
    </div>
    
    const forClassNames = <div className={'grid-h w-64 pad-1 h-16-min'}>
        <div className={"w-mid border-r grid-v"}>
            <div className={"pad"}>.grid-h</div>
            <div className={'grid-main grid-h ' + cssFabricClassName + " h-8"}>
                {multiply(6)}
            </div>
        </div>
        <div className={"grid-v"}>
            <div className={"pad"}>.grid-v</div>
            <div className={'grid-main grid-v ' + cssFabricClassName + " h-8"}>
                {multiply(3)}
            </div>
        </div>
    </div>
    
    switch (moduleRule) {
        case "classnames":
            return <React.Fragment>{forClassNames}</React.Fragment>
        default:
            return <React.Fragment>{def}</React.Fragment>
    }
}
const DemoElementTable = (props: IDemoElementGridProps) => {
    
    const {moduleAttribute, moduleRule, cssFabricClassName} = props;
    
    return (
        <div className={"grid-h grid-wrap relative"}>
                <div className={"h-16 w-64"}>
                    <div className={"h-full grid-v overflow-j relative"}>
                        <h5 className={"border-b-1 pad-tb-4"}>table : {cssFabricClassName}</h5>
                        <div className={"grid-main  overflow-auto marg-t-4"}>
                            <table className={"table tbl-layout  w-full tbl-" + cssFabricClassName}>
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
        </div>
    );
};
