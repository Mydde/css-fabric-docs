import Head                from 'next/head'
import conf_cssfabric      from "@medyll/cssfabric";
import Link                from "next/link";
import {fabricNavigation}  from "@/utils/utils";
import React               from "react";
import {Header, SubHeader} from "@/components/Headers";


export default function Home() {
    
    const links: string[] = fabricNavigation.getActiveLinks();
    
    return (
        <div className={"flex-v  flex-align-center h-full theme-bg-primary  overflow-auto  "}>
            <Head>
                <title>cssfabric home</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1 className={"flex-v flex-align-center flex-align-middle scale-h-16"}>
                cssfabric
            </h1>
            <h6>actually in early version</h6>
            <main className={"flex-main flex-align-middle scale-w-sm-full scale-w-lg-32 scale-w-64 pad-all"}>
                <SubHeader title={"a css framework"}>
                    <p>
                        <strong>cssfabric</strong> is another css framework, semantically driven and fully responsive<br/>
                        it's goal is to permit you to achieve of all your design task, from single page applications to frontend web sites
                    </p>
                </SubHeader>
                <SubHeader title={"with some css in"}>
                </SubHeader>
                <div className={"flex-h flex-wrap flex-align-center"}>
                    {Object.values(links).map((key: string, index: number) => {
                        return (
                            <div className={"pad-4 marg-4   scale-w-8 scale-h-8 flex-v flex-align-middle text-center bg-themed-gray-200 shad-4"}>
                                <Link href={fabricNavigation.getModuleDemoPage(key)}>
                                    <a>
                                        <span>{`${key}`}</span>
                                    </a>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </main>
            
            <footer className={""}>
            </footer>
        </div>
    )
}
