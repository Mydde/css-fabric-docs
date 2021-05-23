import {useRouter}    from "next/router";
import Link           from "next/link";
import dynamic        from "next/dynamic";
import Docs           from "@/components/Docs/Docs";
import DocsClassNames from "@/components/Docs/DocsClassNames";
import DocsDemo       from "@/components/Docs/DocsDemo";
import Head from 'next/head'
import conf_cssfabric from "cssfabric";

import {
    Header,
    HeaderSiteTitle, SubHeader,
}            from "src/components/Headers";
import React from "react";
import Menu  from "@/components/Menu";

import utils, {fabricNavigation} from "@/utils/utils";

interface IModulePathProps {
    cssfabricModuleList: Record<string, any>
}

const ModulePath = (props: IModulePathProps) => {
    
    const router                          = useRouter();
    const [activeModule, setActiveModule] = React.useState<string>();
    const [activeAction, setActiveAction] = React.useState<string>();
    
    const {cssfabricModuleList} = props;
    
    const {path}          = router.query;
    const links: string[] = Object.keys(cssfabricModuleList)
    
    let moduleTag;
    let DynamicComponent;
    let tagProperties: Record<string, any> = {};
    
    let staticModule: string = '';
    let staticAction: string = '';
    
    
    if (path) {
    
        staticModule = path[0];
        staticAction = path[1];
    
        tagProperties = conf_cssfabric.getModuleMetaData(staticModule);
        
        // init(path);
    }
    
    function init(path: string | string[]) {
        // console.log(router)
        const module = path[0];
        const action = path[1];
        
        // setActiveModule(module);
        // setActiveAction(action);
    }
    
    return (
        <div className={"grid-v   h-full content-start overflow-auto"}>
            <Head>
                <title>{staticModule} {staticAction} cssfabric</title>
            </Head>
            <div className={"w-full w-sm-main theme-bg-primary-light pos-sticky "}>
                <HeaderSiteTitle
                    title="cssfabric"
                    title_tag={"just.fabric.it"}
                    description={"Welcome"}
                />
                <div className={"grid-h dsp-none"}>
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
                            <Menu module={staticModule}/>
                        </div>
                        <div className={"pad-l-8 grid-main"}>
                            <div>
                                <SubHeader title={staticModule + '.' + staticAction}/>
                            </div>
                            <div>
                                {staticModule && !staticAction && <Docs module={staticModule}/>}
                                {staticModule && (staticAction === 'docs') && <Docs module={staticModule}/>}
                                {staticModule && (staticAction === 'classnames') &&
                                 <DocsClassNames module={staticModule}/>}
                                {staticModule && (staticAction === 'demo') && <DocsDemo module={staticModule}/>}
                            
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};


export async function getStaticPaths() {
    
    const links: any      = conf_cssfabric.getModuleList()
    const outPaths: any[] = [];
    
    Object.keys(links).forEach((link) => {
        outPaths.push({params: {path: [link, 'docs']}});
        outPaths.push({params: {path: [link, 'demo']}});
        outPaths.push({params: {path: [link, 'classnames']}});
    })
    return {paths: outPaths, fallback: false}
}

export async function getStaticProps() {
    
    return {
        props: {
            cssfabricModuleList: conf_cssfabric.getModuleList()
        },
    }
}

export default ModulePath;
