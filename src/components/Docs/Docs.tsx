import Head                          from 'next/head';
import cssfabric                     from "cssfabric";
import utils                         from "@/utils/utils";
import {htmlUtils, fabricNavigation} from "@/utils/utils";
import DocsClassNames                from '@/components/Docs/DocsClassNames'
import Link                          from "next/link";
import {useRouter} from "next/router";
import InnerMenu   from "@/components/InnerMenu";

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
                    levelValues = levelValue.map(x => <div className={"marg-r-4 w-2-min"}>{x}</div>)
                }
                
                return (<div className={"pad"}>
                    <div className={"color-gray-600 dsp-inline marg-r-1 border-b pad"}>{levelKey}</div>
                    <div className={"grid-h grid-wrap marg-l-4 pad "}>{levelValues}</div>
                </div>);
            })
        } else {
            
            switch (utils.isArrayOfTypes(part)) {
                case "strings":
                case "numbers":
                    out = <div className={"grid-h grid-wrap"}>{part.map((x: string) => <div
                        className={"marg-r-4"}>{x}</div>)}</div>;
                    break;
                case "arrays":
                    out = part.map((x: string[]) => x.join('  ')).map((x: any) => htmlUtils.enclose(x))
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
            {Object.keys(moduleAttributes).map((moduleAttribute: string) => {
                
                let moduleAttributeModel = moduleAttributes[moduleAttribute]
                
                let {tag, keys, levels, levelsDeclin, levelsLinked, classNames, values, about} = moduleAttributeModel;
                let toParse:Record<string, any>                                                                    = {
                    keys,
                    levels,
                    levelsDeclin,
                    levelsLinked,
                    classNames
                };
                
                let moduleClassNames = cssfabric.getModuleClassNames.getModuleTagClassNames({
                                                                                                module,
                                                                                                moduleAttribute
                                                                                            });
                
                return <div className={"pad-b-8"}>
                    
                    <div
                        className={"grid-h grid-inline border-b  theme-border-primary align-middle cell-spacing marg-b-1"}>
                        <label>{tag}</label>
                        <div className={"txt-400"}>{moduleAttribute}</div>
                    </div>
                    <div className={"color-gray-500 marg-b-2 pad-l-8 "}>
                        <div className={"dsp-inline pad-all-2"}>
                            {about}
                        </div>
                    </div>
                    <div className={"cell-spacing grid-main"}>
                        {Object.keys(toParse).filter((x:any) => toParse?.[x]).map((w: any) => {
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
