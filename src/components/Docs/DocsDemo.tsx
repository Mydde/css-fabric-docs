import cssfabric   from "cssfabric";
import React       from "react";
import DemoElement from "@/components/molecules/DemoElement";
import Menu        from "@/components/Menu";

interface IDocsClassNames {
    module: string;
}


export default function DocsDemo(props: IDocsClassNames) {
    
    const {module,}        = props;
    const moduleAttributes = cssfabric.getModuleDocsAttributes(module);
    
    let out;
    
 
    
    return <div>
        <div className={"grid-v grid-items-end pad-r-8"}>
            <div className={"txt-800 border-b dsp-inline"}>
                cssfabric classnames
            </div>
            <div className={"txt-gray-300 marg-b-4"}>
                generated examples
            </div>
        </div>
        <Menu module={module} />
        <div className={"pad-8 grid-h grid-wrap"}>
            {
                Object.keys(moduleAttributes).map((moduleAttribute: string) => {
                    const newOut = cssfabric.getClassNames.getModuleTagClassNames({module, moduleAttribute});
                    
                    return <div key={moduleAttribute} className={"w-mid scale-w-mid "}>
                        <h4 className={"pad-tb-2"}>{moduleAttribute}</h4>
                        <div className={"txt-gray-400 pad-tb-2"}>
                            {`- cssfabric expressions list for  css ${moduleAttribute} rules`}
                        </div>
                        <div className={"grid-h grid-wrap marg-b-8"}>
                            {newOut.map((className, y) => {
                                return <DemoElement moduleAttribute={moduleAttribute} cssFabricClassName={className} >
                                    {moduleAttribute} .{className}
                                </DemoElement>
                            })}
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

/*
<span className={"w-sm-full w-md-mid w-xl-tiers w-quarter "+className}
      key={className + y}>.{className}</span>*/
