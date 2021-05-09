import {useRouter} from "next/router";
import Link        from "next/link";
import dynamic     from "next/dynamic";
import Docs        from "@/components/Docs/Docs";

import conf_cssfabric from "cssfabric";

import {
    Header,
    HeaderSiteTitle,
}            from "src/components/Headers";
import React from "react";


const ModulePath = () => {
    
    const router                          = useRouter();
    const [activeModule, setActiveModule] = React.useState<string>();
    const [activeAction, setActiveAction] = React.useState<string>();
    
    const {path}          = router.query;
    const links: string[] = Object.keys(conf_cssfabric.getModuleList())
    
    let moduleTag;
    let DynamicComponent;
    let tagProperties;
    
    React.useEffect(() => {
        if (path) init(path);
    }, [path])
    
    if (activeModule) {
        
        tagProperties = conf_cssfabric.getModuleMetaData(activeModule);
        
        // moduleTag     = activeModule?.charAt(0)?.toUpperCase() + activeModule?.slice(1) || "Demo";
        //  DynamicComponent = dynamic(import("src/components/Demo/" + moduleTag));
    } else {
        return <div>null</div>
    }
    
    function init(path: string | string[]) {
        // console.log(router)
        const module = path[0];
        const action = path[1];
        
        setActiveModule(module);
        setActiveAction(action);
    }
    
    return (
        <div className={"grid-h grid-wrap h-full content-start overflow-auto"}>
            <div className={"w-full w-sm-main theme-bg-primary-light pos-sticky "}>
                <HeaderSiteTitle
                    title="cssfabric"
                    title_tag={"just.fabric.it"}
                    description={"Welcome"}
                />
            </div>
            <aside className={"w-lg-full w-16"}>
                <nav className={"pad-all-16"}>
                    <ul className={"menu-v menu-lg-h"}>
                        {Object.values(links).map((key: string, index: number) => {
                            return (
                                <li key={key} className={"pad-ii-4 pad-tb-4 menu-item hover-parent"}>
                                    <Link href={`/cssfabric-modules/${key}`}>
                                        <a>
                                            <span className={"hover-show"}>set </span>
                                            <span className={"hover-hide"}>{`${key}`}</span>
                                            <span className={"hover-show txt-bold"}>{`${key}`}</span>
                                            <span className={"hover-show"}> with cssfabric</span>
                                        </a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>
            <section className={"grid-main pad-all-16"}>
                <Header
                    title={"." + tagProperties.title}
                    tag={"fabric.css." + tagProperties.title}
                    description={tagProperties.description}
                />
                <div className={""}>
                    {activeAction}
                    {!activeAction && <Docs module={activeModule}/>}
                    {(activeAction === 'demo') && <Docs module={activeModule}/>}
                    {/*<DynamicComponent />*/}
                </div>
            </section>
        </div>
    );
};

export default ModulePath;
