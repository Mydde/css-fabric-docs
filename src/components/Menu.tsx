import Link               from "next/link";
import {fabricNavigation} from "@/utils/utils";

interface IMenu {
    module: any
}

const Menu = (props:IMenu) => {
    
    const {module}         = props;

    
    return <div className={"cell-padding grid-h"}>
        <Link href={fabricNavigation.getModuleDocsPage(module)}>
            <a>See Docs Home list for {module}</a>
        </Link>
        <Link href={fabricNavigation.getModuleClassNamesPage(module)}>
            <a>See classnames list for {module}</a>
        </Link>
        <Link href={fabricNavigation.getModuleDemoPage(module)}>
            <a>See demo list for {module}</a>
        </Link>
    </div>
}

export default Menu;