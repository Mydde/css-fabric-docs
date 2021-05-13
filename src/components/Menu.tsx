import Link               from "next/link";
import {fabricNavigation} from "@/utils/utils";

interface IMenu {
    module: any
}

const Menu = (props: IMenu) => {
    
    const {module} = props;
    
    
    return <ul className={"menu-v menu-small shad-8"}>
        <li>
            <Link href={fabricNavigation.getModuleDemoPage(module)}>
                <a>Demo</a>
            </Link>
        </li>
        <li>
            <Link href={fabricNavigation.getModuleClassNamesPage(module)}>
                <a>Classnames</a>
            </Link>
        </li>
        <li>
            <Link href={fabricNavigation.getModuleDocsPage(module)}>
                <a>Docs</a>
            </Link>
        </li>
    
    
    </ul>
}

export default Menu;