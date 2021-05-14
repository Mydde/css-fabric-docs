import {useRouter}    from "next/router";
import Link           from "next/link";
import dynamic        from "next/dynamic";
import Docs           from "@/components/Docs/Docs";
import DocsClassNames from "@/components/Docs/DocsClassNames";
import DocsDemo       from "@/components/Docs/DocsDemo";

import conf_cssfabric from "cssfabric";

import {
    Header,
    HeaderSiteTitle, SubHeader,
} from "src/components/Headers";
import React from "react";
import Menu  from "@/components/Menu";

import utils, {fabricNavigation} from "@/utils/utils";

interface IModulePathProps {
    cssfabricModuleList: Record<string, any>
}

const ModulePath = (props) => {
    
    console.log('props', {props})
    
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
        
        //  moduleTag     = activeModule?.charAt(0)?.toUpperCase() + activeModule?.slice(1) || "Demo";
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
        <div className={"grid-v   h-full content-start overflow-auto"}>
            <div className={"w-full w-sm-main theme-bg-primary-light pos-sticky "}>
                <HeaderSiteTitle
                    title="cssfabric"
                    title_tag={"just.fabric.it"}
                    description={"Welcome"}
                />
                <div className={"grid-h"}>
                    <div className={"dsp-none dsp-sm-block"}>sm</div>
                    <div className={"dsp-md-block dsp-none "}>md</div>
                    <div className={"dsp-lg-block dsp-none"}>lg</div>
                    <div className={"dsp-none dsp-xl-block dsp-none"}>xl</div>
                    <div className={"dsp-none dsp-xxl-block dsp-none"}>xxl</div>
                </div>
            </div>
            <div className={"grid-sm-v grid-h  h-full "}>
                <aside className={"w-lg-16"}>
                    <nav className={"pad-all-8"}>
                        <ul className={"menu-lg-h menu-v"}>
                            <li>Css</li>
                            {Object.values(links).map((key: string, index: number) => {
                                return (
                                    <li key={key} className={"menu-item"}>
                                        <Link href={fabricNavigation.getModuleDemoPage(key)}>
                                            <a>
                                                <span>{`${key}`}</span>
                                            </a>
                                        </Link>
                                    </li>
                                );
                            })}
                            <li>Components</li>
                        </ul>
                    </nav>
                </aside>
                <section className={"grid-main pad-all-8"}>
                    <Header
                        title={"." + tagProperties.title}
                        tag={"fabric.css." + tagProperties.title}
                        description={tagProperties.description}
                    />
                    <div className={"grid-h marg-t-8"}>
                        <div className={"marg-t-8"}>
                            
                            <Menu module={activeModule}/>
                        </div>
                        <div className={"pad-l-8 grid-main"}>
                            <div>
                                <SubHeader title={activeModule+'.'+activeAction} />
                            </div>
                            <div>
                                {activeModule && !activeAction && <Docs module={activeModule}/>}
                                {activeModule && (activeAction === 'docs') && <Docs module={activeModule}/>}
                                {activeModule && (activeAction === 'classnames') && <DocsClassNames module={activeModule}/>}
                                {activeModule && (activeAction === 'demo') && <DocsDemo module={activeModule}/>}
                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

/*export async function getStaticProps(context: any) {
 console.log('context', {context})
 
 
 return {
 props: {
 cssfabricModuleList: conf_cssfabric.getModuleList()
 },
 }
 }*/

export default ModulePath;
