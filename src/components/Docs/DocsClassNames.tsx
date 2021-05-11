import cssfabric from "cssfabric";
import Menu      from "@/components/Menu";

interface IDocsClassNames {
    module: string;
}


export default function DocsClassNames(props: IDocsClassNames) {
    
    const {module,}        = props;
    const moduleAttributes = cssfabric.getModuleDocsAttributes(module);
    
    
    return <div>
        <div className={"grid-v grid-items-end pad-r-8"}>
            <div className={"txt-800 border-b dsp-inline"}>
                cssfabric classnames
            </div>
            <div className={"txt-gray-300 marg-b-4"}>
                generated classnames
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
                        <p  className={"grid-h grid-wrap marg-b-8"}>
                            {newOut.map((x, y) => <span className={"w-sm-full w-md-mid w-xl-tiers w-quarter"} key={x + y}>.{x}</span>)}
                        </p>
                    </div>
                })
            }
        </div>
    </div>
}