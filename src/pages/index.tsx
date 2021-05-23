import Head               from 'next/head'
import conf_cssfabric     from "cssfabric";
import Link               from "next/link";
import {fabricNavigation} from "@/utils/utils";
import React               from "react";
import {Header, SubHeader} from "@/components/Headers";


export default function Home() {
    
    const links: string[] = fabricNavigation.getActiveLinks();
    
    return (
        <div className={"grid-v  grid-align-center h-full theme-bg-primary"}>
            <Head>
                <title>cssfabric home</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1 className={"grid-v grid-align-center grid-align-middle scale-h-16"}>
                Welcome to cssfabric
            </h1>
            <main className={"grid-main grid-align-middle scale-w-sm-full scale-w-lg-32 scale-w-64"}>
                <SubHeader title={"a css framework"}></SubHeader>
                <SubHeader title={"with some css"}>
                </SubHeader>
                <div className={"grid-h grid-wrap"}>
                    {Object.values(links).map((key: string, index: number) => {
                        return (
                            <div className={"pad-4 marg-4   scale-w-8 txt-center shad-4"}>
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
