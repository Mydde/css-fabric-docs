import Head                          from 'next/head';
import cssfabric                     from "cssfabric";
import utils                         from "@/utils/utils";
import {htmlUtils, fabricNavigation} from "@/utils/utils";
import DocsClassNames                from '@/components/Docs/DocsClassNames'
import Link                          from "next/link";
import {useRouter}                   from "next/router";
import Menu                          from "@/components/Menu";

interface IDocs {
    module: any
}

export default function Docs(props: IDocs) {
    
    const {module}         = props;
    const moduleAttributes = cssfabric.getModuleDocsAttributes(module);
    
    const router          = useRouter();
    const {query, asPath} = router;
    
    function tre(part: any) {
        
        // if object, if array !!!
        // console.log(part)
        let out: any,
            levelValues: any;
        
        if (part && !Array.isArray(part) && typeof (part === "object")) {
            out = Object.keys(part).map((levelKey) => {
                let levelValue = part[levelKey]
                // console.log({levelKey, levelValue})
                if (Array.isArray(levelValue)) {
                    levelValues = levelValue.map(x => <div className={"marg-r-3"}>{x}</div>)
                }
                
                return (<div className={"pad-all"}>
                    <div className={"txt-gray-600 dsp-inline marg-r-1 border-b"}>{levelKey}</div>
                    <div className={"grid-h marg-l-4 "}>{levelValues}</div>
                </div>);
            })
        } else {
            
            switch (utils.isArrayOfTypes(part)) {
                case "strings":
                case "numbers":
                    out = <div className={"grid-h grid-wrap"}>{part.map(x => <div
                        className={"marg-r-4"}>{x}</div>)}</div>;
                    break;
                case "arrays":
                    out = part.map((x) => x.join('  ')).map((x) => htmlUtils.enclose(x))
                    break;
                
            }
            
        }
        
        return out;
    }
    
    return (
        <div>
            <Head>
                <title>{module} cssfabric documentation</title>
            </Head>
            <div className={"grid-h border-t"}>
                <Menu module={module} />
                <div className={"grid-main grid-v grid-items-end pad-r-8"}>
                    <div className={"txt-800 border-b dsp-inline"}>
                        cssfabric classnames
                    </div>
                    <div className={"txt-gray-300 marg-b-4"}>
                        engine declarations
                    </div>
                </div>
            
            </div>
            {Object.keys(moduleAttributes).map((moduleAttribute: string) => {
    
                let moduleAttributeModel = moduleAttributes[moduleAttribute]
                
                let {tag, keys, levels, levelsDeclin, levelsLinked,classNames, values, about} = moduleAttributeModel;
                let toParse                                                      = {
                    keys,
                    levels,
                    levelsDeclin,
                    levelsLinked,
                    classNames
                };
                let moduleClassNames = cssfabric.getClassNames.getModuleTagClassNames({module, moduleAttribute});
                
                return <div className={"grid-h pad-b-8"}>
                    <div className={"grid-main"}>
                        <div
                            className={"grid-h grid-inline border-b  theme-border-primary align-middle cell-spacing marg-b-1"}>
                            <label>{tag}</label>
                            <div className={"txt-400"}>{moduleAttribute}</div>
                        </div>
                        <div className={"txt-gray-500 marg-b-2 pad-l-8 "}>
                            <div className={"dsp-inline pad-all-2 shad-2"}>
                                {about}
                            </div>
                        </div>
                        <div className={"cell-spacing grid-main"}>
                            {Object.keys(toParse).filter(x => toParse?.[x]).map((w: any) => {
                                return (
                                    <div className={"marg-b-4"}>
                                        <div className={"w-8 pad-l-4 border-l-4 txt-900"}>
                                            {w}:
                                        </div>
                                        <div className={"marg-l-4"}>
                                            {tre(toParse[w])}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={"box-content marg-l-1 w-mid grid-h"}>
                        <div className={"cell-spacing"}>
                            <div className={"txt-gray-300 marg-b-4"}>
                                generated samples
                            </div>
                            <div className={""}>
                                <div  >
                                    <pre>
                                    {JSON.stringify(moduleClassNames,null,'\t')}
                                        </pre>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            })}
        </div>
    )
}

export async function getServerSideProps(context: any) {
    console.log({context})
    //const res = await fetch(`http://localhost:5000/posts/${context.params.id}`)
    // const data = await res.json()
    
    return {
        props: {},
    }
}
