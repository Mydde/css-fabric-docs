import {useRouter}    from "next/router";
import Link           from "next/link";
import dynamic        from "next/dynamic";
import Docs           from "@/components/Docs/Docs";
import DocsClassNames from "@/components/Docs/DocsClassNames";
import DocsDemo       from "@/components/Docs/DocsDemo";
import Head           from 'next/head'
import conf_cssfabric from "@medyll/cssfabric";

import {
    Header,
    HeaderSiteTitle, SubHeader,
}                from "src/components/Headers";
import React     from "react";
import InnerMenu from "@/components/InnerMenu";

import utils, {fabricNavigation} from "@/utils/utils";

interface IModulePathProps {
    cssfabricModuleList: Record<string, any>
}

const ModulePath = (props: IModulePathProps) => {
    
    const router = useRouter();
    
    const {cssfabricModuleList} = props;
    
    const {path}          = router.query;
    const links: string[] = fabricNavigation.getActiveLinks();
    
    let moduleTag;
    let DynamicComponent;
    let tagProperties: Record<string, any> = {};
    
    let staticModule: string = '';
    let staticAction: string = '';
    
    
    if (path) {
        
        staticModule = path[0];
        staticAction = path[1];
        
        tagProperties = conf_cssfabric.getModuleMetaData(staticModule);
        
    }
    
    return (
        <div className={"flex-v   h-full content-start overflow-auto"}>
            <Head>
                <title>{staticModule} {staticAction} cssfabric</title>
            </Head>
            <div className={"w-full w-sm-main theme-bg-primary-light"}>
                <HeaderSiteTitle
                    title="cssfabric"
                    title_tag={"just.fabric.it"}
                    description={"cssFabric is an alpha cssFabric"}
                />
                <div className={" dsp-none"}>
                    <div className={"dsp-none dsp-sm-block"}>sm</div>
                    <div className={"dsp-md-block dsp-none "}>md</div>
                    <div className={"dsp-lg-block dsp-none"}>lg</div>
                    <div className={"dsp-none dsp-xl-block dsp-none"}>xl</div>
                    <div className={"dsp-none dsp-xxl-block dsp-none"}>xxl</div>
                    <div className={"dsp-none dsp-xxxl-block dsp-none"}>xxxl</div>
                </div>
            </div>
            <div className={"flex-lg-v flex-h  h-full "}>
                <aside className={"w-lg-full w-16"}>
                    <nav className={"pad-all-8 pad-lg-2"}>
                        <ul className={"menu-lg-h menu-v"}>
                            {Object.values(links).map((key: string, index: number) => {
                                const css = (staticModule=== key)? 'active' : '';
                                return (
                                    <li key={key} className={"menu-item "+css}>
                                        <Link href={fabricNavigation.getModuleDemoPage(key)}>
                                            <a>
                                                <span>{`${key}`}</span>
                                            </a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </aside>
                <section className={"flex-main pad-all-4 "}>
                    <Header
                        title={"." + tagProperties.title}
                        tag={"fabric.css." + tagProperties.title}
                        description={tagProperties.description}
                    />
                    <div className={"flex-xl-v flex-h marg-t-4"}>
                        <div className={"marg-t-4 marg-lg-l-8"}>
                            <InnerMenu module={staticModule} action={staticAction}/>
                        </div>
                        <div className={"pad-l-8 flex-main"}>
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
    
    const links: any      = conf_cssfabric.getModuleList()// .filter((link: string) => links[link]?._docs?.attributes)
    const outPaths: any[] = [];
    
    
    Object.keys(links).forEach((link) => {
        //
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
