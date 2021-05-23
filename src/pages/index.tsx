import Head               from 'next/head'
import conf_cssfabric     from "cssfabric";
import Link               from "next/link";
import {fabricNavigation} from "@/utils/utils";
import React              from "react";


export default function Home() {
    
    const links: string[] = Object.keys(conf_cssfabric.getModuleList())
    
    return (
        <div className={"grid-v  grid-align-center h-full"}>
            <Head>
                <title>cssfabric home</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1 className={"grid-v grid-align-center grid-align-middle scale-h-16"}>
                Welcome to cssfabric
            </h1>
            <main className={"grid-main grid-v grid-align-middle scale-w-sm-full scale-w-lg-32 scale-w-64"}>
                <div className={"grid-h grid-wrap"}>
                    {Object.values(links).map((key: string, index: number) => {
                        return (
                            <div className={"pad-4 marg-4 border scale-w-8 txt-center"}>
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
